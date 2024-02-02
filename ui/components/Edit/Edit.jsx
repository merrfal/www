import { useEffect, useRef, useState } from "react"

import {
  Address,
  Avatar,
  Buttons,
  City,
  Country,
  Email,
  Name,
  Cover,
  Phone,
  Surname,
  Username,
} from "./"

export default function Edit({ user, setUser, setIsEdit, dispatch, account }) {
  const [loading, setIsLoading] = useState(false)

  const [userClone, setUserClone] = useState(
    {
      userData: {
        name: user.userData.name,
        surname: user.userData.surname,
        email: user.userData.email,
        address: user.userData.address,
        username: user.userData.username,
        cover: user.userData.cover,
        avatar: user.userData.avatar,
        phone: user.userData.phone,
        phoneCode: user.userData.phoneCode
      },
      userAdditionalData: {
        address: user.userAdditionalData.address,
        city: user.userAdditionalData.city,
        country: user.userAdditionalData.country,
      }
    }
  )

  const [validations, setValidations] = useState({
    cover: false,
    avatar: false,
    name: false,
    surname: false,
    username: false,
    phone: false,
    country: false,
    city: false,
    address: false,
  })

  const onInput = (key, e, event = true, target = "userData") => {
    if(target === "userData") {
        setUserClone({
          ...userClone,
          userData: {
            ...userClone.userData,
            [key]: event ? e.target.value : e,
          },
        })
    }

    else {
        if(key === "country") setUserClone({
          ...userClone,
          userAdditionalData: {
            ...userClone.userAdditionalData,
            [key]: event ? e.target.value : e,
            city: "",
          },
        })
      
      else setUserClone({
        ...userClone,
        userAdditionalData: {
          ...userClone.userAdditionalData,
          [key]: event ? e.target.value : e,
        },
      })
    }

    if(key === "contry") setValidations({
      ...validations,
      [key]: true,
      city: false,
    })

    else setValidations({
      ...validations,
      [key]: true,
    })
  }

  const load = loading ? { opacity: ".75", pointerEvents: "none" } : {}

  let clickOutside = (handler) => {
    let refInstance = useRef()

    useEffect(() => {
      let method = (e) => !refInstance.current?.contains(e.target) && handler()
      document.addEventListener("mousedown", method)
      return () => document.removeEventListener("mousedown", method)
    })

    return refInstance
  }

  let ref = clickOutside(() => setIsEdit(false))

  return (
    <div style={load} className="relative z-[55]">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
          {userClone && (
            <div ref={ref} className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
              <div className="mt-3 text-center sm:mt-0 p-4 sm:text-left">
                <div className=" mt-5 md:col-span-2 md:mt-0">
                  <div className="p-2 overflow-hidden">
                    <Cover
                      user={userClone}
                      setUserClone={setUserClone}
                      validations={validations}
                    />

                    <div className="grid grid-cols-6 gap-6">
                      <Avatar
                        user={userClone}
                        setUser={setUserClone}
                        validations={validations}
                      />

                      <Name
                        user={userClone}
                        onInput={onInput}
                        validations={validations}
                      />

                      <Surname
                        user={userClone}
                        onInput={onInput}
                        validations={validations}
                      />

                      <Email
                        user={userClone}
                        onInput={onInput}
                        validations={validations}
                      />

                      <Username
                        user={userClone}
                        account={account}
                        onInput={onInput}
                        validations={validations}
                        setValidations={setValidations}
                        dispatch={dispatch}
                      />

                      <Phone
                        user={userClone}
                        onInput={onInput}
                        validations={validations}
                      />

                      <Country
                        user={userClone}
                        onInput={onInput}
                        validations={validations}
                      />

                      <City
                        user={userClone}
                        onInput={onInput}
                        validations={validations}
                      />

                      <Address
                        user={userClone}
                        onInput={onInput}
                        validations={validations}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <Buttons
                user={user}
                userClone={userClone}
                setUserClone={setUserClone}
                setUser={setUser}
                setIsLoading={setIsLoading}
                setIsEdit={setIsEdit}
                setValidations={setValidations}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}