// @ts-nocheck

import { Product } from "@/configs/Models"
import { DatabaseConnection } from "@/utils/Connection"

const Fetch = async (slug) => {
  try {
    await DatabaseConnection()

    const select = {
      'productData.name': 1,
      'productData.description': 1,
      'productData.slug': 1,
      'productData.gallery': 1,
    }

    return await Product
      .findOne({ 'productData.slug': slug })
      .select(select)
      .lean()
  } 

  catch (error) {
    return false
  }
}

export default Fetch