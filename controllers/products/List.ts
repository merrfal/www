// @ts-nocheck

import { Product } from "@/configs/Models"
import { DatabaseConnection } from "@/utils/Connection"

const List = async () => {
  try {
    await DatabaseConnection()

    return await Product
      .find({})
      .select({ 'productData.slug': 1 })
      .lean()
  } 

  catch (error) {
    return false
  }
}

export default List