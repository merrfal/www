import { useState } from 'react';

export default function Search() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  if(isSearchOpen) return (
    <div
      class='fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20'
      role='dialog'
      aria-modal='true'>
      <div class='fixed inset-0 bg-gray-700 bg-opacity-25 transition-opacity'></div>
      <div class='mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all'>
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
            class='h-12 w-full border-0 bg-transparent pl-11 pr-4 text-sm text-gray-800 placeholder-gray-400 focus:ring-0'
            placeholder='Search...'
            role='combobox'
            aria-expanded='false'
            aria-controls='options'
          />
        </div>

        {/* <ul
          class='max-h-96 scroll-py-3 overflow-y-auto p-3'
          id='options'
          role='listbox'>
          <li
            class='group flex cursor-default select-none rounded-xl p-3'
            id='option-1'
            role='option'
            tabindex='-1'>
            <div class='flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gray-500'>
              <img
                src='https://tailwindui.com/img/component-images/icon-sliders.png'
                alt=''
                class='h-8 w-8'
              />
            </div>
            <div class='ml-4 flex-auto'>
              <p class='text-sm font-medium text-gray-700'>Sliders</p>
              <p class='text-sm text-gray-500'>
                A collection of sliders for selecting a range of values.
              </p>
            </div>
          </li>
        </ul> */}
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
        </div>
      </div>
    </div>
  );
}
