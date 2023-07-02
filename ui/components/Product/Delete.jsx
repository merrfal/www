import Link from "next/link";

import { string } from "prop-types";
import { TrashIcon } from "../../icons";

export default function DeleteComponent({ slug }) {
  return (
    <Link href={`/${slug}/perditeso?fshije=po`}>
      <a className="bg-white p-1 flex justify-center mr-1 rounded-md hover:bg-red-50 border-gray-150 border transition-all">
        <TrashIcon className="h-5 w-5 text-gray-400" />
      </a>
    </Link>
  );
}

DeleteComponent.propTypes = {
  slug: string.isRequired,
}