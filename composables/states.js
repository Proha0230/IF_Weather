export const useRouteSearch = () => useState(() => ({
    goToSearch: false,
    goToAbout: false
}))

export const useValueForCity = () => useState(() => ({
    userCityFetchValue: {
        "locations": [
            {
                "q": "Moscow"
            },
            {
                "q": "Kemerovo"
            },
            {
                "q": "Tomsk"
            }
        ]
    },
    userCityValue: []
}))
