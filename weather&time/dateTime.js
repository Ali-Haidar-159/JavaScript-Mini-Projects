"use strict"
console.clear() ;

// select all the HTML element 

let time = document.querySelector("#time") ;
let date = document.querySelector("#date") ;

function setTimeDate()
{
    let d = new Date () ;

    let hour = d.getHours() ;

    if(hour === 0)
        hour = 12 ;

    time.innerHTML = `${hour} : ${d.getMinutes()} : ${d.getSeconds()}` ;
    date.innerHTML = `${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`
}

setInterval(setTimeDate,1000) ;