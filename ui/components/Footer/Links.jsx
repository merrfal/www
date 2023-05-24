import Link from "next/link";

import { HelpfulLinks } from "../../../data";
import { Translation } from "../../../utils/Translations";
import { APP_EMAIL } from "../../../configs/Constants";

export default function Links() {
  return (
    <div className="hidden sm:inline-block">
      <h3 className="text-sm font-medium text-gray-900 select-none">
        {Translation("more")}
      </h3>

      <ul className="mt-6 space-y-6">
        {HelpfulLinks.map((link, index) => (
          <li className="text-sm" key={index} style={{lineHeight: 1}}>
            <Link href={link.href}>
              <a className="text-gray-500 hover:text-gray-600">
                {link.name}
              </a>
            </Link>
          </li>
        ))}

        <li className="text-sm">
          <a
            href={`mailto:${APP_EMAIL}`}
            className="text-gray-500 hover:text-gray-600"
          >
            {Translation("contact-us")}
          </a>
        </li>
      </ul>
    </div>
  );
}
