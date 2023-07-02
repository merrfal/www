import Link from "next/link";
import { string } from "prop-types";

export default function CustomLink({ name, link }) {
  return (
    <Link href={link}>
      <span className="text-gray-700 block px-4 py-2 text-sm">
        {name}
      </span>
    </Link>
  );
}

CustomLink.propTypes = {
  name: string.isRequired,
  link: string.isRequired,
}