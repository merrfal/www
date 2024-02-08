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
      <title>{title ? `${title?.replace('.', '')} - ${Translation("merrfal")}` : Translation("merrfal")}</title>

      <meta property="og:title" content={`${title?.replace('.', '')} - ${Translation("merrfal")}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {local_index !== true && <meta name="robots" content="noindex" />}
    </MetaTags>
  )
}