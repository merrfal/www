import Link from "next/link";

import { Categories as AllCategories } from "../../../data";
import { Translation } from "../../../utils/Translations";

export default function Categories() {
  return (
    <div>
      <h3 className="text-sm font-medium text-gray-900 select-none">
        {Translation("categories")}
      </h3>

      <ul className="mt-6 space-y-6">
        {AllCategories.map((category, index) => {
          if (index < 4) {
            return (
              <li key={index} className="text-sm" style={{lineHeight: 1}}>
                <Link href={`/kategorite/${category.slug}`}>
                  <a className="text-gray-500 hover:text-gray-600">
                    {category.name}
                  </a>
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
