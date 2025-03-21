import { useDispatch } from "react-redux"
import { Update } from "../../../api/User"
import { Translation } from "../../../utils/Translations"
import { useRouter } from "next/router"

import {
  AddressValidation,
  PhoneValidation,
  UserNameValidation,
  UserSurnameValidation,
} from "../../../utils/Forms"

export default function Buttons(props) {
  const dispatch = useDispatch()
  const router = useRouter()

  const {
    user,
    setIsEdit,
    setIsLoading,
    setUser,
    userClone,
    setUserClone,
    setValidations,
    tempAvatar,
    tempCover,
    setTempAvatar,
    setTempCover,
    setShowLoading
  } = props

  const onValidation = () => {
    setValidations({
      address: true,
      avatar: true,
      city: true,
      country: true,
      cover: true,
      phone: true
    })

    let validations = true

    const name = UserNameValidation(userClone?.userData?.name)
    const surname = UserSurnameValidation(userClone?.userData?.surname)
    const address = AddressValidation(userClone?.userAdditionalData?.address)
    const phone = PhoneValidation(userClone?.userData?.phone)

    if (name?.error) validations = false
    if (surname?.error) validations = false
    if (phone?.error) validations = false
    if (address?.error) validations = false

    return validations
  }

  const HandleUpdate = () => {
    if (!onValidation()) {
      typeof window !== "undefined" &&
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })

      return
    }

    Update(
      user,
      userClone, 
      setUser, 
      setIsLoading, 
      setIsEdit, 
      setUserClone, 
      router,
      tempAvatar,
      tempCover,
      setTempAvatar,
      setTempCover,
      setShowLoading,
      dispatch
    )
  }

  return (
    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
      <button onClick={HandleUpdate} className="inline-flex w-full justify-center rounded-md border border-transparent bg-[#387DFF] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#387DFF] focus:outline-none sm:ml-3 sm:w-auto sm:text-sm transition-all">
        {Translation("edit")}
      </button>
      
      <button onClick={() => setIsEdit(false)} className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-all">
        {Translation("on-cancel")}
      </button>
    </div>
  )
}