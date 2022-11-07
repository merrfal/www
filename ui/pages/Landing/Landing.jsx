import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PageView } from '../../../controllers/front';
import { Normal } from '../../layouts';
import { useRouter } from 'next/router';
import { AuthWithGoogle } from '../../../controllers/front';

export default function LandingEdit() {
  const dispatch = useDispatch();
  const slug = useRouter().query.slug || '';

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
                    AuthWithGoogle(dispatch);
                  }}>
                  Upvote
                </button>
              )}
            </div> */}

<div class="bg-white">
  <div class="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"></div>
    <div class="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
      <div class="px-4 pt-5 pb-2 flex">
        <button type="button" class="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400">
          <span class="sr-only">Close menu</span>
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="mt-2">
        <div class="border-b border-gray-200">
          <div class="-mb-px flex px-4 space-x-8" aria-orientation="horizontal" role="tablist">
            <button id="tabs-1-tab-1" class="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" aria-controls="tabs-1-panel-1" role="tab" type="button">Produktet</button>
            <button id="tabs-1-tab-2" class="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" aria-controls="tabs-1-panel-2" role="tab" type="button">Rreth Nesh</button>
          </div>
        </div>

        <div id="tabs-1-panel-1" class="pt-10 pb-8 px-4 space-y-10" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
          <div class="space-y-4">
            <div class="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden">
              <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg" alt="Models sitting back to back, wearing Basic Tee in black and bone." class="object-center object-cover group-hover:opacity-75" />
              <div class="flex flex-col justify-end">
                <div class="p-4 bg-white bg-opacity-60 text-base sm:text-sm">
                  <a href="#" class="font-medium text-gray-900">
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    New Arrivals
                  </a>
                  <p aria-hidden="true" class="mt-0.5 text-gray-700 sm:mt-1">Shop now</p>
                </div>
              </div>
            </div>

            <div class="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden">
              <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg" alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees." class="object-center object-cover group-hover:opacity-75" />
              <div class="flex flex-col justify-end">
                <div class="p-4 bg-white bg-opacity-60 text-base sm:text-sm">
                  <a href="#" class="font-medium text-gray-900">
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    Basic Tees
                  </a>
                  <p aria-hidden="true" class="mt-0.5 text-gray-700 sm:mt-1">Shop now</p>
                </div>
              </div>
            </div>

            <div class="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden">
              <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg" alt="Model wearing minimalist watch with black wristband and white watch face." class="object-center object-cover group-hover:opacity-75" />
              <div class="flex flex-col justify-end">
                <div class="p-4 bg-white bg-opacity-60 text-base sm:text-sm">
                  <a href="#" class="font-medium text-gray-900">
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    Accessories
                  </a>
                  <p aria-hidden="true" class="mt-0.5 text-gray-700 sm:mt-1">Shop now</p>
                </div>
              </div>
            </div>
          </div>

          <div class='flex items-center p-4'>
                  <img
                    src={user.Avatar}
                    class='h-10 w-10 flex-none rounded-full'
                  />
                  <div class='ml-4 flex-auto'>
                    <div class='font-medium'>Leonard Krasner</div>
                    <div class='text-slate-700'>@leonardkrasner</div>
                  </div>
                  <div class='pointer-events-auto ml-4 flex-none rounded-md py-[0.3125rem] px-2 font-medium text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
