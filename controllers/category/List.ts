// @ts-nocheck

import { Category } from "@/configs/Models"
import { DatabaseConnection } from "@/utils/Connection"

const List = async () => {
  try {
    await DatabaseConnection()

    return await Category
      .find({})
      .select({ 'categoryData.slug': 1 })
      .lean()
  } 

  catch (error) {
    return false
  }
}

export default List