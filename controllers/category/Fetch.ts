// @ts-nocheck

import { Category } from "@/configs/Models"
import { DatabaseConnection } from "@/utils/Connection"

const Fetch = async (slug) => {
  try {
    await DatabaseConnection()

    const select = {
      'categoryData.name': 1,
      'categoryData.description': 1,
      'categoryData.slug': 1,
    }

    return await Category
      .findOne({ 'categoryData.slug': slug })
      .select(select)
      .lean()
  } 

  catch (error) {
    return false
  }
}

export default Fetch