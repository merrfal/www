import Link from 'next/link';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserView } from '../../../controllers/front';
import { Normal } from '../../layouts';
import { useRouter } from 'next/router';

export default function Profile() {
  const dispatch = useDispatch();
  const username = useRouter().query.username || '';

  const profile = useSelector((state) => state.profile);
  const user = useSelector((state) => state.user);

  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (profile.Loaded === false) UserView(dispatch, username);
  }, [profile, username]);

  // useEffect(() => { if (profile.Loaded === false && user.Auth) UserView(dispatch, user.Username) }, [profile, user]);

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
            <button onClick={() => setIsEdit(!isEdit)} type="button" class="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="-ml-1 mr-2 h-5 w-5 text-gray-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg>

              <span>Edit Profile</span>
            </button>
        </div>
      </div>
    </div>
    <div class="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
      <h1 class="text-2xl font-bold text-gray-900 truncate">{profile.Name} {profile.Surname}</h1>
      <p>@{profile.Username}</p>
    </div>
  </div>
</div>
{
  isEdit && 
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">Redakto profilin</h3>
              <div class="mt-2">
          <div className="mt-12">
                <div className="mt-10 sm:mt-0">
                  <div className="w-full">
                    <div className="mt-5 md:col-span-2 md:mt-0">
                      <form action="#" method="POST">
                        <div className="overflow-hidden">
                          <div className="w-full bg-white">
                            <div className=" grid grid-cols-6 gap-6">
                              <div className="col-span-6 sm:col-span-3">
                                <label className="block text-sm font-medium text-gray-700">
                                  Fotogorafia
                                </label>
                                <div className="mt-1 flex items-center">
                                  <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                                    {!profile.Avatar ? (
                                      <svg
                                        className="h-full w-full text-gray-300"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                      </svg>
                                    ) : (
                                      <img
                                        src={profile.Avatar}
                                        width="120px"
                                        height="120px"
                                      />
                                    )}
                                  </span>
                                  <button
                                    type="button"
                                    className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#387DFF] focus:ring-offset-2"
                                  >
                                    Ndryshoje
                                  </button>
                                </div>
                              </div>

                              <div className="col-span-8 sm:col-span-3 mt-5">
                                <label
                                  htmlFor="company-website"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Uebfaqja
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                                    https:
                                  </span>
                                  <input
                                    type="text"
                                    name="company-website"
                                    onChange={(e) =>
                                    dispatch(
                                    SetProfileField({
                                     Field: "Website",
                                     Value: e.target.value,
                                    })
                                    )}
                                    value={profile.Website}
                                    id="company-website"
                                    className="block w-full p-2 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
                                    placeholder="www.example.com"
                                  />
                                </div>
                              </div>

                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="Emri"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Emri
                                </label>
                                <input
                                  type="text"
                                  name="first-name"
                                  id="first-name"
                                  autoComplete="given-name"
                                  placeholder="Emri"
                                  value={profile.Name}
                                  onChange={(e) =>
                                    dispatch(
                                      SetProfileField({
                                        Field: "Name",
                                        Value: e.target.value,
                                      })
                                    )
                                  }
                                  className="mt-1 block p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="Mbiemri"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Mbiemri
                                </label>
                                <input
                                  placeholder="Surname"
                                  value={profile.Surname}
                                  onChange={(e) =>
                                    dispatch(
                                      SetProfileField({
                                        Field: "Surname",
                                        Value: e.target.value,
                                      })
                                    )
                                  }
                                  type="text"
                                  name="last-name"
                                  id="last-name"
                                  autoComplete="family-name"
                                  className="mt-1 block p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="email-address"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Adresa Elektronike
                                </label>
                                <input
                                  type="text"
                                  name="email-address"
                                  id="email-address"
                                  autoComplete="email"
                                  className="mt-1 block p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
                                  placeholder="Email"
                                  disabled
                                  value={profile.Email}
                                  onChange={(e) =>
                                    dispatch(
                                      SetProfileField({
                                        Field: "Email",
                                        Value: e.target.value,
                                      })
                                    )
                                  }
                                />
                              </div>
                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="email-address"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Përshkrimi
                                </label>
                                <input
                                  type="text"
                                  name="email-address"
                                  id="email-address"
                                  autoComplete="email"
                                  className="mt-1 block p-2  w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
                                  placeholder="Bio"
                                  value={profile.Bio}
                                  onChange={(e) =>
                                    dispatch(
                                      SetProfileField({
                                        Field: "Bio",
                                        Value: e.target.value,
                                      })
                                    )
                                  }
                                />
                              </div>

                              <div className="col-span-6">
                                <label
                                  htmlFor="street-address"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Adresa
                                </label>
                                <input
                                  type="text"
                                  value={profile.Address} 
                                  onChange={(e) =>
                                    dispatch(
                                      SetProfileField({
                                        Field: "Address",
                                        Value: e.target.value,
                                      })
                                    )
                                  }
                                  name="street-address"
                                  id="street-address"
                                  autoComplete="street-address"
                                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
                                />
                              </div>

                              <div className="col-span-6">
                                <label
                                  htmlFor="street-address"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Numri Telefonit
                                </label>
                                <input
                                  type="text"
                                  value={profile.Phone} 
                                  onChange={(e) =>
                                    dispatch(
                                      SetProfileField({
                                        Field: "Phone",
                                        Value: e.target.value,
                                      })
                                    )
                                  }
                                  name="street-address"
                                  id="street-address"
                                  autoComplete="street-address"
                                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                <label htmlFor="shteti" className="block text-sm font-medium text-gray-700">
                                  Shteti
                                </label>
                                <select value={profile.Country} disabled={true} id="shteti" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"> 
                                  <option value={profile.Country}>Kosova</option>
                                </select>
                              </div>

                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label value={profile.City} htmlFor="qyteti" className="block text-sm font-medium text-gray-700">
                                  Qyteti
                                </label>
                                <select value={profile.City} onChange={(e) =>
                                    dispatch(
                                      SetProfileField({
                                        Field: "City",
                                        Value: e.target.value,
                                      })
                                    )
                                  } id="qyteti" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm">
                                  <option value="prishtina">Prishtina</option>
                                  <option value="mitrovice">Mitrovicë</option>
                                  <option value="gjilan">Gjilan</option>
                                  <option value="prizren">Prizren</option>
                                  <option value="pejë">Pejë</option>
                                  <option value="gjakove">Gjakovë</option>
                                </select>
                              </div>

                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
                                  Kodi Postal
                                </label>
                                <input value={profile.Zip} onChange={(e) =>
                                    dispatch(
                                      SetProfileField({
                                        Field: "City",
                                        Value: e.target.value,
                                      })
                                    )
                                  } type="number" id="zip" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button onClick={() => UserUpdate(dispatch, profile)} type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-[#387DFF] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#387DFF] focus:outline-none focus:ring-2 focus:ring-[#387DFF] focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">Përditëso</button>
          <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#387DFF] focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</div>
}
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
