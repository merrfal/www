import Link from "next/link";

import { HelpfulLinks } from "../../../data";
import { Translation } from "../../../utils/Translations";
import { APP_EMAIL } from "../../../configs/Constants";
import { usePath } from "../../../hooks";
import { useRouter } from "next/router"

export default function Links() {
  const router = useRouter();

  const activePathClasses = "text-[#377DFF] transition-all";
  const inactivePathClasses = "text-gray-500 hover:text-[#377DFF] transition-all"

  return (
    <div>
      <h3 className="text-sm font-medium text-gray-900 select-none">
        {Translation("more")}
      </h3>

      <ul className="mt-6 space-y-6">
        {HelpfulLinks.map((link, index) => {
          const path = link.href ? false : usePath(router, link.link.split("/")[1], 1);

          return (
            <li className="text-sm" key={index} style={{lineHeight: 1}}>
              {
                link?.link &&
                <Link href={link.link}>
                  <span className={path ? activePathClasses : inactivePathClasses}>
                    {link.name}
                  </span>
                </Link>
              }

              {
                link?.href &&
                <a href={link.href} target="_blank">
                  <span className={path ? activePathClasses : inactivePathClasses}>
                    {link.name}
                  </span>
                </a>
              }
            </li>
          )
        })}
      </ul>
    </div>
  );
}
