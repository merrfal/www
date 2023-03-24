import Link from "next/link";

export default function Category({ category, index, kategori }) {
  const { name, icon, slug } = category;

  return (
    <Link href={`/kategoria/${slug}`} key={index}>

      <a className={kategori ? "hover:cursor-pointer relative h-[260px] sm:h-[400px] mb-6 rounded-lg rounded p-6 flex flex-col mx-2 transition-all" :
        "hover:cursor-pointer relative h-[350px] sm:h-[400px] mb-6 rounded-lg rounded p-6 flex flex-col mx-2 transition-all"
      }>
        <span className="absolute inset-0">
          <img
            src={icon === "" ? "/category-no.png" : icon}
            alt={name + "s image"}
            className={`
            w-full h-full object-center object-cover duration-700 ease-in-out group-hover:opacity-75
            ${!icon
                ? "scale-110 blur-2xl grayscale"
                : "scale-100 blur-0 grayscale-0"
              }
          `}
          />
        </span>
        <span className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
        <span className="relative mt-auto sm:text-xl text-sm font-bold text-white w-[200px]">
          {name}
        </span>
      </a>
    </Link >
  );
}
