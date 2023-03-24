import Link from "next/link";

export default function Buttons() {
  return (
    <div class="mt-8 max-w-md mx-10 sm:max-w-none sm:flex sm:justify-center">
      <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
        <Link href="/shto">
          <a>
            <button class="flex items-center justify-center w-full px-4 py-3 border mb-2 border-transparent text-base font-medium rounded-md shadow-sm text-[#33333] bg-white hover:bg-indigo-50 hover:cursor:pointer transition-all md:py-4 md:px-8">
              Dhuro
            </button>
          </a>
        </Link>
        <Link href="/produktet">
          <a>
            <button class="flex items-center justify-center w-full px-4 py-3 border border-white text-base font-medium rounded-md shadow-sm text-white bg-opacity-60 hover:bg-opacity-70 hover:cursor:pointer hover:bg-[#ffffff05] transition-all md:py-4 md:px-8">
              Shfleto
            </button>
          </a>
        </Link>
      </div>
    </div>


  );
}
