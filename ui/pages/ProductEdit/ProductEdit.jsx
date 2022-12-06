import ImageUploading from "react-images-uploading";

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductView, ProductDelete, ProductUpdate, CategoryList } from '../../../controllers/front';
import { Normal } from '../../layouts';
import { useRouter } from 'next/router';
import { Loading } from '../../components';
import { SetField } from '../../../data/redux/PageSlice';
import { useState } from 'react';
import { ProductEdit as Meta } from '../../../data/metas';
import { Permissonless } from '..';

export default function ProductEdit() {
  const dispatch = useDispatch();
  const slug = useRouter().query.slug || '';
  const page = useSelector((state) => state.page);
  const categories = useSelector((state) => state.categories);

  const maxNumber = 69;

  const [images, setImages] = useState([]);
  const [deletedImages, setDeletedImages] = useState([]);
  const [loading, setIsLoading] = useState(false);

  const onChange = (imageList, addUpdateIndex) => setImages(imageList);

  useEffect(() => {
    if (categories.Loaded === false) CategoryList(dispatch);
  }, [categories]);

  useEffect(() => {
    if (page.Loaded === false) ProductView(dispatch, slug)
  }, [page, slug]);

  useEffect(() => {
    if (page?.Page?.Gallery) setImages(page?.Page?.Gallery)
  }, [page]);

  const product = page?.Page

  if(user.Auth === false) return <Permissonless />
  return (
    <Normal>
      <Meta
        title={page.Loaded === false || loading ? 'Po ngarkohet...' : page.Page.Name}
      />

      {page.Loaded === false || categories.Loaded === false ? <Loading /> : (

        <div className='relative bg-white'>
          <div className='mx-auto max-w-4xl px-4 sm:px-6'>
            <div className='md:auto md:grid-cols-3 md:gap-6 mt-12 mb-16'>
              <div className='mt-5 md:col-span-2 md:mt-0'>
                <form action='#' method='POST'>
                  <div className='sm:overflow-hidden sm:rounded-md'>
                    <div className='space-y-6 bg-white p-2'>
                      <h3 className="text-3xl font-bold leading-6 text-gray-900 mb-10">Redakto Produktin</h3>
                      <hr />
                      {loading === true ? <Loading /> :

                        <>
                          <div className='col-span-6 sm:col-span-4'>
                            <label
                              htmlFor='titulli'
                              className='block text-sm font-medium text-gray-700'>
                              Titulli i Produktit
                            </label>
                            <input
                              value={page?.Page.Name}
                              onChange={(e) =>
                                dispatch(
                                  SetField({
                                    Field: 'Name',
                                    Value: e.target.value,
                                  })
                                )
                              }
                              type='text'
                              name='titulli'
                              id='titulli'
                              placeholder='Jakne për fëmijë'
                              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#377DFF] focus:ring-[#377DFF] sm:text-sm'
                            />
                          </div>
                          <div>
                            <label
                              htmlFor='about'
                              className='block text-sm font-medium text-gray-700'>
                              Përshkrimi i Produktit
                            </label>
                            <div className='mt-1'>
                              <textarea
                                onChange={(e) =>
                                  dispatch(
                                    SetField({
                                      Field: 'Description',
                                      Value: e.target.value,
                                    })
                                  )
                                }
                                value={page.Page.Description}
                                id='about'
                                name='about'
                                rows='3'
                                placeholder="Përshkrimi i gjatë i produktit tuaj, me të gjitha karakteristikat."
                                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#377DFF] focus:ring-[#377DFF] sm:text-sm'
                              />
                            </div>
                          </div>

                          <div className='col-span-6'>
                            <label
                              htmlFor='street-address'
                              className='block text-sm font-medium text-gray-700'>
                              Adresa e marrjes
                            </label>
                            <input
                              onChange={(e) =>
                                dispatch(
                                  SetField({
                                    Field: 'Address',
                                    Value: e.target.value,
                                  })
                                )
                              }
                              value={page.Page.Address}
                              type='text'
                              name='street-address'
                              placeholder='Rruga Adem Jashari, Nr 00, Prishtine'
                              id='street-address'
                              autocomplete='street-address'
                              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#377DFF] focus:ring-[#377DFF] sm:text-sm'
                            />
                          </div>



                          <div className='grid grid-cols-6 gap-6'>
                            <div className='col-span-6 sm:col-span-3'>
                              <label
                                htmlFor='nr-telefonit'
                                className='block text-sm font-medium text-gray-700'>
                                Numri i telefonit
                              </label>
                              <input
                                onChange={(e) =>
                                  dispatch(
                                    SetField({
                                      Field: 'Phone',
                                      Value: e.target.value,
                                    })
                                  )
                                }
                                value={page.Page.Phone}
                                type='text'
                                name='nr-telefonit'
                                id='nr-telefonit'
                                placeholder="04X-XXX-XXX"
                                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#377DFF] focus:ring-[#377DFF] sm:text-sm'
                              />
                            </div>

                          </div>


                          <div className='grid grid-cols-6 gap-6'>

                            <div className='col-span-6 sm:col-span-3 lg:col-span-3'>
                              <label
                                htmlFor='city'
                                className='block text-sm font-medium text-gray-700'>
                                Qyteti
                              </label>
                              <select
                                onChange={(e) =>
                                  dispatch(
                                    SetField({
                                      Field: 'City',
                                      Value: e.target.value,
                                    })
                                  )
                                }
                                value={page.Page.City}
                                id="city" name="city" autocomplete="city-name" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-[#377DFF] focus:outline-none focus:ring-[#377DFF] sm:text-sm">
                                <option value="Prishtinë">Prishtinë</option>
                                <option value="Mitrovicë">Mitrovicë</option>
                                <option value="Gjilan">Gjilan</option>
                                <option value="Prizren">Prizren</option>
                                <option value="Pejë">Pejë</option>
                                <option value="Gjakovë">Gjakovë</option>

                              </select>
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Kategoria</label>
                              <select
                                onChange={(e) =>
                                  dispatch(
                                    SetField({
                                      Field: 'Category',
                                      Value: e.target.value,
                                    })
                                  )
                                }
                                value={page.Page.Category}
                                id="category" name="category" autocomplete="category-name" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-[#377DFF] focus:outline-none focus:ring-[#377DFF] sm:text-sm">
                                {
                                  categories.Loaded === true &&
                                  categories.Categories.map((category, index) => {
                                    return (
                                      <option>{category.Name}</option>
                                    )
                                  })
                                }
                              </select>
                            </div>

                            <div className='col-span-6 sm:col-span-3 lg:col-span-3'>
                              <label
                                htmlFor='user-show'
                                className='block text-sm font-medium text-gray-700'>
                                A deshironi te i publikoni te dhenat e juaja?
                              </label>
                              <select

                                value={page.Page.UserShow}
                                onChange={(e) => {
                                  dispatch(
                                    SetField({
                                      Field: 'UserShow',
                                      Value: e.target.value,
                                    })
                                  )
                                }
                                }
                                id="user-show" name="user-show" autocomplete="user-show-name" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-[#377DFF] focus:outline-none focus:ring-[#377DFF] sm:text-sm">
                                <option disabled value="Përcakto statusin">Zgjedh statusin</option>
                                <option value="Anonime">Anonime</option>
                                <option value="Publike">Publike</option>
                              </select>
                            </div>
                            <div className='col-span-6 sm:col-span-3 lg:col-span-3'>
                              <label
                                htmlFor='user-show'
                                className='block text-sm font-medium text-gray-700'>
                                Statusi i postimit
                              </label>
                              <select

                                value={page.Page.Status}
                                onChange={(e) => {
                                  dispatch(
                                    SetField({
                                      Field: 'Status',
                                      Value: e.target.value,
                                    })
                                  )
                                }
                                }
                                id="user-show" name="user-show" autocomplete="user-show-name" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-[#377DFF] focus:outline-none focus:ring-[#377DFF] sm:text-sm">
                                <option disabled value="Përcakto statusin e postimit">Përcakto statusin e postimit</option>
                                <option value="published">E publikuar</option>
                                <option value="e marr">E marr</option>
                                <option value="e rezervuar">E rezervuar</option>
                              </select>
                            </div>
                          </div>
                          <div>
                            <label className='block text-sm font-medium text-gray-700'>
                              Fotot e Produktit
                            </label>
                            <ImageUploading
                              multiple
                              value={images}
                              onChange={onChange}
                              maxNumber={maxNumber}
                              dataURLKey="data_url"

                            >
                              {({
                                imageList,
                                onImageUpload,
                                onImageRemoveAll,
                                onImageUpdate,
                                onImageRemove,
                                isDragging,
                                dragProps
                              }) => (
                                <div>

                                  <div
                                    style={isDragging ? { color: "red" } : null}
                                    onClick={onImageUpload}
                                    {...dragProps}
                                    className='mt-4 flex justify-center items-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6'>
                                    <div className='space-y-1 text-center'>
                                      <svg
                                        className='mx-auto h-12 w-12 text-gray-400'
                                        stroke='currentColor'
                                        fill='none'
                                        viewBox='0 0 48 48'
                                        aria-hidden='true'>
                                        <path
                                          d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                                          strokeWidth='2'
                                          strokeLinecap='round'
                                          strokeLinejoin='round'
                                        />
                                      </svg>
                                      <div className='flex text-sm text-gray-600' >
                                        <label
                                          // htmlFor='file-upload'

                                          className='relative cursor-pointer rounded-md bg-white font-medium text-[#377DFF] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#377DFF] focus-within:ring-offset-2 hover:text-[#377DFF]'>
                                          <span className='text-[#377DFF]'>Ngarko një Fotografi</span>

                                        </label>
                                        <p className='pl-1'>ose tërhiqe një këtu.</p>
                                      </div>
                                      <p className='text-xs text-gray-500'>
                                        PNG, JPG, që nuj tejkalonë madhësin e 3MB
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex flex-wrap justify-center mt-10 mb-10">
                                    {images.map((image, index) => (

                                      <div key={index} className="w-6/12 sm:w-4/12 px-4">
                                        <div className="flex mt-5">

                                          <img src={image.data_url ? image.data_url : image} alt="" width="250" className="shadow-lg rounded max-w-full h-auto align-middle border-none" />
                                          <div>
                                            <button
                                              style={{ position: 'relative', background: 'white', bottom: '5px', right: '8px' }}
                                              className='h-15 w-15 rounded-full ring-4 ring-white sm:h-4 sm:w-4'
                                              onClick={(e) => {
                                                onImageRemove(index)
                                                { !image.data_url ? setDeletedImages((prev) => [...prev, image]) : '' }
                                                e.preventDefault()
                                              }}>
                                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                              </svg>
                                            </button>
                                          </div>
                                        </div>


                                      </div>

                                    ))}
                                  </div>

                                </div>
                              )}
                            </ImageUploading>
                          </div>
                        </>
                      }
                    </div>

                    <div className='text-right mb-2 mr-2'>
                      <button
                        onClick={(e) => {
                          ProductUpdate(dispatch, product, images, deletedImages, setIsLoading)
                          e.preventDefault()
                        }}
                        type='submit'
                        className='inline-flex mt-8 justify-center rounded-md border border-transparent bg-[#377DFF] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#377DFF] focus:outline-none focus:ring-2 focus:ring-[#377DFF] focus:ring-offset-2'>
                        Redakto
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div >

      )
      }

    </Normal >
  );
}
