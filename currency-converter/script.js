// initial work :

"use strict"
console.clear() ;

// API's 

let flagAPI = "https://flagsapi.com/BD/flat/64.png" ; // this is Raw link . we have to change when we use it.


//declaration part :

let amountField = document.querySelector("#amount") ;
let fromCountry = document.querySelector("#fromCountry") ;
let fromCountryImage = document.querySelector("#fromCountryImage") ;
let toCountry = document.querySelector("#toCountry") ;
let toCountryImage = document.querySelector("#toCountryImage") ;
let output = document.querySelector("#output") ;
let convertButton = document.querySelector("#convertButton")
// console.log(convertButton) ;


// set options in the dropdown box 

for (let currency in country)
{
    let optionTag = document.createElement("option") ;
    optionTag.innerText = currency ;
    optionTag.setAttribute("value" , country[currency]) ;

    fromCountry.appendChild(optionTag) ;
    
    if (currency === "USD")
        optionTag.selected = true ;
}


for (let currency in country)
    {
        let optionTag = document.createElement("option") ;
        optionTag.innerText = currency ;
        optionTag.setAttribute("value" , country[currency]) ;
    
        toCountry.appendChild(optionTag) ;
        
        if (currency === "BDT")
            optionTag.selected = true ;
    }


// addEventListener on from dropdown box for Flag 

fromCountry.addEventListener("change",function(evt){
    let countryName = evt.target.value ;

    // console.log(fromCountryCurrency) ;

    let flag = `https://flagsapi.com/${countryName}/flat/64.png` ;
    fromCountryImage.src = flag ;

}) ;

toCountry.addEventListener("change",function(evt){
    let countryName = evt.target.value ;

    // console.log(toCountryCurrency) ;

    let flag = `https://flagsapi.com/${countryName}/flat/64.png` ;
    toCountryImage.src = flag ;

}) ;

amountField.addEventListener("keydown",function(evt){

    if(evt.repeat)
    {
        alert("Don't press continuously !!!") ;
    }

}) ;


convertButton.addEventListener("click" , function(evt)
{
    let fromCountryCurrency = fromCountry.options[fromCountry.selectedIndex].innerText;
    let toCountryCurrency = toCountry.options[toCountry.selectedIndex].innerText;

    getData(fromCountryCurrency, toCountryCurrency);
}) ;



function callingAPI (config)
{
    return axios(config) ;
}

function getData (from , to)
{
    from = from.toLowerCase() ;
    to = to.toLowerCase() ;

    let mainAPI = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`; 


    callingAPI({
        url :mainAPI ,
        method : "GET"
    })
    .then(function(res){

        var exchangeRate = (res.data)[from][to] ;
        let inputAmount = amountField.value ;

        if(!isNaN(inputAmount) || inputAmount == "")
        {
            inputAmount = Number(inputAmount) ;
            
            let totalAmount = calculateAmount(exchangeRate , inputAmount) ;

            output.innerText = `${inputAmount} ${from.toUpperCase()} = ${totalAmount} ${to.toUpperCase()}` ;
        }
        else
        {
            output.innerText = "Enter a valid number !!! " ;
        }

    })
    .catch(function(err){console.log(err)}) ;

}

function calculateAmount (exchangeRate , inputAmount)
{
    let totalAmount = (exchangeRate * inputAmount).toFixed(3) ;
    
    return  totalAmount ;
}

//when the page is loaded or refreshed then the initial value of the input field is 1 .
window.addEventListener("load",function(){
    amountField.value = "1" ;
    this.alert("This website is developed by ALI HAIDAR") ;
}) ;

