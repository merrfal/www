import Link from "next/link";
import { Categories as AllCategories } from "../../../data";

export default function IsGiven({ category }) {
  const selectedCategory = AllCategories.find((cat) => cat._id === category);

  return (
    <Link href={`/kategorite/${selectedCategory?.slug}`}>
      <span className="text-xs z-[99] absolute font-semibold inline-block py-1 px-2 rounded text-[#377DFF] bg-[#377DFF30] last:mr-0 mr-1">
        {selectedCategory?.name}
      </span>
    </Link>
  );
}
