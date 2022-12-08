import { AuthWithGoogle } from "../../../controllers/front";
import { Normal } from "../../layouts";
import { Permissonless as Meta } from "../../../data/metas";
import { useDispatch } from "react-redux";

export default function Permissonless() {
  const dispatch = useDispatch();

  return (
    <Normal>
      <Meta />
      <div className="min-h-full pt-28 pb-32 flex flex-col bg-white ">
        <div className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 ">
            <div className="text-center mt-[-100px]">
              <div className="flex justify-center align-center items-center">
                <lottie-player
                  src="https://assets7.lottiefiles.com/packages/lf20_f2vwipdy.json"
                  background="transparent"
                  speed="1"
                  style={{ width: "320px" }}
                  loop
                  autoplay
                />
              </div>
              <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                Nuk jeni identifikuar!
              </h1>
              <p className="mt-5 text-base text-gray-500">
                Për ta parë këtë pjesë të platformës ju duhet që të identifikoni
                llogarinë tuaj që përdorni..
              </p>
              <div className="mt-6">
                <div onClick={() => AuthWithGoogle(dispatch)}>
                  <p className="hover:cursor-pointer text-base font-medium text-indigo-600 hover:text-indigo-500">
                    Kyçu në llogari<span> &larr;</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Normal>
  );
}