</svg>

                  </div>
                </div>

          <div class="space-y-10">
            <div>
              <p id="women-shoes-heading-mobile" class="font-medium text-gray-900">Shoes &amp; Accessories</p>
              <ul role="list" aria-labelledby="women-shoes-heading-mobile" class="mt-6 flex flex-col space-y-6">
                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Sneakers </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Boots </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Flats </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Sandals </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Heels </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Socks </a>
                </li>
              </ul>
            </div>

            <div>
              <p id="women-collection-heading-mobile" class="font-medium text-gray-900">Shop Collection</p>
              <ul role="list" aria-labelledby="women-collection-heading-mobile" class="mt-6 flex flex-col space-y-6">
                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Everything </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Core </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> New Arrivals </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Sale </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Accessories </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="space-y-10">
            <div>
              <p id="women-clothing-heading-mobile" class="font-medium text-gray-900">All Clothing</p>
              <ul role="list" aria-labelledby="women-clothing-heading-mobile" class="mt-6 flex flex-col space-y-6">
                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Basic Tees </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Artwork Tees </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Tops </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Bottoms </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Swimwear </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Underwear </a>
                </li>
              </ul>
            </div>

            <div>
              <p id="women-accessories-heading-mobile" class="font-medium text-gray-900">All Accessories</p>
              <ul role="list" aria-labelledby="women-accessories-heading-mobile" class="mt-6 flex flex-col space-y-6">
                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Watches </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Wallets </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Bags </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Sunglasses </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Hats </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Belts </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="space-y-10">
            <div>
              <p id="women-brands-heading-mobile" class="font-medium text-gray-900">Brands</p>
              <ul role="list" aria-labelledby="women-brands-heading-mobile" class="mt-6 flex flex-col space-y-6">
                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Full Nelson </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> My Way </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Re-Arranged </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Counterfeit </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Significant Other </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="tabs-1-panel-2" class="pt-10 pb-8 px-4 space-y-10" aria-labelledby="tabs-1-tab-2" role="tabpanel" tabindex="0">
          <div class="space-y-4">
            <div class="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden">
              <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg" alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters." class="object-center object-cover group-hover:opacity-75" />
              <div class="flex flex-col justify-end">
                <div class="p-4 bg-white bg-opacity-60 text-base sm:text-sm">
                  <a href="#" class="font-medium text-gray-900">
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    Accessories
                  </a>
                  <p aria-hidden="true" class="mt-0.5 text-gray-700 sm:mt-1">Shop now</p>
                </div>
              </div>
            </div>

            <div class="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg" alt="Drawstring top with elastic loop closure and textured interior padding." class="object-center object-cover group-hover:opacity-75" />
              <div class="flex flex-col justify-end">
                <div class="p-4 bg-white bg-opacity-60 text-base sm:text-sm">
                  <a href="#" class="font-medium text-gray-900">
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    New Arrivals
                  </a>
                  <p aria-hidden="true" class="mt-0.5 text-gray-700 sm:mt-1">Shop now</p>
                </div>
              </div>
            </div>

            <div class="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden">
              <img src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg" alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt." class="object-center object-cover group-hover:opacity-75" />
              <div class="flex flex-col justify-end">
                <div class="p-4 bg-white bg-opacity-60 text-base sm:text-sm">
                  <a href="#" class="font-medium text-gray-900">
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    Artwork Tees
                  </a>
                  <p aria-hidden="true" class="mt-0.5 text-gray-700 sm:mt-1">Shop now</p>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-10">
            <div>
              <p id="men-shoes-heading-mobile" class="font-medium text-gray-900">Shoes &amp; Accessories</p>
              <ul role="list" aria-labelledby="men-shoes-heading-mobile" class="mt-6 flex flex-col space-y-6">
                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Sneakers </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Boots </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Sandals </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Socks </a>
                </li>
              </ul>
            </div>

            <div>
              <p id="men-collection-heading-mobile" class="font-medium text-gray-900">Shop Collection</p>
              <ul role="list" aria-labelledby="men-collection-heading-mobile" class="mt-6 flex flex-col space-y-6">
                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Everything </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Core </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> New Arrivals </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Sale </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="space-y-10">
            <div>
              <p id="men-clothing-heading-mobile" class="font-medium text-gray-900">All Clothing</p>
              <ul role="list" aria-labelledby="men-clothing-heading-mobile" class="mt-6 flex flex-col space-y-6">
                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Basic Tees </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Artwork Tees </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Pants </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Hoodies </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Swimsuits </a>
                </li>
              </ul>
            </div>

            <div>
              <p id="men-accessories-heading-mobile" class="font-medium text-gray-900">All Accessories</p>
              <ul role="list" aria-labelledby="men-accessories-heading-mobile" class="mt-6 flex flex-col space-y-6">
                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Watches </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Wallets </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Bags </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Sunglasses </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Hats </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Belts </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="space-y-10">
            <div>
              <p id="men-brands-heading-mobile" class="font-medium text-gray-900">Brands</p>
              <ul role="list" aria-labelledby="men-brands-heading-mobile" class="mt-6 flex flex-col space-y-6">
                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Re-Arranged </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Counterfeit </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> Full Nelson </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500"> My Way </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-200 py-6 px-4 space-y-6">
        <div class="flow-root">
          <a href="#" class="-m-2 p-2 block font-medium text-gray-900">Company</a>
        </div>

        <div class="flow-root">
          <a href="#" class="-m-2 p-2 block font-medium text-gray-900">Stores</a>
        </div>
      </div>
    </div>
  </div>

  <main class="max-w-7xl mx-auto sm:pt-16 sm:px-6 lg:px-8">
    <div class="max-w-2xl mx-auto lg:max-w-none">
      <div class="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        <div class="flex flex-col-reverse">
          <div class="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
            <div class="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
              <button id="tabs-2-tab-1" class="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50" aria-controls="tabs-2-panel-1" role="tab" type="button">
                <span class="sr-only">Angled view </span>
                <span class="absolute inset-0 rounded-md overflow-hidden">
                  <img src="https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg" alt="" class="w-full h-full object-center object-cover" />
                </span>
                <span class="ring-transparent absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none" aria-hidden="true"></span>
              </button>
            </div>
          </div>

          <div class="w-full aspect-w-1 aspect-h-1">
            <div id="tabs-2-panel-1" aria-labelledby="tabs-2-tab-1" role="tabpanel" tabindex="0">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg" alt="Angled front view with bag zipped and handles upright." class="w-full h-full object-center object-cover sm:rounded-lg" />
            </div>
          </div>
        </div>

        <div class="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <div class="mt-3">
            <h2 class="sr-only">Product information</h2>
            <div class="flex mb-2">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>

              <p className="text-m text-gray-900 ml-2">{page.Page.Address}, {page.Page.Zip}, {page.Page.City},</p>
            </div>
          </div>

          <h1 class="text-3xl font-extrabold tracking-tight text-gray-900">{page.Page.Name}</h1>

          <div class="mt-6">
            <h3 class="sr-only">Përshkrim</h3>

            <div class="text-base text-gray-700 space-y-6">
              <p>{page.Page.Description}</p>
            </div>
          </div>

          <form class="mt-6">
            <div class="mt-10 flex sm:flex-col1">
              <button type="submit" class="max-w-xs flex-1 bg-[#387CFF] border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full">Thirre +{page.Page.Phone}</button>

              <button type="button" class="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                <svg class="h-6 w-6 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span class="sr-only">Shto te të preferuarat</span>
              </button>
            </div>
          </form>

          <section aria-labelledby="details-heading" class="mt-12">
            <h2 id="details-heading" class="sr-only">Detaje shtese</h2>

            <div class="border-t divide-y divide-gray-200">
              <div>
                <h3>
                  <button type="button" class="group relative w-full py-6 flex justify-between items-center text-left" aria-controls="disclosure-1" aria-expanded="false">
                    <span class="text-gray-900 text-sm font-medium">Procesi deri te Produkti</span>
                  </button>
                </h3>
                <div class="pb-6 prose prose-sm" id="disclosure-1">
  <div class="max-w-2xl mx-auto">
    <div class="grid grid-cols-1 gap-y-12 sm:grid-cols-3 sm:gap-x-3 lg:grid-cols-3 lg:gap-x-3">
      <div>
        <img src="https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg" alt="" class="h-24 w-auto" />
        <h3 class="mt-6 text-sm font-medium text-gray-900">Gjej Produktin</h3>
        <p class="mt-2 text-sm text-gray-500">Kërkoni dhe gjeni produktin që keni nevoj për të më së afërti në lokacionin tuaj në shumë kategori të ndryshme.</p>
      </div>

      <div>
        <img src="https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg" alt="" class="h-24 w-auto" />
        <h3 class="mt-6 text-sm font-medium text-gray-900">Shkoni te Lokacioni</h3>
        <p class="mt-2 text-sm text-gray-500">Pasi ta konfirmoni produktin me thirrje në telefon me pronarin shkoni e merni produktin te personi adekuat.</p>
      </div>


      <div>
        <img src="https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg" alt="" class="h-24 w-auto" />
        <h3 class="mt-6 text-sm font-medium text-gray-900">Mereni Produktin</h3>
        <p class="mt-2 text-sm text-gray-500">Pas takimit me personat adekuat e merni produktin që keni nevoj dhe i falenderoni ata për atë që të mundësuan. </p>
      </div>
  </div>
</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section aria-labelledby="related-heading" class="mt-10 border-t border-gray-200 py-16 px-4 sm:px-0">
        <h2 id="related-heading" class="text-xl font-bold text-gray-900">Produkte të Ngjashme</h2>

        <div class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          <div>
            <div class="relative">
              <div class="relative w-full h-72 rounded-lg overflow-hidden">
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg" alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls." class="w-full h-full object-center object-cover" />
              </div>
              <div class="relative mt-4">
                <h3 class="text-sm font-medium text-gray-900">Zip Tote Basket</h3>
                <p class="mt-1 text-sm text-gray-500">White and black</p>
              </div>
              <div class="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                <div aria-hidden="true" class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"></div>
                <p class="relative text-lg font-semibold text-white">$140</p>
              </div>
            </div>
            <div class="mt-6">
              <a href="#" class="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200">Add to bag<span class="sr-only">, Zip Tote Basket</span></a>
            </div>
          </div>
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
