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
  <div className="flex items-center mb-1 hover:cursor-pointer">
    <SmLocationIcon />

    <p className="text-slate-700 text-[12px] mt-[-0.5px]">
      {CapitalizeText(location.length > 38 ? location.substring(0, 37) + "..." : location)}
    </p>
  </div>
);

const FullName = ({ name }) => (
  <div className="font-medium text-lg hover:cursor-pointer ml-[2px]">
    {CapitalizeText(name.length > 28 ? name.substring(0, 27) + "..." : name)}
  </div>
);