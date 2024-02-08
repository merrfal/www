// @ts-nocheck

import { Product } from "@/configs/Models"
import { DatabaseConnection } from "@/utils/Connection"

const Fetch = async (slug) => {
  try {
    await DatabaseConnection()

    return await Product
      .findOne({ 'productData.slug': slug })
      .lean()
  } 

  catch (error) {
    console.error(error)
  
    return false
  }
}

export default Fetch