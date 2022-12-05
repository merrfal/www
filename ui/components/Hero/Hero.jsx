import Link from "next/link";

export default function Hero() {
  return (
    <div class='bg-white'>
      <div className='mt-12'>
        <div class='relative'>
          <div class='absolute inset-x-0 bottom-0 h-1/2'></div>
          <div class='max-w-7xl mx-auto sm:px-6 lg:px-8'>
            <div class='relative shadow-xl sm:rounded-2xl sm:overflow-hidden'>
              <div class='absolute inset-0'>
                <img
                  class='h-full w-full object-cover'
                  src='/assets/happiness.png'
                  alt='Dikush duke dhuruar dicka'
                />
                <div class='absolute inset-0 bg-[#377DFF] mix-blend-multiply'></div>
              </div>
              <div class='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
                <h1 class='text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
                  <span class='block text-white text-center'>
                    Dhuro se nuk pakësohet.
                  </span>
                </h1>
                <p class='mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl'>
                  Merr Fal është projekt vullnetar për shqipfolësit me qëllim
                  mbështetjeje të njëri tjetrit me anë të dhurimit të gjërave të
                  ndryshme që nuk përodrim ose thjesht që duam t'i ndajmë me të
                  tjerët.
                </p>
                <div class='mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center'>
                  <div class='space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5'>
                    <Link href='/postimet/shto'>
                      <a
                        href='/postimet/shto'
                        class='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-[#377DFF] bg-white hover:bg-indigo-50 sm:px-8'>
                        Dhuro Diçka
                      </a>
                    </Link>

                    <Link href='/produktet'>
                      <a
                        href='/produktet'
                        class='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#377DFF35] bg-opacity-60 hover:bg-opacity-70 sm:px-8'>
                        Shfleto Produktet
                      </a>
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
