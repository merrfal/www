import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="mt-0 sm:mt-8 md:mt-10 lg:mt-10 xl:mt-12 2xl:mt-12">
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img className="h-full w-full object-cover" src="/assets/happiness.png" alt="Dikush duke dhuruar dicka" />
                <div className="absolute inset-0 bg-[#00000060] mix-blend-multiply"></div>
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white text-center">
                    Dhuro se nuk pakësohet.
                  </span>
                </h1>
                <p className="mt-4 max-w-lg mx-auto text-center text-[19px] text-white sm:max-w-3xl">
                  Një platformë që mundëson të dhuroni gjëra për njerëzit që
                  kanë nevoja për ato produkte, përdorimi është falas si
                  produktet që dhurohen.
                </p>
                <div className="mt-8 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <Link href="/postimet/shto">
                      <button href="/postimet/shto" className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-[#33333] bg-white hover:bg-indigo-50 sm:px-8 hover:cursor:pointer transition-all">
                        Dhuro
                      </button>
                    </Link>

                    <Link href="/produktet">
                      <button href="/produktet" className="flex items-center justify-center px-4 py-3 border border-white text-base font-medium rounded-md shadow-sm text-white bg-opacity-60 hover:bg-opacity-70 sm:px-8 hover:cursor:pointer hover:bg-[#ffffff05] transition-all">
                        Shfleto
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
