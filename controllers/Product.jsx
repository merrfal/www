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
    const product = await Product.findByIdAndDelete(req.query.id);

    if (product) {
      const users = await User.find({});

      users.forEach(async (user) => {
        if (user.Favorites.includes(product._id)) {
          user.Favorites.splice(user.Wishlist.indexOf(product._id), 1);
          await user.save();
        }
      });

      Response(res, 200, true, "Produkti u fshi me sukses.", product);
    }
  } catch (error) {
    Response(
      res,
      500,
      false,
      "Gabim i brendshëm i serverit gjatë fshirjes së produktit nga platforma.",
      null
    );
  }
};

export const Category  = async (payload, res) => {
  let { offset, limit, cities, statusses, sort } = payload;

  offset = parseInt(offset);
  limit = parseInt(limit);

  const filter = () =>{
    const filters = {}
    const calength = cities.length
    const salength = statusses.length

    if(calength === 0 && salength === 0) return {}
    if(calength === 0 && salength !== 0 ) return { 'productData.isGiven': { $in: statusses }}
    if(calength !== 0 && salength === 0 ) return { 'productData.city': { $in: cities }}
    if(calength !== 0 && salength !== 0 ) return { 'productData.isGiven': { $in: statusses }, 'productData.city': { $in: cities }}

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
    const body = req.body;

    const data = {
      Name: body.Name,
      Phone: body.Phone,
      Description: body.Description,
      Gallery: body.Gallery,
      Category: body.Category,
      Views: body.Views,
      UserShow: body.UserShow,
      Status: body.Status,
      Zip: body.Zip,
      Address: body.Address,
      City: body.City,
      Country: body.Country,
    };

    const id = req.query.id;
    const product = await Product.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    );

    if (product)
      Response(
        res,
        200,
        true,
        "Produkti u përditësua me sukses, këto ndryshime do të ndikojnë menjëherë në platformë.",
        product
      );
    else
      Response(
        res,
        404,
        false,
        "Produkti nuk u përditësua për shkak të disa gabimeve.",
        null
      );
  } catch (err) {
    Response(
      res,
      500,
      false,
      "Gabim i brendshëm i serverit gjatë përditësimit të produktit.",
      null
    );
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
    });

    const response = {
      res,
      code: product ? 200 : 404,
      success: product ? true : false,
      data: product ? {...product._doc, productData: {...product._doc.productData, user }} : null,
      message: product ? Messages.PRODUCT_VIEW_SUCCESS : Messages.PRODUCT_VIEW_ERROR,
    };

    Response(response);
  } catch (error) {
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