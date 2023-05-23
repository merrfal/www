import * as Messages from "../configs/Messages";

import { Product, User, Category as CategoryModel } from "../configs/Models";
import { Response } from "../utils/Response";

export const Create = async (payload, res) => {
  try {
    const initalProduct = new Product(payload);
    const product = await initalProduct.save();

    await User.findByIdAndUpdate(payload.productData.user, {
      $inc: { 'userActivities.productCount': 1 },
      $addToSet: { 'userActivities.products': product._id }
    });

    await CategoryModel.findByIdAndUpdate(payload.productData.category, {
      $inc: { 'additionalData.productCount': 1 },
      $addToSet: { 'additionalData.products': product._id }
    });

    const response = {
      res,
      code: product ? 200 : 400,
      success: product ? true : false,
      data: product ? { ...product._doc } : null,
      message: product ? Messages.PRODUCT_CREATE_SUCCESS : Messages.PRODUCT_CREATE_ERROR,
    };

    Response(response);
  } 
  
  catch (error) {
    const response = {
      res,
      code: 500,
      success: false,
      data: null,
      message: Messages.PRODUCT_CREATE_ERROR,
      error,
    };

    Response(response);
  }
};

export const Delete = async (payload, res) => {
  try {
    let { product } = payload;

    const { productData } = await Product.findById(product).select({ 
        'productData.user': 1, 
        'productData.category': 1 
    });

    await User.findByIdAndUpdate(productData.user, {
      $inc: { 'userActivities.productCount': -1 },
      $pull: { 'userActivities.products': product._id }
    })

    await Category.findByIdAndUpdate(productData.category, {
      $inc: { 'additionalData.productCount': -1 },
      $pull: { 'additionalData.products': product._id }
    })

    const deletedProduct = await Product.findByIdAndDelete(product);

    const response = {
      res,
      code: deletedProduct ? 200 : 400,
      success: deletedProduct ? true : false,
      data: deletedProduct ? { ...deletedProduct._doc } : null,
      message: deletedProduct ? Messages.PRODUCT_DELETE_SUCCESS : Messages.PRODUCT_DELETE_ERROR,
    }

    Response(response);
  } 
  
  catch (error) {
    const response = {
      res,
      code: 500,
      success: false,
      data: null,
      message: Messages.PRODUCT_DELETE_ERROR,
      error,
    }

    Response(response);
  }
};

export const Category  = async (payload, res) => {
  let { offset, limit, cities, statuses, sort } = payload;

  offset = parseInt(offset);
  limit = parseInt(limit);

  const filter = () =>{
    const filters = {}
    const calength = cities.length
    const salength = statuses.length

    if(calength === 0 && salength === 0) return {}
    if(calength === 0 && salength !== 0 ) return { 'productData.isGiven': { $in: statuses }}
    if(calength !== 0 && salength === 0 ) return { 'productData.city': { $in: cities }}
    if(calength !== 0 && salength !== 0 ) return { 'productData.isGiven': { $in: statuses }, 'productData.city': { $in: cities }}

    return filters
  }

  try {
    let products = await Product.find(filter()).sort(sort).skip(offset).limit(limit);
    let countProducts = await Product.find(filter()).countDocuments();

    const response = {
      res,
      code: products ? 200 : 404,
      success: products ? true : false,
      data: products ? {products, hasMore: countProducts <= offset} : [],
      message: products ? Messages.PRODUCTS_CATEGORY_SUCCESS : Messages.PRODUCTS_CATEGORY_ERROR,
    };

    Response(response);
  }

  catch(error){
    const response = {
      res,
      code: 500,
      success: false,
      data: null,
      message: Messages.PRODUCTS_CATEGORY_ERROR,
      error,
    };

    Response(response);
  }
}

