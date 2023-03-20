import Link from "next/link";
import { PlusIcon, NoneIcon } from "../../icons";

export default function None() {
  return (
    <div className="text-center">
      <NoneIcon />
      <h3 className="mt-2 text-sm font-medium text-gray-900">
        Asnjë produkt i shtuar
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        Ndihmoni të tjerët duke shtuar dhe dhënë diçka për ata që janë në
        nevojë.
      </p>
      <div className="mt-6">
        <Link href="/shto">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#387DFF] hover:bg-[#387DFF95] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#387DFF]"
          >
            <PlusIcon />
            Shto produktin e parë
          </button>
        </Link>
      </div>
    </div>
  );
}
