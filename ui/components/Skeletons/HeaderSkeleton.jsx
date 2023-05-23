export default function SkeletonHeader() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div role="status" className="max-w-sm animate-pulse">
        <div className="h-8 bg-gray-200 rounded-full w-52 mb-5"></div>
        <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2"></div>
        <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2"></div>
      </div>
    </div>
  );
}
