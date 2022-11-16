import { Normal } from '../../layouts';
import Link from "next/link";

export default function About() {
  return (
    <Normal>

<div className="isolate bg-white">
      {/* <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
       */}
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-5 pb-16 sm:pt-12 sm:pb-10">
            <div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                    Merr Fal vendi ku ndihma jote i jep shpresë dikujt që është më i pafat se ty!
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                  Me këtë platformë ju mund ti ndihmoni të gjith njerëzit në nevojë kudo që ndodhen.
                  Kjo platformë mundëson dhurimin e mjeteve të ndryshme të cilat ju mund ti dërgoni tek ata të cilët kan nevojë.
                  Misioni ynë është që të ju gjindemi afër të gjithë njerëzve në nevojë duke ju ofruar ndihmë me anë të platformës sonë.
                  Të kthejmë lotët e dëshpërimit në lot gëzimi!
                  Faleminderit dhe Zoti ju bekoftë ju dhe familjet tuaja!
                </p>
              </div>
              {/* <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div> */}
            </div>
          </div>
        </div>
      </main>
    </div>







    <div class='bg-white'>
      <div className='mt-12'>
        <div class='relative'>
          <div class='absolute inset-x-0 bottom-0 h-1/2'></div>
          <div class='max-w-7xl mx-auto sm:px-6 lg:px-8'>
            <div class='relative shadow-xl sm:rounded-2xl sm:overflow-hidden'>
              <div class='absolute inset-0'>
                <img
                  class='h-full w-full object-cover'
                  src='/assets/Prizren1.jpg'
                  alt='Dikush duke dhuruar dicka'
                />
                <div class='absolute inset-0 bg-[#377DFF] mix-blend-multiply'></div>
              </div>
              <div class='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
                <h1 class='text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
                  <span class='block text-white text-center'>
                  Ne jemi këtu për të ndihmuar njerëzit të ndihmojnë njëri-tjetrin
                  </span>
                </h1>
                <p class='mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl'>
                Merr Fal është një platformë për mbledhjen e gjërave të ndryshme të fuqizuara 
                nga komuniteti. Ne besojmë se ndihma është e fuqishme, prandaj jemi të përkushtuar 
                ta bëjmë të sigurt dhe të lehtë për këdo që të japë dhe të marrë ndihmë.
                </p>
                <div class='mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center'>
                  <div class='space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5'>
                    <Link href='/posts/add'>
                      <a
                        href='/posts/add'
                        class='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-[#377DFF] bg-white hover:bg-indigo-50 sm:px-8'>
                        Jep Fal
                      </a>
                    </Link>

                    <Link href='/produktet'>
                      <a
                        href='/produktet'
                        class='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#377DFF35] bg-opacity-60 hover:bg-opacity-70 sm:px-8'>
                        Merr Fal
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





   </Normal>
  );
}




// Ne jemi këtu për të ndihmuar njerëzit të ndihmojnë njëri-tjetrin GoFundMe është një platformë për mbledhjen e fondeve të fuqizuara nga komuniteti. Ne besojmë se ndihma është e fuqishme, prandaj jemi të përkushtuar ta bëjmë të sigurt dhe të lehtë për këdo që të japë dhe të marrë ndihmë.