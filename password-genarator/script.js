// initial code 
"use strict"
console.clear() ;

// select all the HTML element

let passField = document.getElementById("passField") ;
let copyButton = document.getElementById("copyButton") ;
let generateButton = document.getElementById("generateButton") ;

// declaration part 

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
let loweCase = "abcdefghijklmnopqrstuvwxyz" ;
let numbers = "1590234768" ;
let symbols = "~!@#$%^&*()_-+=;:|\/.," ;
let allCharacters = [...loweCase,...numbers,...upperCase,...symbols] ; 
let passwordLength = 12 ;

function passwordGenerator ()
{
    let password = new Array () ;

    password += upperCase[Math.floor(Math.random() * upperCase.length)] ;
    password += loweCase[Math.floor(Math.random() * loweCase.length)] ;
    password += numbers[Math.floor(Math.random() * numbers.length)] ;
    password += symbols[Math.floor(Math.random() * symbols.length)] ;

    while(password.length < passwordLength)
    {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)] ;
    }

    passField.value = password ;

}

generateButton.addEventListener("click",()=>{
    passwordGenerator() ;
}) ;

function copyPassword ()
{
    passField.select() ;
    document.execCommand("copy") ;
}

copyButton.addEventListener("click" , ()=>{
    copyPassword() ;
}) ;

