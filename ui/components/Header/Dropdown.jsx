import { string } from "prop-types";

import { useDispatch } from "react-redux";
import { MenuLink } from "../";
import { LogoutAccount } from "../../../controllers/Slices";
import { Translation } from "../../../utils/Translations";

export default function Dropdown({ username }) {
  const dispatch = useDispatch();
  const out = () => dispatch(LogoutAccount());

  return (
    <div className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" style={{marginTop: '120px'}}>
      <div className="py-1" role="none">
        <MenuLink 
          name={Translation("my-profile")} 
          link={`/profili/${username}`} 
          username={username}
        />

        <button onClick={out} className="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:text-[#377DFF] transition-all cursor-pointer">
          {Translation("logout")}
        </button>
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  username: string.isRequired
}