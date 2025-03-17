import MetaTags from "next/head"

import { Translation } from "../utils/Translations"

export const Global = (props) => {
  const { 
    title, 
    description = Translation("merrfal-description"), 
    image = '/general-images/merrfal-hero.png'
  } = props

  let formatted_title = (title === undefined || title?.includes?.('undefined')) ? Translation("merrfal") : `${title?.replace(/(^\w|\s\w)/g, (char) => char.toUpperCase())} - ${Translation("merrfal")}`

  return (
    <MetaTags>
      <title>
        {formatted_title}
      </title>

      <meta property="og:title" content={formatted_title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />      
    </MetaTags>
  )
}