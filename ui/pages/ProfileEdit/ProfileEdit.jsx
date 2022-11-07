import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserView, UserUpdate } from "../../../controllers/front";
import { SetProfileField } from "../../../data/redux/ProfileSlice";
import { Normal } from "../../layouts";

export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const profile = useSelector((state) => state.profile);

  useEffect(() => { if (profile.Loaded === false && user.Auth) UserView(dispatch, user.Username) }, [profile, user]);

  //   return (
  //     <section style={{ padding: "1em" }} class="container mx-auto px-4 py-4">
  //       <Normal style={{ padding: "1em", border: "2px solid black" }}>
  //         <div clas>
  //           <div>
  //             <div className="md:grid md:grid-cols-3 md:gap-6">
  //               <div className="md:col-span-1">
  //                 <div className="px-4 sm:px-0">
  //                   <h3 className="text-lg font-medium leading-6 text-gray-900">
  //                     Profile
  //                   </h3>
  //                   <p className="mt-1 text-sm text-gray-600">
  //                     This information will be displayed publicly so be careful
  //                     what you share.
  //                   </p>
  //                 </div>
  //               </div>
  //               <section
  //                 style={{ padding: "1em" }}
  //                 class="container mx-auto px-4 py-4"
  //               >
  //                 {profile.Loaded === false ? (
  //                   "Loading..."
  //                 ) : (
  //                   <div className="mt-5 md:col-span-2 md:mt-0">
  //                     <form action="#" method="POST">
  //                       <div className="shadow sm:overflow-hidden sm:rounded-md">
  //                         <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
  //                           <div className="grid grid-cols-3 gap-6">
  //                             <div className="col-span-3 sm:col-span-2">
  //                               <div
  //                                 style={{
  //                                   display: "flex",
  //                                   flexDirection: "column",
  //                                 }}
  //                               >
  //                                 <label
  //                                   htmlFor="company-website"
  //                                   className="block text-sm font-medium text-gray-700"
  //                                 >
  //                                   Emri
  //                                 </label>
  //                                 <div className="mt-1 flex rounded-md shadow-sm">

  //                                   <input
  //                                     type="text"
  //                                     placeholder="Emri"
  //                                     value={profile.Name}
  //                                     name="company-website"
  //                                     id="company-website"
  //                                     className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
  //   placeholder="Emri"
  //                                     value={profile.Name}
  // onChange={(e) =>
  //                                     dispatch(
  //                                       SetProfileField({
  //                                         Field: "Name",
  //                                         Value: e.target.value,
  //                                       })
  //                                     )
  //                                   }
  //                                   />
  //                                 </div>

  //                                 <br />

  //                                 <label>Last Name</label>
  //                                 <input
  //                                   placeholder="Surname"
  //                                   value={profile.Surname}
  //                                   onChange={(e) =>
  //                                     dispatch(
  //                                       SetProfileField({
  //                                         Field: "Surname",
  //                                         Value: e.target.value,
  //                                       })
  //                                     )
  //                                   }
  //                                 />
  //                                 <br />

  //                                 <label>Username</label>
  //                                 <input
  //                                   placeholder="Username"
  //                                   value={profile.Username}
  //                                   onChange={(e) =>
  //                                     dispatch(
  //                                       SetProfileField({
  //                                         Field: "Username",
  //                                         Value: e.target.value,
  //                                       })
  //                                     )
  //                                   }
  //                                 />
  //                                 <br />

  //                                 <label>Email</label>
  //                                 <input
  //                                   placeholder="Email"
  //                                   value={profile.Email}
  //                                   onChange={(e) =>
  //                                     dispatch(
  //                                       SetProfileField({
  //                                         Field: "Email",
  //                                         Value: e.target.value,
  //                                       })
  //                                     )
  //                                   }
  //                                 />
  //                                 <br />

  //                                 <label>Bio</label>
  //                                 <input
  //                                   placeholder="Bio"
  //                                   value={profile.Bio}
  //                                   onChange={(e) =>
  //                                     dispatch(
  //                                       SetProfileField({
  //                                         Field: "Bio",
  //                                         Value: e.target.value,
  //                                       })
  //                                     )
  //                                   }
  //                                 />
  //                                 <br />

  //                        
  //                       
  //               <label>New Password</label>
  //               <input
  //                 placeholder='New Password'
  //                 value={profile.NewPassword}
  //                 onChange={(e) =>
  //                   dispatch(
  //                     SetProfileField({
  //                       Field: 'NewPassword',
  //                       Value: e.target.value,
  //                     })
  //                   )
  //                 }
  //               /> 
  // }

  return (
    <>
      <div class="relative bg-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6">
          <div class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <Normal>
            <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-extrabold tracking-tight text-gray-900'>
            Profili Yt
          </h1>
          <p className='mt-4 max-w-xl text-sm text-gray-700'>
            Këtu mundë ta rifreskoni profilin tuaj me të dhënat e rreja, keni kujdes cdo përdisim afekton në moment të gjithë platformën.
          </p>
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
                                  name="street-address"
                                  id="street-address"
                                  autoComplete="street-address"
                                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                <label
                                  htmlFor="city"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Country
                                </label>
                                <input
                                  type="text"
                                  name="city"
                                  id="city"
                                  autoComplete="address-level2"
                                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label
                                  htmlFor="region"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Qyteti
                                </label>
                                <input
                                  type="text"
                                  name="region"
                                  id="region"
                                  autoComplete="address-level1"
                                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label
                                  htmlFor="postal-code"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Kodi Postal
                                </label>
                                <input
                                  type="text"
                                  name="postal-code"
                                  id="postal-code"
                                  autoComplete="postal-code"
                                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mt-8 text-right">
                            <button
                              onClick={() => UserUpdate(dispatch, profile)}
                              type="submit"
                              className="inline-flex justify-center rounded-md border border-transparent bg-[#387DFF] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-[#387DFF] focus:ring-offset-2"
                            >
                              Përditëso
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
        </div>
              
            </Normal>
          </div>
        </div>
      </div>
    </>
  );
}
