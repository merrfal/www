import Link from "next/link";

export default function MenuLink({ name, link }) {
  return (
    <Link href={link}>
      <a className="text-gray-700 block px-4 py-2 text-sm">{name}</a>
    </Link>
  );
}
