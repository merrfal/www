import MetaTags from "next/head";

import { IS_PROD } from "./Envs";
import { Translation } from "../utils/Translations";

export const Global = ({ title, description, image, index }) => {
  return (
    <MetaTags>
      {index && IS_PROD && <meta name="robots" content="noindex" />}
      <meta charSet="UTF-8" />
      <link rel="icon" href="favicon.ico" sizes="any" />
      <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
      <meta name="author" content={Translation("merrfal")} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>{title ? `${title} - ${Translation("merrfal")}` : Translation("merrfal")}</title>
      <meta property="og:title" content={`${title} - ${Translation("merrfal")}`} />
      <meta property="og:description" content={description} />

      <meta property="og:image" content={image ? image : '/merrfal-hero.png'} />
    </MetaTags>
  );
};
