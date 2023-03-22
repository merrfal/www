import * as Messages from "../configs/Messages";

import { Product, User } from "../configs/Models";
import { v4 } from "uuid";
import { Response } from "../utils/Response";

export const Create = async (payload, res) => {
  try {
    const initalProduct = new Product({ ...payload, slug: "qweqwewqe-" + v4() });
    const product = await initalProduct.save();

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
  let { offset, limit, categories, cities = [], sort } = payload;

  offset = parseInt(offset);
  limit = parseInt(limit);

  const filter = () =>{
    if(categories.length === 0 && cities.length === 0) return {}
    if(categories.length === 0 && cities.length !== 0 ) return { 'productData.city': { $in: cities }}
    if(categories.length !== 0 && cities.length === 0 ) return { 'productData.category': { $in: categories }}
    if(categories.length !== 0 && cities.length !== 0 ) return { 'productData.category': { $in: categories }, 'productData.city': { $in: cities }}
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

  const filter = () =>{
    if(categories.length === 0 && cities.length === 0) return {}
    if(categories.length === 0 && cities.length !== 0 ) return { 'productData.city': { $in: cities }}
    if(categories.length !== 0 && cities.length === 0 ) return { 'productData.category': { $in: categories }}
    if(categories.length !== 0 && cities.length !== 0 ) return { 'productData.category': { $in: categories }, 'productData.city': { $in: cities }}
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
      .limit(4);

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
