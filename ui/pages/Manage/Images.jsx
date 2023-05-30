import ReactImageUploading from "react-images-uploading";

import { ImagesValidation } from "../../../utils/Forms";
import { CloseIcon, PhotoIcon } from "../../icons";
import { Info } from "./";
import { Translation } from "../../../utils/Translations";
import { AllowedImageTypes, DisabledDefaultState } from "../../../configs/Defaults";
import { onUpload } from "../../../utils/ProductManipulation";
import { RequiredLabel, Wildcard } from "../../components";

export default function Images({
  setProduct,
  validation: v,
  mode,
  product
}) {
  const validation = ImagesValidation(product?.productData?.gallery);

  const onMode = mode === "create" ? {} :DisabledDefaultState;

  const onRemove = (event, onImageRemove, index) => {
    event.stopPropagation();
    onImageRemove(index);
  }

  return (
    <div style={onMode}>
      <label className="block text-sm font-medium text-gray-700">
        {Translation("photos-of-the-product")}<Wildcard />{" "}
        {mode === "edit" && `(${Translation("change-is-not-allowd-for-the-moment")})`}
      </label>

      <ReactImageUploading
        multiple
        value={product?.productData?.gallery}
        onChange={(imageList) => onUpload(product, setProduct, imageList)}
        maxNumber={4}
        maxFileSize={10000000}
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
                className={product?.productData?.gallery && product?.productData?.gallery.length === 0 ? "mt-1 w-full flex justify-center rounded-md border-2 border-dashed border-gray-200 pt-10 pb-14" : "mt-1 w-full flex justify-center rounded-md border-2 border-dashed border-gray-200 p-8"}
              >
                <div className="text-center flex items-center flex-row space-x-4">
                  {product?.productData?.gallery.length !== 0 &&
                    imageList.map((image, index) => {
                      if (mode === "create")
                        return (
                          <div className="flex items-center relative border border-gray-200 rounded-md" key={index}>
                            <img src={image.data_url} className="w-[265px] h-[40vh] object-cover max-w-full align-middle rounded-md"/>

                            <div className="flex w-full p-1 justify-center bg-[#faf9f999] absolute bottom-0">
                              <p className="text-gray-700 text-[13px]">
                                {image?.file?.name?.length > 20 ? image?.file?.name?.slice(0, 20) + "..." : image?.file?.name}
                              </p>
                            </div>

                            <div onClick={(event) => onRemove(event, onImageRemove, index)} className="absolute flex right-1.5 top-1.5 flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                              <button className="inline-flex justify-center px-1 py-1 border border-gray-200 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none transition-all">
                                <CloseIcon className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        );

                      if (mode === "edit")
                        return (
                          <div key={index} className="flex items-center relative border border-gray-200 rounded-md">
                            <img src={image.url} className="w-[265px] h-[40vh] object-cover max-w-full align-middle rounded-md"/>
                            
                            <div className="flex w-full p-1 justify-center bg-[#faf9f999] absolute bottom-0">
                              <p className="text-gray-700 text-[13px]">
                                {image?.filename?.length > 20 ? image?.filename?.slice(0, 20) + "..." : image?.filename}
                              </p>
                            </div>

                            <div className="absolute flex right-1.5 top-1.5 flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4" onClick={(event) => onRemove(event, onImageRemove, index)}>
                              <button className="inline-flex justify-center px-1 py-1 border border-gray-200 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none transition-all">
                                <CloseIcon className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        );
                    })}

                  {product?.productData?.gallery.length === 0 && <EmptyGallery />}

                  {product?.productData?.gallery.length !== 0 && product?.productData?.gallery.length < 4 && (
                    <div onClick={onImageUpload} className="flex items-center justify-center border border-gray-200  w-[265px] h-[40vh] object-cover max-w-full align-middle rounded-md right-1.5 top-1.5 flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
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
  );
}


const EmptyGallery = () => {
  return (
    <div className="flex flex-col">
      <PhotoIcon />
      <Info />
    </div>
  )
}