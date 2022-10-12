
// fetch info
// enter search bar
// add btn
// display weather 


const cityTextBox = document.getElementById("cityTextBox")
const weatherUL = document.getElementById("weatherUL")
const tempBtn = document.getElementById("tempBtn")
const humidityBtn = document.getElementById("humidityBtn")


tempBtn.addEventListener("click", function () {
    async function getWeather() {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityTextBox.value}&appid=feeb1e15933c3850daf212f6801a413c&units=imperial`
            let response = await fetch(url)
            let weather = await response.json()
            
            console.log(weather)
    
            weatherUL.innerHTML = weather.main.temp
    
        } catch {
            console.log(error)
        }
    
    }
    
    getWeather()

})



humidityBtn.addEventListener("click", function () {
    async function getWeather() {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityTextBox.value}&appid=feeb1e15933c3850daf212f6801a413c&units=imperial`
            let response = await fetch(url)
            let weather = await response.json()
            
            console.log(weather)
    
            weatherUL.innerHTML = weather.main.humidity
    
        } catch {
            console.log(error)
        }
    
    }
    
    getWeather()

})

