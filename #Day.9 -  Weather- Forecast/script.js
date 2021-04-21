"use strict";

const getCity = document.querySelector('.city'),
      getDate = document.querySelector('.date'),
      getIcon = document.querySelector('.icon'),
      getTemperature = document.querySelector('.temperature'),
      getDescription = document.querySelector('.description'),
      getHumidity = document.querySelector('.humidity'),
      getWind = document.querySelector('.wind')
      
let   myDate = moment().format("MMMM D, YYYY hh:mm A"),
      lat,
      long

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position =>{
        lat = position.coords.latitude
        long = position.coords.longitude

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=1716b6af74413659aba4a82cfc1c92a4`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            getCity.textContent = `${data.name}`
            getDate.textContent = `${myDate}`
            getIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`
            getTemperature.innerHTML = `${Math.floor(data.main.temp - 273.15)}&deg`
            getDescription.textContent = `${data.weather[0].main}`
            getHumidity.innerHTML = `Humidity: ${data.main.humidity}%`
            getWind.textContent = `Wind:${Math.floor(data.wind.speed * 3.6)}km/h`
        })
    })
}

