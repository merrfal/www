import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PageView } from '../../../controllers/front';
import { Normal } from '../../layouts';
import { useRouter } from 'next/router';
import { LandingDownvote, LandingUpvote, UserGoogle } from '../../../controllers/front';

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

<div className="bg-white">
        <div className="pt-6">
          {/* <nav aria-label="Breadcrumb">
            <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <li>
                <div className="flex items-center">
                  <a href="#" className="mr-2 text-sm font-medium text-gray-900">Men</a>
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-5 w-4 text-gray-300">
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>

              <li>
                <div className="flex items-center">
                  <a href="#" className="mr-2 text-sm font-medium text-gray-900">Clothing</a>
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-5 w-4 text-gray-300">
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>

              <li className="text-sm">
                <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">{page.Page.Name}</a>
              </li>
            </ol>
          </nav> */}

          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." className="h-full w-full object-cover object-center" />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg" alt="Model wearing plain black basic tee." className="h-full w-full object-cover object-center" />
              </div>
              <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg" alt="Model wearing plain gray basic tee." className="h-full w-full object-cover object-center" />
              </div>
            </div>
            <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." className="h-full w-full object-cover object-center" />
            </div>
          </div>

          <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{page.Page.Name}</h1>
            </div>

            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information </h2>
              <p className="text-3xl tracking-tight text-gray-900">Shkup City</p>

              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                    </svg>

                    <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                    </svg>

                    <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                    </svg>

                    <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                    </svg>

                    <svg className="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p className="sr-only">5out of 5 stars</p>
                  <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
                </div>
              </div>

              <form className="mt-10">
                {/* <div>
                  <h3 className="text-sm font-medium text-gray-900">Color</h3>

                  <fieldset className="mt-4">
                    <legend className="sr-only">Choose a color</legend>
                    <div className="flex items-center space-x-3">
                    
                      <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                        <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label" />
                        <span id="color-choice-0-label" className="sr-only"> White </span>
                        <span aria-hidden="true" className="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"></span>
                      </label>

                      <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                        <input type="radio" name="color-choice" value="Gray" className="sr-only" aria-labelledby="color-choice-1-label" />
                        <span id="color-choice-1-label" className="sr-only"> Gray </span>
                        <span aria-hidden="true" className="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full"></span>
                      </label>

                    
                      <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                        <input type="radio" name="color-choice" value="Black" className="sr-only" aria-labelledby="color-choice-2-label" />
                        <span id="color-choice-2-label" className="sr-only"> Black </span>
                        <span aria-hidden="true" className="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"></span>
                      </label>
                    </div>
                  </fieldset>
                </div> */}

                <div className="mt-10">
                  {/* <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
                  </div> */}

                  {/* <fieldset className="mt-4">
                    <legend className="sr-only">Choose a size</legend>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-gray-50 text-gray-200 cursor-not-allowed">
                        <input type="radio" name="size-choice" value="XXS" disabled className="sr-only" aria-labelledby="size-choice-0-label" />
                        <span id="size-choice-0-label">XXS</span>

                        <span aria-hidden="true" className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                          <svg className="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                            <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                          </svg>
                        </span>
                      </label>

                      <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input type="radio" name="size-choice" value="XS" className="sr-only" aria-labelledby="size-choice-1-label" />
                        <span id="size-choice-1-label">XS</span>

                        <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>

                      <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input type="radio" name="size-choice" value="S" className="sr-only" aria-labelledby="size-choice-2-label" />
                        <span id="size-choice-2-label">S</span>

                        <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>

                      <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input type="radio" name="size-choice" value="M" className="sr-only" aria-labelledby="size-choice-3-label" />
                        <span id="size-choice-3-label">M</span>

                        <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>

                      <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input type="radio" name="size-choice" value="L" className="sr-only" aria-labelledby="size-choice-4-label" />
                        <span id="size-choice-4-label">L</span>
                        <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>

                      <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input type="radio" name="size-choice" value="XL" className="sr-only" aria-labelledby="size-choice-5-label" />
                        <span id="size-choice-5-label">XL</span>

                        <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>

                      <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input type="radio" name="size-choice" value="2XL" className="sr-only" aria-labelledby="size-choice-6-label" />
                        <span id="size-choice-6-label">2XL</span>

                        <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>

                      <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input type="radio" name="size-choice" value="3XL" className="sr-only" aria-labelledby="size-choice-7-label" />
                        <span id="size-choice-7-label">3XL</span>

                        <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                    </div>
                  </fieldset> */}
                </div>

                <button type="submit" className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Te lutem me thirr</button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
              <div>
                {/* <h3 className="sr-only">{page.Page.Description}</h3> */}

                <div className="space-y-6">
                  <p className="text-base text-gray-900">{page.Page.Description}</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    <li className="text-gray-400"><span className="text-gray-600">Hand cut and sewn locally</span></li>

                    <li className="text-gray-400"><span className="text-gray-600">Dyed with our proprietary colors</span></li>

                    <li className="text-gray-400"><span className="text-gray-600">Pre-washed &amp; pre-shrunk</span></li>

                    <li className="text-gray-400"><span className="text-gray-600">Ultra-soft 100% cotton</span></li>
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming &quot;Charcoal Gray&quot; limited release.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

            {/* <h1>{page.Page.Name}</h1> */}
            {/* <i>{page.Page.Tagline}</i> */}
            {/* <b>Website: {page.Page.Website}</b> */}
            {/* <p>{page.Page.Description}</p> */}
            {/* <p>User: {page.Page.User}</p> */}
            <hr />
            {/* <div>{page.Page.Categories.map((i, k) => <p key={k}>{i}</p>)}</div> */}
            {/* <div>{page.Page.Links.map((i, k) => <p key={k}>{i}</p>)}</div> */}
            {/* <p>Gallery: {page.Page.Gallery[0]}</p> */}
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
