import { Normal } from "../../layouts"
import { Products, Cta, Categories, Hero } from "../../components"
import { Global } from "../../../configs/Head"
import { Translation } from "../../../utils/Translations"

export default function Home() {
  return (
    <Normal>
      <Global
        title={Translation("merrfal-tagline")} 
        description={Translation("merrfal-description")}
      />

      <Hero />
      <Categories />
      <Products />
      <Cta />
    </Normal>
  )
}