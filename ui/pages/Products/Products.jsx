import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Normal } from '../../layouts';
import { Product, Empty, Loading, Pagination } from '../../components';
import { ProductsList, CategoryList, ProductsFilters } from '../../../controllers/front';
import { SetFilterTerm } from '../../../data/redux/FilterSlice';
import { useRouter } from 'next/router';
import { Products as Meta } from '../../../data/metas'; 

export default function Products() {
  let category = useRouter().query.kategoria;

  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pages);
  const categories = useSelector((state) => state.categories);
  const filter = useSelector((state) => state.filter);


  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(8);
  const [menuMobileOpen, setMenuMobileOpen] = useState(false);

  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOFirstRecord = indexOfLastRecord - recordsPerPage

  const currentRecords = filter?.Results?.slice(indexOFirstRecord, indexOfLastRecord)

  const nPages = Math.ceil(filter?.Results?.length / recordsPerPage)


  useEffect(() => {
    if (filter.Loading === true) ProductsFilters(filter.Term, dispatch);
  }, [filter])


  useEffect(() => {
    if (category) dispatch(SetFilterTerm(category))
  }, [category])


  useEffect(() => {
    if (pages.Loaded === false) ProductsList(dispatch);
  }, [pages]);

  useEffect(() => {
    if (categories.Loaded === false) CategoryList(dispatch);
  }, [categories]);

  return (
    <Normal>
      <Meta />
      <div className='bg-white'>
        <div className='fixed inset-0 flex z-40 sm:hidden'>
          <div
            className='fixed inset-0 bg-black bg-opacity-25' />
          <div className='ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto'>
            <div className='px-4 flex items-center justify-between'>
              <h2 className='text-lg font-medium text-gray-900'>Filtrat</h2>
              <button
                type='button'
                className='-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400'>
                <span className='sr-only'>Mbyll menunë</span>
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>

            <form className='mt-4'>
              <div className='border-t border-gray-200 px-4 py-6'>
                <h3 className='-mx-2 -my-3 flow-root'>
                  <button
                    type='button'
                    className='px-2 py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400'
                    aria-controls='filter-section-0'
                    aria-expanded='false'>
                    <span className='font-medium text-gray-900'>
                      Kategoritë
                    </span>
                    <span className='ml-6 flex items-center'>
                      <svg
                        className='rotate-0 h-5 w-5 transform'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'>
                        <path
                          fill-rule='evenodd'
                          d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                          clip-rule='evenodd'
                        />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div className='pt-6' id='filter-section-0'>
                  <div className='space-y-6'>
                    <div className='flex items-center'>
                      <input
                        id='filter-mobile-category-0'
                        name='category[]'
                        value='new-arrivals'
                        type='checkbox'
                        className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                      />
                      <label
                        for='filter-mobile-category-0'
                        className='ml-3 text-sm text-gray-500'>
                        Të gjitha kategoritë
                      </label>
                    </div>

                    {categories.isLoaded === true &&
                              categories.Categories.map((category, index) => {
                                return (
                                  <div className='flex items-center'>
                      <input
                      key={index}
                        id='filter-mobile-category-1'
                        name='category[]'
                        value='tees'
                        onClick={(e) => {
                                       
                          dispatch(SetFilterTerm(category.Name))
                          setCurrentPage(1)
                          
                          e.preventDefault()

                        }}
                        type='checkbox'
                        className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                      />
                      <label
                        for='filter-mobile-category-1'
                        className='ml-3 text-sm text-gray-500'>
                        {category.Name}
                      </label>
                    </div>
                                );
                              })}
                    
                  </div>
                </div>
              </div>

              <div className='border-t border-gray-200 px-4 py-6'>
                <h3 className='-mx-2 -my-3 flow-root'>
                  <button
                    type='button'
                    className='px-2 py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400'
                    aria-controls='filter-section-2'
                    aria-expanded='false'>
                    <span className='font-medium text-gray-900'>Qytetet</span>
                    <span className='ml-6 flex items-center'>
                      <svg
                        className='rotate-0 h-5 w-5 transform'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'>
                        <path
                          fill-rule='evenodd'
                          d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                          clip-rule='evenodd'
                        />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div className='pt-6' id='filter-section-2'>
                  <div className='space-y-6'>
                    <div className='flex items-center'>
                      <input
                        id='filter-mobile-sizes-0'
                        name='sizes[]'
                        value='s'
                        type='checkbox'
                        className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                      />
                      <label
                        for='filter-mobile-sizes-0'
                        className='ml-3 text-sm text-gray-500'>
                        Prishtinë
                      </label>
                    </div>

                    <div className='flex items-center'>
                      <input
                        id='filter-mobile-sizes-1'
                        name='sizes[]'
                        value='m'
                        type='checkbox'
                        className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                      />
                      <label
                        for='filter-mobile-sizes-1'
                        className='ml-3 text-sm text-gray-500'>
                        Mitrovicë
                      </label>
                    </div>

                    <div className='flex items-center'>
                      <input
                        id='filter-mobile-sizes-2'
                        name='sizes[]'
                        value='l'
                        type='checkbox'
                        className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                      />
                      <label
                        for='filter-mobile-sizes-2'
                        className='ml-3 text-sm text-gray-500'>
                        Gjilan
                      </label>
                    </div>

                    <div className='flex items-center'>
                      <input
                        id='filter-mobile-sizes-2'
                        name='sizes[]'
                        value='l'
                        type='checkbox'
                        className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                      />
                      <label
                        for='filter-mobile-sizes-2'
                        className='ml-3 text-sm text-gray-500'>
                       Prizren
                      </label>
                    </div>

                    <div className='flex items-center'>
                      <input
                        id='filter-mobile-sizes-2'
                        name='sizes[]'
                        value='l'
                        type='checkbox'
                        className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                      />
                      <label
                        for='filter-mobile-sizes-2'
                        className='ml-3 text-sm text-gray-500'>
                        Pejë
                      </label>
                    </div>

                    <div className='flex items-center'>
                      <input
                        id='filter-mobile-sizes-2'
                        name='sizes[]'
                        value='l'
                        type='checkbox'
                        className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                      />
                      <label
                        for='filter-mobile-sizes-2'
                        className='ml-3 text-sm text-gray-500'>
                        Gjakovë
                      </label>
                    </div>

                    <div className='flex items-center'>
                      <input
                        id='filter-mobile-sizes-2'
                        name='sizes[]'
                        value='l'
                        type='checkbox'
                        className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                      />
                      <label
                        for='filter-mobile-sizes-2'
                        className='ml-3 text-sm text-gray-500'>
                        Gjilan
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-extrabold tracking-tight text-gray-900'>
            Të gjitha Produktet
          </h1>
          <p className='mt-4 max-w-xl text-sm text-gray-700'>
            Këtu mundë ti gjeni të gjitha produktet e listuara në platform nga
            dhurues publik dhe të fshehur.
          </p>
        </div>

        <section aria-labelledby='filter-heading'>
          <h2 id='filter-heading' className='sr-only'>
            Filtrimi
          </h2>

          <div className='relative z-10 bg-white border-b border-gray-200 pb-4'>
            <div className='max-w-7xl mx-auto px-4 flex items-center justify-between sm:px-6 lg:px-8'>
              <div className='relative inline-block text-left'>
                <div>
                  <button
                    onClick={() => setIsSortOpen(!isSortOpen)}
                    type='button'
                    className='group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900'
                    id='menu-button'
                    aria-expanded='false'
                    aria-haspopup='true'>
                    Sortimi
                    <svg
                      className='flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'>
                      <path
                        fill-rule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </button>
                </div>

                {/* {isSortOpen && (
                  <div
                    className='origin-top-left absolute left-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                    role='menu'
                    aria-orientation='vertical'
                    aria-labelledby='menu-button'
                    tabindex='-1'>
                    <div className='py-1' role='none'>
                      <a
                        href='#'
                        className='font-medium text-gray-900 block px-4 py-2 text-sm'
                        role='menuitem'
                        tabindex='-1'
                        id='menu-item-0'>
                        Më popullorja
                      </a>

                      <a
                        href='#'
                        className='font-medium text-gray-900 block px-4 py-2 text-sm'
                        role='menuitem'
                        tabindex='-1'
                        id='menu-item-0'>
                        Më jo popullorja
                      </a>

                      <a
                        href='#'
                        className='text-gray-500 block px-4 py-2 text-sm'
                        role='menuitem'
                        tabindex='-1'
                        id='menu-item-1'>
                        Më të rejat
                      </a>

                      <a
                        href='#'
                        className='text-gray-500 block px-4 py-2 text-sm'
                        role='menuitem'
                        tabindex='-1'
                        id='menu-item-2'>
                        Më te vjetrat
                      </a>
                    </div>
                  </div>
                )} */}
              </div>

              <button
                type='button'
                className='inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden'>
                Filtrat
              </button>

              <div className='hidden sm:block'>
                <div className='flow-root'>
                  <div className='-mx-4 flex items-center divide-x divide-gray-200'>
                    <div className='px-4 relative inline-block text-left'>
                      <button
                        onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                        type='button'
                        className='group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900'
                        aria-expanded='false'>
                        <span>Kategoritë</span>

                        <span className='ml-1.5 rounded py-0.5 px-1.5 bg-gray-200 text-xs font-semibold text-gray-700 tabular-nums'>
                          1
                        </span>
                        <svg
                          className='flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'>
                          <path
                            fill-rule='evenodd'
                            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      </button>

                      {isCategoryOpen && (
                        <div className='origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none'>
                          <form className='space-y-4'>
                            <div className='flex items-center'>
                              <input
                                id='filter-category-0'
                                name='category[]'
                                value='new-arrivals'
                                type='radio'
                                onClick={(e) => {
                                  dispatch(SetFilterTerm(''))
                                  setCurrentPage(1)
                                  e.preventDefault()
                                }}
                                className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 background-black'
                              />
                              <label
                                for='filter-category-0'
                                className='ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap'>
                                Të gjitha kategoritë
                              </label>
                            </div>

                            {categories.isLoaded === true &&
                              categories.Categories.map((category, index) => {
                                return (
                                  <div
                                    key={index}
                                    className='flex items-center'>
                                    <input
                                      id='filter-category-2'
                                      name='category[]'
                                      value='objects'
                                      // value={search.Term}
                                      onClick={(e) => {
                                       
                                        dispatch(SetFilterTerm(category.Name))
                                        setCurrentPage(1)
                                        
                                        e.preventDefault()

                                      }}
                                      type='radio'
                                      className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                                    />
                                    <label
                                      for='filter-category-2'
                                      className='ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap'>
                                      {category.Name}
                                    </label>
                                  </div>
                                );
                              })}
                          </form>
                        </div>
                      )}
                    </div>

                    <div className='px-4 relative inline-block text-left'>
                      <button
                        onClick={() => setIsCityOpen(!isCityOpen)}
                        type='button'
                        className='group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900'
                        aria-expanded='false'>
                        <span>Qytetet</span>
                        <svg
                          className='flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'>
                          <path
                            fill-rule='evenodd'
                            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      </button>

                      {isCityOpen && (
                        <div className='origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none'>
                          <form className='space-y-4'>
                            <div className='flex items-center'>
                              <input
                                id='filter-sizes-0'
                                name='sizes[]'
                                value='s'
                                type='checkbox'
                                className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                              />
                              <label
                                for='filter-sizes-0'
                                className='ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap'>
                                Prishtinë
                              </label>
                            </div>

                            <div className='flex items-center'>
                              <input
                                id='filter-sizes-1'
                                name='sizes[]'
                                value='m'
                                type='checkbox'
                                className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                              />
                              <label
                                for='filter-sizes-1'
                                className='ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap'>
                                Mitrovicë
                              </label>
                            </div>

                            <div className='flex items-center'>
                              <input
                                id='filter-sizes-2'
                                name='sizes[]'
                                value='l'
                                type='checkbox'
                                className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                              />
                              <label
                                for='filter-sizes-2'
                                className='ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap'>
                                Gjilan
                              </label>
                            </div>

                            <div className='flex items-center'>
                              <input
                                id='filter-sizes-2'
                                name='sizes[]'
                                value='l'
                                type='checkbox'
                                className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                              />
                              <label
                                for='filter-sizes-2'
                                className='ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap'>
                                Prizren
                              </label>
                            </div>

                            <div className='flex items-center'>
                              <input
                                id='filter-sizes-2'
                                name='sizes[]'
                                value='l'
                                type='checkbox'
                                className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                              />
                              <label
                                for='filter-sizes-2'
                                className='ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap'>
                                Pejë
                              </label>
                            </div>

                            <div className='flex items-center'>
                              <input
                                id='filter-sizes-2'
                                name='sizes[]'
                                value='l'
                                type='checkbox'
                                className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                              />
                              <label
                                for='filter-sizes-2'
                                className='ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap'>
                                Gjakovë
                              </label>
                            </div>
                          </form>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-gray-100'>
            <div className='max-w-7xl mx-auto py-3 px-4 sm:flex sm:items-center sm:px-6 lg:px-8'>
              <h3 className='text-xs font-semibold uppercase tracking-wide text-gray-500'>
              Filtrat
                <span className='sr-only'>, aktive</span>
              </h3>

              <div
                aria-hidden='true'
                className='hidden w-px h-5 bg-gray-300 sm:block sm:ml-4'></div>

              <div className='mt-2 sm:mt-0 sm:ml-4'>
                {
                  filter.Term ?
                    <div className='-m-1 flex flex-wrap items-center'>
                      <span className='m-1 inline-flex rounded-full border border-gray-200 items-center py-1.5 pl-3 pr-2 text-sm font-medium bg-white text-gray-900'>
                        <span>{filter.Term}</span>
                        <button
                          onClick={(e) => {
                            // location.href = '/produktet';
                            dispatch(SetFilterTerm(''))
                            e.preventDefault()

                          }}
                          type='button'
                          className='flex-shrink-0 ml-1 h-4 w-4 p-1 rounded-full inline-flex text-gray-400 hover:bg-gray-200 hover:text-gray-500'>
                          <span className='sr-only'>Remove filter for Objects</span>
                          <svg
                            className='h-2 w-2'
                            stroke='currentColor'
                            fill='none'
                            viewBox='0 0 8 8'>
                            <path
                              stroke-linecap='round'
                              stroke-width='1.5'
                              d='M1 1l6 6m0-6L1 7'
                            />
                          </svg>
                        </button>
                      </span>
                    </div> :
                    null
                }
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
        <div className={pages.Loaded === false ? 'w-full' : pages.Pages.length === 0 ? 'w-full' : 'mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'}>
          {
            pages.Loaded === false ?
              <Loading /> :
              pages.Pages.length === 0 ? <Empty heading="Nuk u gjet asnjë produkt" message="Nuk u gjet asnjë produkt në platformë me këto filtrime.." /> :
                currentRecords?.map((page, index) => <Product product={page} key={index} />)
          }
        </div>

        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage} 
        />
      </div>

    </Normal>
  );
}
