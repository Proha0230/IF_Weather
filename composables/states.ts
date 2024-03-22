import {type cityValue} from "~/composables/types";

export const useRouteSearch = () => useState(() => ({
    goToSearch: false,
    goToAbout: false
}))

export const useValueForCity = () => useState(() => ({
    userCityFetchValue: {},
    userCityValue: Array<cityValue>({
        city: '',
        temperature: 0,
        maxTemperature: 0,
        minTemperature: 0,
        forecast5Day: null,
        stateSky: null,
        subscribe: true
    }),
    userCitySearchValue: Array<cityValue>({
        city: '',
        temperature: 0,
        maxTemperature: 0,
        minTemperature: 0,
        forecast5Day: null,
        stateSky: null,
        subscribe: false
    }),
    loading: false
}))
