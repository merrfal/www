import { User, Product } from "../configs/Models"
import { UserAuth } from "../middlewares"
import { Response } from "../utils/Response"
import { Translation } from "../utils/Translations"
import { AL_Cities, MK_Cities, XK_Cities } from "../data/cities"

import { 
  AddressValidation, 
  AvatarValidation, 
  CityValidation, 
  CountryValidation,
  CoverValidation,
  PhoneCodeValidation, 
  PhoneValidation, 
  UserNameValidation, 
  UserSurnameValidation, 
  UsernameValidation 
} from "../utils/Forms"

export const Register = async (payload, res, req) => {
  try {
    const uid = await UserAuth(req)
    
    if (uid) {
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

    else Response({
      res,
      code: 401,
      success: false,
      data: null,
      message: Translation("unotharized-user-access"),
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
      message: Translation("user-register-error"),
      error,
    })
  }
}

export const Login = async (payload, res, req) => {
  try {
    const uid = await UserAuth(req)

    if (uid) {
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

    else Response({
      res,
      code: 401,
      success: false,
      data: null,
      message: Translation("unotharized-user-access"),
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

export const Update = async (payload, res, req) => {
  try {
    const uid = await UserAuth(req)

    if (uid) {
      const user_find = await User
        .findOne({ 'userData.uid': uid })
        .lean()

      if (user_find) {
        let validations = true

        const name_validation = UserNameValidation(payload?.userData?.name)
        const surname_validation = UserSurnameValidation(payload?.userData?.surname)
        const username_validation = UsernameValidation(payload?.userData?.username)
        const address_validation = AddressValidation(payload?.userAdditionalData?.address)
        const phone_validation = PhoneValidation(payload?.userData?.phone)
        const phone_code_validation = PhoneCodeValidation(payload?.userData?.phoneCode)
        const avatar_validation = AvatarValidation(payload?.userData?.avatar)
        const cover_validation = CoverValidation(payload?.userData?.cover)
        const adress_validation = AddressValidation(payload?.userAdditionalData?.address)
        const city_validation = CityValidation(payload?.userAdditionalData?.city)
        const country_validation = CountryValidation(payload?.userAdditionalData?.country)

        if (name_validation?.error) validations = false
        if (surname_validation?.error) validations = false
        if (phone_validation?.error) validations = false
        if (address_validation?.error) validations = false
        if (username_validation?.error) validations = false
        if (phone_code_validation?.error) validations = false
        if (avatar_validation?.error) validations = false
        if (cover_validation?.error) validations = false
        if (adress_validation?.error) validations = false
        if (city_validation?.error) validations = false
        if (country_validation?.error) validations = false

        if (validations) {
          let 
            city = payload?.userAdditionalData?.city, 
            country = payload?.userAdditionalData?.country

          const cities = [...AL_Cities, ...XK_Cities, ...MK_Cities]
          const city_find = cities.find((c) => c.value === city).value
          
          if(city_find) city = city_find
          else city = country === 'XK' ? 'aB2cD3eF29' : country === 'AL' ? 'K2L3M4N5O6P7' : country === 'MK' ? '1aB2G03eF' : 'aB2cD3eF29' 
          
          if(country === 'XK') country = 'XK'
          else if(country === 'AL') country = 'AL'
          else if(country === 'MK') country = 'MK'
          else country = 'XK'

          const user_structure = {
            userData: {
              ...user_find.userData,
              name: payload?.userData?.name,
              surname: payload?.userData?.surname,
              phone: payload?.userData?.phone,
              phoneCode: payload?.userData?.phoneCode,
              username: payload?.userData?.username,
              avatar: payload?.userData?.avatar,
              cover: payload?.userData?.cover
            },
            userAdditionalData: {
              ...user_find.userAdditionalData,
              address: payload?.userAdditionalData?.address,
              city: city,
              country: country,
            }
          }

          const user = await User
            .findOneAndUpdate(
              {'userData.username': payload.old_username}, 
              { $set: user_structure },
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

        else Response({
          res,
          code: 400,
          success: false,
          data: null,
          message: Translation("user-update-validation-error"),
          error: null,
        })
      }
    }

    else Response({
      res,
      code: 401,
      success: false,
      data: null,
      message: Translation("unotharized-user-access"),
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
      message: Translation("user-update-error"),
      error: error,
    })
  }
}

export const View = async (payload, res) => {
  try {
    const { username } = payload

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

export const CheckIfExist = async (payload, res) => {
  try {
    const {field, value} = payload

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

export const BanUser = async (payload, res, req) => {
  try {
    const { userId } = payload
    const uid = await UserAuth(req)

    if (uid) {
      const admin = await User
        .findOne(
          { 
            "userData.uid": uid, 
            "userAdditionalData.role": "admin" 
          },
        )
        .select({ _id: 1 })
        .lean()

      if (admin) {
        const profile = await User
          .findOne({ "_id": userId })
          .select({ _id: 1, "userAdditionalData.isBanned": 1})

        if (profile) {
          const ban = profile.userAdditionalData.isBanned
          const user = await profile.save()

          if (ban) {
            user.userAdditionalData.isBanned = false
            await user.save()

            Response({
              res,
              code: user ? 200 : 404,
              success: user ? true : false,
              data: user ? user : null,
              message: user ? Translation("unban-user-success") : Translation("unban-user-error"),
            })
          }

          else {
            user.userAdditionalData.isBanned = true
            await user.save()

            Response({
              res,
              code: user ? 200 : 404,
              success: user ? true : false,
              data: user ? user : null,
              message: user ? Translation("ban-user-success") : Translation("ban-user-error"),
            })
          }
        }

        else Response({
          res,
          code: 404,
          success: false,
          data: null,
          message: Translation("user-was-not-found"),
          error: null,
        })
      }

      else Response({
        res,
        code: 401,
        success: false,
        data: null,
        message: Translation("unotharized-user-access"),
        error: null,
      })
    }

    else Response({
      res,
      code: 401,
      success: false,
      data: null,
      message: Translation("unotharized-user-access"),
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
      message: Translation("ban-user-error"),
      error: error,
    })
  }
}