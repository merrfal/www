import Link from "next/link";
import { EditIcon } from "../../icons";

export default function Edit({slug}) {
  return (
    <Link href={`/${slug}/edit`}>
        <a className="bg-white p-1 flex justify-center rounded-md mr-1 hover:bg-gray-50 border-gray-150 border transition-all">
            <EditIcon class="h-5 w-5 text-gray-400" />
        </a>
    </Link>
  )
}
