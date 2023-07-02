import { func, object } from "prop-types";
import { DescriptionValidation } from "../../../utils/Forms";
import { Translation } from "../../../utils/Translations";
import { RequiredLabel, Wildcard } from "../../components";

export default function Description({product, onInput, validation: v}) {
  const validation = DescriptionValidation(product?.productData?.description);

  return (
    <div>
      <label htmlFor="description" className="block text-sm font-medium text-gray-700">
        {Translation("product-description")}<Wildcard />
      </label>

      <div className="mt-1">
        <textarea
          onChange={(e) => onInput("description", e)}
          value={product?.productData?.description}
          id="description"
          placeholder={Translation("product-description-placeholder")}
          rows="7"
          className="p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#377DFF] focus:ring-[#377DFF] sm:text-sm"
        />
      </div>

      {v.description && validation.error && <RequiredLabel message={validation.message} />}
    </div>
  );
}

Description.propTypes = {
  product: object.isRequired,
  onInput: func.isRequired,
  validation: object.isRequired,
}