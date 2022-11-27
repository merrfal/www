import Link from 'next/link';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { OpenSearch, CloseSearch, SetSearchTerm } from '../../../data/redux/SearchSlice'
import { ProductsSearch } from '../../../controllers/front/'

export default function Search() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      var name = event.key;
      
        if(name === '/')  {
            if(search.Visibility === false) {
              dispatch(OpenSearch())
            }
          }

        if(name === 'Escape') {
          if(search.Visibility === true) {
            dispatch(CloseSearch())
          }
        }
    }, false);
  }, [])

  useEffect(() => {
      if(search.Loading === true) {
        ProductsSearch(search.Term, dispatch);
      }
  }, [search])

  const lottie = {
    src: "https://lottie.host/c47c3f04-5fb5-45e5-b0ab-c7f2990effe4/tDIHWvQxqp.json",
    background: "transparent",
    speed: "1",
    style: {width: '64px', height: '64px'},
    loop: true,
    autoplay: true
  }

  const container = {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  if(search.Visibility) 
    return (
    <div class='fixed inset-0 z-20 p-4 sm:p-6 md:p-20 overflow-hidden'>
      <div onClick={() => dispatch(CloseSearch())} class='fixed inset-0 bg-gray-700 bg-opacity-25 transition-opacity overflow-hidden'></div>
      <div class='mx-auto max-w-xl transform divide-y divide-gray-100 rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all overflow-hidden'>
        <div class='relative'>
          <svg
            class='pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'>
            <path
              fill-rule='evenodd'
              d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
              clip-rule='evenodd'
            />
          </svg>
          <input
            type='text'
            value={search.Term}
            onChange={(e) => dispatch(SetSearchTerm(e.target.value))}
            class='h-12 w-full border-0 bg-transparent pl-11 pr-4 text-sm text-gray-800 placeholder-gray-400 focus:ring-0'
            placeholder='Kërko produkte...'
          />
        </div>

        {
          search.Loading ? 
          <div class='py-14 px-6 text-center text-sm sm:px-14 w-full flex align-center items-center'>
            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            <div style={container}>
              <lottie-player {...lottie} />
            </div>
          </div>
         : search.Results.length === 0 ? 
         <div class='py-14 px-6 text-center text-sm sm:px-14'>
          <svg
            class='mx-auto h-6 w-6 text-gray-400'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            aria-hidden='true'>
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <p class='mt-4 font-semibold text-gray-900'>Nuk u gjet asnjë rezultat</p>
          <p class='mt-2 text-gray-500'>
          Nuk u gjet asnjë produkt për këtë term kërkimi. Ju lutemi provoni përsëri.
          </p>
        </div> :
          <ul
          class='max-h-96 scroll-py-3 overflow-y-auto p-3'
          id='options'
          role='listbox'>
          {
            search.Results.map((product, index) => 
            <Link href={`/produktet/${product.Slug}`}>
              <li onClick={() => dispatch(CloseSearch())} key={index} class='group flex cursor-default select-none rounded-xl p-3 hover:opacity-75 hover:cursor-pointer'>
            <div class='flex h-10 w-10 flex-none items-center justify-center bg-gray-500 rounded'>
              <img
                src={product.Gallery.length === 0 ? '/assets/product-no.png' : product.Gallery[0]}
                alt=''
                class='h-10 w-10 rounded'
              />
            </div>
            <div class='ml-4 flex-auto'>
              <p class='text-sm font-medium text-gray-700'>{product.Name}</p>
              <p class='text-sm text-gray-500 flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>

                {product.Address}, {product.Zip}, {product.City}
              </p>
            </div>
          </li>
          </Link>
          )
          }
        </ul>
        }
      </div>
    </div>
  );
}
