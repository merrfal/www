import Link from "next/link";

import { useRouter } from "next/router";
import { usePath } from "../../../hooks";

export default function MenuLink({ name, link, username }) {
  const router = useRouter();
  const path = usePath(router, username);

  const activePathClasses = "block px-4 py-2 text-sm text-[#377DFF] transition-all cursor-pointer";
  const inactivePathClasses = "text-gray-700 block px-4 py-2 text-sm hover:text-[#377DFF] transition-all cursor-pointer";

  return (
    <Link href={link}>
      <span className={path ? activePathClasses : inactivePathClasses}>
        {name}
      </span>
    </Link>
  );
}