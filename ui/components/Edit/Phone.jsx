import { useState } from 'react'
import { PhoneValidation } from "../../../utils/Forms"
import { Translation } from "../../../utils/Translations"
import { Wildcard, RequiredLabel } from "../"
import { CountryCodes } from "../../../data"

export default function Phone({ user, onInput, validations }) {
  const [isCountryCodeOpen, setIsCountryCodeOpen] = useState(false)

  const validation = PhoneValidation(user?.userData?.phone)
  const selectedCountry = CountryCodes.find(country => country.code === user?.userData?.phoneCode)

  return (
    <div className="col-span-12 lg:col-span-3 flex flex-col justify-start items-start">
      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
        {Translation("phone-number")}<Wildcard />
      </label>

      <div className="flex relative items-center w-full">
        <button onClick={() => setIsCountryCodeOpen(!isCountryCodeOpen)} className="z-10 shadow-sm mt-1 inline-flex items-center p-3 font-medium text-center text-gray-500 border-y border-l border-gray-300 rounded-s-lg hover:bg-gray-50 transition-all ease-in-out duration-500">
            <span className="flex gap-2 sm:text-sm h-auto">
              {selectedCountry?.flag}
              {selectedCountry?.code}
            </span>
            
            <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg>
        </button>

        {
          isCountryCodeOpen &&
          <div className="z-10 bg-white border border-gray-200 top-[52px] left-0 rounded-lg absolute">
            <ul className="text-sm divide-y divide-gray-200 text-gray-700">
                {
                  CountryCodes.map((country, index) => {
                    const isFirst = index === 0
                    const isLast = index === CountryCodes.length - 1

                    return (
                      <li key={index} onClick={() => { onInput("phoneCode", country?.code, false); setIsCountryCodeOpen(false) }}>
                          <button className={`${isFirst ? 'rounded-tr-lg rounded-tl-lg' : isLast ? 'rounded-br-lg rounded-bl-lg' : ''} inline-flex w-full px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-50 transition-all duration-500 ease-in-out`}>
                              <div className="inline-flex text-gray-500 gap-2 items-center">
                                  {country.flag}
                                  {country?.code}
                              </div>
                          </button>
                      </li>
                    )
                  })
                }
            </ul>
          </div>
        }

        <input
          type="text"
          value={user?.userData?.phone}
          id="phone"
          minLength={8}
          maxLength={9}
          placeholder={Translation("phone-number-placeholder")}
          className="mt-1 p-3 block w-full rounded-tr-md rounded-br-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
          onChange={(e) => {
            if (e.target.value.match(/^[0-9+]*$/)) {
              onInput("phone", e)
            }
          }}
        />
      </div>

      {validations?.phone && validation?.error && <RequiredLabel message={validation?.message} />}
    </div>
  )
}