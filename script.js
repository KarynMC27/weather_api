const apiKey = `c3f39ac6a8524a77b0a220229230504`
const button = document.querySelector(`#submitButton`)
const input = document.querySelector(`#textInput`).value
console.log(apiKey)
const cityName = document.querySelector(`#cityName`)
const cityTemp = document.querySelector(`#temp`)
const tempPic = document.querySelector(`#tempPic`)
const tempInfo = document.querySelector(`#tempText`)
const body = document.querySelector(`body`)

//taken from an excel sheet in the documentation section -- just scratch for now
// const weather = [`Sunny`, `Partly cloudy`, `Cloudy`, `Overcast`, `Mist`, `Patchy rain possible`, `Patchy snow possible`, `Patchy sleet possible`,
// // `Patchy freezing drizzle possible`, `Thundery outbreaks possible`, `Blowing snow`, `Blizzard`, `Fog`, `Freezing fog`, `Patchy light drizzle`,
// `Light drizzle`, `Freezing drizzle`, `Heavy freezing drizzle`, `Patchy light rain`, `Light rain`, `Moderate rain at times` `Moderate rain`,
// `Heavy rain at times`, `Heavy rain`, `Light freezing rain`, `Moderate or heavy freezing rain`, `Light sleet`, `Moderate or heavy sleet`,
// `Patchy light snow`, `Light snow`, `Patchy moderate snow`, `Moderate snow`, `Patchy heavy snow`, `Heavy snow`, `Ice pellets`,
// `Light rain shower`, `Moderate or heavy rain shower`, `Torrential rain shower`, `Light sleet showers`, `Moderate or heavy sleet showers`,
// `Light snow showers`, `Moderate or heavy snow showers`, `Light showers of ice pellets`, `Moderate or heavy showers of ice pellets`,
// `Patchy light rain with thunder`, `Moderate or heavy rain with thunder`, `Patchy light snow with thunder`,
// `Moderate or heavy snow with thunder`]

button.addEventListener(`click`, async () => {
    
    const input = document.querySelector(`#textInput`).value
    let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input}&aqi=yes`)
    console.log(response)

    cityName.innerHTML = `${response.data.location.name}, ${response.data.location.region}, ${response.data.location.country}`
    cityTemp.innerHTML = `${response.data.current.condition.text}`
    console.log(cityTemp.innerHTML)

    if (response.data.current.condition.text === `Sunny`) {
        tempInfo.classList.add(`weather`)
    } else {
        tempInfo.classList.remove(`weather`)
    }

    tempInfo.innerHTML = `Temperature: ${response.data.current.temp_f} &deg; F, ${response.data.current.temp_c} &deg; C
    Feels Like: ${response.data.current.feelslike_f} &deg; F, ${response.data.current.feelslike_c} &deg; C, 
    Humidity: ${response.data.current.humidity} UV: ${response.data.current.uv} Wind: ${response.data.current.wind_mph} MPH,
    ${response.data.current.wind_kph} KPH`
    let weatherPic = response.data.current.condition.icon
    tempPic.innerHTML = `<img src=${weatherPic}>`

//more info I could add later

//response.date.current.air_quality.co
//response.date.current.air_quality.no2
//response.data.current.precip_in
//response.data.current.precip_mm
//response.data.current.last_updated
//response.data.current.vis_km
//response.data.current.vis_miles
//response.data.current.precip_mm
//response.data.current.precip_in

    // semi-reliable places to test conditions: burbank for sunny, seattle for rainy, cairo for clear, london for mist, Alyeska, Alaska for snow 
    
    //Changing the font color depending on the weather
    //I know there had to be a way to get all the weather conditons from the api then iterate over them but I couldn't find it.
    //Would love some guidance or working examples.

    if (response.data.current.condition.text === `Sunny`) {
        body.style.color = `yellow`

    } if (response.data.current.condition.text === `Mist`) {
        body.style.color = `#cce7e8`

    } if (response.data.current.condition.text === `Overcast`) {
                body.style.color = `#77706d`

    } if (response.data.current.condition.text === `Clear`) {
                body.style.color = `blue`

    } if (response.data.current.condition.text === `Thundery outbreaks possible`) {
                body.style.color = `black`
    
    } if (response.data.current.condition.text === `Blizzard`) {
                body.style.color = `#F8FAFD`

    } if (response.data.current.condition.text.toLowerCase().includes(`sleet`.toLowerCase())) {
                body.style.color = `#d2cfce`

    } if (response.data.current.condition.text.toLowerCase().includes(`cloud`.toLowerCase())) {
            body.style.color = `#6d7072`

    } if (response.data.current.condition.text.toLowerCase().includes(`snow`.toLowerCase())) {
        body.style.color = `white`

    } if (response.data.current.condition.text.toLowerCase().includes(`rain`.toLowerCase())) {
        body.style.color = `#2c3140`

    } if (response.data.current.condition.text.toLowerCase().includes(`ice`.toLowerCase())) {
        body.style.color = `#BED8D8`

    } if (response.data.current.condition.text.toLowerCase().includes(`fog`.toLowerCase())) {
        body.style.color = `#657166`
        
    } if (response.data.current.condition.text.toLowerCase().includes(`drizzle`.toLowerCase())) {
        body.style.color = `#909DB1`
    }

})