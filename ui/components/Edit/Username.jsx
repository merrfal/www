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

      <div className="flex items-center w-full">
        <div className="z-10 shadow-sm mt-1 inline-flex items-center p-3 font-medium text-center text-gray-500 border-y border-l border-gray-300 rounded-s-lg hover:bg-gray-50 transition-all ease-in-out duration-500">
          <span className="select-none flex gap-2 h-auto sm:text-sm">
            @
          </span>
        </div>

        <input
          type="text"
          id="username"
          className="mt-1 block rounded-tb-md rounded-tr-md p-3 w-full border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
          placeholder={Translation("username-placeholder")}
          value={user?.userData?.username}
          onChange={(e) => onInput("username", e, true, "userData")}
        />
      </div>

      {validations?.username && validation?.error ? <RequiredLabel message={validation?.message} /> : !newUsernameIsAvailable && <RealTimeValidation message={Translation("username-is-in-use")} />}
    </div>
  );
}