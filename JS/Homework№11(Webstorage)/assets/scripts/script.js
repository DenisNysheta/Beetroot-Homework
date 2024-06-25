let btnSearch = document.querySelector(".weather__search")

let cityBox = document.querySelector(".weather__info__city")
let tempBox = document.querySelector(".weather__info__temp")
let infoBox = document.querySelector(".weather__info__more-info")

async function log() {

    let inputCity = document.getElementById("city").value

    const APIKEY = '7123d0186166e5633adeda90dc01cd15'
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${APIKEY}&lang=ua`
    let response = await fetch(API)
    let result = await response.json()
    return result
}

async function displayWeather(objInfo) {
    try {

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
        console.log(result)
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

    } catch {
        let notFound = document.querySelector(".not-found")
        notFound.style.bottom = "13%"
        setTimeout(() => {
            notFound.style.bottom = "22%"
        },2000)
    }
}

btnSearch.addEventListener("click", () => {
    let data = log()
    displayWeather(data)
})
