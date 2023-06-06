import { EditIcon } from "../../icons";
import { NO_COVER } from "../../../configs/Constants";
import { Translation } from "../../../utils/Translations";

export default function Cover({ user }) {
  return (
    <div className="relative">
      <img className="h-32 rounded-xl w-full object-cover lg:h-64" src={user?.userData?.cover} />

      {/* <div className="absolute top-2 right-2 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
        <button className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none transition-all">
          <EditIcon />
          <span>{Translation("change-cover")}</span>
        </button>
      </div> */}
    </div>
  );
}
