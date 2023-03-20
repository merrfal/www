import Link from "next/link";
import { HelpfulLinks } from "../../../data";

export default function Links() {
  return (
    <div className="hidden sm:inline-block">
      <h3 className="text-sm font-medium text-gray-900 select-none">
        Më Shumë
      </h3>

      <ul className="mt-6 space-y-6">
        {HelpfulLinks.map((link) => (
          <li className="text-sm">
            <Link href={link.href}>
              <a className="text-gray-500 hover:text-gray-600">{link.name}</a>
            </Link>
          </li>
        ))}

        <li className="text-sm">
          <a
            href="mailto:tung@merrfal.com"
            className="text-gray-500 hover:text-gray-600"
          >
            Na Kontaktoni
          </a>
        </li>
      </ul>
    </div>
  );
}
