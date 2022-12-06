import Link from "next/link";

export default function Hero() {
  return (
    <div className='bg-white'>
      <div className='mt-12'>
        <div className='relative'>
          <div className='absolute inset-x-0 bottom-0 h-1/2'></div>
          <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
            <div className='relative shadow-xl sm:rounded-2xl sm:overflow-hidden'>
              <div className='absolute inset-0'>
                <img
                  className='h-full w-full object-cover'
                  src='/assets/happiness.png'
                  alt='Dikush duke dhuruar dicka'
                />
                <div className='absolute inset-0 bg-[#377DFF] mix-blend-multiply'></div>
              </div>
              <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
                <h1 className='text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
                  <span className='block text-white text-center'>
                    Dhuro se nuk pakësohet.
                  </span>
                </h1>
                  Merr Fal është projekt vullnetarë për shqipëfolësit me qëllim
                <p class='mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl'>
                  Merr Fal është projekt vullnetar për shqipfolësit me qëllim
                  mbështetjeje të njëri tjetrit me anë të dhurimit të gjërave të
                  ndryshme që nuk përodrim ose thjesht që duam t'i ndajmë me të
                  tjerët.
                </p>
                <div className='mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center'>
                  <div className='space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5'>
                    <Link href='/postimet/shto'>
                      <a
                        href='/postimet/shto'
                        className='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-[#377DFF] bg-white hover:bg-indigo-50 sm:px-8'>
                        Dhuro Diçka
                      </a>
                    </Link>

                    <Link href='/produktet'>
                      <a
                        href='/produktet'
                        className='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#377DFF35] bg-opacity-60 hover:bg-opacity-70 sm:px-8'>
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
