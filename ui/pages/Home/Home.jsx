import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PagesList, UserGoogle} from '../../../controllers/front';
import { Normal } from '../../layouts';

import Link from 'next/link';

export default function Home() {
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pages);

  useEffect(() => { if (pages.Loaded === false) PagesList(dispatch)}, [pages]);

  return (
    <Normal>
      <div className='relative overflow-hidden bg-white'>
        <div className='pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48'>
          <div className='relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8'>
            <div className='sm:max-w-lg'>
              <h1 className='font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                Dhuro sepse asnjëhere nuk është pakësuar.
              </h1>
              <p className='mt-4 text-xl text-gray-500'>
                Kush do t’i japë Allahut një hua të bukur, që Ai t’ia kthejë
                shpërblimin shumëfish? Allahu e shtrëngon (riskun) dhe e liron;
                tek Ai do të ktheheni. [2:245]
              </p>
            </div>
            <div>
              <div className='mt-10'>
                <div
                  aria-hidden='true'
                  className='Sointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl'>
                  <div className='absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8'>
                    <div className='flex items-center space-x-6 lg:space-x-8'>
                      <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
                        <div className='h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100'>
                          <img
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg'
                            alt=''
                            className='h-full w-full object-cover object-center'
                          />
                        </div>
                        <div className='h-64 w-44 overflow-hidden rounded-lg'>
                          <img
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg'
                            alt=''
                            className='h-full w-full object-cover object-center'
                          />
                        </div>
                      </div>
                      <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
                        <div className='h-64 w-44 overflow-hidden rounded-lg'>
                          <img
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg'
                            alt=''
                            className='h-full w-full object-cover object-center'
                          />
                        </div>
                        <div className='h-64 w-44 overflow-hidden rounded-lg'>
                          <img
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg'
                            alt=''
                            className='h-full w-full object-cover object-center'
                          />
                        </div>
                        <div className='h-64 w-44 overflow-hidden rounded-lg'>
                          <img
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg'
                            alt=''
                            className='h-full w-full object-cover object-center'
                          />
                        </div>
                      </div>
                      <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
                        <div className='h-64 w-44 overflow-hidden rounded-lg'>
                          <img
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg'
                            alt=''
                            className='h-full w-full object-cover object-center'
                          />
                        </div>
                        <div className='h-64 w-44 overflow-hidden rounded-lg'>
                          <img
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg'
                            alt=''
                            className='h-full w-full object-cover object-center'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href='/produktet'>
                  <a
                    href='#'
                    className='inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700'>
                    Shfleto Produktet
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class='bg-white'>
        <div class='mx-auto max-w-2xl py-2 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div style={{ marginBottom: '1.25em' }}>
            <h3 class='text-2xl font-bold leading-6 text-gray-900 mb-2'>
              Produktet e fundit
            </h3>
            <p class='mt-1 max-w-2xl text-l text-gray-500'>
              Këtu janë renditur produktet e fundit të listuar.
            </p>
          </div>

          <div class='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
            {pages.Loaded === false
              ? 'loading...'
              : pages.Pages.map((page, index) => (
                  <Link href={`/landings/${page.Slug}`} key={index}>
                    <a href='#' class='group'>
                      <div class='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
                        <img
                          src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg'
                          alt='Tall slender porcelain bottle with natural clay textured body and cork stopper.'
                          class='h-full w-full object-cover object-center group-hover:opacity-75'
                        />
                      </div>
                      {/* <h3 class='mt-4 text-sm text-gray-700'>
                        {page.Upvotes.length} Likes | {page.Upvotes.length}{' '}
                        Views
                      </h3> */}
                      <h3 class='mt-4 text-sm text-gray-700'>Earthen Bottle</h3>
                      <p class='mt-1 text-lg font-medium text-gray-900'>
                        {page.Name}
                      </p>
                    </a>
                  </Link>
                ))}
          </div>
        </div>
      </div>
    </Normal>
  );
}
