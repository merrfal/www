import ImageUploading from "react-images-uploading";

import { useSelector, useDispatch } from "react-redux";
import { Normal } from "../../layouts";
import { SetPrepageField } from "../../../data/redux/PageSlice";
import { ProductCreate, CategoryList } from "../../../controllers/front";
import { useEffect, useState } from "react";
import { Loading } from "../../components";
import { ProductPost as Meta } from "../../../data/metas";
import { Permissonless } from "..";
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'

export default function ProductPost() {
  const dispatch = useDispatch();
  // const [value, setValue] = useState()

  const page = useSelector((state) => state.page);
  const user = useSelector((state) => state.user);
  const categories = useSelector((state) => state.categories);

  const [images, setImages] = useState([]);
  const [loading, setIsLoading] = useState(false);

  const onChange = (imageList, addUpdateIndex) => setImages(imageList.slice(0, 5));

  useEffect(() => {
    dispatch(SetPrepageField({ Field: "User", Value: user.Id }));
  }, [user]);

  useEffect(() => {
    if (categories.Loaded === false) CategoryList(dispatch);
  }, [categories]);

  
  if (user.Auth === false) return <Permissonless />;
  return (
    <Normal>
      <Meta />
      {categories.Loaded === false ? (
        <Loading />
      ) : (
        <div className="relative bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="md:auto md:grid-cols-3 md:gap-6 mt-12 mb-16">
              <div className="mt-5 md:col-span-2 md:mt-0">
                <div>
                  <div className="sm:overflow-hidden sm:rounded-md">
                    <div className="space-y-6 bg-white p-2">
                      <h3 className="text-3xl font-bold leading-6 text-gray-900 mb-10">
                        Shto një produkt falas
                      </h3>
                      <hr />
                      {loading === true ? (
                        <Loading />
                      ) : (
                        <>
                          <div className="col-span-6 sm:col-span-4">
                            <label
                              htmlFor="titulli"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Titulli i Produktit
                            </label>
                            <input
                              onChange={(e) =>
                                dispatch(
                                  SetPrepageField({
                                    Field: "Name",
                                    Value: e.target.value,
                                  })
                                )
                              }
                              value={page.Prepage.Name}
                              type="text"
                              id="titulli"
                              placeholder="Jakne për fëmijë"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#377DFF] focus:ring-[#377DFF] sm:text-sm"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="about"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Përshkrimi i Produktit
                            </label>
                            <div className="mt-1">
                              <textarea
                                onChange={(e) =>
                                  dispatch(
                                    SetPrepageField({
                                      Field: "Description",
                                      Value: e.target.value,
                                    })
                                  )
                                }
                                value={page.Prepage.Description}
                                id="about"
                                placeholder="Përshkrimi i gjatë i produktit tuaj, me të gjitha karakteristikat."
                                rows="6"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#377DFF] focus:ring-[#377DFF] sm:text-sm"
                              />
                            </div>
                          </div>

                          <div className="col-span-6">
                            <label
                              htmlFor="street-address"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Adresa e marrjes
                            </label>
                            <input
                              type="text"
                              id="street-address"
                              onChange={(e) =>
                                dispatch(
                                  SetPrepageField({
                                    Field: "Address",
                                    Value: e.target.value,
                                  })
                                )
                              }
                              value={page.Prepage.Address}
                              placeholder="Rruga Adem Jashari, Nr 00, Prishtine"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#377DFF] focus:ring-[#377DFF] sm:text-sm"
                            />
                          </div>

                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="nr-telefonit"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Numri i telefonit
                              </label>
                              {/* <PhoneInput
                                defaultCountry="XK"
                                placeholder="+383 XX-XXX-XXX"
                                value={value}
                                onChange={setValue}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#377DFF] focus:ring-[#377DFF] sm:text-sm"/> */}
                              <input
                                onChange={(e) => {
                                  
                                  dispatch(
                                    SetPrepageField({
                                      Field: "Phone",
                                      Value: e.target.value
                                    })
                                  )
                                }
                                }
                                maxlength="9"
                                value={page.Prepage.Phone}
                                type="tel"
                                id="nr-telefonit"
                                placeholder="+383 - XX-XXX-XXX"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#377DFF] focus:ring-[#377DFF] sm:text-sm"
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                              <label
                                htmlFor="user-show"
                                className="block text-sm font-medium text-gray-700"
                              >
                                A deshironi te i publikoni te dhenat e juaja?
                              </label>
                              <select
                                defaultValue={"Përcakto statusin"}
                                value={page.Prepage.UserShow}
                                id="user-show"
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-[#377DFF] focus:outline-none focus:ring-[#377DFF] sm:text-sm"
                                onChange={(e) => {
                                  dispatch(
                                    SetPrepageField({
                                      Field: "UserShow",
                                      Value: e.target.value,
                                    })
                                  );
                                }}
                              >
                                <option disabled value="Përcakto statusin">
                                  Zgjedh statusin
                                </option>
                                <option value="Anonime">Jo(mos e shfaq profilin tim tek produkti)</option>
                                <option value="Publike">Po(shfaq profilin tim tek produkti)</option>
                              </select>
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                              <label
                                htmlFor="city"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Qyteti
                              </label>
                              <select
                                defaultValue={"Përcakto qytetin"}
                                value={page.Prepage.City}
                                onChange={(e) => {
                                  dispatch(
                                    SetPrepageField({
                                      Field: "City",
                                      Value: e.target.value,
                                    })
                                  );
                                }}
                                id="city"
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-[#377DFF] focus:outline-none focus:ring-[#377DFF] sm:text-sm"
                              >
                                <option disabled value="Përcakto qytetin">
                                  Zgjedh qytetin
                                </option>
                                <option value="Prishtinë">Prishtinë</option>
                                <option value="Mitrovicë">Mitrovicë</option>
                                <option value="Gjilan">Gjilan</option>
                                <option value="Prizren">Prizren</option>
                                <option value="Pejë">Pejë</option>
                                <option value="Gjakovë">Gjakovë</option>
                              </select>
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                              <label
                                htmlFor="category"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Kategoria
                              </label>
                              <select
                                onChange={(e) =>
                                  dispatch(
                                    SetPrepageField({
                                      Field: "Category",
                                      Value: e.target.value,
                                    })
                                  )
                                }
                                defaultValue={"Përcakto kategorin"}
                                value={page.Prepage.Category}
                                id="category"
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-[#377DFF] focus:outline-none focus:ring-[#377DFF] sm:text-sm"
                              >
                                <option disabled value="Përcakto kategorin">
                                  Zgjedh kategorinë
                                </option>
                                {categories.Categories.map(
                                  (category, index) => {
                                    return (
                                      <option value={category.Name}>
                                        {category.Name}
                                      </option>
                                    );
                                  }
                                )}
                              </select>
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Fotot e Produktit
                            </label>
                            <ImageUploading
                              multiple
                              value={images}
                              onChange={onChange}
                              maxNumber={69}
                              dataURLKey="data_url"
                            >
                              {({
                                imageList,
                                onImageUpload,
                                onImageRemove,
                                isDragging,
                                dragProps,
                              }) => (
                                <div>
                                  <div className="flex flex-wrap mb-10">
                                    {imageList.map((image, index) => (
                                      <div
                                        key={index}
                                        className="w-6/12 sm:w-4/12 p-4"
                                      >
                                        <div className="flex mt-5">
                                          <img
                                            src={image.data_url}
                                            alt=""
                                            width="250"
                                            className="shadow-lg rounded max-w-full h-auto align-middle border-none"
                                          />
                                          <div>
                                            <button
                                              style={{
                                                position: "relative",
                                                background: "white",
                                                bottom: "5px",
                                                right: "8px",
                                              }}
                                              className="h-15 w-15 rounded-full ring-4 ring-white sm:h-4 sm:w-4"
                                              onClick={(e) => {
                                                onImageRemove(index);
                                                e.preventDefault();
                                              }}
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-4 h-4"
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M6 18L18 6M6 6l12 12"
                                                />
                                              </svg>
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>

                                  {images.length > 4 ? null :
                                    <div
                                      style={isDragging ? { color: "red" } : null}
                                      onClick={onImageUpload}
                                      {...dragProps}
                                      className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"
                                    >
                                      <div className="space-y-1 text-center">
                                        <svg
                                          className="mx-auto h-12 w-12 text-gray-400"
                                          stroke="currentColor"
                                          fill="none"
                                          viewBox="0 0 48 48"
                                          aria-hidden="true"
                                        >
                                          <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </svg>
                                        <div className="flex text-sm text-gray-600">
                                          <label className="relative cursor-pointer rounded-md bg-white font-medium text-[#377DFF] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#377DFF] focus-within:ring-offset-2 hover:text-[#377DFF]">
                                            <span className="text-[#377DFF]">
                                              Ngarko një Fotografi
                                            </span>
                                          </label>
                                          <p className="pl-1">
                                            ose tërhiqe një këtu.
                                          </p>
                                        </div>
                                        <p className="text-xs text-gray-500">
                                          PNG, JPG, që nuk tejkalon madhësinë e
                                          3MB
                                        </p>
                                      </div>
                                    </div>
                                  }
                                </div>
                              )}
                            </ImageUploading>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="text-right mb-2 mr-2">
                      <button
                        className={
                          page.Prepage?.Name &&
                            page.Prepage.Phone &&
                            page.Prepage?.City &&
                            page.Prepage?.Category &&
                            page.Prepage.Address &&
                            page.Prepage?.UserShow &&
                            images.length !== 0
                            ? "inline-flex mt-8 justify-center rounded-md border border-transparent bg-[#377DFF] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#377DFF] focus:outline-none"
                            : "inline-flex mt-8 justify-center rounded-md border border-transparent bg-[#377DFF] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#377DFF] focus:outline-none cursor-not-allowed opacity-[.75]"
                        }
                        disabled={page.Prepage?.Name &&
                          page.Prepage.Phone &&
                          page.Prepage?.City &&
                          page.Prepage?.Category &&
                          page.Prepage.Address &&
                          page.Prepage?.UserShow &&
                          images.length !== 0 ? false : true}
                        onClick={(e) => {
                          e.preventDefault();
                          ProductCreate(
                            page.Prepage,
                            dispatch,
                            images,
                            setIsLoading
                          );
                        }}
                      >
                        Publiko Produktin
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Normal>
  );
}
