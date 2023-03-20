import * as Messages from "../configs/Messages";

import { User, Product } from "../configs/Models";
import { Storage } from "../configs/Firebase";
import { v4 } from "uuid";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { UserObject } from "../utils/DataBuilder";
import { Request } from "../utils/Http";
import { Notification, Response } from "../utils/Response";
import { LogoutAccount, SetAccount } from "./Slices";

export const RegisterBack = async (payload, res) => {
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
      message: user ? "Përdoruesi u regjistrua me sukses." : "Ndodhi një gabim gjatë regjistrimit të përdoruesit.",
    };

    Response(response);
  } 
  
  catch (error) {
    const response = {
      res,
      code: 500,
      success: false,
      data: null,
      message: "Ndodhi një gabim gjatë regjistrimit të përdoruesit.",
      error,
    }

    Response(response);
  }
};

export const DeleteBack = async (payload, res) => {
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

export const LoginBack = async ({uid}, res) => {
  try {
    const user = await User.findOne({ 'userData.uid': uid });

    const response = {
      res,
      code: user ? 200 : 404,
      success: user ? true : false,
      data: user ? { ...user._doc } : null,
      message: user ? Messages.USER_AUTH_SUCCESS : Messages.USER_AUTH_ERROR,
    }

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
    }

    Response(response);
  }
};

export const ProductsBack = async (payload, res) => {
  try {
    let { offset, limit } = payload;

    let count = 0;
    let products = [];
    let filter = { User: id, Submitter: "Maker" }

    limit = parseInt(limit);
    offset = parseInt(offset);

    count = await Product.countDocuments(filter);
    products = await Product.find(filter).sort({ createdAt: -1 }).skip(offset).limit(limit);

    const backload = {
      hasMore: count > offset + limit,
      products,
    };

    const payload = {
      res,
      code: products ? 200 : 404,
      success: products ? true : false,
      data: products ? backload : null,
      message: products ? "Produktet u gjetën me sukses." : "Produktet nuk u gjetën në bazën e të dhënave.",
    }

    Response(payload);
  } 
  
  catch (error) {
    const payload = {
      res,
      code: 500,
      success: false,
      data: null,
      message: "Ndodhi një gabim gjatë përpjekjes për të gjetur produktet.",
      error
    }

    Response(payload);
  }
};

export const UpdateBack = async (payload, res) => {
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

export const ViewBack = async (payload, res) => {
  try {
    const { username: Username } = payload;
    const user = await User.findOne({ Username });

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

export const LoginFront = async (uid, dispatch) => {
  try {
    const req = await Request("USERS/LOGIN", { uid });
    const res = await req.json();

    if (res.success === true) dispatch(SetAccount(res.data));

    else {
      const alert = {
        dispatch,
        message: res.message,
        type: "error",
      }

      dispatch(LogoutAccount())
      Notification(alert);
    }
  } 
  
  catch (error) {
    const alert = {
      dispatch,
      message: Messages.USER_AUTH_ERROR,
      type: "error",
    }

    dispatch(LogoutAccount())
    Notification(alert);
  }
};

export const RegisterFront = async (initalUser, dispatch) => {
  try {
    const user = UserObject(initalUser)

    const req = await Request("USERS/CREATE", {userData: user});
    const res = await req.json();

    if (res.success === true) SetAccount(res.data);

    else {
      const alert = {
        dispatch,
        message: res.message,
        type: "error",
      }

      Notification(alert);
    }
  } 
  
  catch (error) {
    const alert = {
      dispatch,
      message: "Ndodhi një gabim gjatë përpjekjes për të regjistruar përdoruesin.",
      type: "error",
    }

    Notification(alert);
  }
};

export const UpdateFront = async (
  dispatch,
  profile,
  image,
  setIsEdit,
  setIsLoading,
  setImage
) => {
  setIsLoading(true);
  let user = structuredClone(profile);

  const url = `${Url}/api/users/UserUpdate/${profile.Id}`;
  const config = Request("P", "JSON", profile, true, false, false);

  if (image) {
    const storageRef = ref(Storage, `/users/${v4() + image.file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image?.file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
      },
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then(
          async (downloadURL) => {
            user.Avatar = downloadURL;
            const config_with_avatar = Request(
              "P",
              "JSON",
              user,
              true,
              false,
              false
            );
            try {
              const req = await fetch(url, config_with_avatar);
              const res = await req.json();

              if (res.success === true) {
                window.location.reload();
                Notification(dispatch, res.message, "success");
              } else Notification(dispatch, res.message, "error");
            } catch (error) {
              Notification(dispatch, "", "error");
            } finally {
              setImage(null);
              setIsEdit(false);
              setIsLoading(false);
            }
          }
        );
      }
    );
  } else {
    try {
      const req = await fetch(url, config);
      const res = await req.json();

      if (res.success === true) {
        Notification(dispatch, res.message, "success");
        window.location.reload();
      } else Notification(dispatch, res.message, "error");
    } catch (error) {
      Notification(dispatch, "", "error");
    } finally {
      setImage(null);
      setIsEdit(false);
      setIsLoading(false);
    }
  }
};

export const ViewFront = async (username, setUser, dispatch) => {
  try {
    const req = await Request("USERS/VIEW", {username});
    const res = await req.json();

    if (res.success === true) setUser(res.data);

    else {
      const alert = {
        dispatch,
        message: res.message,
        type: "error",
      }

      Notification(alert);
    }
  } 
  
  catch (error) {
    const alert = {
      dispatch,
      message: "Ndodhi një gabim gjatë përpjekjes për të gjetur përdoruesin.",
      type: "error",
    }

    Notification(alert);
  }
};
