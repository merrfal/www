import ReactImageUploading from "react-images-uploading"

import { useDispatch } from "react-redux"
import { ImagesValidation } from "../../../utils/Forms"
import { CloseIcon, PhotoIcon } from "../../icons"
import { Info } from "./"
import { Translation } from "../../../utils/Translations"
import { AllowedImageTypes } from "../../../configs/Defaults"
import { onUpload } from "../../../utils/ProductManipulation"
import { Loading, RequiredLabel, Wildcard } from "../../components"

export default function Images({
  setProduct,
  validation: v,
  product,
  loadingImage: loading,
  setLoadingImage: setLoading
}) {
  const validation = ImagesValidation(product?.productData?.gallery)
  const dispatch = useDispatch()

  const onRemove = (event, index) => {
    event.stopPropagation()

    const isMainProduct = product?.productData?.gallery[index]?.isMain

    if (isMainProduct) {
      setProduct(prevProduct => {
        const product_cloned = structuredClone(prevProduct)
        const gallery = product_cloned?.productData?.gallery
    
        gallery.splice(index, 1)
    
        if (gallery.length > 0) {
          gallery[gallery.length - 1].isMain = true
        }
    
        return {
          ...prevProduct,
          productData: {
            ...product_cloned.productData,
            gallery
          }
        }
      })
    }

    else {
      setProduct(prevProduct => {
        const product_cloned = structuredClone(prevProduct)
        const gallery = product_cloned?.productData?.gallery
    
        gallery.splice(index, 1)
    
        return {
          ...prevProduct,
          productData: {
            ...product_cloned.productData,
            gallery
          }
        }
      })
    }
  }

  const onSelectedMainImage = (index) => {
    const product_cloned = structuredClone(product)
    const gallery = product_cloned?.productData?.gallery

    gallery.forEach((image, i) => {
      if (i !== index) image.isMain = false
      else image.isMain = true
    })

    setProduct({ 
      ...product, 
      productData: { 
        ...product_cloned.productData, 
        gallery 
      } 
    })
  }
  
  return (
    <div className='relative'>
      {
        loading &&
        <div className='absolute z-[99999999999999999] flex items-center justify-center w-full h-full top-0 right-0 bottom-0 left-0 bg-[#ffffff75]'>
          <Loading loading={true} withContainer={false} />
        </div>
      }

      <label className="block text-sm font-medium text-gray-700">
        {Translation("photos-of-the-product")}<Wildcard />{" "}
      </label>

      <ReactImageUploading
        multiple
        value={product?.productData?.gallery}
        onChange={(imageList) => onUpload(product, setProduct, imageList, setLoading, dispatch)}
        maxNumber={999}
        maxFileSize={999999999999}
        dataURLKey="data_url"
        acceptType={AllowedImageTypes}
      >
        {({
          imageList,
          onImageUpload,
          isDragging,
          dragProps,
        }) => (
          <div>
            <div className="flex flex-wrap mb-2 w-full overflow-x-hidden">
              <div
                {...dragProps}
                style={isDragging ? { borderColor: "#377DFF" } : null}
                onClick={product?.productData?.gallery && product?.productData?.gallery.length !== 0 ? null : onImageUpload}
                className={product?.productData?.gallery && product?.productData?.gallery.length === 0 ? "mt-1 w-full flex justify-center rounded-md border-2 border-dashed border-gray-200 pt-10 pb-14" : "mt-1 w-full flex justify-center rounded-md border-2 border-dashed border-gray-200 p-4 cursor-pointer"}
              >
                <div className={`${product?.productData?.gallery?.length === 0 ? 'w-full flex items-center justify-center text-center' : ' w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}`}>
                  {product?.productData?.gallery.length !== 0 && imageList.map((image, index) => {
                      const img = product?.productData?.gallery.find((item) => item.data_url === image.data_url)

                      return (
                        <div 
                          key={image.id}
                          className={`flex overflow-hidden items-center relative rounded-xl w-full min-h-[60vh] max-h-[60vh] h-[60vh] lg:h-[45vh] lg:min-h-[45vh] lg:max-h-[45vh] ${img.isMain ? 'border-4 border-[#477DFF] cursor-default' : 'border-4 border-gray-200 cursor-pointer'}`} 
                          onClick={() => onSelectedMainImage(index)}
                        >
                          { 
                            img.isMain &&
                            <div className='bg-[#377DFF] text-white rounded-br-xl absolute top-0 left-0 py-0.5 px-3 text-[13px]'>
                              Fotoja Kryesore
                            </div>
                          }

                          <img 
                            onDragStart={(e) => e.preventDefault()}
                            src={image.data_url} 
                            loading="lazy"
                            className="w-full h-full object-cover align-middle rounded-md"
                          />

                          <div className="flex w-full p-1 justify-center bg-[#faf9f999] absolute bottom-0">
                            <p className="text-gray-700 text-[13px]">
                              {image?.file?.name?.length > 20 ? image?.file?.name?.slice(0, 20) + "..." : image?.file?.name}
                            </p>
                          </div>

                          <div onClick={(event) => onRemove(event, index)} className="absolute flex right-1.5 top-1.5 flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0">
                            <button className="inline-flex justify-center px-1 py-1 border border-gray-200 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none transition-all">
                              <CloseIcon className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      )
                  })}

                  {product?.productData?.gallery.length === 0 && <EmptyGallery />}

                  {product?.productData?.gallery.length !== 0 && product?.productData?.gallery.length < 4 && (
                    <div onClick={onImageUpload} className="flex items-center justify-center border border-gray-200 w-full min-h-[60vh] max-h-[60vh] h-[60vh] lg:h-[45vh] lg:min-h-[45vh] lg:max-h-[45vh] object-cover rounded-md right-1.5 top-1.5 flex-col space-y-3 sm:flex-row sm:space-y-0">
                      <div className="flex flex-col justify-center items-center">
                        <PhotoIcon />
                        <Info half={true} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </ReactImageUploading>

      {v.gallery && validation.error && <RequiredLabel message={validation.message} />}
    </div>
  )
}

const EmptyGallery = () => {
  return (
    <div className="flex flex-col">
      <PhotoIcon />
      <Info />
    </div>
  )
}