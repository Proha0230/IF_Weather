import {type CityFetchValues, type cityValue, type dataFetchForecast, type forecast5Day} from "~/composables/types";
import {useValueForCity} from "~/composables/states";
import {type Ref} from "vue";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:mounted', ()=> {
        const dataResponse: Ref<dataFetchForecast | null> = ref(null);
        const state = useValueForCity();
        const cityForecastData: Ref<Array<cityValue>> = ref([])

        async function loadFetchListCity() {
            const {data} = await useFetch('https://if-weather-default-rtdb.firebaseio.com/City.json')
            if(data.value) state.value.userCityFetchValue = data.value as CityFetchValues
            else state.value.userCityFetchValue = null
            //{locations: [{q: "Moscow"}]}
        }
        async function loadData() {
            const url = `https://api.weatherapi.com/v1/forecast.json?&key=f88bd18e1ab443c8a91121443242003&lang=ru&q=bulk&days=5`
            const {data} = await useFetch(url, {
                method: "POST",
                body: state.value.userCityFetchValue
            })
            if(data.value && data.value) {
                // @ts-ignore
                dataResponse.value = toRaw(data.value)
            }
        }
        async function getCityValue() {
            await loadFetchListCity();
            await loadData();
            if(dataResponse.value && dataResponse.value.bulk) {
                dataResponse.value.bulk.forEach((item, index) => {
                    let obj:cityValue = {
                        city: '',
                        temperature: 0,
                        maxTemperature: 0,
                        minTemperature: 0,
                        forecast5Day: null,
                        stateSky: null,
                        subscribe: true
                    }
                    obj.city = item.query.location.name
                    obj.temperature = item.query.current.temp_c
                    obj.minTemperature = item.query.forecast.forecastday[0].day.mintemp_c
                    obj.maxTemperature = item.query.forecast.forecastday[0].day.maxtemp_c
                    obj.stateSky = toRaw(item.query.current.condition)
                    obj.forecast5Day = toRaw(item.query.forecast.forecastday) as Array<forecast5Day>
                    cityForecastData.value.push(obj)
                })
                    state.value.userCityValue = cityForecastData.value
            }
        }
        getCityValue().then(r => {
            state.value.loading = true
        }).catch(e => {
            state.value.loading = true
            console.log(e)
        })



    })
    nuxtApp.hook('app:beforeMount', ()=> {
        navigateTo('/')
    })

})