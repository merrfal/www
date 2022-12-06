import { ProductDelete, UserProductList } from '../../../controllers/front';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Normal } from '../../layouts';
import { Loading, None, Pagination } from '../../components'
import { OpenConfirmation } from '../../../data/redux/ConfirmationSlice'
import { UserProducts as Meta } from '../../../data/metas';
import { useState } from 'react';
import { Permissonless } from '..';

export default function UserProducts() {
  const dispatch = useDispatch();

  const userLandingPages = useSelector((state) => state.userLandingPages);
  const user = useSelector((state) => state.user);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(4);

  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOFirstRecord = indexOfLastRecord - recordsPerPage

  const currentRecords = userLandingPages?.Pages?.slice(indexOFirstRecord, indexOfLastRecord)

  const nPages = Math.ceil(userLandingPages?.Pages?.length / recordsPerPage)


  useEffect(() => {
    const pagesLoaded = userLandingPages.Loaded;
    const userIsAuth = user.Auth;

    if (pagesLoaded === false && userIsAuth) UserProductList(dispatch, user.Id);
  }, [userLandingPages, user]);

  if(user.Auth === false) return <Permissonless />
  return (
    <Normal>
      <Meta />
      <div className='max-w-7xl mx-auto pt-16 px-4 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-extrabold tracking-tight text-gray-900'>
          Produktet e Mia
        </h1>
        <p className='mt-4 -mb-16 max-w-xl text-sm text-gray-700'>
          Këtu janë të listuara të gjitha produktet që ju keni ngarkuar për
          t'i dhuruar në shoqëri, prej këtu mund t'i menaxhoni ato dhe të shtoni të tjera.
        </p>
      </div>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
        <section className='container'>
          {userLandingPages.Loaded === false ? <Loading /> :
            currentRecords.length === 0 ? <None /> :
            currentRecords.map((page, index) => (
                <div key={index} className='lg:flex lg:items-center mb-4 lg:justify-between appearance-none min-w-0 w-full bg-white border border-gray-100 rounded-lg p-6 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#387CFF] focus:ring-1 focus:ring-[#387CFF]'>
                  <div className='min-w-0 flex-1'>
                    <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-4'>
                      {page.Name}
                    </h2>
                    <div className='mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6'>
                      <div className='mt-2 flex items-center text-sm text-gray-500'>
                        <svg
                          className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          stroke='currentColor'>
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'
                          />
                        </svg>
                        {
                          {
                            published: 'Publikuar',
                            sold: 'E Dhënë',
                            'in-review': 'Në Shqyrtim',
                            rejected: 'Refuzuar',
                            unpublished: 'Jo Publikuar',
                          }[page.Status]
                        }
                      </div>
                      <div className='mt-2 flex items-center text-sm text-gray-500'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          stroke='currentColor'
                          className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'>
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                          />
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                          />
                        </svg>
                        {page.Address}, {page.City}
                      </div>
                      <div className='mt-2 flex items-center text-sm text-gray-500'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          stroke='currentColor'
                          className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'>
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                          />
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                          />
                        </svg>
                        {page.Views} Shikues
                      </div>
                    </div>
                  </div>
                  <div className='mt-5 flex lg:mt-0 lg:ml-4'>
                    <span>
                      <button
                        onClick={() => window.open(`/postimet/${page.Slug}`, '_blank')}
                        type='button'
                        className='inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#387CFF] focus:ring-offset-2'>
                        <svg
                          className='h-4'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          stroke='currentColor'>
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                          />
                        </svg>
                      </button>
                    </span>

                    <span className='ml-3'>
                      <button
                        onClick={() => {
                          dispatch(OpenConfirmation({
                            dispatch: dispatch,
                            Title: 'Fshini Produktin?',
                            Message: 'A jeni sigurt qe deshironi ta fshni kete produkt, kjo do ta largoj produktin nga platforma pergjithmone.',
                            Action: () => ProductDelete(dispatch, page._id, user.Id)
                          }))
                        }}
                        type='button'
                        className='inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#387CFF] focus:ring-offset-2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          stroke='currentColor'
                          className='h-4'>
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                          />
                        </svg>
                      </button>
                    </span>

                    <span className='ml-3'>
                      <button
                        onClick={() => window.open(`/produktet/${page.Slug}`, '_blank')}
                        type='button'
                        className='inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#387CFF] focus:ring-offset-2'>
                        <svg
                          className='h-4'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'>
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                          />
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                          />
                        </svg>
                      </button>
                    </span>
                  </div>
                </div>
              )
              )}
        </section>
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </Normal>
  );
}
