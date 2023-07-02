import PropTypes from "prop-types";

import { UsernameValidation } from "../../../utils/Forms";
import { Translation } from "../../../utils/Translations";
import { Wildcard, RequiredLabel, RealTimeValidation } from "../";
import { useEffect, useState } from "react";
import { CheckIfExist } from "../../../api/User";

export default function Username({ user, validations, setValidations, onInput, dispatch, account}) {
  const [newUsernameIsAvailable, setNewUsernameIsAvailable] = useState(true);

  const validation = UsernameValidation(user?.userData?.username);

  const CheckIfExistsAwait = async (setNewUsernameIsAvailable) => {
    const res = await CheckIfExist('userData.username', user?.userData?.username, dispatch)
    setNewUsernameIsAvailable(!res);
  }

  useEffect(() => {
    if(account?.User?.userData?.username !== user?.userData?.username) {
      CheckIfExistsAwait(setNewUsernameIsAvailable)
      setValidations({...validations, username: true})
    }

    else {
      setNewUsernameIsAvailable(true);
      setValidations({...validations, username: false})
    }
  }, [user]);

  return (
    <div className="col-span-12 lg:col-span-3 flex flex-col justify-start items-start">
      <label htmlFor="username" className="block text-sm font-medium text-gray-700">
        {Translation("username")}<Wildcard />
      </label>

      <input
        type="text"
        id="username"
        className="mt-1 block p-3 w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
        placeholder={Translation("username-placeholder")}
        value={user?.userData?.username}
        onChange={(e) => onInput("username", e, true, "userData")}
      />

      {validations?.username && validation?.error ? <RequiredLabel message={validation?.message} /> : !newUsernameIsAvailable && <RealTimeValidation message={Translation("username-is-in-use")} />}
    </div>
  );
}

Username.propTypes = {
  user: PropTypes.object.isRequired,
  validations: PropTypes.object.isRequired,
  setValidations: PropTypes.func.isRequired,
  onInput: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  account: PropTypes.object.isRequired
}