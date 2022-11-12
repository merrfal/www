export default function Empty(props) {
  return (
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
      <p class='mt-4 font-semibold text-gray-900'>{props.heading}</p>
      <p class='mt-2 text-gray-500'>{props.message}</p>
    </div>
  );
}
