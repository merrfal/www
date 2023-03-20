import { useDispatch } from "react-redux";
import { MenuLink } from "../";
import { LogoutAccount } from "../../../controllers/Slices";

export default function Dropdown({ username }) {
  const dispatch = useDispatch();
  const out = () => dispatch(LogoutAccount());

  return (
    <div className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      <div className="py-1" role="none">
        <MenuLink name="Profili Im" link={`/profili/${username}`} />
        {/* <MenuLink name="Të Preferuarat" link={`/preferuarat`} /> */}
        {/* <MenuLink name="Produktet e Mia" link={`/postimet`} /> */}

        <button onClick={out} className="text-gray-700 block w-full px-4 py-2 text-left text-sm">
          Shkyçuni
        </button>
      </div>
    </div>
  );
}
