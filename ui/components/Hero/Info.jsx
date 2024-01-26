import { Fragment } from "react";
import { Translation } from "../../../utils/Translations";

export default function Info() {
  const name = Translation("merrfal-tagline");
  const description = Translation("merrfal-description");

  return (
    <Fragment>
      <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
        <span className="block text-white text-center">{name}</span>
      </h1>

      <p className="mt-3 max-w-lg mx-auto text-center text-[18px] lg:text-[19px] text-white sm:max-w-3xl">
        {description}
      </p>
    </Fragment>
  );
}
