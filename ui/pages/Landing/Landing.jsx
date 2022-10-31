import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PageView } from '../../../controllers/front';
import { Normal } from '../../layouts';
import { useRouter } from 'next/router';
import {
  LandingDownvote,
  LandingUpvote,
  UserGoogle,
} from '../../../controllers/front';

export default function LandingEdit() {
  const dispatch = useDispatch();
  const slug = useRouter().query.slug || '';

  const AuthWithGoogle = () => {
    fetch(`https://api.ipregistry.co/?key=${process.env.NEXT_PUBLIC_IP_KEY}`)
      .then((res) => res.json())
      .then((payload) => UserGoogle(dispatch, payload));
  };

  const user = useSelector((state) => state.user);
  const page = useSelector((state) => state.page);

  useEffect(() => {
    if (page.Loaded === false) PageView(dispatch, slug);
  }, [page, slug]);

  return (
    <Normal>
      <section style={{ padding: '1em' }}>
        {page.Loaded === false ? (
          'loading page...'
        ) : (
          <div>
            <div className='bg-white'>
              <div className='pt-6'>
                <div className='mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8'>
                  <div className='aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block'>
                    <img
                      src='https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg'
                      alt='Two each of gray, white, and black shirts laying flat.'
                      className='h-full w-full object-cover object-center'
                    />
                  </div>
                  <div className='hidden lg:grid lg:grid-cols-1 lg:gap-y-8'>
                    <div className='aspect-w-3 aspect-h-2 overflow-hidden rounded-lg'>
                      <img
                        src='https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg'
                        alt='Model wearing plain black basic tee.'
                        className='h-full w-full object-cover object-center'
                      />
                    </div>
                    <div className='aspect-w-3 aspect-h-2 overflow-hidden rounded-lg'>
                      <img
                        src='https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg'
                        alt='Model wearing plain gray basic tee.'
                        className='h-full w-full object-cover object-center'
                      />
                    </div>
                  </div>
                  <div className='aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4'>
                    <img
                      src='https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg'
                      alt='Model wearing plain white basic tee.'
                      className='h-full w-full object-cover object-center'
                    />
                  </div>
                </div>

                <div className='mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24'>
                  <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
                    <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
                      {page.Page.Name}
                    </h1>
                  </div>

                  <div className='mt-4 lg:row-span-3 lg:mt-0'>
                    <h2 className='sr-only'>Product information</h2>
                    <p className='text-3xl tracking-tight text-gray-900'>
                      Kondovo Rqpw, Pristina
                    </p>

                    <div className='mt-6'>
                      <h3 className='sr-only'>Reviews</h3>
                      <div className='flex items-center'>
                        <div className='flex items-center'>
                          <svg
                            className='text-gray-900 h-5 w-5 flex-shrink-0'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'>
                            <path
                              fill-rule='evenodd'
                              d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                              clip-rule='evenodd'
                            />
                          </svg>

                          <svg
                            className='text-gray-900 h-5 w-5 flex-shrink-0'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'>
                            <path
                              fill-rule='evenodd'
                              d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                              clip-rule='evenodd'
                            />
                          </svg>

                          <svg
                            className='text-gray-900 h-5 w-5 flex-shrink-0'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'>
                            <path
                              fill-rule='evenodd'
                              d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                              clip-rule='evenodd'
                            />
                          </svg>

                          <svg
                            className='text-gray-900 h-5 w-5 flex-shrink-0'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'>
                            <path
                              fill-rule='evenodd'
                              d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                              clip-rule='evenodd'
                            />
                          </svg>

                          <svg
                            className='text-gray-200 h-5 w-5 flex-shrink-0'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'>
                            <path
                              fill-rule='evenodd'
                              d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                              clip-rule='evenodd'
                            />
                          </svg>
                        </div>
                        <p className='sr-only'>5out of 5 stars</p>
                        <a
                          href='#'
                          className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500'>
                          117 reviews
                        </a>
                      </div>
                    </div>

                    <form className='mt-10'>
                      <button
                        type='submit'
                        className='mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                        Thir në +393 232 12224
                      </button>
                    </form>
                  </div>

                  <div className='py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8'>
                    <div className='mt-10'>
                      <h2 className='text-sm font-medium text-gray-900'>
                        Përshkrim i produktit
                      </h2>

                      <div className='mt-4 space-y-6'>
                        <p className='text-sm text-gray-600'>
                          {page.Page.Description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            {/* <div>
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
                    AuthWithGoogle();
                  }}>
                  Upvote
                </button>
              )}
            </div> */}
          </div>
        )}
      </section>
    </Normal>
  );
}
