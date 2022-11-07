import { Normal } from '../../layouts';

export default function Contact() {  
  return (
    <Normal>
      <div class='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
          <h1 class='text-3xl font-extrabold tracking-tight text-gray-900'>
          Na Kontaktoni
          </h1>
          <p class='mt-4 max-w-xl text-sm text-gray-700'>
            Këtu mund të na kontaktoni për gjitchka qe keni nevoj rreth platformes.
          </p>
          <div className='bg-white'>
          <div className='mt-12'>
            <form
              action='#'
              method='POST'
              className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'>
              <div>
                <label
                  for='first-name'
                  className='block text-sm font-medium text-gray-700'>
                  Emri
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='first-name'
                    id='first-name'
                    autocomplete='given-name'
                    className='py-3 px-4 block w-full shadow-sm focus:ring-[#387CFF] focus:border-[#387CFF] border-gray-300 rounded-md'
                  />
                </div>
              </div>
              <div>
                <label
                  for='last-name'
                  className='block text-sm font-medium text-gray-700'>
                  Mbiemri
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='last-name'
                    id='last-name'
                    autocomplete='family-name'
                    className='py-3 px-4 block w-full shadow-sm focus:ring-[#387CFF] focus:border-[#387CFF] border-gray-300 rounded-md'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label
                  for='email'
                  className='block text-sm font-medium text-gray-700'>
                  Adresa Elektronike
                </label>
                <div className='mt-1'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autocomplete='email'
                    className='py-3 px-4 block w-full shadow-sm focus:ring-[#387CFF] focus:border-[#387CFF] border-gray-300 rounded-md'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label
                  for='message'
                  className='block text-sm font-medium text-gray-700'>
                  Mesazhi
                </label>
                <div className='mt-1'>
                  <textarea
                    id='message'
                    name='message'
                    rows='4'
                    className='py-3 px-4 block w-full shadow-sm focus:ring-[#387CFF] focus:border-[#387CFF] border border-gray-300 rounded-md'></textarea>
                </div>
              </div>
              <div className='sm:col-span-2'>
                <button
                  type='submit'
                  className='w-auto bg-[#387CFF] inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-[#387CFF95] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#387CFF]'>
                 Dërgo Mesazhin
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Normal>
  );
}
