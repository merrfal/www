import Link from "next/link";

export default function Buttons() {
  return (
    <div className="mt-8 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
      <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
        <Link href="/shto">
          <a>
            <button className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-[#33333] bg-white hover:bg-indigo-50 sm:px-8 hover:cursor:pointer transition-all">
              Dhuro
            </button>
          </a>
        </Link>

        <Link href="/kerko">
          <a>
            <button className="flex items-center justify-center px-4 py-3 border border-white text-base font-medium rounded-md shadow-sm text-white bg-opacity-60 hover:bg-opacity-70 sm:px-8 hover:cursor:pointer hover:bg-[#ffffff05] transition-all">
              Shfleto
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}
