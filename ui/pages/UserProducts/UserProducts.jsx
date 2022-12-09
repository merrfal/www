import { ProductDelete, UserProductList } from "../../../controllers/front";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Normal } from "../../layouts";
import { Loading, None, Pagination } from "../../components";
import { OpenConfirmation } from "../../../data/redux/ConfirmationSlice";
import { UserProducts as Meta } from "../../../data/metas";
import { Permissonless } from "..";

import {
  EditIcon,
  EyeIcon,
  LocationIcon,
  RocketIcon,
  TrashIcon,
  ViewIcon,
} from "../../icons";

export default function UserProducts() {
  const dispatch = useDispatch();

  const userLandingPages = useSelector((state) => state.userLandingPages);
  const user = useSelector((state) => state.user);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(4);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = userLandingPages?.Pages?.slice(
    indexOFirstRecord,
    indexOfLastRecord
  );

  const nPages = Math.ceil(userLandingPages?.Pages?.length / recordsPerPage);

  useEffect(() => {
    const pagesLoaded = userLandingPages.Loaded;
    const userIsAuth = user.Auth;

    if (pagesLoaded === false && userIsAuth) UserProductList(dispatch, user.Id);
  }, [userLandingPages, user]);

  if (user.Auth === false) return <Permissonless />;
  return (
    <Normal>
      <Meta />
      <div className="max-w-7xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Produktet e Mia
        </h1>
        <p className="mt-4 -mb-16 max-w-xl text-sm text-gray-700">
          Këtu janë të listuara të gjitha produktet që ju keni ngarkuar për t'i
          dhuruar në shoqëri, prej këtu mund t'i menaxhoni ato dhe të shtoni të
          tjera.
        </p>
      </div>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <section className="container">
          {userLandingPages.Loaded === false ? (
            <Loading />
          ) : currentRecords.length === 0 ? (
            <div className="mt-16">
              <None />
            </div>
          ) : (
            currentRecords.map((page, index) => (
              <div
                key={index}
                className="mt-12 lg:flex lg:items-center mb-4 lg:justify-between appearance-none min-w-0 w-full bg-white border border-gray-100 rounded-lg p-6 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#387CFF] focus:ring-1 focus:ring-[#387CFF]"
              >
                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-4">
                    {page.Name}
                  </h2>
                  <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <RocketIcon />
                      {
                        {
                          published: "Publikuar",
                          unpublished: "Jo Publikuar",
                        }[page.Status]
                      }
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <LocationIcon />
                      {page.Address}, {page.City}, {page.Zip}
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <EyeIcon />
                      {page.Views} Shikues
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex lg:mt-0 lg:ml-4">
                  <span>
                    <button
                      onClick={() =>
                        window.open(`/postimet/${page.Slug}`, "_blank")
                      }
                      type="button"
                      className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#387CFF] focus:ring-offset-2"
                    >
                      <EditIcon />
                    </button>
                  </span>

                  <span className="ml-3">
                    <button
                      onClick={() => {
                        dispatch(
                          OpenConfirmation({
                            dispatch: dispatch,
                            Title: "Fshini Produktin?",
                            Message:
                              "A jeni sigurt qe deshironi ta fshni kete produkt, kjo do ta largoj produktin nga platforma pergjithmone.",
                            Action: () =>
                              ProductDelete(dispatch, page._id, user.Id),
                          })
                        );
                      }}
                      type="button"
                      className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#387CFF] focus:ring-offset-2"
                    >
                      <TrashIcon />
                    </button>
                  </span>

                  <span className="ml-3">
                    <button
                      onClick={() =>
                        window.open(`/produktet/${page.Slug}`, "_blank")
                      }
                      className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#387CFF] focus:ring-offset-2"
                    >
                      <ViewIcon />
                    </button>
                  </span>
                </div>
              </div>
            ))
          )}
        </section>

        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </Normal>
  );
}
