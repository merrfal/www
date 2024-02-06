import { User, Product } from "../configs/Models"
import { Response } from "../utils/Response"
import { Translation } from "../utils/Translations"

export const Register = async (payload, res) => {
  try {
    const data = { 
      userData: {...payload?.userData},
      userAdditionalData: {
        country: '',
        city: '',
      }
    }

    const savedUser = new User(data)
    const user = await savedUser.save()

    Response({
      res,
      code: user ? 200 : 400,
      success: user ? true : false,
      data: user ? { ...user._doc } : null,
      message: user ? Translation("user-register-success") : Translation("user-register-error"),
    })
  } 
  
  catch (error) {
    console.error(error)

    Response({
      res,
      code: 500,
      success: false,
      data: null,
      message: Translation("user-register-error"),
      error,
    })
  }
}

export const Delete = async (payload, res) => {
  try {
    const user = await User.findByIdAndDelete(payload.userId)

    if (user) Response(
      res,
      200,
      true,
      Translation("user-delete-success"),
      null
    )

    else Response(
      res,
      404,
      false,
      Translation("user-delete-error"),
      null
    )
  } 
  
  catch (error) {
    Response(
      res,
      500,
      false,
      Translation("user-delete-error"),
      null
    )
  }
}

export const Login = async (payload, res) => {
  try {
    const { uid } = payload
    
    const user = await User
      .findOne({ "userData.uid": uid })
      .lean()

    Response({
      res,
      code: user ? 200 : 404,
      success: user ? true : false,
      data: user ? { ...user } : null,
      message: user ? Translation("user-auth-success") : Translation("user-auth-error"),
    })
  } 
  
  catch (error) {
    console.error(error)

    Response({
      res,
      code: 500,
      success: false,
      data: null,
      message:Translation("user-auth-error"),
      error,
    })
  }
}

export const Products = async (payload, res) => {
  try {
    let { offset, limit, user, auth } = payload

    offset = parseInt(offset)
    limit = parseInt(limit)

    const filter = () => {
      if (auth === user) return { 'productData.user': user, 'productData.isPublished': true }
      else return { 'productData.user': user, 'productData.postedAnonymously': false, 'productData.isPublished': true }
    }

    let products = await Product.find(filter()).sort({ createdAt: -1 }).skip(offset).limit(limit).lean()
    let countProducts = await Product.find(filter()).countDocuments()

    Response({
      res,
      code: products ? 200 : 404,
      success: products ? true : false,
      data: products ? { products, hasMore: countProducts > (offset + limit) } : [],
      message: products ? Translation("products-list-user-success") : Translation("products-list-user-error"),
    })
  } 
  
  catch (error) {
    console.error(error)

    Response({
      res,
      code: 500,
      success: false,
      data: null,
      message: Translation("products-list-user-error"),
      error,
    })
  }
}

export const Update = async (payload, res) => {
  try {
    const user = await User
      .findOneAndUpdate(
        {'userData.username': payload.old_username}, 
        { $set: 
          { 
            userData: payload?.userData,
            userAdditionalData: payload?.userAdditionalData,
          }
        },
        { new: true }
      )
      .lean()

    Response({
      res,
      code: user ? 200 : 404,
      success: user ? true : false,
      data: user ? user : null,
      message: user ? Translation("user-update-success") : Translation("user-update-error"),
    })
  } 
  
  catch (error) {
    console.error(error)

    Response({
      res,
      code: 500,
      success: false,
      data: null,
      message: Translation("user-update-error"),
      error: err,
    })
  }
}

export const View = async ({ username }, res) => {
  try {
    const user = await User
      .findOneAndUpdate(
        { "userData.username": username },
        { $inc: { "userActivities.views": 1 } },
        { new: true }
      )
      .lean()

    Response({
      res,
      code: user ? 200 : 404,
      success: user ? true : false,
      data: user ? user : null,
      message: user ? Translation("user-view-success") : Translation("user-view-error"),
      error: null,
    })
  } 
  
  catch (error) {
    console.error(error)

    Response({
      res,
      code: 500,
      success: false,
      data: null,
      message: Translation("user-view-error"),
      error: error,
    })
  }
}

export const CheckIfExist = async ({field, value}, res) => {
  try {
    const checkDuplicate = await User
      .findOne({[field]: value})
      .select({ _id: 1 })
      .lean()

    Response({
      res,
      code: 200,
      success: true,
      data: checkDuplicate ? true : false,
      message: checkDuplicate ? Translation("check-if-exist-success") :  Translation("check-if-exist-error"),
      error: null,
    })
  }

  catch(error){
    console.error(error)

    Response({
      res,
      code: 500,
      success: false,
      exists: false,
      data: null,
      message:  Translation("check-if-exist-throw"),
      error: error,
    })
  }
}