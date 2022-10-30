import { useSelector, useDispatch } from 'react-redux';
import { Normal } from '../../layouts';
import { SetPrepageField } from '../../../data/redux/PageSlice';
import { PageCreate } from '../../../controllers/front';
import { useEffect } from 'react';

export default function LaningPost() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(SetPrepageField({ Field: 'User', Value: user.Id }));
  }, [user]);

  return (
    <Normal>
      <div>
        <div class='md:grid md:grid-cols-3 md:gap-6'>
          <div class='mt-5 md:col-span-2 md:mt-0'>
            <form action='#' method='POST'>
              <div class='shadow sm:overflow-hidden sm:rounded-md'>
                <div class='space-y-6 bg-white px-4 py-5 sm:p-6'>
                  <div class='col-span-6 sm:col-span-4'>
                    <label
                      for='email-address'
                      class='block text-sm font-medium text-gray-700'>
                      Titulli i Produktit
                    </label>
                    <input
                      onChange={(e) =>
                        dispatch(
                          SetPrepageField({
                            Field: 'Name',
                            Value: e.target.value,
                          })
                        )
                      }
                      value={page.Prepage.Name}
                      type='text'
                      name='email-address'
                      id='email-address'
                      autocomplete='email'
                      class='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    />
                  </div>

                  <div>
                    <label
                      for='about'
                      class='block text-sm font-medium text-gray-700'>
                      Përshkrim
                    </label>
                    <div class='mt-1'>
                      <textarea
                        onChange={(e) =>
                          dispatch(
                            SetPrepageField({
                              Field: 'Description',
                              Value: e.target.value,
                            })
                          )
                        }
                        value={page.Prepage.Description}
                        id='about'
                        name='about'
                        rows='3'
                        class='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        placeholder='emri@merrfal.com'></textarea>
                    </div>
                    <p class='mt-2 text-sm text-gray-500'>
                      Përshkrimi i gjatë i produktit tuaj. Me të gjitha
                      karakteristikat.
                    </p>
                  </div>

                  <div class='bg-white px-4 py-5 sm:p-6'>
                    <div class='grid grid-cols-6 gap-6'>
                      <div class='col-span-6'>
                        <label
                          for='street-address'
                          class='block text-sm font-medium text-gray-700'>
                          Adresa e Banimit
                        </label>
                        <input
                          type='text'
                          name='street-address'
                          id='street-address'
                          autocomplete='street-address'
                          class='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        />
                      </div>

                      <div class='col-span-6 sm:col-span-6 lg:col-span-2'>
                        <label
                          for='city'
                          class='block text-sm font-medium text-gray-700'>
                          Qyteti
                        </label>
                        <input
                          type='text'
                          name='city'
                          id='city'
                          autocomplete='address-level2'
                          class='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        />
                      </div>

                      <div class='col-span-6 sm:col-span-3 lg:col-span-2'>
                        <label
                          for='postal-code'
                          class='block text-sm font-medium text-gray-700'>
                          Kodi Postar
                        </label>
                        <input
                          type='text'
                          name='postal-code'
                          id='postal-code'
                          autocomplete='postal-code'
                          class='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label class='block text-sm font-medium text-gray-700'>
                      Fotoja Kryesore
                    </label>
                    <div class='mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6'>
                      <div class='space-y-1 text-center'>
                        <svg
                          class='mx-auto h-12 w-12 text-gray-400'
                          stroke='currentColor'
                          fill='none'
                          viewBox='0 0 48 48'
                          aria-hidden='true'>
                          <path
                            d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                        <div class='flex text-sm text-gray-600'>
                          <label
                            for='file-upload'
                            class='relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500'>
                            <span>Ngarko një Fotografi</span>
                            <input
                              id='file-upload'
                              name='file-upload'
                              type='file'
                              class='sr-only'
                            />
                          </label>
                          <p class='pl-1'>ose tërhiqe një këtu.</p>
                        </div>
                        <p class='text-xs text-gray-500'>
                          PNG, JPG, që nuj tejkalonë madhësin e 3MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='bg-gray-50 px-4 py-3 text-right sm:px-6'>
                  <button
                    onClick={() => PageCreate(dispatch, page.Prepage)}
                    type='submit'
                    class='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                    Bismilah, Listo Produktin
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Normal>
  );
}
