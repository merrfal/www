// @ts-nocheck

import { Product, User } from "@/configs/Models"
import { UserAuth } from "@/middlewares"
import { Response } from "@/utils/Response"
import { Translation } from "@/utils/Translations"

import { 
  AddressValidation, 
  CategoryValidation, 
  CityValidation, 
  CountryValidation, 
  DescriptionValidation, 
  ImagesValidation, 
  ModeValidation, 
  NameValidation, 
  PhoneCodeValidation, 
  PhoneValidation 
} from "@/utils/Forms"

export const Update = async (payload, res, req) => {
    try {
        const uid = await UserAuth(req)
  
        if (uid) {
            const user = await User
                .findOne({ 'userData.uid': uid })
                .select({ _id: 1 })
                .lean()
  
            if (user) {
                const product_find = await Product
                    .findOne({ 'productData.slug': payload.slug })
                    .select({ 'productData.user': 1, 'productData.slug': 1 })
                    .lean()
          
                if (product_find) {
                    const product_owner = product_find.productData.user.toString()
                    const user_id = user._id.toString()
    
                    if (product_owner === user_id) {
                        let validations = true
            
                        const name_validation = NameValidation(payload.productData.name)
                        const description_validation = DescriptionValidation(payload.productData.description)
                        const address_validation = AddressValidation(payload.productData.address)
                        const phone_validation = PhoneValidation(payload.productData.phone)
                        const city_validation = CityValidation(payload.productData.city)
                        const category_validation = CategoryValidation(payload.productData.category)
                        const country_validation = CountryValidation(payload.productData.country)
                        const images_validation = ImagesValidation(payload.productData.gallery)
                        const mode_validation = ModeValidation(payload.productData.postedAnonymously)
                        const entry_validation = PhoneCodeValidation(payload.productData.phoneCode)
        
                        if (name_validation.error) validations = false
                        if (description_validation.error) validations = false
                        if (address_validation.error) validations = false
                        if (phone_validation.error) validations = false
                        if (images_validation.error) validations = false
                        if (city_validation.error) validations = false
                        if (category_validation.error) validations = false
                        if (country_validation.error) validations = false
                        if (mode_validation.error) validations = false
                        if (entry_validation.error) validations = false
    
                        if (validations) {
                            let category, city, country
                
                            const category_find = await CategoryModel
                                .findOne({ _id: payload.productData.category })
                                .select({ _id: 1 })
                                .lean()
                
                            if(category_find) category = category_find._id.toString()
                            else category = '641c623db24ea4453a05436e'
                
                            const cities = [AL_Cities, XK_Cities, MK_Cities]
                            const city_find = cities.find(c => c.find(c => c.value === payload.productData.city))
                
                            if(city_find) city = city_find.find(c => c.value === payload.productData.city).name
                            else city = country === 'XK' ? 'aB2cD3eF29' : country === 'AL' ? 'K2L3M4N5O6P7' : country === 'MK' ? '1aB2G03eF' : 'aB2cD3eF29' 
                
                            if(payload.productData.country === 'XK') country = 'XK'
                            else if(payload.productData.country === 'AL') country = 'AL'
                            else if(payload.productData.country === 'MK') country = 'MK'
                            else country = 'XK'
            
                            const product_structure = {
                                name: payload.productData.name,
                                description: payload.productData.description,
                                gallery: payload.productData.gallery,
                                slug: payload.productData.slug,
                                category: category.toString(),
                                user: user._id.toString(),
                                city: city,
                                country: country,
                                address: payload.productData.address,
                                phoneCode: payload.productData.phoneCode,
                                phone: payload.productData.phone,
                                postedAnonymously: payload.productData.postedAnonymously,
                                isGiven: false
                            }

                            const product = await Product.findOneAndUpdate(
                                { 'productData.slug': product_find.slug }, 
                                { $set: { productData: product_structure } }
                            )

                            if (category !== payload.productData.category) {
                                await CategoryModel.findOneAndUpdate(
                                    { _id: category }, 
                                    { 
                                        $inc: { 'categoryData.products': -1 },
                                        $pull: { 'userActivities.products': id }
                                    },

                                )
                                
                                await CategoryModel.findOneAndUpdate(
                                    { _id: payload.productData.category }, 
                                    { 
                                        $inc: { 'categoryData.products': 1 },
                                        $addToSet: { 'userActivities.products': id }
                                    },
                                )
                            }
                    
                            Response({
                                res,
                                code: product ? 200 : 404,
                                success: product ? true : false,
                                data: product ? product : null,
                                message: product ? Translation("product-update-success") : Translation("product-update-error"),
                            })
                        }
                    }
        
                    else Response({
                        res,
                        code: 401,
                        success: false,
                        data: null,
                        message: Translation("product-update-unauthorized"),
                    })
                }
    
                else Response({
                    res,
                    code: 404,
                    success: false,
                    data: null,
                    message: Translation("product-was-not-found"),
                })
            } 
        }
    }
      
    catch (error) {
        console.error(error)

        Response({
            res,
            code: 500,
            success: false,
            data: null,
            message: Translation("product-update-error"),
            error: err,
        })
    }
}

export default Update