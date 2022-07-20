var search = document.querySelector('.search')
var city = document.querySelector('.city')
var body = document.querySelector('body')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var time = document.querySelector('.time')
var content = document.querySelector('.content')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')
// var value = document.querySelector('.value')


async function changeWeatherUI(){
    let capitalSearch =  search.value.trim()
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=508ba58126b4d0b8f13ce60f783fb0c0`

    let data = await fetch(apiURL).then(res=> res.json())
    if(data.cod == 200) {
    content.classList.remove('hide')
    city.innerText = data.name
    country.innerText = data.sys.country
    visibility.innerText = data.visibility + 'm'
    wind.innerText = data.wind.speed + 'm/s'
    sun.innerText = data.main.humidity + '%'
    let temp = Math.round(data.main.temp - 273.15)
    value.innerText= temp
    shortDesc.innerText = data.weather[0] ? data.weather[0].main : 'NAN'
    time.innerText = new Date().toLocaleString('vi')
        
    body.setAttribute('class', 'hot')
    if(temp < 25){
        body.setAttribute('class', 'cold')
    }
    }else{
        content.classList.add('hide')
    }
}

changeWeatherUI()
search.addEventListener('keypress', function(e){
    if(e.code == 'Enter'){
        changeWeatherUI()
    }
})