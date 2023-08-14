import { Fragment } from "react";
import { Global } from "../../../configs/Head";
import { Translation } from "../../../utils/Translations";

export default function Info() {
  const name = Translation("no-permissions-title");

  return (
    <Fragment>
      <Global title={name} index={true} />
      
      <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
        {name}
      </h1>
      
      <p className="mt-5 text-base text-gray-500">
        {Translation("no-permissions-description")}
      </p>
    </Fragment>
  );
}
