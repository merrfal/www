import { AL_Cities, XK_Cities, MK_Cities } from "../data/cities";

export const AllowedCountries = ["MK", "AL", "XK"];

export const CityIdToName = (cityId) => {
    const city = MK_Cities.find(city => city.value === cityId) || AL_Cities.find(city => city.value === cityId) || XK_Cities.find(city => city.value === cityId);
    return city?.name;
}