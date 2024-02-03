import { Normal } from "../../layouts"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import { Delete, ViewWithPermissions } from "../../../api/Product"
import { Loading } from "../../components"
import { DisabledDefaultState, ProductDefaultState, ProductDefaultValidation } from "../../../configs/Defaults"
import { onInput as Input } from "../../../utils/ProductManipulation"
import { OpenConfirmation } from "../../../controllers/Slices"
import { Translation } from "../../../utils/Translations"
import { Permissonless } from ".."
import { ref, deleteObject } from "firebase/storage"
import { Storage } from "../../../configs/Firebase"
import { Console } from "../../../utils/Console"

import {
  Header,
  Description,
  Address,
  Phone,
  Mode,
  Cities,
  Categories,
  Images,
  Buttons,
  Title,
  Url,
  Country,
  Given,
} from "."

let FIRST_TIME = true

export default function EditProduct() {
  const account = useSelector((state) => state.Account)
  const dispatch = useDispatch()
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [validation, setValidation] = useState(ProductDefaultValidation)
  const [product, setProduct] = useState(ProductDefaultState)
  const [isHold, setIsHold] = useState(false)
  const [originalImageList, setOriginalImageList] = useState()
  const [loadingImage, setLoadingImage] = useState(false)

  const onInput = (key, e, event = true) => Input(
    product, 
    setProduct, 
    validation, 
    setValidation, 
    key, 
    e, 
    event
  )

  const onDeleteSuccess = (gallery) => {
    const username = account?.User?.userData?.username

    gallery.map(async (image) => {
      try {
        const currentIterationImage = ref(Storage, `products/${image.id}`)
        await deleteObject(currentIterationImage)
      }

      catch(error) { Console(error, "error") }
    })

    if(username !== undefined) router.push(`/profili/${username}`)
    else router.push("/")

    setIsHold(false)
  }

  const on = (name, slug, gallery) => {    
    dispatch(OpenConfirmation({
      Title: `${Translation("product-deletion-confirmation-title")} "${name?.length > 22 ? name?.substring(0, 22) + "..." : name}"?`,
      Message: Translation("product-deletion-confirmation-message"),
      Action: () => Delete(slug, setIsHold, onDeleteSuccess, gallery, dispatch),
    }))
  }

  useEffect(() => {
    const { slug } = router.query

    if(!account.Loading && slug !== undefined){
      if(account.Auth) {
        const userId = account?.User?._id

        ViewWithPermissions(slug, dispatch).then((data) => {
          if(data.success){
            const isAllowedToEdit = userId === data?.data?.productData?.user._id
            const isAdmin = account?.User?.userAdditionalData?.role === "admin"

            if(isAllowedToEdit || isAdmin){
              const static_images = data?.data?.productData?.gallery.map((image) => {
                return {
                  id: image.id,
                  data_url: image.url,
                  isSaved: true,
                  original: image,
                  file: {
                    name: image.filename
                  },
                }
              })
              
              setOriginalImageList(static_images)

              setProduct({
                ...data?.data,
                productData: {
                  ...data?.data?.productData,
                  gallery: static_images
                }
              })

              setLoading(false)

              if(router?.query?.fshije === "po") {
                setTimeout(() => on(
                  data?.data?.productData?.name,
                  slug,
                  data?.data?.productData?.gallery
                ), 100)
              }
            }

            else router.push(`/${slug}`)
          }
        })
      }
    }
  }, [account, router])

  const onLoad = !isHold ? {} : DisabledDefaultState

  if(!account.Auth && !account.Loading) return <Permissonless />

  return (
    <Normal>
      {loading ? <Loading /> : null}

      {!loading && <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="md:auto md:grid-cols-3 md:gap-6 mt-12 mb-16">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <div style={onLoad} className="sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 p-2">
                <Header product={product} mode="edit" />

                <Title
                  product={product}
                  onInput={onInput}
                  validation={validation}
                />
                
                <Description
                  product={product}
                  onInput={onInput}
                  validation={validation}
                />

                <div className="grid grid-cols-6 gap-6">
                  <Url product={product} />

                  <Categories
                    product={product}
                    onInput={onInput}
                    validation={validation}
                  />

                  <Mode
                    product={product}
                    onInput={onInput}
                    validation={validation}
                  />

                  <Given 
                    product={product} 
                    onInput={onInput} 
                  />

                  <Phone
                    product={product}
                    onInput={onInput}
                    validation={validation}
                  />

                  <Country
                    product={product}
                    onInput={onInput}
                    validation={validation}
                    setValidations={setValidation}
                  />

                  <Cities
                    product={product}
                    onInput={onInput}
                    validation={validation}
                  />

                  <Address
                    product={product}
                    onInput={onInput}
                    validation={validation}
                  />
                </div>

                <Images
                  product={product}
                  setProduct={setProduct}
                  validation={validation}
                  loadingImage={loadingImage}
                  setLoadingImage={setLoadingImage}
                />
              </div>

              <Buttons
                mode="edit"
                onUpdate={on}
                product={product}
                onInput={onInput}
                account={account}
                setValidation={setValidation}
                isHold={isHold}
                isLoading={loading}
                setIsHold={setIsHold}
                loadingImage={loadingImage}
                originalImageList={originalImageList}
              />
            </div>
          </div>
        </div>
      </div>}
    </Normal>
  )
}
