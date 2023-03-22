import * as Messages from "../configs/Messages";

import { User, Product } from "../configs/Models";
import { Response } from "../utils/Response";

export const Register = async (payload, res) => {
  try {
    const body = payload;

    // let Username = `${body.Name || ""}${body.Surname || ""}`;

    // const usernameExists = await User.findOne({ Username: body.Username });

    // if (usernameExists || Username.length === 0)
    //   Username = `${req.body.Name || ""}${req.body.Surname || ""}${Math.random()
    //     .toString(36)
    //     .substring(2, 6)}`;

    // body.Username = Username.toLocaleLowerCase();

    const savedUser = new User({ ...body });
    const user = await savedUser.save();

    const response = {
      res,
      code: user ? 200 : 400,
      success: user ? true : false,
      data: user ? { ...user._doc } : null,
      message: user
        ? "Përdoruesi u regjistrua me sukses."
        : "Ndodhi një gabim gjatë regjistrimit të përdoruesit.",
    };

    Response(response);
  } catch (error) {
    const response = {
      res,
      code: 500,
      success: false,
      data: null,
      message: "Ndodhi një gabim gjatë regjistrimit të përdoruesit.",
      error,
    };

    Response(response);
  }
};

export const Delete = async (payload, res) => {
  try {
    const user = await User.findByIdAndDelete(req.query.id);

    if (user)
      Response(
        res,
        200,
        true,
        "Përdoruesi u fshi me sukses dhe të gjitha produktet e tij.",
        null
      );
    else
      Response(
        res,
        404,
        false,
        "Përdoruesi nuk u gjet gjatë përpjekjes për tu fshirë, dhe as ndonjë prej produkteve të tij.",
        null
      );
  } catch (error) {
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
  } catch (error) {
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
    let products = await Product.find(filter()).sort({createdAt: 1}).skip(offset).limit(limit);
    let countProducts = await Product.find(filter()).countDocuments();

    const response = {
      res,
      code: products ? 200 : 404,
      success: products ? true : false,
      data: products ? { products, hasMore: countProducts <= offset } : [],
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
    const body = req.body;
    const id = req.query.id;

    body.FullName = `${req.body.Name || ""} ${req.body.Surname || ""}`;

    const user = await User.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true }
    );

    const { Password, ...userWithoutPassword } = user.toObject();

    if (user)
      Response(
        res,
        200,
        true,
        "Përdoruesi u përditësua me sukses.",
        userWithoutPassword
      );
    else
      Response(
        res,
        404,
        false,
        "Përdoruesi nuk u gjet në bazën e të dhënave.",
        null
      );
  } catch (error) {
    Response(
      res,
      500,
      false,
      "Ndodhi një gabim gjatë përpjekjes për të përditësuar përdoruesin.",
      null
    );
  }
};

export const View = async ({ username }, res) => {
  try {
    const user = await User.findOne({ "userData.username": username });

    const response = {
      res,
      code: user ? 200 : 404,
      success: user ? true : false,
      data: user ? user : null,
      message: user ? "Përdoruesi u gjet me sukses." : "Përdoruesi nuk u gjet.",
      error: null,
    };

    Response(response);
  } catch (error) {
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
