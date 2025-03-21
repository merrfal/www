import { SmLocationIcon } from "../../icons"
import { CapitalizeText } from "../../../utils/TextFormatting"
import { CityIdToName } from "../../../utils/Locations"

export default function Info({ productData }) {
  const { name, address, city } = productData
  const cloneCity = CityIdToName(city)

  return (
    <div className="flex items-center pt-4">
      <div className="flex-auto">
        <FullLocation location={`${address?.trim()}, ${cloneCity?.trim()}`} />
        <FullName name={name?.trim()} />
      </div>
    </div>
  )
}

const FullLocation = ({ location }) => {
  return (
    <div className="flex items-center mb-.5 hover:cursor-pointer">
    <SmLocationIcon />

    <p className="hidden md:block text-slate-600 font-medium text-[12px] mt-[-0.5px]">
      {CapitalizeText(location?.trim()?.length > 38 ? location.substring(0, 37)?.trim() + "..." : location?.trim())}
    </p>

    <p className="md:hidden text-slate-600 font-medium text-[12px]">
      {CapitalizeText(location?.trim()?.length > 28 ? location.substring(0, 28)?.trim() + "..." : location?.trim())}
    </p>
  </div>
  )
}

const FullName = ({ name }) => (
  <div className="font-bold text-gray-900 text-lg hover:cursor-pointer ml-[2px]">
    {CapitalizeText(name?.length > 28 ? name?.substring(0, 27) + "..." : name)}
  </div>
)