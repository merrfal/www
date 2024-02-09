// @ts-nocheck

import { User } from "@/configs/Models"
import { DatabaseConnection } from "@/utils/Connection"

const Fetch = async (username) => {
  try {
    await DatabaseConnection()

    const select = {
      'userData.username': 1,
      'userData.name': 1,
      'userData.surname': 1,
      'userData.avatar': 1,
    }

    return await User
      .findOne({ 'userData.username': username })
      .select(select)
      .lean()
  } 

  catch (error) {
    return false
  }
}

export default Fetch