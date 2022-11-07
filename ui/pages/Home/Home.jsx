import Link from 'next/link';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PagesList, CategoryList } from '../../../controllers/front';
import { Normal } from '../../layouts';
import { Product } from '../../components';

export default function Home() {
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pages);
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    if (pages.Loaded === false) PagesList(dispatch);
  }, [pages]);

  useEffect(() => {
    if (categories.Loaded === false) CategoryList(dispatch);
  }, [categories]);

  return (
    <Normal>
      <div class='bg-white'>
        <main>
          <div className='mt-12'>
            <div class='relative'>
              <div class='absolute inset-x-0 bottom-0 h-1/2'></div>
              <div class='max-w-7xl mx-auto sm:px-6 lg:px-8'>
                <div class='relative shadow-xl sm:rounded-2xl sm:overflow-hidden'>
                  <div class='absolute inset-0'>
                    <img
                      class='h-full w-full object-cover'
                      src='/assets/sadakah-box.jpg'
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
                      Merr Fal është projekt vullnetarë për shqipëfolësit me qëllim mbështetje të njëri tjetrit me anë të
                      dhurimit të gjërave të ndryshme që nuk përodrim ose thjesht qe duam ti ndajm me të tjerët.
                    </p>
                    <div class='mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center'>
                      <div class='space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5'>
                        <Link href="/posts/add">
                          <a
                            href='/posts/add'
                            class='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-[#377DFF] bg-white hover:bg-indigo-50 sm:px-8'>
                            Dhuro Diçka
                          </a>
                        </Link>

                        <Link href="/produktet">
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
        </main>
      </div>

      <div class='bg-white'>
        <div class='py-16 sm:py-24 xl:max-w-7xl xl:mx-auto xl:px-8'>
          <div class='px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0'>
            <h2 class='text-2xl font-extrabold tracking-tight text-gray-900'>
              Shfletoni Kategoritë
            </h2>
            <a
              href='#'
              class='hidden text-sm font-semibold text-[#377DFF] hover:text-[#377DFF70] sm:block'>
              Shfleto të gjitha Kategoritë<span aria-hidden='true'> &rarr;</span>
            </a>
          </div>

          <div class='mt-4 flow-root'>
            <div class='-my-2'>
              <div class='box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible'>
                <div class='absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8'>
                  {
                    categories.Loaded === false ? 'Loading categories' : 
                    categories.Categories.map((category, index) => {
                      return (
                        <a
                        key={index}
                    href='#'
                    class='relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto'>
                    <span aria-hidden='true' class='absolute inset-0'>
                      <img
                        src='https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg'
                        alt=''
                        class='w-full h-full object-center object-cover'
                      />
                    </span>
                    <span
                      aria-hidden='true'
                      class='absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50'></span>
                    <span class='relative mt-auto text-center text-xl font-bold text-white'>
                      {category.Name}
                    </span>
                  </a>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
          <div class='mt-6 px-4 sm:hidden'>
            <a
              href='#'
              class='block text-sm font-semibold text-indigo-600 hover:text-indigo-500'>
              Browse all categories<span aria-hidden='true'> &rarr;</span>
            </a>
          </div>
        </div>
      </div>

      <div class='bg-white'>
        <div class='max-w-2xl mt-[-4rem] mx-auto mb-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div class='px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0'>
            <h2 class='text-2xl font-extrabold tracking-tight text-gray-900'>
            Shfleto Produktet
            </h2>
            <a
              href='#'
              class='hidden text-sm font-semibold text-[#377DFF] hover:text-[#377DFF70] sm:block'>
              Shfleto të gjitha Produktet<span aria-hidden='true'> &rarr;</span>
            </a>
          </div>
          <div class='mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'>
          {pages.Loaded === false
              ? 'loading...'
              : pages.Pages.map((page, index) => <Product product={page} key={index} />)}
            <div>
              </div>
          </div>
        </div>
      </div>
      <div class='bg-white'>
        <div class='max-w-4xl mx-auto pb-16 mt-[-4rem] px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between'>
          <h2 class='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            <span class='block'>Dëshironi të dhuroni?</span>
            <span class='block bg-[#377DFF] from-purple-600 to-indigo-600 bg-clip-text text-transparent'>
              Bëje, sepse nuk bëhesh i varfër duke dhënë.
            </span>
          </h2>
          <div class='mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5'>
            <a
              href='#'
              class='flex items-center justify-center bg-[#377DFF] from-purple-600 to-indigo-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700'>
              Dhuroni Diçka
            </a>
            <a
              href='#'
              class='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-[#377DFF] bg-indigo-50 hover:bg-indigo-100'>
              Shfletoni Produktet
            </a>
          </div>
        </div>
      </div>
    </Normal>
  );
}
