// @ts-nocheck

import { Product } from "@/configs/Models"

const List = async () => {
  try {
    return await Product.find({}).lean()
  } 

  catch (error) {
    console.error(error)
  
    return false
  }
}

export default List