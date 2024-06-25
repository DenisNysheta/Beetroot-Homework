import "../utils/cookies.js"
import { getCookie, setCookie } from "../utils/cookies.js"

let cityBox = document.querySelector(".weather__info__city")
let tempBox = document.querySelector(".weather__info__temp")
let infoBox = document.querySelector(".weather__info__more-info")

async function log() {

    const APIKEY = '7123d0186166e5633adeda90dc01cd15'
    const API = `https://api.openweathermap.org/data/2.5/weather?q=Poltava&appid=${APIKEY}&lang=ua`
    
    let response = await fetch(API)
    let result = await response.json()

    let cachedReg = !!getCookie("weather")
    let cookieWeather;

    if(cachedReg) {
        cookieWeather = getCookie("weather")
        return JSON.parse(cookieWeather)
    } else {
        cookieWeather = setCookie("weather",JSON.stringify(result))
        return log()
    }

}

setTimeout(() => {
    let data = log()
    displayWeather(data)
},800)

async function displayWeather(objInfo) {

    let result = await objInfo
    
    // Result of temperaturs
    let tempMain = (result.main.temp - 273.15).toFixed(1) + "℃"
    let tempMax = (result.main.temp_max - 273.15).toFixed(1) + "℃"
    let tempMin = (result.main.temp_min - 273.15).toFixed(1) + "℃"
    let tempFeel = (result.main.feels_like - 273.15).toFixed(1) + "℃"
    
    let humidity = result.main.humidity + "%"
    let seaLevel = result.main.sea_level + " гПа"
    let groundLevel = result.main.grnd_level + " гПа"
    
    let windSpeed = result.wind.speed + " m/s"
    cityBox.innerHTML = `
        <p class="city">City name: ${result.name}</p>
        <p class="country">Country: ${result.sys.country}</p>
        <p class="coords">lon: ${result.coord.lon}  lat: ${result.coord.lat}</p>
    `
    
    tempBox.innerHTML = `
        <p class="max-main">Main temperature: ${tempMain}</p>
        <p class="fell-temp">Feels like: ${tempFeel}</p>
        <p class="max-temp">Max: ${tempMax}</p>
        <p class="min-temp">Min: ${tempMin}</p>
    `
    
    infoBox.innerHTML = `
        <p class="humidity">Humidity: ${humidity}</p>
        <p class="sea-level">Sea level: ${seaLevel}</p>
        <p class="ground-level">Ground level: ${groundLevel}</p>
        <p class="wind-speed">Wind speed: ${windSpeed}</p>
    `
}

cityBox.innerHTML = `
     <div class="animation">
        <span class="animation__cube"></span>
        <span class="animation__cube"></span>
        <span class="animation__cube"></span>
    </div>
`

tempBox.innerHTML = `
     <div class="animation">
        <span class="animation__cube"></span>
        <span class="animation__cube"></span>
        <span class="animation__cube"></span>
    </div>
`

infoBox.innerHTML = `
     <div class="animation">
        <span class="animation__cube"></span>
        <span class="animation__cube"></span>
        <span class="animation__cube"></span>
    </div>
`

