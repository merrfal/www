// @ts-nocheck

import { Product, User, Category as CategoryModel } from "@/configs/Models"
import { UserAuth } from "@/middlewares"
import { Response } from "@/utils/Response"
import { Translation } from "@/utils/Translations"
import { AL_Cities, MK_Cities, XK_Cities } from "@/data/cities"

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
                    .lean()
          
                if (product_find) {
                    const product_owner = product_find?.productData?.user?.toString()
                    const user_id = user?._id.toString()

                    if (product_owner === user_id) {
                        let validations = true
            
                        const name_validation = NameValidation(payload?.name)
                        const description_validation = DescriptionValidation(payload?.description)
                        const address_validation = AddressValidation(payload?.address)
                        const phone_validation = PhoneValidation(payload?.phone)
                        const city_validation = CityValidation(payload?.city)
                        const category_validation = CategoryValidation(payload?.category)
                        const country_validation = CountryValidation(payload?.country)
                        const images_validation = ImagesValidation(payload?.gallery)
                        const mode_validation = ModeValidation(payload?.postedAnonymously)
                        const entry_validation = PhoneCodeValidation(payload?.phoneCode)
        
                        if (name_validation?.error) validations = false
                        if (description_validation?.error) validations = false
                        if (address_validation?.error) validations = false
                        if (phone_validation?.error) validations = false
                        if (images_validation?.error) validations = false
                        if (city_validation?.error) validations = false
                        if (category_validation?.error) validations = false
                        if (country_validation?.error) validations = false
                        if (mode_validation?.error) validations = false
                        if (entry_validation?.error) validations = false
    
                        if (validations) {
                            let 
                                city = payload?.city, 
                                country = payload?.country,
                                category

                            const category_find = await CategoryModel
                                .findOne({ _id: payload?.category })
                                .select({ _id: 1 })
                                .lean()
            
                            if(category_find) category = category_find._id.toString()
                            else category = '641c623db24ea4453a05436e'
                
                            const cities = [...AL_Cities, ...XK_Cities, ...MK_Cities]
                            const city_find = cities.find((c) => c.value === city)?.value
                            
                            if(city_find) city = city_find
                            else city = country === 'XK' ? 'aB2cD3eF29' : country === 'AL' ? 'K2L3M4N5O6P7' : country === 'MK' ? '1aB2G03eF' : 'aB2cD3eF29' 
                            
                            if(country === 'XK') country = 'XK'
                            else if(country === 'AL') country = 'AL'
                            else if(country === 'MK') country = 'MK'
                            else country = 'XK'
            
                            const product_structure = {
                                ...product_find?.productData,
                                name: payload?.name,
                                description: payload?.description,
                                gallery: payload?.gallery,
                                category: category.toString(),
                                city: city,
                                country: country,
                                address: payload?.address,
                                phoneCode: payload?.phoneCode,
                                phone: payload?.phone,
                                postedAnonymously: payload?.postedAnonymously,
                                isGiven: payload?.isGiven,
                            }

                            const product = await Product.findOneAndUpdate(
                                { 'productData.slug': product_find?.productData?.slug }, 
                                { $set: { productData: product_structure } }
                            )

                            if (category !== payload?.category) {
                                await CategoryModel.findOneAndUpdate(
                                    { _id: category }, 
                                    { 
                                        $inc: { 'categoryData.products': -1 },
                                        $pull: { 'userActivities.products': id }
                                    },
                                )
                                
                                await CategoryModel.findOneAndUpdate(
                                    { _id: payload?.category }, 
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
            error: error,
        })
    }
}

export default Update