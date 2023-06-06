import Link from "next/link";

import { Categories as AllCategories } from "../../../data";
import { Translation } from "../../../utils/Translations";
import { usePath } from "../../../hooks";
import { useRouter } from "next/router";

export default function Categories() {
  const router = useRouter();

  const activePathClasses = "text-[#377DFF] transition-all";
  const inactivePathClasses = "text-gray-500 hover:text-[#377DFF] transition-all";

  return (
    <div>
      <h3 className="text-sm font-medium text-gray-900 select-none">
        {Translation("categories")}
      </h3>

      <ul className="mt-6 space-y-6">
        {AllCategories?.filter((category) => category.favorite)
          .slice(0, 4)
          .map((link, index) => {
            const path = usePath(router, link.slug);
          
            return (
              <li key={index} className="text-sm" style={{lineHeight: 1}}>
                <Link href={`/kategorite/${link?.slug}`}>
                  <a className={path ? activePathClasses : inactivePathClasses}>
                    {link?.name}
                  </a>
                </Link>
              </li>
            )
          }
        )}
      </ul>
    </div>
  );
}
