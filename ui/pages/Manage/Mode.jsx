import { ModeValidation } from "../../../utils/Forms";
import { Translation } from "../../../utils/Translations";
import { RequiredLabel, Wildcard } from "../../components";

export default function Mode({product, onInput, validation: v}){
  const validation = ModeValidation(product?.productData?.postedAnonymously);

  return (
    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
      <label htmlFor="mode" className="block text-sm font-medium text-gray-700">
        {Translation("post-anonymously-quesiton")}<Wildcard />
      </label>

      <select
        id="mode"
        value={product?.productData?.postedAnonymously}
        className="p-3 mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-[#377DFF] focus:outline-none focus:ring-[#377DFF] sm:text-sm"
        onChange={(e) => onInput("postedAnonymously", e)}
        style={product?.productData?.postedAnonymously === "" ? {color: "#777"} : {}}
      >
        { 
          product?.productData?.postedAnonymously === "" &&  
          <option value="" disabled>
            {Translation("select-the-placeholder")}
          </option>
        }
        
        <option value={false}>{Translation("post-anonymously")}</option>
        <option value={true}>{Translation("post-not-anonymously")}</option>
      </select>

      {v?.postedAnonymously && validation?.error && <RequiredLabel message={validation?.message} />}
    </div>
  );
}
