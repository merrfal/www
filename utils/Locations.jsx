import { AL_Cities, XK_Cities, MK_Cities } from "../data/cities";
import { ConnectionLocation } from "./Connection";

export const AllowedCountries = ["MK", "AL", "XK"];

export const HandleFiltersCurrentCountry = async (props) => {
    const { filters, setFilters, setFiltersLoading } = props;

    let locationRes = await ConnectionLocation();

    if(locationRes.success === true){
        const country = locationRes?.data?.country;

        if(AllowedCountries){
            switch(country){
                case "MK": setFilters({ ...filters, cities: MK_Cities.map(city => city.value), countries: ["MK"] }); break;
                case "AL": setFilters({ ...filters, cities: AL_Cities.map(city => city.value), countries: ["AL"] }); break;
                case "XK": setFilters({ ...filters, cities: XK_Cities.map(city => city.value), countries: ["XK"] }); break;
            }
        }

        else {
            setFilters({
                sort: { createdAt: 1 },
                cities: [],
                countries: [],
                statuses: [false],
            })

        }
    }

    else {
        setFilters({
            sort: { createdAt: 1 },
            cities: [],
            countries: [],
            statuses: [false],
        })
    }

    setFiltersLoading(false);
}