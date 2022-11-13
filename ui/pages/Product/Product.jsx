import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductView } from '../../../controllers/front';
import { Normal } from '../../layouts';
import { useRouter } from 'next/router';
import { AuthWithGoogle } from '../../../controllers/front';
import { Product as Item, Loading, Empty } from '../../../ui/components';

export default function Product() {
  const dispatch = useDispatch();
  const slug = useRouter().query.slug || '';

  const user = useSelector((state) => state.user);
  const page = useSelector((state) => state.page);

  useEffect(() => {
    if (page.Loaded === false) ProductView(dispatch, slug);
  }, [page, slug]);

  return (
    <Normal>
      <section style={{ padding: '1em' }}>
        {page.Loaded === false ? (
          <Loading />
        ) : (
          <div>
            <div class='bg-white'>
              <main class='max-w-7xl mx-auto sm:pt-16 sm:px-6 lg:px-8'>
                <div class='max-w-2xl mx-auto lg:max-w-none'>
                  <div class='lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start'>
                    <div class='flex flex-col-reverse'>
                      <div class='hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none'>
                        <div
                          class='grid grid-cols-4 gap-6'
                          aria-orientation='horizontal'
                          role='tablist'>
                          <button
                            id='tabs-2-tab-1'
                            class='relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50'
                            aria-controls='tabs-2-panel-1'
                            role='tab'
                            type='button'>
                            <span class='sr-only'>Angled view </span>
                            <span class='absolute inset-0 rounded-md overflow-hidden'>
                              <img
                                src='https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg'
                                alt=''
                                class='w-full h-full object-center object-cover'
                              />
                            </span>
                            <span
                              class='ring-transparent absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              aria-hidden='true'></span>
                          </button>
                        </div>
                      </div>

                      <div class='w-full aspect-w-1 aspect-h-1'>
                        <div
                          id='tabs-2-panel-1'
                          aria-labelledby='tabs-2-tab-1'
                          role='tabpanel'
                          tabindex='0'>
                          <img
                            src='https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg'
                            alt='Angled front view with bag zipped and handles upright.'
                            class='w-full h-full object-center object-cover sm:rounded-lg'
                          />
                        </div>
                      </div>
                    </div>

                    <div class='mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0'>
                      <div class='mt-3'>
                        <h2 class='sr-only'>Product information</h2>
                        <div class='flex mb-2'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='currentColor'
                            class='w-5 h-5 mt-[2px]'>
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
                            {page.Page.Address}, {page.Page.Zip},{' '}
                            {page.Page.City},
                          </p>
                        </div>
                      </div>

                      <h1 class='text-3xl font-extrabold tracking-tight text-gray-900'>
                        {page.Page.Name}
                      </h1>

                      <div class='mt-6'>
                        <h3 class='sr-only'>Përshkrim</h3>

                        <div class='text-base text-gray-700 space-y-6'>
                          <p>{page.Page.Description}</p>
                        </div>
                      </div>

                      <form class='mt-6'>
                        <div class='mt-10 flex sm:flex-col1'>
                          <button
                            type='submit'
                            class='max-w-xs flex-1 bg-[#387CFF] border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full'>
                            Thirr në +{page.Page.Phone}
                          </button>

                          <button
                            type='button'
                            class='ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500'>
                            <svg
                              class='h-6 w-6 flex-shrink-0'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                              aria-hidden='true'>
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                              />
                            </svg>
                            <span class='sr-only'>Shto te të preferuarat</span>
                          </button>
                        </div>
                      </form>

                      <section aria-labelledby='details-heading' class='mt-12'>
                        <h2 id='details-heading' class='sr-only'>
                          Detaje shtese
                        </h2>

                        <div class='border-t divide-y divide-gray-200'>
                          <div>
                            <h3>
                              <button
                                type='button'
                                class='group relative w-full py-6 flex justify-between items-center text-left'
                                aria-controls='disclosure-1'
                                aria-expanded='false'>
                                <span class='text-gray-900 text-sm font-medium'>
                                  Procesi deri te Produkti
                                </span>
                              </button>
                            </h3>
                            <div class='pb-6 prose prose-sm' id='disclosure-1'>
                              <div class='max-w-2xl mx-auto'>
                                <div class='grid grid-cols-1 gap-y-12 sm:grid-cols-3 sm:gap-x-3 lg:grid-cols-3 lg:gap-x-3'>
                                  <div>
                                    <img
                                      src='https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg'
                                      alt=''
                                      class='h-24 w-auto'
                                    />
                                    <h3 class='mt-6 text-sm font-medium text-gray-900'>
                                      Gjej Produktin
                                    </h3>
                                    <p class='mt-2 text-sm text-gray-500'>
                                      Kërkoni dhe gjeni produktin që keni nevoj
                                      për të më së afërti në lokacionin tuaj në
                                      shumë kategori të ndryshme.
                                    </p>
                                  </div>

                                  <div>
                                    <img
                                      src='https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg'
                                      alt=''
                                      class='h-24 w-auto'
                                    />
                                    <h3 class='mt-6 text-sm font-medium text-gray-900'>
                                      Shkoni te Lokacioni
                                    </h3>
                                    <p class='mt-2 text-sm text-gray-500'>
                                      Pasi ta konfirmoni produktin me thirrje në
                                      telefon me pronarin shkoni e merni
                                      produktin te personi adekuat.
                                    </p>
                                  </div>

                                  <div>
                                    <img
                                      src='https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg'
                                      alt=''
                                      class='h-24 w-auto'
                                    />
                                    <h3 class='mt-6 text-sm font-medium text-gray-900'>
                                      Mereni Produktin
                                    </h3>
                                    <p class='mt-2 text-sm text-gray-500'>
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
                    class='mt-10 border-t border-gray-200 py-16 px-4 sm:px-0'>
                    <h2
                      id='related-heading'
                      class='text-xl font-bold text-gray-900'>
                      Produkte të Ngjashme
                    </h2>

                    {/* <div class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {
            page.Page.Recommendations.length === 0 ? <Empty heading="Nuk u gjet asnjë produkt" message="Nuk u gjet asnjë produkt i ngjajshëm në platformë." /> :
            page.Page.Recommendations.map((product, index) => <Item product={product} key={index} />)
          }
        </div> */}
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

{
  /* <div>
              Total Votes: {page.Page.Upvotes.length} &nbsp;
              {user.Auth ? (
                page.Page.Upvotes.includes(user.Id) ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      LandingDownvote(page.Page._id, user.Id, dispatch, 'Page', page.Page.Slug,);
                    }}>
                    Downvote
                  </button>
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      LandingUpvote(page.Page._id, user.Id, dispatch, 'Page', page.Page.Slug);
                    }}>
                    Upvote
                  </button>
                )
              ) : (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    AuthWithGoogle(dispatch);
                  }}>
                  Upvote
                </button>
              )}
            </div> */
}

//   <div class='flex items-center'>
//   <img
//     src={user.Avatar}
//     class='h-10 w-10 flex-none rounded-full'
//   />
//   <div class='ml-4 flex-auto'>
//     <div class='font-medium'>{page.Page.User.FullName}</div>
//     <div class='text-slate-700'>@{page.Page.User.Username}</div>
//   </div>
// </div>
