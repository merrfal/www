import Link from 'next/link';

export default function None() {
  return (
    <div className='text-center'>
      <svg
        className='mx-auto h-12 w-12 text-gray-400'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        aria-hidden='true'>
        <path
          vector-effect='non-scaling-stroke'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z'
        />
      </svg>
      <h3 className='mt-2 text-sm font-medium text-gray-900'>Asnjë produkt i shtuar</h3>
      <p className='mt-1 text-sm text-gray-500'>
        Ndihmoni të tjerët duke shtuar dhe dhënë diçka për ata që janë në nevojë.
      </p>
      <div className='mt-6'>
        <Link href="/postimet/shto">
          <button
            type='button'
            className='inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#387DFF] hover:bg-[#387DFF95] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#387DFF]'>
            <svg
              className='-ml-1 mr-2 h-5 w-5'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'>
              <path
                fillRule='evenodd'
                d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
                clipRule='evenodd'
              />
            </svg>
            Shto produktin e parë
          </button>
        </Link>
      </div>
    </div>
  );
}