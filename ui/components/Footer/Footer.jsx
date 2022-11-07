import Link from 'next/link';

export default function Footer() {
  return (
    <footer aria-labelledby='footer-heading' class='bg-white mb-8'>
      <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div class='border-t border-gray-200 py-20'>
          <div class='grid grid-cols-1 md:grid-cols-12 md:grid-flow-col md:gap-x-8 md:gap-y-16 md:auto-rows-min'>
            <div class='col-span-1 md:col-span-2 lg:row-start-1 lg:col-start-1'>
              <svg
                class='h-8 w-auto'
                width='95'
                height='65'
                viewBox='0 0 95 65'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M34.5498 17.2749L32.4393 18.563C29.1931 20.5442 27.57 21.5349 26.1237 22.7354C24.892 23.7577 23.7577 24.892 22.7354 26.1237C21.5349 27.57 20.5442 29.1931 18.563 32.4393L17.2749 34.5498L15.9868 32.4392C14.0055 29.1931 13.0149 27.57 11.8144 26.1237C10.792 24.892 9.65776 23.7577 8.42611 22.7354C6.9798 21.5349 5.35671 20.5442 2.11058 18.563L0 17.2749L2.11054 15.9868C5.3567 14.0055 6.97979 13.0149 8.42611 11.8144C9.65776 10.792 10.792 9.65775 11.8144 8.4261C13.0149 6.97978 14.0055 5.35669 15.9868 2.1105L17.2749 -7.62939e-06L18.563 2.1105C20.5442 5.35667 21.5349 6.97979 22.7354 8.4261C23.7577 9.65775 24.892 10.792 26.1237 11.8144C27.57 13.0149 29.1931 14.0055 32.4393 15.9868L34.5498 17.2749Z'
                  fill='#377DFF'
                />
                <path
                  d='M13.6158 56.6041L18.7225 59.4925C37.2542 69.9744 60.9833 63.0549 71.8997 44.5155C75.512 38.3809 77.3088 31.6855 77.4181 25.0822L77.489 20.9318L85.7175 29.1604L94.0146 20.8633L76.0075 2.85614C73.7163 0.564953 70.0015 0.564953 67.7104 2.85614L49.2125 21.354L57.5096 29.6511L65.7451 21.4156L65.6859 24.8856C65.6102 29.4842 64.361 34.193 61.7885 38.5617C53.9539 51.8672 37.1794 56.4513 24.4994 49.2792L19.3927 46.3908L13.6158 56.6041Z'
                  fill='#377DFF'
                />
              </svg>
            </div>

            <div class='mt-10 col-span-6 grid grid-cols-2 gap-8 sm:grid-cols-3 md:mt-0 md:row-start-1 md:col-start-3 md:col-span-8 lg:col-start-2 lg:col-span-6'>
              <div class='grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8'>
                <div>
                  <h3 class='text-sm font-medium text-gray-900'>Kategoritë</h3>
                  <ul role='list' class='mt-6 space-y-6'>
                    <li class='text-sm'>
                      <a href='#' class='text-gray-500 hover:text-gray-600'>
                        Makina
                      </a>
                    </li>

                    <li class='text-sm'>
                      <a href='#' class='text-gray-500 hover:text-gray-600'>
                        Vendbanime
                      </a>
                    </li>

                    <li class='text-sm'>
                      <a href='#' class='text-gray-500 hover:text-gray-600'>
                        Shtepi dhe familje
                      </a>
                    </li>

                    <li class='text-sm'>
                      <a href='#' class='text-gray-500 hover:text-gray-600'>
                        Elektronika
                      </a>
                    </li>

                    <li class='text-sm'>
                      <a href='#' class='text-gray-500 hover:text-gray-600'>
                        Sport dhe rekracion
                      </a>
                    </li>

                    <li class='text-sm'>
                      <a href='#' class='text-gray-500 hover:text-gray-600'>
                        Biznes dhe pune
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class='text-sm font-medium text-gray-900'>Më Shumë</h3>
                  <ul role='list' class='mt-6 space-y-6'>
                    <li class='text-sm'>
                      <a href='#' class='text-gray-500 hover:text-gray-600'>
                        Rreth Nesh
                      </a>
                    </li>

                    <li class='text-sm'>
                      <a href='#' class='text-gray-500 hover:text-gray-600'>
                        Kontribo
                      </a>
                    </li>

                    <li class='text-sm'>
                      <a href='#' class='text-gray-500 hover:text-gray-600'>
                        Kushtet e Shërbimit
                      </a>
                    </li>

                    <li class='text-sm'>
                      <a href='#' class='text-gray-500 hover:text-gray-600'>
                        Politika e privatësisë
                      </a>
                    </li>

                    <li class='text-sm'>
                      <a href='#' class='text-gray-500 hover:text-gray-600'>
                        Na Kontaktoni
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 class='text-sm font-medium text-gray-900'>
                  Produktet Tjera
                </h3>
                <ul role='list' class='mt-6 space-y-6'>
                  <li class='text-sm'>
                    <a href='#' class='text-gray-500 hover:text-gray-600'>
                      Ummah
                    </a>
                  </li>

                  <li class='text-sm'>
                    <a href='#' class='text-gray-500 hover:text-gray-600'>
                      Muslim Tab
                    </a>
                  </li>

                  <li class='text-sm'>
                    <a href='#' class='text-gray-500 hover:text-gray-600'>
                      Muslimani Ideal
                    </a>
                  </li>

                  <li class='text-sm'>
                    <a href='#' class='text-gray-500 hover:text-gray-600'>
                      Fappa
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class='mt-12 md:mt-0 md:row-start-2 md:col-start-3 md:col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4'>
              <h3 class='text-sm font-medium text-gray-900'>
                Regjistrohu për lajmet e rreja
              </h3>
              <p class='mt-6 text-sm text-gray-500'>
                Merni njoftime të ndryshime për platformen e tjera...
              </p>
              <form class='mt-2 flex sm:max-w-md'>
                <label for='email-address' class='sr-only'>
                  Adresa elektronike
                </label>
                <input
                  id='email-address'
                  type='text'
                  autocomplete='email'
                  required
                  class='appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                />
                <div class='ml-4 flex-shrink-0'>
                  <button
                    type='submit'
                    class='w-full bg-[#377DFF] border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Abonohu
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <p class='text-sm text-gray-500'>
          &copy; 2022 Merr Fal. Të gjitha të drejtat e rezervuara.
        </p>
      </div>
    </footer>
  );
}
