import Link from "next/link";

export default function Category({ category, index }) {
  const { name, icon, slug } = category;

  return (
    <Link href={`/kategorite/${slug}`} key={index}>
      <a className="hover:cursor-pointer relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-80 transition-all xl:w-auto">
        <span className="absolute inset-0">
          <img
            src={icon === "" ? "/category-no.png" : icon}
            alt={name + "s image"}
            className={`
              w-full h-full object-center object-cover duration-700 ease-in-out group-hover:opacity-75
              ${
                !icon
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })
              `}
          />
        </span>
        <span className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
        <span className="relative mt-auto text-center text-xl font-bold text-white">
          {name}
        </span>
      </a>
    </Link>
  );
}
