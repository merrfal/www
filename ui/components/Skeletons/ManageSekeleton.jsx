import { HeaderSkeleton } from "..";
import { SkeletonIcon } from "../../icons";

export default function Manage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="md:auto md:grid-cols-3 md:gap-6 mt-12 mb-16">
        <div className="mt-5 md:col-span-2 md:mt-0">
          <div className="sm:overflow-hidden sm:rounded-md">
            <div className="space-y-6 p-2">
              <HeaderSkeleton />

              <div className="h-12 bg-gray-200 rounded-[8px] w-full mb-5" />
              <div className="h-12 bg-gray-200 rounded-[8px] w-full mb-5" />
              <div className="h-12 bg-gray-200 rounded-[8px] w-full mb-5" />

              <div className="grid grid-cols-2 gap-6">
                <div className="h-12 bg-gray-200 rounded-[8px] w-full mb-5" />
                <div className="h-12 bg-gray-200 rounded-[8px] w-full mb-5" />

                <div className="h-12 bg-gray-200 rounded-[8px] w-full mb-5" />
                <div className="h-12 bg-gray-200 rounded-[8px] w-full mb-5" />

                <div className="h-12 bg-gray-200 rounded-[8px] w-full mb-5" />
                <div className="h-12 bg-gray-200 rounded-[8px] w-full mb-5" />
              </div>

              {/* <Images
                  product={product}
                  onUpload={onUpload}
                  validation={validation}
                  mode={mode}
                /> */}
              <div className="grid grid-cols-4 gap-6">
                <div className="flex items-center justify-center w-full h-48 bg-gray-200 rounded-[8px]">
                  <SkeletonIcon />
                </div>
                <div className="flex items-center justify-center w-full h-48 bg-gray-200 rounded-[8px]">
                  <SkeletonIcon />
                </div>
                <div className="flex items-center justify-center w-full h-48 bg-gray-200 rounded-[8px]">
                  <SkeletonIcon />
                </div>
                <div className="flex items-center justify-center w-full h-48 bg-gray-200 rounded-[8px]">
                  <SkeletonIcon />
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-200 rounded-[8px] mb-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
