import { useSelector, useDispatch } from "react-redux";
import { Normal } from "../../layouts";
import { SetPrepageField } from "../../../data/redux/PageSlice";
import { ProductCreate, CategoryList } from "../../../controllers/front";
import { useEffect, useState } from "react";
import { Loading } from "../../components";
import { Upload, message } from "antd";
import {
  storage,
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
} from "../../../config/Firebase";

// import {
//   RiUploadCloud2Line,
//   RiCheckboxCircleLine,
//   RiCloseCircleLine,
// } from "react-icons/ri";
const { Dragger } = Upload;
export default function ProductPost() {
  const [images, setImages] = useState([]);
  const [downloadURL, setDownloadURL] = useState("");
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);
  const user = useSelector((state) => state.user);
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(SetPrepageField({ Field: "User", Value: user.Id }));
  }, [user]);

  useEffect(() => {
    if (categories.Loaded === false) CategoryList(dispatch);
  }, [categories]);

  const props = {
    name: "file",
    listType: "picture",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      console.log("infofile", info.file);
      if (status !== "uploading") {
      }
      if (status === "done") {
        message.success({
          content: <div className="upload-result">{info.file.name}</div>,
          // icon: <RiCheckboxCircleLine className="remix-icon" />,
        });
      } else if (status === "error") {
        message.error({
          content: info.file.name + " file upload failed.",
          // icon: <RiCloseCircleLine className="remix-icon" />,
        });
      }
    },
  };

  const handleSubmit = () => {
    if (images.length === 0) return;
    const promises = [];
    // images.forEach((image) => {
    //   let imageRef = ref(
    //     storage,
    //     `/products/${image.originFileObj.name + image.originFileObj.uid}`
    //   );
    //   const uploadTask = uploadBytes(imageRef, image);

    //   promises.push(uploadTask);

    //   uploadTask.on(
    //     "state_changed",
    //     (snapshot) => {
    //       const progress =
    //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //       console.log("Upload is " + progress + "% done");
    //     },
    //     (error) => {
    //       console.log(error);
    //     },
    //     async () => {
    //       await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //         console.log(downloadURL);
    //         // dispatch(
    //         //   SetPrepageField({
    //         //     Field: "Gallery",
    //         //     Value: `${downloadURL}`,
    //         //   })
    //         // );
    //         setImages((prevState) => [...prevState, downloadURL]);
    //       });
    //     }
    //   );
    // });
    // Promise.all(promises)
    //   .then(() => setImageUploading(false))
    //   .catch((err) => console.log(err.code));
    // alert("u kry")
    images.map((image) => {
        let imageRef = ref(
          storage,
          `/products/${image.originFileObj.name + image.originFileObj.uid}`
        );
        uploadBytes(imageRef, image.originFileObj).then(() => {
          alert("u kry");
        });
      });
  };

  const arrayWithImages = [];
  for (let i = 0; i < images.length; i++) {
    arrayWithImages.push({ name: images[i].name });
  }

  return (
    <Normal>
      {categories.Loaded === false ? (
        <Loading />
      ) : (
        <div className="relative bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="md:auto md:grid-cols-3 md:gap-6 mt-12 mb-16">
              <div className="mt-5 md:col-span-2 md:mt-0">
                <form action="#" method="POST">
                  <div className="sm:overflow-hidden sm:rounded-md">
                    <div className="space-y-6 bg-white p-2">
                      <h3 class="text-3xl font-bold leading-6 text-gray-900 mb-10">
                        Shto Produktin
                      </h3>
                      <div className="col-span-6 sm:col-span-4">
                        <label
                          for="email-address"
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
                          name="email-address"
                          id="email-address"
                          autocomplete="email"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#377DFF] focus:ring-[#377DFF] sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          for="email-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Numri i telefonit
                        </label>
                        <input
                          onChange={(e) =>
                            dispatch(
                              SetPrepageField({
                                Field: "Phone",
                                Value: e.target.value,
                              })
                            )
                          }
                          value={page.Prepage.Phone}
                          type="text"
                          name="email-address"
                          id="email-address"
                          autocomplete="email"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#377DFF] focus:ring-[#377DFF] sm:text-sm"
                        />
                      </div>

                      <div>
                        <label
                          for="about"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Përshkrimi
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
                            name="about"
                            rows="3"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#377DFF] focus:ring-[#377DFF] sm:text-sm"
                          />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                          Përshkrimi i gjatë i produktit tuaj. Me të gjitha
                          karakteristikat.
                        </p>
                      </div>

                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6">
                          <label
                            for="street-address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Adresa e marrjes
                          </label>
                          <input
                            type="text"
                            name="street-address"
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
                            autocomplete="street-address"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#377DFF] focus:ring-[#377DFF] sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            for="city"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Qyteti
                          </label>
                          <input
                            type="text"
                            name="city"
                            id="city"
                            onChange={(e) =>
                              dispatch(
                                SetPrepageField({
                                  Field: "City",
                                  Value: e.target.value,
                                })
                              )
                            }
                            value={page.Prepage.City}
                            autocomplete="address-level2"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#377DFF] focus:ring-[#377DFF] sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            for="postal-code"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Kodi Postar
                          </label>
                          <input
                            type="text"
                            name="postal-code"
                            id="postal-code"
                            onChange={(e) =>
                              dispatch(
                                SetPrepageField({
                                  Field: "Zip",
                                  Value: e.target.value,
                                })
                              )
                            }
                            value={page.Prepage.Zip}
                            autocomplete="postal-code"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#377DFF] focus:ring-[#377DFF] sm:text-sm"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            for="country"
                            class="block text-sm font-medium text-gray-700"
                          >
                            Kategoria
                          </label>
                          <select
                            onChange={(e) =>
                              dispatch(
                                SetPrepageField({
                                  Field: "Zip",
                                  Value: e.target.value,
                                })
                              )
                            }
                            value={page.Prepage.Category}
                            id="country"
                            name="country"
                            autocomplete="country-name"
                            class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-[#377DFF] focus:outline-none focus:ring-[#377DFF] sm:text-sm"
                          >
                            {categories.Categories.map((category, index) => {
                              return <option>{category.Name}</option>;
                            })}
                          </select>
                        </div>
                      </div>
                      <p onClick={handleSubmit}>Upload photo</p>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Fotot e Produktit
                        </label>
                        <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
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
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            <Dragger
                              {...props}
                              onChange={(e) => {
                                setImages(e.fileList);
                                console.log(e.fileList);
                              }}
                            >
                              <p className="ant-upload-drag-icon">
                                {/* <RiUploadCloud2Line className="remix-icon" /> */}
                              </p>

                              <p className="ant-upload-text">
                                Kliko ose tërhiq imazhin në këtë zonë për ta
                                ngarkuar
                              </p>

                              <p className="ant-upload-hint">
                                Mundësi ngarkimi të një ose më shumë imazheve
                                njëkohësisht të produktit që po listohet,
                                ndalohet postimi i imazheve jo relevante ose me
                                përmbajtje të ndaluar
                              </p>
                            </Dragger>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          ProductCreate(dispatch, page.Prepage);
                        }}
                        type="submit"
                        className="inline-flex mt-8 justify-center rounded-md border border-transparent bg-[#377DFF] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#377DFF] focus:outline-none focus:ring-2 focus:ring-[#377DFF] focus:ring-offset-2"
                      >
                        Bismilah, Listo Produktin
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </Normal>
  );
}
