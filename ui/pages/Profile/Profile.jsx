import Link from 'next/link';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserView } from '../../../controllers/front';
import { Normal } from '../../layouts';
import { useRouter } from 'next/router';

export default function Profile() {
  const dispatch = useDispatch();
  const username = useRouter().query.username || '';

  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    if (profile.Loaded === false) UserView(dispatch, username);
  }, [profile, username]);

  return (
    <Normal>  
      <section style={{ padding: '1em' }}>
        {profile.Loaded === false ? (
          'Loading...'
        ) : (
          <div>
            <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8'>
  <div>
    <img class="h-32 rounded w-full object-cover lg:h-48" src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="" />
  </div>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
      <div class="flex">
        <img class="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" src={profile.Avatar === '' ? '' : profile.Avatar} alt="" />
      </div>
      <div class="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
        <div class="sm:hidden md:block mt-6 min-w-0 flex-1">
          <h1 class="text-2xl font-bold text-gray-900 truncate">{profile.Name} {profile.Surname}</h1>
          <p>@{profile.Username}</p>
        </div>
        <div class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Link href='/account'>
            <button type="button" class="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="-ml-1 mr-2 h-5 w-5 text-gray-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg>

              <span>Edit Profile</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
    <div class="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
      <h1 class="text-2xl font-bold text-gray-900 truncate">{profile.Name} {profile.Surname}</h1>
      <p>@{profile.Username}</p>
    </div>
  </div>
</div>
<main class="max-w-2xl mx-auto py-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8" aria-labelledby="order-history-heading">
    <div class="max-w-xl">
      <h1 id="order-history-heading" class="text-3xl font-extrabold tracking-tight text-gray-900">Produktet e dhuruara</h1>
      <p class="mt-2 text-sm text-gray-500">Ketu listohen produktet e {profile.Name} {profile.Surname}'t.</p>
    </div>

    <div class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
      <div class="group relative">
        <div class="aspect-w-1 aspect-h-1 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75">
          <img src="https://tailwindui.com/img/ecommerce-images/order-history-page-05-product-01.jpg" alt="Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers." class="object-center object-cover" />
        </div>
        <h3 class="mt-4 text-sm text-gray-500">
          <a href="#">
            <span class="absolute inset-0"></span>
            Kicks Carrier
          </a>
        </h3>
        <p class="mt-1 text-lg font-medium">
          <span class="text-indigo-600">Out for delivery</span>
        </p>
      </div>

      <div class="group relative">
        <div class="aspect-w-1 aspect-h-1 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75">
          <img src="https://tailwindui.com/img/ecommerce-images/order-history-page-05-product-02.jpg" alt="Light grey canvas backpack with black handle, zipper, and edge details." class="object-center object-cover" />
        </div>
        <h3 class="mt-4 text-sm text-gray-500">
          <a href="#">
            <span class="absolute inset-0"></span>
            Micro Backpack
          </a>
        </h3>
        <p class="mt-1 text-lg font-medium">
          <span class="text-gray-900">Delivered on <time datetime="2021-06-21">June 21, 2021</time></span>
        </p>
      </div>

      <div class="group relative">
        <div class="aspect-w-1 aspect-h-1 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75">
          <img src="https://tailwindui.com/img/ecommerce-images/order-history-page-05-product-03.jpg" alt="Orange canvas cylindrical bag with drawstring top, front zipper pouch, and black shoulder strap." class="object-center object-cover" />
        </div>
        <h3 class="mt-4 text-sm text-gray-500">
          <a href="#">
            <span class="absolute inset-0"></span>
            Drawtop Canister
          </a>
        </h3>
        <p class="mt-1 text-lg font-medium">
          <span class="text-gray-500">Cancelled</span>
        </p>
      </div>

      <div class="group relative">
        <div class="aspect-w-1 aspect-h-1 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75">
          <img src="https://tailwindui.com/img/ecommerce-images/order-history-page-05-product-04.jpg" alt="White canvas tote bag with black drawstring liner and white handle." class="object-center object-cover" />
        </div>
        <h3 class="mt-4 text-sm text-gray-500">
          <a href="#">
            <span class="absolute inset-0"></span>
          </a>
        </h3>
        <p class="mt-1 text-lg font-medium">
          <span class="text-gray-900">Delivered on <time datetime="2021-05-24">May 24, 2021</time></span>
        </p>
      </div>
      </div>
            <div>
    </div>
  </main>
          </div>
        )}
      </section>
    </Normal>
  );
}
