import { bool } from "prop-types"
import { Translation } from "../../../utils/Translations"

export default function IsGiven({ isGiven }) {
  if(isGiven) return (
    <span className="text-xs z-[99] absolute font-semibold inline-block py-1 px-2 rounded text-[#C2473F] bg-[#fdf4f3] last:mr-0 mr-1 top-2 left-2">
      {Translation("given")}
    </span>
  )

  else return (
    <span className="text-xs z-[99] absolute font-semibold inline-block py-1 px-2 rounded text-[#3C745E] bg-[#f1faf6] last:mr-0 mr-1 top-2 left-2">
      {Translation("not-given")}
    </span>
  )
  
}

IsGiven.propTypes = {
  isGiven: bool.isRequired
}