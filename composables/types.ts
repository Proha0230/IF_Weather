export type forecast3Day = {
    stateSky: string,
    day: string,
    temperature: number
}

export type cityValue = {
    city: string,
    mainTemperature: number,
    stateSky: string,
    forecast3Day: Array<forecast3Day>
}