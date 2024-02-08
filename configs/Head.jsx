import MetaTags from "next/head"

import { Translation } from "../utils/Translations"
import { FB_PROJECT_ID } from "../configs/Envs"

export const Global = (props) => {
  const { 
    title, 
    description = Translation("merrfal-description"), 
    image = '/general-images/merrfal-hero.png',
    index = true
  } = props

  let local_index = FB_PROJECT_ID.includes('local') ? true : index
  
  return (
    <MetaTags>
      <meta charSet="UTF-8" />

      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />

      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />

      <meta name="author" content={Translation("merrfal")} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>{title ? `${title?.replace('.', '')} - ${Translation("merrfal")}` : Translation("merrfal")}</title>

      <meta property="og:title" content={`${title?.replace('.', '')} - ${Translation("merrfal")}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {local_index !== true && <meta name="robots" content="noindex" />}
    </MetaTags>
  )
}