import Link from "next/link";

export default function Header() {
  return (
    <div className=" sm:flex sm:items-center sm:justify-between  lg:px-2 xl:px-0">
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
        Shfleto Produktet e Fundit
      </h2>
      <Link href="/kerko">
        <a className="hidden text-sm font-semibold text-[#377DFF] hover:text-[#377DFF70] sm:block">
          Shfleto të gjitha Produktet &rarr;
        </a>
      </Link>
    </div>
  );
}
