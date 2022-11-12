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

  return (
      <div class="relative bg-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6">
          <div class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <Normal>
        <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">Deactivate account</h3>
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

            </Normal>
          </div>
        </div>
      </div>
  );
}
