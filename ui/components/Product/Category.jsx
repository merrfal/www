import Link from "next/link";
import { Categories } from "../../../data";

export default function Category({ category }) {
    const selectedCategeroy = Categories?.find((c) => c._id === category);

    return (
        <Link href={`/kategorite/${selectedCategeroy?.slug}`} className="font-bold text-xs inline-block py-[0.15rem] px-1.5 rounded text-[#377DFF] bg-[#eff0f5] last:mr-0 mr-1">
            {selectedCategeroy?.name}
        </Link>
    );
}