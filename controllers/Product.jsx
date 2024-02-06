import { Product, User } from "../configs/Models"
import { Response } from "../utils/Response"
import { Translation } from "../utils/Translations"

export const Category  = async (payload, res) => {
  let { offset, limit, cities, statuses, sort, category } = payload

  offset = parseInt(offset)
  limit = parseInt(limit)

  const filters = {
    // 'productData.isGiven': { $in: statuses },
    // 'productData.isGiven': false,
    'productData.city': { $in: cities },
    'productData.category': category
  }

  // if(statuses.length === 0) delete filters['productData.isGiven']
  if(cities.length === 0) delete filters['productData.city']

  if(Object.prototype.hasOwnProperty.call(sort, "views")) {
    sort = { 'productAdditionalData.views': sort.views }
  }

  else sort = { 'createdAt': sort.createdAt }

  try {
    let products = await Product
      .find(filters)
      .sort(sort)
      .skip(offset)
      .limit(limit)
      .lean()

    let countProducts = await Product.find(filters).countDocuments()

    const response = {
      res,
      code: products ? 200 : 404,
      success: products ? true : false,
      data: products ? { products, hasMore: countProducts >= offset + limit } : [],
      message: products ? Translation("products-category-success") : Translation("products-category-error"),
    }

    Response(response)
  }

  catch(error){
    const response = {
      res,
      code: 500,
      success: false,
      data: null,
      message: Translation("products-category-error"),
      error,
    }

    Response(response)
  }
}

export const Search  = async (payload, res) => {
  let { offset, limit, categories, cities, sort, term } = payload

  offset = parseInt(offset)
  limit = parseInt(limit)

  let filters = {
    'productData.city': { $in: cities },
    'productData.category': { $in: categories },
    // 'productData.isGiven': false
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

  if(Object.prototype.hasOwnProperty.call(sort, "views")) {
    sort = { 'productAdditionalData.views': sort.views }
  }

  else sort = { 'createdAt': sort.createdAt }

  try {
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
    const response = {
      res,
      code: 500,
      success: false,
      data: null,
      message: Translation("products-search-error"),
      error,
    }

    Response(response)
  }
}

export const Latest = async (payload, res) => {
  try {
    // let productsFindObject = { 'productData.isGiven': false }
    let productsFindObject = {  }

    let products = await Product
      .find(productsFindObject)
      .sort({ createdAt: -1 })
      .limit(16)
      .lean()

    const payload = {
      res,
      code: products ? 200 : 404,
      success: products ? true : false,
      data: products ? products : [],
      message: products ? Translation("products-latest-success") : Translation("products-latest-error"),
    }

    Response(payload)
  } 
  
  catch (error) {
    const payload = {
      res,
      code: 500,
      success: false,
      data: null,
      message: Translation("products-latest-error"),
      error,
    }

    Response(payload)
  }
}

export const View = async ({ slug }, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { "productData.slug": slug },
      { $inc: { "productAdditionalData.views": 1 } },
      { new: true }
    )

    const user = await User.findById(product.productData.user).select({
      "userData.name": 1,
      "userData.surname": 1,
      "userData.username": 1,
      "userData.avatar": 1,
      "userAdditionalData.isUserVerified": 1
    }).lean()

    const response = {
      res,
      code: product ? 200 : 404,
      success: product ? true : false,
      data: product ? {...product._doc, productData: {...product._doc.productData, user }} : null,
      message: product ? Translation("product-view-success") : Translation("product-view-error"),
    }

    Response(response)
  } 
  
  catch (error) {
    const response = {
      res,
      code: 500,
      success: false,
      data: null,
      message: Translation("product-view-error"),
    }

    Response(response)
  }
}

export const Similar = async ({ category }, res) => {
  try {
    let productsFindObject = { 
      'productData.category': category, 
      'productData.isGiven': false 
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

    const response = {
      res,
      code: products ? 200 : 404,
      success: products ? true : false,
      data: products ? products : null,
      isSimilar,
      message: products ? Translation("product-view-success") : Translation("product-view-error"),
    }

    Response(response)
  } 
  
  catch (error) {
    const response = {
      res,
      code: 500,
      success: false,
      data: null,
      message: Translation("product-view-error"),
    }

    Response(response)
  }
}