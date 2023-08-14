import Link from "next/link";
import { NO_CATEGORY } from "../../../configs/Constants";

// import { useState } from "react";
// const [categoryThumbnail, setCategoryThumbnail] = useState("")
// onError={() => setCategoryThumbnail(NO_CATEGORY)}

export default function Category(props) {
  const { category} = props;
  const { name, icon, slug } = category;

  return (
    <Link href={`/kategorite/${slug}`} legacyBehavior>
      <a className="hover:cursor-pointer relative h-[350px] sm:h-[400px] rounded p-6 flex flex-col hover:opacity-80 transition-all duration-1000">
        <span className="absolute inset-0">
          <img
            src={icon === "" ? NO_CATEGORY : icon}
            alt={name + "s image"}
            loading="lazy"
            className={`w-full h-full object-center object-cover duration-700 ease-in-out group-hover:opacity-75 rounded-xl ${!icon ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0" }`}
          />
        </span>
        
        <span className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50 rounded-xl" />
        
        <span className="relative mt-auto sm:text-xl text-sm font-bold text-white w-[200px]">
          {name}
        </span>
      </a>
    </Link>
  );
}