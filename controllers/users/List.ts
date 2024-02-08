// @ts-nocheck

import { User } from "@/configs/Models"
import { DatabaseConnection } from "@/utils/Connection"

const List = async () => {
  try {
    await DatabaseConnection()

    return await User
      .find({})
      .select({ 'userData.username': 1 })
      .lean()
  } 

  catch (error) {
    console.error(error)
  
    return false
  }
}

export default List