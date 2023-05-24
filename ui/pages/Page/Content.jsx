import { Terms, Privacy } from "../../../data";

export default function Content({ mode }) {
  const page = mode === "terms" ? Terms : Privacy;

  return (
    <div className="mt-16 w-full text-m text-gray-700 mb-20">
      {page?.map((item, index) => (
          <div key={index}>
            <h1 className="text-2xl mb-2 font-extrabold tracking-tight text-gray-800">
              {item?.title}
            </h1>

            <h3 className="text-1xl mb-2 font-extrabold tracking-tight text-gray-600">
              {item?.subtitle}
            </h3>
            
            <p className="mt-4 w-full text-m text-gray-600 mb-20">
              {item?.text}
            </p>
          </div>
      ))}
    </div>
  );
}
