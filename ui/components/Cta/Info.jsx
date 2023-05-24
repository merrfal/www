import { Translation } from "../../../utils/Translations";

export default function Info() {
  return (
    <>
      <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block text-center lg:text-left">
          {Translation("cta-title")}
        </span>

        <span className="block text-center lg:text-left">
          <span className="bg-[#377DFF] bg-clip-text text-transparent text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl">
            {Translation("cta-description")}
          </span>
        </span>
      </h2>
    </>
  );
}
