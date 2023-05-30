import * as Messages from "../configs/Messages";

import { Notification } from "../utils/Response";
import { Request } from "../utils/Http";
import { CreateMessage, DeleteMesage } from "../utils/FormattedMessages";

export const Create = async (page, router, setIsHold, dispatch) => {
  try {
    const req = await Request("PRODUCTS/CREATE", {productData: {...page}});
    const res = await req.json();

    if (res.success === true) {
      router.push(`/${res.data.productData.slug}`)

      const alert = {
        dispatch,
        message: res.message,
        type: "success",
      };

      Notification(alert);
    }

    else {
      const alert = {
        dispatch,
        message: CreateMessage("product", false),
        type: "error",
      };

      Notification(alert);
    }
  } 
  
  catch (error) {
    const alert = {
      dispatch,
      message: Messages.PRODUCTS_LATEST_ERROR,
      type: "error",
    };

    Notification(alert);
  }

  finally {
    setIsHold(false);
  }
};

export const Delete = async (slug, setIsHold, onDeleteSuccess, dispatch) => {
  try {
    setIsHold(true);

    const req = await Request("PRODUCTS/DELETE", {slug});
    const res = await req.json();

    if (res.success === true) {
      const alert = {
        dispatch,
        message: res.message,
        type: "success",
      };

      Notification(alert);

      onDeleteSuccess();
    }

    else {
      const alert = {
        dispatch,
        message: res.message,
        type: "error",
      };

      Notification(alert);
    }
  } 
  
  catch (error) {
    const alert = {
      dispatch,
      message: DeleteMesage("product", false),
      type: "error",
    };

    Notification(alert);

    setIsHold(false);
  }
};

export const Search = async (filters, products, setProducts, dispatch) => {
  try {
    const req = await Request("PRODUCTS/SEARCH", {...filters, limit: "8" });
    const res = await req.json();

    if (res.success === true) {
      const { data } = res;

      const next = { 
        products: [...products.products, ...data.products], 
        hasMore: data.hasMore
      }

      setProducts(next);
    }

    else {
      const alert = {
        dispatch,
        message: res.message,
        type: "error",
      };

      Notification(alert);
    }
  } 
  
  catch (error) {
    const alert = {
      dispatch,
      message: Messages.PRODUCTS_LATEST_ERROR,
      type: "error",
    };

    Notification(alert);
  }
};

export const Update = async ( product, router, setLoading, dispatch) => {
  try{
    setLoading(true);

    const req = await Request("PRODUCTS/UPDATE", { ...product });
    const res = await req.json();

    if (res.success === true) {
      router.push(`/${res.data.productData.slug}`)
  
      const alert = {
        dispatch,
        message: res.message,
        type: "success",
      };
  
      Notification(alert);
    }

    else {
      const alert = {
        dispatch,
        message: res.message,
        type: "error",
      };

      Notification(alert);
    }
  }

  catch (error) {
    const alert = {
      dispatch,
      message: Messages.PRODUCTS_LATEST_ERROR,
      type: "error",
    };

    Notification(alert);
  }

  finally {
    setLoading(false);
  }
};

export const View = async (slug, setProduct, dispatch, setLoading = null) => {
  try {
    if (setLoading) setLoading(true);
    const req = await Request("PRODUCTS/VIEW", { slug });
    const res = await req.json();

    if (res.success === true) {
      setProduct(res.data);
      if (setLoading !== null) setLoading(false);
    }

    else setProduct(false);
  } 
  
  catch (error) {
    const alert = {
      dispatch,
      message: Messages.PRODUCTS_LATEST_ERROR,
      type: "error",
    };

    Notification(alert);
  }
};

export const ViewWithPermissions = async (slug, dispatch) => {
  try {
    const req = await Request("PRODUCTS/VIEW", { slug });
    const res = await req.json();

    return {
      success: res.success,
      data: res.data || null,
    }
  } 
  
  catch (error) {
    const alert = {
      dispatch,
      message: Messages.PRODUCTS_LATEST_ERROR,
      type: "error",
    };

    Notification(alert);

    return {
      success: false,
      data: null
    }
  }
};

export const Similar = async (category, setProducts, dispatch) => {
  try {
    const req = await Request("PRODUCTS/SIMILAR", { category });
    const res = await req.json();

    if (res.success === true) setProducts(res.data);
    else {
      const alert = {
        dispatch,
        message: res.message,
        type: "error",
      };

      Notification(alert);
    }
  } 
  
  catch (error) {
    const alert = {
      dispatch,
      message: Messages.PRODUCTS_LATEST_ERROR,
      type: "error",
    };

    Notification(alert);
  }
};

export const Latest = async (setProducts, dispatch) => {
  try {
    const req = await Request("PRODUCTS/LATEST", {});
    const res = await req.json();

    if (res.success === true) setProducts(res.data);
    else {
      const alert = {
        dispatch,
        message: res.message,
        type: "error",
      };

      Notification(alert);
    }
  } 
  
  catch (error) {
    const alert = {
      dispatch,
      message: Messages.PRODUCTS_LATEST_ERROR,
      type: "error",
    };

    Notification(alert);
  }
};

export const Category = async (filters, products, setProducts, dispatch) => {
  try {
    const req = await Request("PRODUCTS/CATEGORY", {...filters, limit: "8" });
    const res = await req.json();

    if (res.success === true) {
      const { data } = res;

      const next = { 
        products: [...products.products, ...data.products], 
        hasMore: data.hasMore
      }

      setProducts(next);
    }

    else {
      const alert = {
        dispatch,
        message: res.message,
        type: "error",
      };

      Notification(alert);
    }
  } 
  
  catch (error) {
    const alert = {
      dispatch,
      message: Messages.PRODUCTS_LATEST_ERROR,
      type: "error",
    };

    Notification(alert);
  }
};