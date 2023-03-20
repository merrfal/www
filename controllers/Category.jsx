import { Category } from "../configs/Models";
import { Response } from "../utils/Response";

import { CATEGORIES_LIST_ERROR, CATEGORIES_LIST_SUCCESS } from "../configs/Messages";

export const List = async (payload, res) => {
  try {
    const categories = await Category.find({});

    const response = {
      res,
      status: categories ? 200 : 404,
      success: categories ? true : false,
      message: categories ? CATEGORIES_LIST_SUCCESS : CATEGORIES_LIST_ERROR,
      data: categories
    }
    
    Response(response);
  } 

  catch (error) {
    const response = {
      res,
      status: 404,
      success: false,
      message: CATEGORIES_LIST_ERROR,
      data: null
    }

    Response(response);
  }
};