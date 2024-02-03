import { useState, useRef, useEffect } from "react"
import { OpenIcon } from "../../icons"
import { Translation } from "../../../utils/Translations"
import { Countries } from "../../../data"

export default function Locations({ filters, setFilters }) {
    const [isLocationsOpen, setIsLocationsOpen] = useState(false)

    let clickOutside = (handler) => {
        let refInstance = useRef()

        useEffect(() => {
            let method = (e) => !refInstance?.current?.contains(e?.target) && handler()
            document.addEventListener("mousedown", method)
            return () => document.removeEventListener("mousedown", method)
        })

        return refInstance
    }

    let ref = clickOutside(() => setIsLocationsOpen(false))
    const open = () => setIsLocationsOpen(!isLocationsOpen)

    return (
        <div ref={ref} className="px-4 relative inline-block text-left">
            <button onClick={open} className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 transition-all">
                <span>
                    {Translation("location")}
                </span>
                
                <OpenIcon />
            </button>

            {isLocationsOpen && (
                <div className="origin-top-right absolute min-w-[259px] max-h-[280px] overflow-auto right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <form className="space-y-4">
                        {Countries.map((country, index) => {
                            return (
                                <div key={index} className="flex flex-col">
                                    <div key={index} className="flex items-center hover:cursor-pointer hover:text-gray-500 transition-all">
                                        <input
                                            id={country.iso_code}
                                            value={country.iso_code}
                                            type="checkbox"
                                            checked={filters?.countries?.includes(country?.iso_code)}
                                            className="hover:cursor-pointer h-4 w-4 border-[#d6d9de] text-[#377DFF] focus:ring-[#377DFF] rounded-md"
                                            onChange={() => {}}
                                            onClick={() => {
                                                const isCountryAddedAlready = filters?.countries?.includes(country?.iso_code)

                                                if (isCountryAddedAlready) setFilters({
                                                    ...filters, 
                                                    cities: filters?.cities?.filter((item) => !country.cities.map((city) => city.value).includes(item)),
                                                    countries: filters?.countries?.filter((item) => item !== country?.iso_code)
                                                })

                                                else setFilters({
                                                    ...filters, 
                                                    cities: [...filters.cities, ...country.cities.map((city) => city.value)],
                                                    countries: [...filters.countries, country?.iso_code]
                                                })
                                            }}
                                        />
                                        
                                        <label htmlFor={country.iso_code} className="hover:cursor-pointer ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                            {country.name}
                                        </label>
                                    </div>

                                    {filters?.countries?.includes(country?.iso_code) && country.cities.map((city, index) => (
                                        <div key={index} className="ml-6 mt-2 flex items-center hover:cursor-pointer hover:text-gray-500 transition-all">
                                            <input
                                                id={city.value}
                                                value={city.value}
                                                type="checkbox"
                                                checked={filters?.cities?.includes(city?.value)}
                                                className="hover:cursor-pointer rounded-md h-4 w-4 border-gray-300 text-[#377DFF] focus:ring-[#377DFF]"
                                                onChange={() => {}}
                                                onClick={() => {
                                                    const isCityAlreadyAdded = filters?.cities?.includes(city.value)

                                                    if (isCityAlreadyAdded) {
                                                        if(filters.cities.length === 1) setFilters({
                                                            ...filters, 
                                                            countries: filters?.countries?.filter((item) => item !== country?.iso_code),
                                                            cities: filters?.cities?.filter((item) => item !== city?.value)
                                                        })

                                                        else setFilters({
                                                            ...filters, 
                                                            cities: filters?.cities?.filter((item) => item !== city?.value)
                                                        })
                                                    }

                                                    else setFilters({
                                                        ...filters, 
                                                        cities: [...filters.cities, city?.value]
                                                    })
                                                }}
                                            />
                                            
                                            <label htmlFor={city.value} className="hover:cursor-pointer ml-3 pr-6 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                {city.name}
                                            </label>
                                        </div>
                                        )
                                    )}
                                </div>
                            )
                        })}
                    </form>
                </div>
            )}
        </div>
    )
}