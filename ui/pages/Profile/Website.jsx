import { Translation } from "../../../utils/Translations";
import { WebsiteIcon } from "../../icons";

export default function EditButton({ userData }) {
  return (
    <a href={userData.website.includes("http") ? userData.website : `https://${userData.website}`}>
      <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
        <button className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
          <WebsiteIcon />
          <span>
            {Translation("visit-website")}
          </span>
        </button>
      </div>
    </a>
  );
}
