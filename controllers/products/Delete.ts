// @ts-nocheck

import { Product, User } from "@/configs/Models"
import { UserAuth } from "@/middlewares"
import { DeleteMesage } from "@/utils/FormattedMessages"
import { Response } from "@/utils/Response"

const Delete = async (payload, res, req) => {
    try {
        const { slug } = payload
        const uid = await UserAuth(req)
  
        if (uid) {
            const user = await User
                .findOne({ 'userData.uid': uid })
                .select({ _id: 1, 'userAdditionalData.role': 1 })
                .lean()
    
            if (user) {
                const productData = await Product
                    .findOne({'productData.slug': slug })
                    .select({ 'productData.user': 1, 'productData.category': 1 })
                    .lean()
    
                if (productData) {
                    const id = productData._id.toString()
                    const post_user_id = productData.productData.user.toString()
                    const user_id = user._id.toString()
        
                    if ((user_id === post_user_id) || user.userAdditionalData.role === 'admin') {
                        const updatedProduct = await Product.findByIdAndUpdate(
                            id, 
                            { 'productData.isPublished': false }
                        )
    
                        Response({
                            res,
                            code: updatedProduct ? 200 : 400,
                            success: updatedProduct ? true : false,
                            data: null,
                            message: DeleteMesage("product", updatedProduct ? true : false)
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

                else Response({
                    res,
                    code: 404,
                    success: false,
                    data: null,
                    message: 'Produkti nuk u gjet, nese mendoni se keni bere nje gabim ju lutem provoni perseri!',
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