import ReactImageUploading from "react-images-uploading";

export default function Images({ product: { images }, onUpload }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Fotot e Produktit
      </label>
      <ReactImageUploading
        multiple
        value={images}
        onChange={onUpload}
        maxNumber={69}
        dataURLKey="data_url"
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
              {imageList.map((image, index) => (
                <div key={index} className="w-6/12 sm:w-4/12 p-4">
                  <div className="flex mt-5">
                    <img
                      src={image.data_url}
                      width="250"
                      className="shadow-lg rounded max-w-full h-auto align-middle border-none"
                    />
                    <div>
                      <button
                        style={{
                          position: "relative",
                          background: "white",
                          bottom: "5px",
                          right: "8px",
                        }}
                        className="h-15 w-15 rounded-full ring-4 ring-white sm:h-4 sm:w-4"
                        onClick={(e) => {
                          onImageRemove(index);
                          e.preventDefault();
                        }}
                      >
                        <CloseIcon />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {images.length > 4 ? null : (
              <div
                style={isDragging ? { color: "red" } : null}
                onClick={onImageUpload}
                {...dragProps}
                className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"
              >
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer rounded-md bg-white font-medium text-[#377DFF] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#377DFF] focus-within:ring-offset-2 hover:text-[#377DFF]">
                      <span className="text-[#377DFF]">
                        Ngarko një Fotografi
                      </span>
                    </label>
                    <p className="pl-1">ose tërhiqe një këtu.</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, që nuk tejkalon madhësinë e 3MB
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </ReactImageUploading>
    </div>
  );
}
