import { Product, User, Category as CategoryModel } from "../configs/Models";
import { ConnectionLocation } from "../utils/Connection";
import { CreateMessage, DeleteMesage } from "../utils/FormattedMessages";
import { Response } from "../utils/Response";
import { Translation } from "../utils/Translations";

export const Create = async (payload, res) => {
  try {
    const initalProduct = new Product(payload);
    const product = await initalProduct.save();
    const id = product._id.toString();

    await User.findByIdAndUpdate(payload.productData.user, {
      $inc: { 'userActivities.productCount': 1 },
      $addToSet: { 'userActivities.products': id }
    });

    await CategoryModel.findByIdAndUpdate(payload.productData.category, {
      $inc: { 'additionalData.productCount': 1 },
      $addToSet: { 'additionalData.products': id }
    });

    const response = {
      res,
      code: product ? 200 : 400,
      success: product ? true : false,
      data: product ? { ...product._doc } : null,
      message: CreateMessage("product", product ? true : false),
    };

    Response(response);
  } 
  
  catch (error) {
    const response = {
      res,
      code: 500,
      success: false,
      data: null,
      message: CreateMessage("product", false),
      error,
    };

    Response(response);
  }
};

export const Delete = async (payload, res) => {
  try {
    let { slug } = payload;

    const productData = await Product.findOne({'productData.slug': slug}).select({ 
        'productData.user': 1, 
        'productData.category': 1,
    });

    let productId = productData._id.toString()

    await User.findByIdAndUpdate(productData.productData.user, {
      $inc: { 'userActivities.productCount': -1 },
      $pull: { 'userActivities.products': productId }
    })

    await CategoryModel.findByIdAndUpdate(productData.productData.category, {
      $inc: { 'additionalData.productCount': -1 },
      $pull: { 'additionalData.products': productId }
    })

    const deletedProduct = await Product.findByIdAndDelete(productId);

    const response = {
      res,
      code: deletedProduct ? 200 : 400,
      success: deletedProduct ? true : false,
      data: deletedProduct ? { ...deletedProduct._doc } : null,
      message: DeleteMesage("product", deletedProduct ? true : false)
    }

    Response(response);
  } 
  
  catch (error) {
    const response = {
      res,
      code: 500,
      success: false,
      data: null,
      message: DeleteMesage("product", false),
      error,
    }

    Response(response);
  }
};

export const Category  = async (payload, res) => {
  let { offset, limit, cities, statuses, sort, category } = payload;

  offset = parseInt(offset);
  limit = parseInt(limit);

  const filters = {
    'productData.isGiven': { $in: statuses },
    'productData.city': { $in: cities },
    'productData.category': category
  }

  if(statuses.length === 0) delete filters['productData.isGiven'];
  if(cities.length === 0) delete filters['productData.city'];

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
      .lean();

    let countProducts = await Product.find(filters).countDocuments();

    const response = {
      res,
      code: products ? 200 : 404,
      success: products ? true : false,
      data: products ? { products, hasMore: countProducts >= offset + limit } : [],
      message: products ? Translation("products-category-success") : Translation("products-category-error"),
    };

    Response(response);
  }

  catch(error){
    const response = {
      res,
      code: 500,
      success: false,
      data: null,
      message: Translation("products-category-error"),
      error,
    };

    Response(response);
  }
}

export const Search  = async (payload, res) => {
  let { offset, limit, categories, cities, sort, term } = payload;

  offset = parseInt(offset);
  limit = parseInt(limit);

  let filters = {
    'productData.city': { $in: cities },
    'productData.category': { $in: categories },
  }

  if(term !== ""){
    filters = {
      ...filters,
      'productData.name': { $regex: term, $options: 'i' },
      'productData.description': { $regex: term, $options: 'i' },
    }
  }

  if(cities.length === 0) delete filters['productData.city'];
  if(categories.length === 0) delete filters['productData.category'];

  try {
    let products = await Product.find(filters).sort(sort).skip(offset).limit(limit).lean();
    let countProducts = await Product.find(filters).countDocuments();

    const response = {
      res,
      code: products ? 200 : 404,
      success: products ? true : false,
      data: products ? { products, hasMore: countProducts >= offset + limit } : [],
      message: products ? Translation("products-search-success") : Translation("products-search-error"),
    };

    Response(response);
  }

  catch(error){
    const response = {
      res,
      code: 500,
      success: false,
      data: null,
      message: Translation("products-search-error"),
      error,
    };

    Response(response);
  }
}

export const Latest = async (payload, res) => {
  try {
    let productsFindObject = { 'productData.isGiven': false };

    let products = await Product
      .find(productsFindObject)
      .sort({ createdAt: -1})
      .limit(16)
      .lean();

    const payload = {
      res,
      code: products ? 200 : 404,
      success: products ? true : false,
      data: products ? products : [],
      message: products ? Translation("products-latest-success") : Translation("products-latest-error"),
    };

    Response(payload);
  } 
  
  catch (error) {
    const payload = {
      res,
      code: 500,
      success: false,
      data: null,
      message: Translation("products-latest-error"),
      error,
    };

    Response(payload);
  }
};

export const Update = async (payload, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      {'productData.slug': payload.slug}, 
      { $set: { productData: payload } },
    );

    const response = {
      res,
      code: product ? 200 : 404,
      success: product ? true : false,
      data: product ? product : null,
      message: product ? Translation("product-update-success") : Translation("product-update-error"),
    }
    
    Response(response);
  } 
  
  catch (err) {
    const response ={
      res,
      code: 500,
      success: false,
      data: null,
      message: Translation("product-update-error"),
      error: err,
    }

    Response(response);
  }
};

export const View = async ({ slug }, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { "productData.slug": slug },
      { $inc: { "productAdditionalData.views": 1 } },
      { new: true }
    );

    const user = await User.findById(product.productData.user).select({
      "userData.name": 1,
      "userData.surname": 1,
      "userData.username": 1,
      "userData.avatar": 1,
      "userAdditionalData.isUserVerified": 1
    }).lean();

    const response = {
      res,
      code: product ? 200 : 404,
      success: product ? true : false,
      data: product ? {...product._doc, productData: {...product._doc.productData, user }} : null,
      message: product ? Translation("product-view-success") : Translation("product-view-error"),
    };

    Response(response);
  } 
  
  catch (error) {
    const response = {
      res,
      code: 500,
      success: false,
      data: null,
      message: Translation("product-view-error"),
    };

    Response(response);
  }
};

export const Similar = async ({ category }, res) => {
  try {
    let productsFindObject = { 
      'productData.category': category, 
      'productData.isGiven': false 
    };

    let products = await Product
      .find(productsFindObject)
      .sort({ createdAt: -1 })
      .limit(5)
      .lean();

    const response = {
      res,
      code: products ? 200 : 404,
      success: products ? true : false,
      data: products ? products : null,
      message: products ? Translation("product-view-success") : Translation("product-view-error"),
    };

    Response(response);
  } 
  
  catch (error) {
    const response = {
      res,
      code: 500,
      success: false,
      data: null,
      message: Translation("product-view-error"),
    };

    Response(response);
  }
};