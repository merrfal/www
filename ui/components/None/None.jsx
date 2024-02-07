import Link from "next/link";

import { PlusIcon, NoneIcon } from "../../icons";
import { Translation } from "../../../utils/Translations";

export default function None() {
  return (
    <div className="text-center py-32">
      <NoneIcon />

      <h3 className="mt-2 text-sm font-medium text-gray-900">
        {Translation("any-product-added")}
      </h3>

      <p className="mt-1 text-sm text-gray-500">
        {Translation("help-others-while-adding-a-product")}
      </p>

      <div className="mt-6">
        <Link href="/shto">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#387DFF] hover:bg-[#387DFF95] focus:outline-none transition-all"
          >
            <PlusIcon /> {Translation("add_the_first_product")}
          </button>
        </Link>
      </div>
    </div>
  );
}
