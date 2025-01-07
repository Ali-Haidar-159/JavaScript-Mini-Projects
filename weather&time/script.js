// initial work 

"use strict"
console.clear() ;

// element select using DOM 

let searchField = document.querySelector("#searchField") ;
let searchIcon = document.querySelector("#searchIcon") ;
let cityName = document.querySelector("#cityName") ;
let feelsLike = document.querySelector("#feelsLike") ;
let tempValue = document.querySelector("#tempValue") ;
let tempMax = document.querySelector("#tempMax") ;
let tempMin = document.querySelector("#tempMin") ;
let pressure = document.querySelector("#pressure") ;
let humidity = document.querySelector("#humidity") ;
let visibility = document.querySelector("#visibility") ;
let description = document.querySelector("#description") ;

var i = 0 ;


// "https://api.openweathermap.org/data/2.5/weather?q=Dhaka&APPID=ce033fcb3411aedb834a3d2267821202&units=metric" ;

searchIcon.addEventListener("click",function(){
    searchField.style.visibility = "visible" ;
    let inputValue = searchField.value ;

    if(i !== 0)
    {
        getData(inputValue) ;
    }

    i++ ;


}) ;

function callingAPI (config)
{
    return axios(config) ;
}

function getData (city)
{

    let weatherAPI =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ce033fcb3411aedb834a3d2267821202&units=metric` ;




    callingAPI({
        url : weatherAPI ,
        method : "GET" ,
    })
    .then(function(response){

        let mainData = response.data ;

        updateDataFromWebPage(mainData) ;

    })
    .catch(function(err){console.log(err)}) ;
}

function updateDataFromWebPage(mainData)
{
    // console.log(mainData) ;

    let feelsLike1 = mainData.main.feels_like ;
    let temp1 = mainData.main.temp ;
    let tempMax1 = mainData.main.temp_max ;
    let tempMin1 = mainData.main.temp_min ;
    let pressure1 = mainData.main.pressure ;
    let humidity1 = mainData.main.humidity ;
    let visibility1 = mainData.visibility ;
    let cityName1 = mainData.name ;
    let description1 = mainData.weather[0].description ;

    feelsLike.innerText = feelsLike1 ;
    tempValue.innerText = temp1 ;
    tempMax.innerText = tempMax1 ;
    tempMin.innerText = tempMin1 ;
    pressure.innerText = pressure1 ;
    humidity.innerText = humidity1 ;
    visibility.innerText = visibility1 ;
    cityName.innerText = cityName1 ;
    description.innerText = description1 ;

}