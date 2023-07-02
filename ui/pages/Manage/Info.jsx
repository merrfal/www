import { bool } from "prop-types";
import { Translation } from "../../../utils/Translations";

export default function Info({half = false}) {
  return (
    <>
      <div className="flex text-sm text-gray-600">
        <label className="relative cursor-pointer rounded-md bg-white font-medium text-[#377DFF] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#377DFF] focus-within:ring-offset-2 hover:text-[#377DFF]">
          <span className="text-[#377DFF]">
            {Translation("upload-a-photo")}
          </span>
        </label>

        {!half && <p className="pl-1">
          {Translation("or-drag-it-here")}
        </p>}
      </div>
      
      <p className="text-xs text-gray-500">
        {Translation("supported-formats-info")}
      </p>
    </>
  );
}

Info.propTypes = {
  half: bool,
}
