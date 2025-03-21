import { Normal } from "../../layouts"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Loading } from "../../components"
import { DisabledDefaultState, ProductDefaultState, ProductDefaultValidation } from "../../../configs/Defaults"
import { onInput as Input } from "../../../utils/ProductManipulation"
import { AllowedCountries } from "../../../utils/Locations"

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
  Country
} from "."

export default function ProductPost() {
  const account = useSelector((state) => state.Account)

  const [loading, setLoading] = useState(true)
  const [validation, setValidation] = useState(ProductDefaultValidation)
  const [product, setProduct] = useState(ProductDefaultState)
  const [isHold, setIsHold] = useState(false)
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

  useEffect(() => {
    if(!account.Loading){
      if(account.Auth){ 
        const { userAdditionalData, userData } = account?.User || {}
        const { phone, phoneCode } = userData
        const { city, address, country } = userAdditionalData

        if(AllowedCountries.includes(country)){
          setProduct({
            ...product,
            productData: {
              ...product.productData,
              phoneCode: phoneCode !== "" ? phoneCode : product.productData.phoneCode === undefined ? "+383" : product.productData.phoneCode,
              phone: phone !== "" ? phone : product.productData.phone === undefined ? "" : product.productData.phone,
              city: city !== "" ? city : product.productData.city === undefined ? "" : product.productData.city,
              address: address !== "" ? address : product?.productData?.address === undefined ? "" : product?.productData?.address,
              country: country !== "" ? country : product?.productData?.country === undefined ? "" : product?.productData?.country,
            }
          })
        }
      }

      setLoading(false)
    }
  }, [account])

  const onLoad = !isHold ? {} : DisabledDefaultState

  return (
    <Normal>
      {
        (loading || account.Loading || isHold) && 
        <div className='fixed select-none z-[99999999999999999] flex items-center overflow-hidden justify-center w-screen h-screen top-0 right-0 bottom-0 left-0 bg-[#ffffff75]'>
          <Loading loading={true} withContainer={false} />
        </div>
      }

      <div className="mx-auto max-w-7xl px-4 sm:px-6 overflow-x-hidden">
          <div className="md:auto md:grid-cols-3 md:gap-6 mt-12 mb-16">
            <div className="mt-5 md:col-span-2 md:mt-0">
              <div style={onLoad} className="sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 p-2">
                  <Header product={product} mode="create" />

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

                  <div className="grid lg:grid-cols-9 xl:grid-cols-9 2x:grid-cols-9 md:grid-cols-2 sm:grid-cols-2 gap-3">
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

                    <Phone
                      product={product}
                      onInput={onInput}
                      validation={validation}
                    />

                    <Country
                      product={product}
                      onInput={onInput}
                      validation={validation}
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
                    mode="create"
                    product={product}
                    setProduct={setProduct}
                    validation={validation}
                    loadingImage={loadingImage}
                    setLoadingImage={setLoadingImage}
                  />
                </div>

                <Buttons
                  mode="create"
                  product={product}
                  onInput={onInput}
                  isHold={isHold}
                  isLoading={loading}
                  account={account}
                  setValidation={setValidation}
                  setIsHold={setIsHold}
                  loadingImage={loadingImage}
                />
              </div>
            </div>
          </div>
      </div>
    </Normal>
  )
}
