export type forecast5Day = {
    astro: Object,
    date: string,
    date_epoch: string,
    day: forecastDay,
    hour: Array<unknown>
}

export type forecastDay = {
    avgtemp_c: number,
    maxtemp_c: number,
    mintemp_c: number,
    condition: stateSkyType,
    [key:string]: unknown
}

export type stateSkyType = {
    code: number
    icon: string
    text: string
}

export type cityValue = {
    city: string,
    forecast5Day: Array<forecast5Day> | null,
    maxTemperature: number,
    minTemperature: number,
    stateSky: stateSkyType | null,
    temperature: number,
    subscribe: boolean
}

export type dataFetchForecast = {
    bulk: Array<{
        query: {
            custom_id?: string,
            q?: string,
            location: {
                name:string,
                [key:string]: unknown
            },
            current: {
                temp_c: number,
                condition: stateSkyType
            },
            forecast : {
                forecastday: Array<{
                    day: {
                        mintemp_c: number,
                        maxtemp_c: number,
                        [key:string]: unknown
                    }
                    [key:string]: unknown
                }>
            },
            [key:string]: unknown
        }
    }>
}

export type dataSearchCity = {
    custom_id: string,
    q: string,
    location: {
        name:string,
        [key:string]: unknown
    },
    current: {
        temp_c: number,
        condition: stateSkyType
    },
    forecast: {
        forecastday: Array<{
            day: {
                mintemp_c: number,
                maxtemp_c: number,
                [key:string]: unknown
            }
            [key:string]: unknown
        }>
    }
}

export type CityFetchValues = {
    locations: Array<{
        q: string
    }>
} | null