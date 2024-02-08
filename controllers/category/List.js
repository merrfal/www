import { Category } from "../../configs/Models"

const List = async () => {
    try {
        return await Category.find({}).lean()
    } 

    catch (error) {
      console.error(error)
    
      return false
    }
}

export default List