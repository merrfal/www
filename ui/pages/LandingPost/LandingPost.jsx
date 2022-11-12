import { useSelector, useDispatch } from 'react-redux';
import { Normal } from '../../layouts';
import { SetPrepageField } from '../../../data/redux/PageSlice';
import { ProductCreate, CategoryList } from '../../../controllers/front';
import { useEffect } from 'react';
import { Loader} from '../../pages';

export default function LaningPost() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);
  const user = useSelector((state) => state.user);
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(SetPrepageField({ Field: 'User', Value: user.Id }));
  }, [user]);

  useEffect(() => {
    if (categories.Loaded === false) CategoryList(dispatch);
  }, [categories]);


  return (
    <Normal>
      {
        categories.Loaded === false ? <Loader /> :
      <div className='relative bg-white'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6'>
            <div className='md:auto md:grid-cols-3 md:gap-6 mt-12 mb-16'>
              <div className='mt-5 md:col-span-2 md:mt-0'>
                <form action='#' method='POST'>
                  <div className='sm:overflow-hidden sm:rounded-md'>
                    <div className='space-y-6 bg-white'>
                    <h3 class="text-3xl font-bold leading-6 text-gray-900 mb-10">Shto Produktin</h3>
                      <div className='col-span-6 sm:col-span-4'>
                        <label
                          for='email-address'
                          className='block text-sm font-medium text-gray-700'>
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
                          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        />
                      </div>

                      <div className='col-span-6 sm:col-span-4'>
                        <label
                          for='email-address'
                          className='block text-sm font-medium text-gray-700'>
                          Phone
                        </label>
                        <input
                          onChange={(e) =>
                            dispatch(
                              SetPrepageField({
                                Field: 'Phone',
                                Value: e.target.value,
                              })
                            )
                          }
                          value={page.Prepage.Phone}
                          type='text'
                          name='email-address'
                          id='email-address'
                          autocomplete='email'
                          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        />
                      </div>

                      <div>
                        <label
                          for='about'
                          className='block text-sm font-medium text-gray-700'>
                          Përshkrimi
                        </label>
                        <div className='mt-1'>
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
                            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                            />
                        </div>
                        <p className='mt-2 text-sm text-gray-500'>
                          Përshkrimi i gjatë i produktit tuaj. Me të gjitha
                          karakteristikat.
                        </p>
                      </div>

                      <div className='grid grid-cols-6 gap-6'>
                        <div className='col-span-6'>
                          <label
                            for='street-address'
                            className='block text-sm font-medium text-gray-700'>
                            Adresa e Banimit
                          </label>
                          <input
                            type='text'
                            name='street-address'
                            id='street-address'
                            onChange={(e) =>
                              dispatch(
                                SetPrepageField({
                                  Field: 'Address',
                                  Value: e.target.value,
                                })
                              )
                            }
                            value={page.Prepage.Address}
                            autocomplete='street-address'
                            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                          />
                        </div>

                        <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
                          <label
                            for='city'
                            className='block text-sm font-medium text-gray-700'>
                            Qyteti
                          </label>
                          <input
                            type='text'
                            name='city'
                            id='city'
                            onChange={(e) =>
                              dispatch(
                                SetPrepageField({
                                  Field: 'City',
                                  Value: e.target.value,
                                })
                              )
                            }
                            value={page.Prepage.City}
                            autocomplete='address-level2'
                            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                          />
                        </div>

                        <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                          <label
                            for='postal-code'
                            className='block text-sm font-medium text-gray-700'>
                            Kodi Postar
                          </label>
                          <input
                            type='text'
                            name='postal-code'
                            id='postal-code'
                            onChange={(e) =>
                              dispatch(
                                SetPrepageField({
                                  Field: 'Zip',
                                  Value: e.target.value,
                                })
                              )
                            }
                            value={page.Prepage.Zip}
                            autocomplete='postal-code'
                            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="country" class="block text-sm font-medium text-gray-700">Kategoria</label>
                <select
                  onChange={(e) =>
                    dispatch(
                      SetPrepageField({
                        Field: 'Zip',
                        Value: e.target.value,
                      })
                    )
                  }
                  value={page.Prepage.Category}
                id="country" name="country" autocomplete="country-name" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                  {
                            categories.Categories.map((category, index) => {
                              return (
                                <option>{category.Name}</option>
                              )
                            })
                          }
                </select>
              </div>
                      </div>
                      <div>
                        <label className='block text-sm font-medium text-gray-700'>
                          Fotoja Kryesore
                        </label>
                        <div className='mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6'>
                          <div className='space-y-1 text-center'>
                            <svg
                              className='mx-auto h-12 w-12 text-gray-400'
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
                            <div className='flex text-sm text-gray-600'>
                              <label
                                for='file-upload'
                                className='relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500'>
                                <span className='text-[#377DFF]'>Ngarko një Fotografi</span>
                                <input
                                  id='file-upload'
                                  name='file-upload'
                                  type='file'
                                  className='sr-only'
                                />
                              </label>
                              <p className='pl-1'>ose tërhiqe një këtu.</p>
                            </div>
                            <p className='text-xs text-gray-500'>
                              PNG, JPG, që nuj tejkalonë madhësin e 3MB
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='text-right'>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          ProductCreate(dispatch, page.Prepage)
                        }}
                        type='submit'
                        className='inline-flex mt-8 justify-center rounded-md border border-transparent bg-[#377DFF] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                        Bismilah, Listo Produktin
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
      </div>
      }
    </Normal>
  );
}
