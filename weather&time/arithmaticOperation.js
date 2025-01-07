"use strict"
console.clear() ;

// select all the input fields 
var inputSection = document.querySelector("#inputSection") ;
var FullName = inputSection.querySelector("#name") ;
var number1 = inputSection.querySelector("#number1") ;
var number2 = inputSection.querySelector("#number2") ;

// select all the buttons 
var addBtn = document.getElementById("addBtn") ;
var subtractBtn = document.getElementById("subtractBtn") ;
var multiplyBtn = document.getElementById("multiplyBtn") ;
var divideBtn = document.getElementById("divideBtn") ;
var previousPage = document.querySelector("#previousPage");

// select the output 
var output = document.querySelector("#output") ;
output.style.textAlign = "center" ;

// manipulation

//for add
addBtn.addEventListener("click",function(){
    forAdd() ;
}) ;

function forAdd()
{
    var fName = FullName.value ; 
    var num1 = Number(number1.value) ;
    var num2 = Number(number2.value) ;

    var result = num1 + num2 ;

    output.textContent = "Hello "+fName+" . Your Result Is : "+result ;
}

//for subtraction
subtractBtn.addEventListener("click",function(){
    forSubtraction() ;
}) ;

function forSubtraction()
{
    var fName = FullName.value ; 
    var num1 = Number(number1.value) ;
    var num2 = Number(number2.value) ;

    var result = num1 - num2 ;

    output.textContent = "Hello "+fName+" . Your Result Is : "+result ;
}

//for multiply
multiplyBtn.addEventListener("click",function(){
    forMultiply() ;
}) ;

function forMultiply()
{
    var fName = FullName.value ; 
    var num1 = Number(number1.value) ;
    var num2 = Number(number2.value) ;

    var result = num1 * num2 ;

    output.textContent = "Hello "+fName+" . Your Result Is : "+result ;

}

// for divide 
divideBtn.addEventListener("click",function(){
    forDivide() ;
}) ;

function forDivide()
{
    var fName = FullName.value ; 
    var num1 = Number(number1.value) ;
    var num2 = Number(number2.value) ;

    var result = num1 / num2 ;
    result = result.toFixed(2) ;

    output.textContent = "Hello "+fName+" . Your Result Is : "+result ;
}

document.addEventListener("keypress",function(e){

    var keyboardBtn = e.key ;

    if(keyboardBtn === "a")
    {
        forAdd() ;
    }
    else if(keyboardBtn === "s")
    {
        forSubtraction() ;
    }
    else if(keyboardBtn === "m")
    {
        forMultiply() ;
    }
    else if(keyboardBtn === "d")
    {
        forDivide() ;
    }
    // else
    // {
    //     alert("You pressed incorrect button. press a for add , s for subtract , m for multiply , d for divide ") ;
    // }

}) ;

