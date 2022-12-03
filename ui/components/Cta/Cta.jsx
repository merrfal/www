import Link from "next/link";

export default function Cta() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto pb-16 mt-[-4rem] px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Dëshironi të dhuroni?</span>
          <span className="block bg-[#377DFF] from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Bëje, sepse nuk bëhesh i varfër duke dhënë.
          </span>
        </h2>
        <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
          <Link href="/postimet/shto">
            <button className="flex items-center justify-center bg-[#377DFF] from-purple-600 to-indigo-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700">
              Dhuroni Diçka
            </button>
          </Link>

          <Link href="/produktet">
            <button className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-[#377DFF] bg-indigo-50 hover:bg-indigo-100">
              Shfleto Produktet
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
