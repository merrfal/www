import { SmLocationIcon } from "../../icons";
import { CapitalizeText } from "../../../utils/TextFormatting";
import { CityIdToName } from "../../../utils/Locations";

export default function Info({ productData }) {
  const { name, address, city } = productData;
  const cloneCity = CityIdToName(city)

  return (
    <div className="flex items-center py-4">
      <div className="flex-auto">
        <FullLocation location={`${address}, ${cloneCity}`} />
        <FullName name={name} />
      </div>
    </div>
  );
}

const FullLocation = ({ location }) => (
  <div className="flex items-center mb-.5 hover:cursor-pointer">
    <SmLocationIcon />

    <p className="hidden md:block text-slate-600 font-medium text-[12px] mt-[-0.5px]">
      {CapitalizeText(location.length > 38 ? location.substring(0, 37) + "..." : location)}
    </p>

    <p className="md:hidden text-slate-600 font-medium text-[12px]">
      {CapitalizeText(location.length > 28 ? location.substring(0, 28).trim() + "..." : location)}
    </p>
  </div>
);

const FullName = ({ name }) => (
  <div className="font-bold text-gray-900 text-lg hover:cursor-pointer ml-[2px]">
    {CapitalizeText(name.length > 28 ? name.substring(0, 27) + "..." : name)}
  </div>
);