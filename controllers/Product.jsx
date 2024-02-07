import { Product, User } from "../configs/Models"
import { UserAuth } from "../middlewares"
import { Response } from "../utils/Response"
import { Translation } from "../utils/Translations"

export const Category  = async (payload, res) => {
  try {
    let { offset, limit, cities, sort, category } = payload

    offset = parseInt(offset)
    limit = parseInt(limit)

    const filters = {
      'productData.city': { $in: cities },
      'productData.category': category,
      'productData.isPublished': true
    }

    if(cities.length === 0) delete filters['productData.city']
    if(Object.prototype.hasOwnProperty.call(sort, "views")) sort = { 'productAdditionalData.views': sort.views }
    else sort = { 'createdAt': sort.createdAt }

    let products = await Product
      .find(filters)
      .sort(sort)
      .skip(offset)
      .limit(limit)
      .lean()

    let countProducts = await Product.find(filters).countDocuments()

    Response({
      res,
      code: products ? 200 : 404,
      success: products ? true : false,
      data: products ? { products, hasMore: countProducts >= offset + limit } : [],
      message: products ? Translation("products-category-success") : Translation("products-category-error"),
    })
  }

  catch(error){
    console.error(error)

    Response({
      res,
      code: 500,
      success: false,
      data: null,
      message: Translation("products-category-error"),
      error,
    })
  }
}

export const Search  = async (payload, res) => {
  try {
    let { offset, limit, categories, cities, sort, term } = payload

    offset = parseInt(offset)
    limit = parseInt(limit)

    let filters = {
      'productData.city': { $in: cities },
      'productData.category': { $in: categories },
      'productData.isPublished': true
    }

    if(term !== ""){
      filters.$or = [
        {'productData.name': { $regex: term, $options: 'i' }},
        {'productData.description': { $regex: term, $options: 'i' }},
        {'productData.address': { $regex: term, $options: 'i' }}
      ]
    }

    if(cities.length === 0) delete filters['productData.city']
    if(categories.length === 0) delete filters['productData.category']
    if(Object.prototype.hasOwnProperty.call(sort, "views")) sort = { 'productAdditionalData.views': sort.views }
    else sort = { 'createdAt': sort.createdAt }

    let products = await Product.find(filters).sort(sort).skip(offset).limit(limit).lean()
    let countProducts = await Product.find(filters).countDocuments()

    const response = {
      res,
      code: products ? 200 : 404,
      success: products ? true : false,
      data: products ? { products, hasMore: countProducts >= offset + limit } : [],
      message: products ? Translation("products-search-success") : Translation("products-search-error"),
    }

    Response(response)
  }

  catch(error){
    console.error(error)

    Response({
      res,
      code: 500,
      success: false,
      data: null,
      message: Translation("products-search-error"),
      error,
    })
  }
}

export const Latest = async (payload, res) => {
  try {
    let products = await Product
      .find({ 'productData.isPublished': true })
      .sort({ createdAt: -1 })
      .limit(16)
      .lean()

    Response({
      res,
      code: products ? 200 : 404,
      success: products ? true : false,
      data: products ? products : [],
      message: products ? Translation("products-latest-success") : Translation("products-latest-error"),
    })
  } 
  
  catch (error) {
    console.error(error)

    Response({
      res,
      code: 500,
      success: false,
      data: null,
      message: Translation("products-latest-error"),
      error
    })
  }
}

export const View = async (payload, res, req) => {
  try {
    const { slug, edit } = payload

    if (edit) {
      const product = await Product.findOne({ 
        "productData.slug": slug, 
        'productData.isPublished': true 
      }).lean()

      if (product) {
        const uid = await UserAuth(req)

        if (uid) {
          const user_product = product.productData.user?.toString()
          const user = await User
            .findOne({ 'userData.uid': uid })
            .lean()

          if ((user_product === user._id?.toString()) || user?.userAdditionalData?.role === "admin") {
            product.productData.user = user
            
            Response({
              res,
              code: 200,
              success: true,
              data: product,
              message: Translation("product-view-success"),
            })
          }

          else Response({
            res,
            code: 401,
            success: false,
            data: null,
            message: Translation("unotharized-user-access"),
          })
        }

        else Response({
          res,
          code: 401,
          success: false,
          data: null,
          message: Translation("unotharized-user-access"),
        })
      }

      else Response({
        res,
        code: 404,
        success: false,
        data: null,
        message: Translation("product-view-error"),
      })
    }

    else {
      const product = await Product
        .findOneAndUpdate(
          { "productData.slug": slug, 'productData.isPublished': true },
          { $inc: { "productAdditionalData.views": 1 } },
          { new: true }
        )

      if (!product.productData?.postedAnonymously) {
        const user = await User
          .findById(product.productData.user)
          .select({
            "userData.name": 1,
            "userData.surname": 1,
            "userData.username": 1,
            "userData.avatar": 1,
            "userAdditionalData.isUserVerified": 1
          })
          .lean()

        if (user) product._doc.productData.user = user
      }

      Response({
        res,
        code: product ? 200 : 404,
        success: product ? true : false,
        data: product ? product._doc : null,
        message: product ? Translation("product-view-success") : Translation("product-view-error"),
      })
    }
  } 
  
  catch (error) {
    console.error(error)

    Response({
      res,
      code: 500,
      success: false,
      data: null,
      message: Translation("product-view-error"),
    })
  }
}

export const Similar = async (payload, res) => {
  try {
    const { category } = payload

    let productsFindObject = { 
      'productData.category': category, 
      'productData.isGiven': false,
      'productData.isPublished': true
    }

    let isSimilar = true

    let products = await Product
      .find(productsFindObject)
      .sort({ createdAt: -1 })
      .limit(5)
      .lean()

    if (products.length === 1 || products.length === 0) {
      products = await Product
        .find({ 'productData.isGiven': false })
        .sort({ createdAt: -1 })
        .limit(5)
        .lean()

      isSimilar = false
    }

    Response({
      res,
      code: products ? 200 : 404,
      success: products ? true : false,
      data: products ? products : null,
      isSimilar,
      message: products ? Translation("product-view-success") : Translation("product-view-error"),
    })
  } 
  
  catch (error) {
    console.error(error)

    Response({
      res,
      code: 500,
      success: false,
      data: null,
      message: Translation("product-view-error")
    })
  }
}