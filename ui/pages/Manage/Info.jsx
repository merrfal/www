import { Fragment } from "react";
import { Translation } from "../../../utils/Translations";

export default function Info(props) {
  const { half = false } = props;
  
  return (
    <Fragment>
      <div className="flex text-sm text-gray-600 justify-center items-center">
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
    </Fragment>
  );
}