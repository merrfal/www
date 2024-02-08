import { useDispatch } from "react-redux"
import { Auth } from "../../../configs/Firebase"
import { MenuLink } from "../"
import { LogoutAccount } from "../../../controllers/Slices"
import { Translation } from "../../../utils/Translations"

export default function Dropdown({ username }) {
  const dispatch = useDispatch()

  const AsyncLogout = async () => {
    await Auth.signOut()
    dispatch(LogoutAccount())
  }

  const out = () => AsyncLogout()

  return (
    <div className="absolute w-28 right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg border border-gray-100 outline-none" style={{ marginTop: '124px' }}>
      <MenuLink 
        name={Translation("my-profile")} 
        link={`/profili/${username}`} 
        username={username}
      />

      <button onClick={out} className="flex gap-2 items-center text-gray-700 font-medium w-full px-3 py-[7px] text-left text-sm transition-all cursor-pointer">
        <svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.3438 17.1562H18.6961C18.5836 17.1562 18.4781 17.2055 18.4078 17.2922C18.2438 17.4914 18.068 17.6836 17.8828 17.8664C17.1255 18.6245 16.2285 19.2286 15.2414 19.6453C14.2187 20.0773 13.1195 20.2989 12.0094 20.2969C10.8867 20.2969 9.79922 20.0766 8.77735 19.6453C7.79021 19.2286 6.89321 18.6245 6.13594 17.8664C5.37731 17.1109 4.7724 16.2155 4.35469 15.2297C3.9211 14.2078 3.70313 13.1227 3.70313 12C3.70313 10.8773 3.92344 9.79219 4.35469 8.77031C4.77188 7.78359 5.37188 6.89531 6.13594 6.13359C6.9 5.37187 7.78828 4.77187 8.77735 4.35468C9.79922 3.92343 10.8867 3.70312 12.0094 3.70312C13.132 3.70312 14.2195 3.92109 15.2414 4.35468C16.2305 4.77187 17.1188 5.37187 17.8828 6.13359C18.068 6.31875 18.2414 6.51094 18.4078 6.70781C18.4781 6.79453 18.5859 6.84375 18.6961 6.84375H20.3438C20.4914 6.84375 20.5828 6.67969 20.5008 6.55547C18.7031 3.76172 15.5578 1.9125 11.9836 1.92187C6.36797 1.93593 1.86563 6.49453 1.92188 12.1031C1.97813 17.6227 6.47344 22.0781 12.0094 22.0781C15.5742 22.0781 18.7055 20.2312 20.5008 17.4445C20.5805 17.3203 20.4914 17.1562 20.3438 17.1562ZM22.4273 11.8523L19.1016 9.22734C18.9773 9.1289 18.7969 9.21797 18.7969 9.375V11.1562H11.4375C11.3344 11.1562 11.25 11.2406 11.25 11.3437V12.6562C11.25 12.7594 11.3344 12.8437 11.4375 12.8437H18.7969V14.625C18.7969 14.782 18.9797 14.8711 19.1016 14.7727L22.4273 12.1477C22.4498 12.1301 22.4679 12.1077 22.4803 12.0821C22.4928 12.0565 22.4993 12.0285 22.4993 12C22.4993 11.9715 22.4928 11.9435 22.4803 11.9179C22.4679 11.8923 22.4498 11.8699 22.4273 11.8523Z" fill="#555"/>
        </svg>

        {Translation("logout")}
      </button>
    </div>
  )
}