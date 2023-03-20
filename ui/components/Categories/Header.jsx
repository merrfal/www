import Link from "next/link";

export default function Header() {
  return (
    <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
        Shfletoni Kategoritë
      </h2>
      <Link href="/kategorite">
        <a className="hidden text-sm font-semibold text-[#377DFF] hover:text-[#377DFF70] sm:block">
          Shfleto të gjitha Kategoritë &rarr;
        </a>
      </Link>
    </div>
  );
}
