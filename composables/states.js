export const useRouteSearch = () => useState(() => ({
    goToSearch: false,
    goToAbout: false,
    goToForecast5Day: false
}))

export const useValueForCity = () => useState(() => ([
    {
        city: 'Москва',
        mainTemperature: 4,
        stateSky: 'Облачно',
        favorite: true,
        forecast3Day: [
            {
                stateSky: 'Облачно',
                day: 'Сегодня',
                temperature: 3
            },
            {
                stateSky: 'Дождь',
                day: 'Завтра',
                temperature: 6
            },
            {
                stateSky: 'Дождь',
                day: 'Послезавтра',
                temperature: 5
            }
        ]
    },
    {
        city: 'Кемерово',
        mainTemperature: -9,
        stateSky: 'Чистое небо',
        favorite: true,
        forecast3Day: [
            {
                stateSky: 'Облачно',
                day: 'Сегодня',
                temperature: -7
            },
            {
                stateSky: 'Солнечно',
                day: 'Завтра',
                temperature: -11
            },
            {
                stateSky: 'Туман',
                day: 'Послезавтра',
                temperature: -3
            }
        ]
    },
    { city: 'Томск',
        mainTemperature: 0,
        stateSky: 'Дождь',
        favorite: true,
        forecast3Day: [
            {
                stateSky: 'Облачно',
                day: 'Сегодня',
                temperature: 2
            },
            {
                stateSky: 'Облачно',
                day: 'Завтра',
                temperature: -1
            },
            {
                stateSky: 'Солнечно',
                day: 'Послезавтра',
                temperature: 4
            }
        ]
    }
]))
