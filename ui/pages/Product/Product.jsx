import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductView } from '../../../controllers/front';
import { Normal } from '../../layouts';
import { useRouter } from 'next/router';
import { Product as Item, Loading, Empty } from '../../../ui/components';
import { ProductSave, ProductUnsave } from '../../../controllers/front';

export default function Product() {
  const dispatch = useDispatch();

  const slug = useRouter().query.slug || '';
  console.log("slug",useRouter().query)
  const user = useSelector((state) => state.user);
  const page = useSelector((state) => state.page);
  const [mainImage, setMainImage] = useState("")

  useEffect(() => {
    if (page.Loaded === false && slug !== '') ProductView(dispatch, slug);
    if (page?.Page?.Gallery[0]) setMainImage(page?.Page?.Gallery[0])
  }, [page, slug]);

  const [inSaves, setIsSaves] = useState(false);
  const [isSaving, setIsSaving] = useState(false);


  useEffect(() => {
    if (user.Auth === true) {
      if (page.Loaded === true) {
        const bool = user.Favorites.includes(page.Page._id);
        setIsSaves(bool);

      }
    }
  }, [user])

  const handleSaver = (e) => {
    e.stopPropagation();

    if (inSaves) {
      let newFavorites = user.Favorites.filter((f) => f !== page.Page._id);

      ProductUnsave(
        page.Page._id,
        user.Id,
        newFavorites,
        setIsSaving,
        dispatch
      )
    }

    else {
      let newFavorites = structuredClone(user.Favorites);
      newFavorites.push(page.Page._id);

      ProductSave(
        page.Page._id,
        user.Id,
        newFavorites,
        setIsSaving,
        dispatch
      )
    }
  };

  return (
    <Normal>
      <section style={{ padding: '1em' }}>
        {page.Loaded === false ? (<Loading />) : (
          <div>
            <div className='bg-white'>
              <main className='max-w-7xl mx-auto sm:pt-16 sm:px-6 lg:px-8'>
                <div className='max-w-2xl mx-auto lg:max-w-none'>
                  <div className='lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start'>
                    <div className='flex flex-col-reverse'>
                      <div className='hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none'>

                        <div
                          className='grid grid-cols-4 gap-6 '
                          aria-orientation='horizontal'
                          role='tablist'>
                          {
                            page.Page.Gallery &&
                            page.Page.Gallery.map((image) => (
                              <button
                                
                                id='tabs-2-tab-1'
                                className='relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50'
                                aria-controls='tabs-2-panel-1'
                                onClick={() => { setMainImage(image) }}
                                role='tab'
                                type='button'>
                                <span className='sr-only'>Angled view </span>
                                <span className='absolute inset-0 rounded-md overflow-hidden'>
                                  <img
                                    src={image}
                                    // src='https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg'
                                    alt=''
                                    className='w-full h-full object-center object-cover'
                                  />

                                </span>

                                <span
                                  className='ring-transparent absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                                  aria-hidden='true'></span>
                              </button>
                            ))
                          }
                        </div>
                      </div>


                      <div className='w-full aspect-w-1 aspect-h-1'>
                        <div
                          id='tabs-2-panel-1'
                          aria-labelledby='tabs-2-tab-1'
                          role='tabpanel'
                          tabindex='0'>
                          <img
                            src={mainImage ? mainImage : '/assets/product-no.png'}
                            alt='Angled front view with bag zipped and handles upright.'
                            className='w-full h-full object-center object-cover sm:rounded-lg'
                          />
                        </div>
                      </div>
                    </div>

                    <div className='mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0'>
                      <div className='mt-3'>
                        <h2 className='sr-only'>Product information</h2>
                        <div className='flex mb-2'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='currentColor'
                            className='w-5 h-5 mt-[2px]'>
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

                          <p className='text-m text-gray-900 ml-2'>
                            {page.Page.Address}, {page.Page.Zip}, {page.Page.City}
                          </p>
                        </div>
                      </div>

                      <h1 className='text-3xl font-extrabold tracking-tight text-gray-900'>
                        {page.Page.Name}
                      </h1>

                      <div className='mt-6'>
                        <h3 className='sr-only'>Përshkrim</h3>

                        <div className='text-base text-gray-700 space-y-6'>
                          <p>{page.Page.Description}</p>
                        </div>
                      </div>

                      <form className='mt-6'>
                        <div className='mt-10 flex sm:flex-col1'>
                          <button
                            type='submit'
                            onClick={() => window.open("tel:" + page.Page.Phone, "_self")}
                            className='max-w-xs flex-1 bg-[#387CFF] border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-[#387CFF95] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-[#387CFF] sm:w-full'>
                            Thirr në +{page.Page.Phone}
                          </button>

                          <button
                            onClick={(e) => handleSaver(e)}
                            type='button'
                            style={isSaving ? { pointerEvents: 'none', opacity: '.75' } : {}}
                            className='ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500'>
                            <svg
                              className='h-6 w-6 flex-shrink-0'
                              xmlns='http://www.w3.org/2000/svg'
                              fill={inSaves ? '#377DFF' : 'none'}
                              viewBox='0 0 24 24'
                              stroke={inSaves ? '#377DFF' : 'currentColor'}>
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                              />
                            </svg>
                            <span className='sr-only'>Shto te të preferuarat</span>
                          </button>
                        </div>
                      </form>

                      <section aria-labelledby='details-heading' className='mt-12'>
                        <h2 id='details-heading' className='sr-only'>
                          Detaje shtese
                        </h2>

                        <div className='border-t divide-y divide-gray-200'>
                          <div>
                            <h3>
                              <button
                                type='button'
                                className='group relative w-full py-6 flex justify-between items-center text-left'
                                aria-controls='disclosure-1'
                                aria-expanded='false'>
                                <span className='text-gray-900 text-sm font-medium'>
                                  Procesi deri te Produkti
                                </span>
                              </button>
                            </h3>
                            <div className='pb-6 prose prose-sm' id='disclosure-1'>
                              <div className='max-w-2xl mx-auto'>
                                <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-3 sm:gap-x-3 lg:grid-cols-3 lg:gap-x-3'>
                                  <div>
                                    <img
                                      src='/assets/step-one.svg'
                                      alt='Hapi i parë'
                                      className='h-24 w-auto'
                                    />
                                    <h3 className='mt-6 text-sm font-medium text-gray-900'>
                                      Gjej Produktin
                                    </h3>
                                    <p className='mt-2 text-sm text-gray-500'>
                                      Kërkoni dhe gjeni produktin që keni nevoj
                                      për të më së afërti në lokacionin tuaj në
                                      shumë kategori të ndryshme.
                                    </p>
                                  </div>

                                  <div>
                                    <img
                                      src='/assets/step-two.svg'
                                      alt='Hapi i dytë'
                                      className='h-24 w-auto'
                                    />
                                    <h3 className='mt-6 text-sm font-medium text-gray-900'>
                                      Shkoni te Lokacioni
                                    </h3>
                                    <p className='mt-2 text-sm text-gray-500'>
                                      Pasi ta konfirmoni produktin me thirrje në
                                      telefon me pronarin shkoni e merni
                                      produktin te personi adekuat.
                                    </p>
                                  </div>

                                  <div>
                                    <img
                                      src='/assets/step-three.svg'
                                      alt='Hapi i tretë'
                                      className='h-24 w-auto'
                                    />
                                    <h3 className='mt-6 text-sm font-medium text-gray-900'>
                                      Mereni Produktin
                                    </h3>
                                    <p className='mt-2 text-sm text-gray-500'>
                                      Pas takimit me personat adekuat e merni
                                      produktin që keni nevoj dhe i falenderoni
                                      ata për atë që të mundësuan.{' '}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>

                  <section
                    aria-labelledby='related-heading'
                    className='mt-10 border-t border-gray-200 py-16 px-4 sm:px-0'>
                    <h2
                      id='related-heading'
                      className='text-xl font-bold text-gray-900'>
                      Produkte të Ngjashme
                    </h2>

                    <div className='mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'>
                      {page.Page.Recommendations.length === 0 ? (
                        <Empty
                          heading='Nuk u gjet asnjë produkt'
                          message='Nuk u gjet asnjë produkt i ngjajshëm në platformë.'
                        />
                      ) : (
                        page.Page.Recommendations.map((product, index) => (
                          <Item product={product} key={index} />
                        ))
                      )}
                    </div>
                  </section>
                </div>
              </main>
            </div>
          </div>
        )}
      </section>
    </Normal>
  );
}
