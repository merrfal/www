import ReactImageUploading from "react-images-uploading"

import { useState } from "react"
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
  setLoadingImage: setLoading,
}) {
  const validation = ImagesValidation(product?.productData?.gallery)
  const dispatch = useDispatch()

  const onRemove = (event, onImageRemove, index) => {
    event.stopPropagation()
    onImageRemove(index)
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
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div>
            <div className="flex flex-wrap mb-2">
              <div
                {...dragProps}
                style={isDragging ? { borderColor: "#377DFF" } : null}
                onClick={product?.productData?.gallery && product?.productData?.gallery.length !== 0 ? null : onImageUpload}
                className={product?.productData?.gallery && product?.productData?.gallery.length === 0 ? "mt-1 w-full flex justify-center rounded-md border-2 border-dashed border-gray-200 pt-10 pb-14 cursor-pointer" : "mt-1 w-full flex justify-center rounded-md border-2 border-dashed border-gray-200 p-8 cursor-pointer"}
              >
                <div className={`${product?.productData?.gallery?.length === 0 ? 'flex items-center justify-center text-center' : 'grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}`}>
                  {product?.productData?.gallery.length !== 0 && imageList.map((image, index) => {
                      return (
                        <div className="flex overflow-hidden items-center relative border border-gray-200 rounded-md w-[200px] md:w-[265px] 2xl:w-[300px] lg:h-[40vh] h-[20vh]" key={index}>
                          <img 
                            onDragStart={(e) => e.preventDefault()}
                            src={image.data_url} 
                            loading="lazy"
                            className="w-full object-cover h-full align-middle rounded-md"
                          />

                          <div className="flex w-full p-1 justify-center bg-[#faf9f999] absolute bottom-0">
                            <p className="text-gray-700 text-[13px]">
                              {image?.file?.name?.length > 20 ? image?.file?.name?.slice(0, 20) + "..." : image?.file?.name}
                            </p>
                          </div>

                          <div onClick={(event) => onRemove(event, onImageRemove, index)} className="absolute flex right-1.5 top-1.5 flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0">
                            <button className="inline-flex justify-center px-1 py-1 border border-gray-200 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none transition-all">
                              <CloseIcon className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      )
                  })}

                  {product?.productData?.gallery.length === 0 && <EmptyGallery />}

                  {product?.productData?.gallery.length !== 0 && product?.productData?.gallery.length < 4 && (
                    <div onClick={onImageUpload} className="flex items-center justify-center border border-gray-200 w-[265px] lg:h-[40vh] h-[20vh] object-cover rounded-md right-1.5 top-1.5 flex-col space-y-3 sm:flex-row sm:space-y-0">
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


// if (mode === "edit")
// return (
//   <div className="flex overflow-hidden items-center relative border border-gray-200 rounded-md w-[200px] md:w-[265px] 2xl:w-[300px] lg:h-[40vh] h-[20vh]" key={index}>
//     <img 
//       onDragStart={(e) => e.preventDefault()}
//       src={image.url} 
//       className="w-full object-cover h-full align-middle rounded-md"
//       loading="lazy"
//     />
    
//     <div className="flex w-full p-1 justify-center bg-[#faf9f999] absolute bottom-0">
//       <p className="text-gray-700 text-[13px]">
//         {image?.filename?.length > 20 ? image?.filename?.slice(0, 20) + "..." : image?.filename}
//       </p>
//     </div>

//     <div className="absolute flex right-1.5 top-1.5 flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0" onClick={(event) => onRemove(event, onImageRemove, index)}>
//       <button className="inline-flex justify-center px-1 py-1 border border-gray-200 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none transition-all">
//         <CloseIcon className="h-4 w-4" />
//       </button>
//     </div>
//   </div>
// )