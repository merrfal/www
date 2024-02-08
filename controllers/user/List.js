import { User } from "../../configs/Models"

const List = async () => {
  try {
    return await User.find({}).lean()
  } 

  catch (error) {
    console.error(error)
  
    return false
  }
}

export default List