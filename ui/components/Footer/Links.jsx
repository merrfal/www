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
          const path = usePath(router, link.href.split("/")[1], 1);

          return (
            <li className="text-sm" key={index} style={{lineHeight: 1}}>
              <Link href={link.href} legacyBehavior>
                <a className={path ? activePathClasses : inactivePathClasses}>
                  {link.name}
                </a>
              </Link>
            </li>
          )
        })}

        <li className="text-sm">
          <a href={`mailto:${APP_EMAIL}`} className="text-gray-500 hover:text-[#377DFF] transition-all">
            {Translation("contact-us")}
          </a>
        </li>
      </ul>
    </div>
  );
}
