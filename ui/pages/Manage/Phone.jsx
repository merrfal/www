import { useEffect, useRef, useState } from "react"
import { CountryCodes } from "../../../data"
import { PhoneValidation } from "../../../utils/Forms"
import { Translation } from "../../../utils/Translations"
import { RequiredLabel, Wildcard } from "../../components"

export default function Phone({product, onInput, validation: v}) {
  const [isCountryCodeOpen, setIsCountryCodeOpen] = useState(false)

  const validation = PhoneValidation(product?.productData?.phone)
  const selectedCountry = CountryCodes.find(country => country.code === product?.productData?.phoneCode)

  let clickOutside = (handler) => {
    let refInstance = useRef()

    useEffect(() => {
      let method = (e) => !refInstance?.current?.contains(e?.target) && handler()
      document.addEventListener("mousedown", method)
      return () => document.removeEventListener("mousedown", method)
    })

    return refInstance
  }

  let ref = clickOutside(() => setIsCountryCodeOpen(false))

  return (
    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
        {Translation("phone-number")}<Wildcard />
      </label>

      <div ref={ref} className="flex relative items-center">
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
                      <li key={index} onClick={() => { onInput('phoneCode', country?.code, false); setIsCountryCodeOpen(false) }}>
                          <button className={`${isFirst ? 'rounded-tr-lg rounded-tl-lg' : isLast ? 'rounded-br-lg rounded-bl-lg' : ''} inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all duration-500 ease-in-out`}>
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
          minLength={8}
          maxLength={9}
          value={product?.productData?.phone}
          type="text"
          id="phone"
          placeholder={Translation("phone-number-placeholder")}
          className="p-3 mt-1 block w-full rounded-tr-md rounded-br-md border-gray-300 shadow-sm focus:border-[#377DFF] focus:ring-[#377DFF] sm:text-sm"
          onChange={(e) => {
              if (e.target.value.match(/^[0-9+]*$/)) {
                onInput("phone", e)
              }
          }}
        />
      </div>

      {v?.phone && validation?.error && <RequiredLabel message={validation?.message} />}
    </div>
  )
}