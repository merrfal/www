import MetaTags from "next/head";

import { Translation } from "../utils/Translations";

export const Global = (props) => {
  const { 
    title, 
    description = Translation("merrfal-description"), 
    image = '/merrfal-hero.png',
    index = false 
  } = props;
  
  return (
    <MetaTags>
      <meta charSet="UTF-8" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
      <meta name="author" content={Translation("merrfal")} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>{title ? `${title} - ${Translation("merrfal")}` : Translation("merrfal")}</title>

      <meta property="og:title" content={`${title} - ${Translation("merrfal")}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {index === true && <meta name="robots" content="noindex" />}
    </MetaTags>
  );
};