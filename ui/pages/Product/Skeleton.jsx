import { SkeletonIcon } from "../../icons";

export default function Skeleton() {
  return (
    <div className="bg-white mb-16">
      <main className="max-w-7xl mx-auto sm:pt-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            <div className="flex flex-col-reverse">
              <div className="flex flex-row w-full" />
              <div className="hidden mt-4 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                <div className="grid grid-cols-4 gap-4">
                  {["1", "2", "3", "4"].map((index) => {
                    return (
                      <div key={index} className="flex items-center justify-center w-full h-24 bg-gray-200 rounded-[8px]">
                        <SkeletonIcon />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center justify-center h-[50vh] w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-[12px]">
                <SkeletonIcon />
              </div>
            </div>

            <div className="mt-10 ml-3 px-4 sm:px-0 sm:mt-16 lg:mt-0 flex flex-col">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="h-3.5 bg-gray-200 rounded-full mb-2.5 flex justify-start" />
                <div className="h-3.5 bg-gray-200 rounded-full mb-2.5 flex justify-start" />
                <div className="h-3.5 bg-gray-200 rounded-full mb-2.5 flex justify-start" />
              </div>

              <div className="flex items-center mb-8 flex-col">
                <div className="w-full">
                  <div className="h-8 bg-gray-200 rounded-full w-[70%] mb-4" />
                  <div className="h-2 bg-gray-200 rounded-full max-w-[480px] mb-2.5" />
                  <div className="h-2 bg-gray-200 rounded-full mb-2.5" />
                  <div className="h-2 bg-gray-200 rounded-full max-w-[440px] mb-2.5" />
                  <div className="h-2 bg-gray-200 rounded-full max-w-[460px] mb-2.5" />
                  <div className="h-2 bg-gray-200 rounded-full max-w-[360px]" />
                </div>
              </div>

              <div className="flex">
                <div className="h-2 bg-gray-200 rounded-full max-w-[20%] mb-2.5 mt-8" />
                <div>
                  <div className="bg-gray-200 rounded-full w-12 h-12" />
                </div>
                <div className="h-2 bg-gray-200 rounded-full max-w-[10%] mb-2.5" />
                <div className="h-2 bg-gray-200 rounded-full max-w-[15%]" />
              </div>

              <div className="h-2 bg-gray-200 rounded-full max-w-[20%] mb-2.5 mt-8" />

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="flex items-center justify-center w-full h-24 bg-gray-200 rounded-[8px] mb-4">
                    <SkeletonIcon />
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full mb-2" />
                  <div className="h-2 bg-gray-200 rounded-full mb-2" />
                  <div className="h-2 bg-gray-200 rounded-full" />
                </div>

                <div>
                  <div className="flex items-center justify-center w-full h-24 bg-gray-200 rounded-[8px] mb-4">
                    <SkeletonIcon />
                  </div>

                  <div className="h-3 bg-gray-200 rounded-full mb-2" />
                  <div className="h-2 bg-gray-200 rounded-full mb-2" />
                  <div className="h-2 bg-gray-200 rounded-full" />
                </div>

                <div>
                  <div className="flex items-center justify-center w-full h-24 bg-gray-200 rounded-[8px] mb-4">
                    <SkeletonIcon />
                  </div>

                  <div className="h-3 bg-gray-200 rounded-full mb-2" />
                  <div className="h-2 bg-gray-200 rounded-full mb-2" />
                  <div className="h-2 bg-gray-200 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
