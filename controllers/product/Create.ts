// @ts-nocheck

import { Product, User, Category as CategoryModel } from "@/configs/Models"
import { UserAuth } from "@/middlewares"
import { CreateMessage } from "@/utils/FormattedMessages"
import { Response } from "@/utils/Response"
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
  PhoneValidation, 
  SlugBuilder
} from "@/utils/Forms"

const Create = async (payload, res, req) => {
    try {
        const uid = await UserAuth(req)
  
        if (uid) {
            const user = await User
                .findOne({ 'userData.uid': uid })
                .select({ _id: 1 })
                .lean()
    
            if (user) {
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
                        productData: {
                            name: payload.productData.name,
                            description: payload.productData.description,
                            gallery: payload.productData.gallery,
                            slug: SlugBuilder(payload.productData.name),
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
                    }
    
                    const initalProduct = new Product(product_structure)
                    const product = await initalProduct.save()
                    const id = product._id.toString()
        
                    await User.findByIdAndUpdate(user._id, {
                        $inc: { 'userActivities.productCount': 1 },
                        $addToSet: { 'userActivities.products': id }
                    })
        
                    await CategoryModel.findByIdAndUpdate(category, {
                        $inc: { 'additionalData.productCount': 1 },
                        $addToSet: { 'additionalData.products': id }
                    })
        
                    Response({
                        res,
                        code: (product && initalProduct) ? 200 : 400,
                        success: (product && initalProduct) ? true : false,
                        data: (product && initalProduct) ? { ...product._doc } : null,
                        message: CreateMessage("product", product ? true : false)
                    })
                }
    
                else Response({
                    res,
                    code: 400,
                    success: false,
                    data: null,
                    message: 'Produkti nuk u krijua dot, ju lutem plotësoni të gjitha fushat e nevojshme.',
                })
            }
        
            else Response({
                res,
                code: 404,
                success: false,
                data: null,
                message: 'Përdoruesi nuk u gjet, nese mendoni se keni bere nje gabim ju lutem provoni perseri!',
            })
        }
    
        else Response({
            res,
            code: 401,
            success: false,
            data: null,
            message: "Ju nuk jeni i autorizuar te beni kete veprim!",
        })
    } 
    
    catch (error) {
      console.error(error)
  
      const response = {
        res,
        code: 500,
        success: false,
        data: null,
        message: CreateMessage("product", false),
        error,
      }
  
      Response(response)
    }
}

export default Create