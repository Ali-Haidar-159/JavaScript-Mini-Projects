// initial code 
"use strict"
console.clear() ;

// select all html element 
let numberOfCourseField = document.getElementById("numberOfCourseField") ;
let okButton = document.getElementById("okButton");

okButton.addEventListener("click",function(){

    let numberOfCourse = numberOfCourseField.value ;
    numberOfCourseField.value = "" ;

    localStorage.setItem("numberOfCourse" , numberOfCourse) ;

    location.assign("index2.html");
})