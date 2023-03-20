import Link from "next/link";
import { Categories as AllCategories } from "../../../data";

export default function Categories() {
  return (
    <div>
      <h3 className="text-sm font-medium text-gray-900 select-none">
        Kategoritë
      </h3>
      <ul className="mt-6 space-y-6">
        {AllCategories.map((category, index) => {
          if (index < 4) {
            return (
              <li className="text-sm">
                <Link href={`/kategoria/${category.slug}`}>
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
