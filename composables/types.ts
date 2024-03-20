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
    forecast5Day: Array<forecast5Day>,
    maxTemperature: number,
    minTemperature: number,
    stateSky: stateSkyType
    temperature: number
}