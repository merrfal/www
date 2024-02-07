import { Notification } from "../utils/Response"
import { Request } from "../utils/Http"
import { CreateMessage, DeleteMesage } from "../utils/FormattedMessages"
import { Translation } from "../utils/Translations"

export const Create = async (page, router, setIsHold, dispatch) => {
  try {
    const req = await Request("PRODUCTS/CREATE", { productData: {...page} })
    const res = await req.json()

    if (res.success === true) {
      router.push(`/${res.data.productData.slug}`)

      Notification({
        dispatch,
        message: res.message,
        type: "success",
      })
    }

    else Notification({
      dispatch,
      message: res.message,
      type: "error",
    })
  } 
  
  catch (error) {
    Notification({
      dispatch,
      message: CreateMessage("product", false),
      type: "error",
    })
  }

  finally {
    setIsHold(false)
  }
}

export const Delete = async (slug, setIsHold, onDeleteSuccess, gallery, dispatch) => {
  try {
    setIsHold(true)

    const req = await Request("PRODUCTS/DELETE", {slug})
    const res = await req.json()

    if (res.success === true) {
      const alert = {
        dispatch,
        message: res.message,
        type: "success",
      }

      Notification(alert)

      onDeleteSuccess(gallery)
    }

    else {
      const alert = {
        dispatch,
        message: res.message,
        type: "error",
      }

      Notification(alert)
    }
  } 
  
  catch (error) {
    const alert = {
      dispatch,
      message: DeleteMesage("product", false),
      type: "error",
    }

    Notification(alert)

    setIsHold(false)
  }
}

export const Search = async (filters, products, setProducts, dispatch) => {
  try {
    const req = await Request("PRODUCTS/SEARCH", {...filters, limit: "8" })
    const res = await req.json()

    if (res.success === true) {
      const { data } = res

      const next = { 
        products: [...products.products, ...data.products], 
        hasMore: data.hasMore
      }

      setProducts(next)
    }

    else {
      const alert = {
        dispatch,
        message: res.message,
        type: "error",
      }

      Notification(alert)
    }
  } 
  
  catch (error) {
    const alert = {
      dispatch,
      message: Translation("something-went-wrong-while-searching"),
      type: "error",
    }

    Notification(alert)
  }
}

export const Update = async ( product, router, setLoading, dispatch) => {
  try{
    setLoading(true)

    const req = await Request("PRODUCTS/UPDATE", { ...product })
    const res = await req.json()

    if (res.success === true) {
      router.push(`/${res.data.productData.slug}`)
  
      const alert = {
        dispatch,
        message: res.message,
        type: "success",
      }
  
      Notification(alert)
    }

    else {
      const alert = {
        dispatch,
        message: res.message,
        type: "error",
      }

      Notification(alert)
    }
  }

  catch (error) {
    const alert = {
      dispatch,
      message: Translation("something-went-wrong-while-trying-to-update-product"),
      type: "error",
    }

    Notification(alert)
  }

  finally {
    setLoading(false)
  }
}

export const View = async (slug, setProduct, dispatch, setLoading = null) => {
  try {
    if (setLoading) setLoading(true)
    const req = await Request("PRODUCTS/VIEW", { slug, edit: false })
    const res = await req.json()

    if (res.success === true) {
      const gallery = res.data.productData.gallery

      const main = gallery?.filter((image) => image?.isMain === true)
      const rest = gallery?.filter((image) => image?.isMain === false)

      const array_gallery = []

      if (main.length > 0) array_gallery.push(...main)
      if (rest.length > 0) array_gallery.push(...rest)
      
      setProduct({
        ...res.data,
        productData: {
          ...res.data.productData,
          gallery: array_gallery
        }
      })

      if (setLoading !== null) setLoading(false)
    }

    else setProduct(false)
  } 
  
  catch (error) {
    const alert = {
      dispatch,
      message: Translation("products-view-error"),
      type: "error",
    }

    Notification(alert)
  }
}

export const ViewWithPermissions = async (slug, dispatch) => {
  try {
    const req = await Request("PRODUCTS/VIEW", { slug, edit: true })
    const res = await req.json()

    return {
      success: res.success,
      data: res.data || null,
    }
  } 
  
  catch (error) {
    const alert = {
      dispatch,
      message: Translation("view-with-permission"),
      type: "error",
    }

    Notification(alert)

    return {
      success: false,
      data: null
    }
  }
}

export const Similar = async (category, setProducts, setIsSimilar, dispatch) => {
  try {
    const req = await Request("PRODUCTS/SIMILAR", { category })
    const res = await req.json()

    if (res.success === true) {
      setProducts(res.data)
      setIsSimilar(res.isSimilar)
    }

    else {
      const alert = {
        dispatch,
        message: res.message,
        type: "error",
      }

      Notification(alert)
    }
  } 
  
  catch (error) {
    const alert = {
      dispatch,
      message: Translation("something-went-wrong-while-fetching-similar-products"),
      type: "error",
    }

    Notification(alert)
  }
}

export const Latest = async (setProducts, dispatch) => {
  try {
    const req = await Request("PRODUCTS/LATEST", {})
    const res = await req.json()

    if (res.success === true) setProducts(res.data)
    else {
      const alert = {
        dispatch,
        message: res.message,
        type: "error",
      }

      Notification(alert)
    }
  } 
  
  catch (error) {
    const alert = {
      dispatch,
      message: Translation("products-latest-error"),
      type: "error",
    }

    Notification(alert)
  }
}

export const Category = async (filters, scratch, products, setProducts, setLoading, dispatch) => {
  try {
    const req = await Request("PRODUCTS/CATEGORY", {...filters, limit: "8" })
    const res = await req.json()

    if (res.success === true) {
      const { data } = res

      const next = {  hasMore: data.hasMore }

      if (scratch) next.products = data.products
      else next.products = [...products.products, ...data.products]

      if(!next.hasMore) setLoading(false)

      setProducts(next)
    }

    else {
      const alert = {
        dispatch,
        message: res.message,
        type: "error",
      }

      Notification(alert)
    }
  } 
  
  catch (error) {
    const alert = {
      dispatch,
      message: Translation("categories-fetch-error"),
      type: "error",
    }

    Notification(alert)
    setLoading(false)
  }
}