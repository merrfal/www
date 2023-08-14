import Link from "next/link";
import { Categories as AllCategories } from "../../../data";

export default function Category({ category }) {
  const selected = AllCategories.find((cat) => cat._id === category);

  return (
    <Link href={`/kategorite/${selected.slug}`}>
      <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-[#377DFF] bg-[#377DFF30] last:mr-0 mr-1">
        {selected?.name}
      </span>
    </Link>
  );
}