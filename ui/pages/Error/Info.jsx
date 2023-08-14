import { Global } from "../../../configs/Head";
import { Translation } from "../../../utils/Translations";

export default function Info({ code }) {
  const name = Translation(`error-${code}-title`);
  const message = Translation(`error-${code}-description`);

  return (
      <div className="w-full flex justify-center items-center flex-col align-center">
        <Global title={name} description={message} index={true} />

        <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
          {name}
        </h1>

        <p className="mt-5 text-base w-full lg:w-[50%] xl:w-[50%] md:w-[50%] text-gray-500">
          {message}
        </p>
      </div>
  );
}