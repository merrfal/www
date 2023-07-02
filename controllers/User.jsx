import * as Messages from "../configs/Messages";

import { User, Product } from "../configs/Models";
import { Response } from "../utils/Response";
import { ConnectionLocation } from "../utils/Connection";
import { AllCountries} from "../data/Locations";

export const Register = async (payload, res) => {
  try {
    let locationRes = await ConnectionLocation();
    
    const data = { 
      userData: {...payload?.userData},
      userAdditionalData: {
        country: '',
        city: '',
      }
    };

    if(locationRes?.success === true){
      const geoData = locationRes?.data;
      const countryExists = AllCountries.find((country) => country.iso_code === geoData?.country);

      if(countryExists) {
        data.userAdditionalData.country = countryExists.iso_code;
        let foundCity = false;

        const cityExists = AllCountries.map((country) => {
          country.cities.find((city) => {
            if(city.value === geoData?.city.toLocaleLowerCase()){
              foundCity = city;
            }
          })
        })

        if(cityExists) data.userAdditionalData.city = foundCity.value;
      }
    }

    const savedUser = new User(data);
    const user = await savedUser.save();

    const response = {
      res,
      code: user ? 200 : 400,
      success: user ? true : false,
      data: user ? { ...user._doc } : null,
      message: user ? Messages.USER_REGISTER_SUCCESS : Messages.USER_REGISTER_ERROR,
    };

    Response(response);
  } 
  
  catch (error) {
    const response = {
      res,
      code: 500,
      success: false,
      data: null,
      message: Messages.USER_REGISTER_ERROR,
      error,
    };

    Response(response);
  }
};

export const Delete = async (payload, res) => {
  try {
    const user = await User.findByIdAndDelete(payload.userId);

    if (user) Response(
      res,
      200,
      true,
      "Përdoruesi u fshi me sukses dhe të gjitha produktet e tij.",
      null
    );

    else Response(
      res,
      404,
      false,
      "Përdoruesi nuk u gjet gjatë përpjekjes për tu fshirë, dhe as ndonjë prej produkteve të tij.",
      null
    );
  } 
  
  catch (error) {
    Response(
      res,
      500,
      false,
      "Gabim i brendshëm i serverit gjatë përpjekjes për të fshirë përdoruesin dhe produktet e tij.",
      null
    );
  }
};

export const Login = async ({ uid }, res) => {
  try {
    const user = await User.findOne({ "userData.uid": uid });

    const response = {
      res,
      code: user ? 200 : 404,
      success: user ? true : false,
      data: user ? { ...user._doc } : null,
      message: user ? Messages.USER_AUTH_SUCCESS : Messages.USER_AUTH_ERROR,
    };

    Response(response);
  } 
  
  catch (error) {
    const response = {
      res,
      code: 500,
      success: false,
      data: null,
      message: Messages.USER_AUTH_ERROR,
      error,
    };

    Response(response);
  }
};

export const Products = async (payload, res) => {
  let { offset, limit, user, auth } = payload;

  offset = parseInt(offset);
  limit = parseInt(limit);

  const filter = () => {
    if (auth === user) return { 'productData.user': user}
    else return { 'productData.user': user, 'productData.postedAnonymously': false }
  }

  try {
    let products = await Product.find(filter()).sort({createdAt: -1}).skip(offset).limit(limit);
    let countProducts = await Product.find(filter()).countDocuments();

    const response = {
      res,
      code: products ? 200 : 404,
      success: products ? true : false,
      data: products ? { products, hasMore: countProducts > (offset + limit) } : [],
      message: products ? Messages.PRODUCTS_LIST_USER_SUCCESS : Messages.PRODUCTS_LIST_USER_ERROR,
    };

    Response(response);
  } 
  
  catch (error) {
    const response = {
      res,
      code: 500,
      success: false,
      data: null,
      message: Messages.PRODUCTS_LIST_USER_ERROR,
      error,
    };

    Response(response);
  }
};

export const Update = async (payload, res) => {
  try {
    const user = await User.findOneAndUpdate(
      {'userData.username': payload.old_username}, 
      { $set: 
        { 
          userData: payload?.userData,
          userAdditionalData: payload?.userAdditionalData,
        }
      },
      { new: true }
    );

    const response = {
      res,
      code: user ? 200 : 404,
      success: user ? true : false,
      data: user ? user : null,
      message: user ? Messages.USER_UPDATE_SUCCESS : Messages.USER_UPDATE_ERROR,
    }
    
    Response(response);
  } 
  
  catch (err) {
    const response ={
      res,
      code: 500,
      success: false,
      data: null,
      message: Messages.USER_UPDATE_ERROR,
      error: err,
    }

    Response(response);
  }
};

export const View = async ({ username }, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { "userData.username": username },
      { $inc: { "userActivities.views": 1 } },
      { new: true }
    );

    const response = {
      res,
      code: user ? 200 : 404,
      success: user ? true : false,
      data: user ? user : null,
      message: user ? "Përdoruesi u gjet me sukses." : "Përdoruesi nuk u gjet.",
      error: null,
    };

    Response(response);
  } 
  
  catch (error) {
    const response = {
      res,
      code: 500,
      success: false,
      data: null,
      message: "Ndodhi një gabim gjatë përpjekjes për të gjetur përdoruesin.",
      error: error,
    };

    Response(response);
  }
};

export const CheckIfExist = async ({field, value}, res) => {
  try {
    const checkDuplicate = await User.findOne({[field]: value});

    const response = {
      res,
      code: 200,
      success: true,
      data: checkDuplicate ? true : false,
      message: checkDuplicate ? "Përdoruesi u gjet me sukses." : "Përdoruesi nuk u gjet.",
      error: null,
    };

    Response(response);
  }

  catch(error){
    const response = {
      res,
      code: 500,
      success: false,
      exists: false,
      data: null,
      message: "Ndodhi një gabim gjatë përpjekjes për të gjetur nje duplikate.",
      error: error,
    };

    Response(response);
  }
}
