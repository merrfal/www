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
  let formatted_title = (title === undefined || title?.includes?.('undefined')) ? Translation("merrfal") : `${title?.replace(/(^\w|\s\w)/g, (char) => char.toUpperCase())} - ${Translation("merrfal")}`

  console.log('formatted_title', formatted_title)

  return (
    <MetaTags>
      <title>
        {formatted_title}
      </title>

      <meta property="og:title" content={formatted_title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {local_index && <meta name="robots" content="noindex" />}
    </MetaTags>
  )
}