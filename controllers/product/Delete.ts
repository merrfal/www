// @ts-nocheck

import { Product, User, Category as CategoryModel } from "@/configs/Models"
import { UserAuth } from "@/middlewares"
import { DeleteMesage } from "@/utils/FormattedMessages"
import { Response } from "@/utils/Response"

const Delete = async ({ slug }, res, req) => {
    try {
        const uid = await UserAuth(req)
  
        if (uid) {
            const user = await User
                .findOne({ 'userData.uid': uid })
                .select({ _id: 1, 'userData.role': 1 })
                .lean()
    
            if (user) {
                const productData = await Product
                .findOne({'productData.slug': slug})
                .select({ 'productData.user': 1, 'productData.category': 1 })
                .lean()
    
                if (productData) {
                    const id = productData._id.toString()
                    const post_user_id = productData.productData.user.toString()
                    const user_id = user._id.toString()
        
                    if (user_id === post_user_id || user.role === 'admin') {
                        const deletedProduct = await Product.findByIdAndDelete(id)
        
                        await User.findByIdAndUpdate(post_user_id, {
                            $inc: { 'userActivities.productCount': -1 },
                            $pull: { 'userActivities.products': id }
                        })
            
                        await CategoryModel.findByIdAndUpdate(productData.productData.category, {
                            $inc: { 'additionalData.productCount': -1 },
                            $pull: { 'additionalData.products': id }
                        })
    
                        Response({
                            res,
                            code: deletedProduct ? 200 : 400,
                            success: deletedProduct ? true : false,
                            data: deletedProduct ? { ...deletedProduct._doc } : null,
                            message: DeleteMesage("product", deletedProduct ? true : false)
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
      Response({
        res,
        code: 500,
        success: false,
        data: null,
        message: DeleteMesage("product", false),
        error,
      })
    }
}

export default Delete