export const Search  = async (payload, res) => {
  let { offset, limit, categories, cities, sort, term } = payload;

  offset = parseInt(offset);
  limit = parseInt(limit);

  // const filter = () =>{
  //   const filters = {}
  //   const calength = categories.length;
  //   const cilength = cities.length;

  //   if(calength === 0 && cilength === 0) return filters;
  //   if(calength === 0 && cilength !== 0 ) filters['productData.city'] = { $in: cities }
  //   if(calength !== 0 && cilength === 0 ) filters['productData.category'] = { $in: categories }
  //   if(calength !== 0 && cilength !== 0 ) filters['productData.category'] = { $in: categories }, filters['productData.city'] = { $in: cities }

  //   if(term === "") return filters;
  //   if(term !== "") return { 
  //     ...filters, 
  //     $or: [
  //       { 'productData.name': { $regex: term, $options: 'i' } }, 
  //       { 'productData.description': { $regex: term, $options: 'i' } }
  //     ] 
  //   }
  // }

  const filter = () => {
    const filters = {};
    const orFilters = [];
  
    if (categories.length !== 0) {
      orFilters.push({ 'productData.category': { $in: categories } });
    }
  
    if (cities.length !== 0) {
      orFilters.push({ 'productData.city': { $in: cities } });
    }
  
    if (term !== "") {
      orFilters.push(
        { 'productData.name': { $regex: term, $options: 'i' } },
        { 'productData.description': { $regex: term, $options: 'i' } }
      );
    }
  
    if (orFilters.length > 0) {
      filters.$or = orFilters;
    }
  
    return filters;
  };

  try {
    let products = await Product.find(filter()).sort(sort).skip(offset).limit(limit);
    let countProducts = await Product.find(filter()).countDocuments();

    const response = {
      res,
      code: products ? 200 : 404,
      success: products ? true : false,
      data: products ? {products, hasMore: countProducts > offset + limit} : [],
      message: products ? Messages.PRODUCTS_SEARCH_SUCCESS : Messages.PRODUCTS_SEARCH_ERROR,
    };

    Response(response);
  }

  catch(error){
    const response = {
      res,
      code: 500,
      success: false,
      data: null,
      message: Messages.PRODUCTS_SEARCH_ERROR,
      error,
    };

    Response(response);
  }
}

export const Latest = async (payload, res) => {
  try {
    const products = await Product.find({}).sort({ createdAt: -1 }).limit(16);

    const payload = {
      res,
      code: products ? 200 : 404,
      success: products ? true : false,
      data: products ? products : [],
      message: products ? Messages.PRODUCTS_LATEST_SUCCESS : Messages.PRODUCTS_LATEST_ERROR,
    };

    Response(payload);
  } 
  
  catch (error) {
    const payload = {
      res,
      code: 500,
      success: false,
      data: null,
      message: Messages.PRODUCTS_LATEST_ERROR,
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
      message: product ? Messages.PRODUCT_UPDATE_SUCCESS : Messages.PRODUCT_UPDATE_ERROR,
    }
    
    Response(response);
  } 
  
  catch (err) {
    const response ={
      res,
      code: 500,
      success: false,
      data: null,
      message: Messages.PRODUCT_UPDATE_ERROR,
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
    });

    const response = {
      res,
      code: product ? 200 : 404,
      success: product ? true : false,
      data: product ? {...product._doc, productData: {...product._doc.productData, user }} : null,
      message: product ? Messages.PRODUCT_VIEW_SUCCESS : Messages.PRODUCT_VIEW_ERROR,
    };

    Response(response);
  } 
  
  catch (error) {
    const response = {
      res,
      code: 500,
      success: false,
      data: null,
      message: Messages.PRODUCT_VIEW_ERROR,
    };

    Response(response);
  }
};

export const Similar = async ({ category }, res) => {
  try {
    const products = await Product
      .find({ "productData.category": category })
      .sort({ createdAt: -1 })
      .limit(5);

    const response = {
      res,
      code: products ? 200 : 404,
      success: products ? true : false,
      data: products ? products : null,
      message: products ? Messages.PRODUCT_VIEW_SUCCESS : Messages.PRODUCT_VIEW_ERROR,
    };

    Response(response);
  } 
  
  catch (error) {
    const response = {
      res,
      code: 500,
      success: false,
      data: null,
      message: Messages.PRODUCT_VIEW_ERROR,
    };

    Response(response);
  }
};