import { SkeletonIcon } from "../../icons";

export default function Skeleton() {
  return ["1", "2", "3", "4", "5", "6", "7", "8"].map((i) => {
        return (
          <div key={i} className="group relative pointer-events-none opacity-75 mb-8">
            <div className="animate-pulse w-full">
              <div className="flex items-center justify-center w-full h-[240px] mt-0 md:h-[360px] mb-4 bg-gray-100 rounded-[6px]">
                <SkeletonIcon />
              </div>
              <div className="h-2.5 bg-gray-100 -mt-1 rounded-full w-full mb-2.5" />
              <div className="h-4 bg-gray-100 -mt-1 rounded-full w-full" />
            </div>
          </div>
        );
      }
  );
}
