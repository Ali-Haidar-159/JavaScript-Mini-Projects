// initial code 
"use strict"
console.clear() ;

// select all HTML element 

let mainDiv = document.querySelector("#courseDetailsDiv") ;
let resetButton = document.querySelector("#resetButton") ;
let calculateButton = document.querySelector("#calculateButton") ;


//---------------------------------------------

var numberOfCourse = localStorage.getItem("numberOfCourse") ;

let backgroundColors = ["#fadbd8","#ebdef0","#d6eaf8","#d5f5e3","#fdebd0","#fcf3cf"] ;

for(let i=0 ; i<numberOfCourse ; i++)
{
   // create input field 

    //one course details will be store in a div 
    let coursesDiv = document.createElement("div") ;
    coursesDiv.style.padding = "8px" ;
    coursesDiv.style.margin = "10px" ;
    coursesDiv.style.backgroundColor = backgroundColors[i];
    coursesDiv.style.display = "flex" ;
    coursesDiv.style.justifyContent = "space-around";
    coursesDiv.style.alignItems = "center";
    coursesDiv.style.borderRadius = "5px";
    coursesDiv.classList.add("flex-sm-column");
    coursesDiv.classList.add("flex-lg-row");

    //course name input
    let courseName = document.createElement("input") ;
    courseName.type = "text" ;
    courseName.placeholder = "Course Name" ;
    courseName.maxLength = "6" ;
    courseName.required = true ;

    //course credit input
    let courseCredit = document.createElement("input") ;
    courseCredit.type = "text" ;
    courseCredit.placeholder = "Course Credit"
    courseCredit.maxLength = "4" ;
    courseCredit.required = true ;
    courseCredit.classList.add("creditClass") ;


    //course grade input
    let courseGrade = document.createElement("select") ;
    for(let v in grades)
    {
        let optionTag = document.createElement("option") ;
        optionTag.innerText = v ;
        optionTag.value = grades[v] ;
        optionTag.style.width = "55px";

        courseGrade.appendChild(optionTag) ;
    }

    //create labels for each input course 
    let labelText = `Course ${i+1} :`
    let labelTag = document.createElement("h6") ;
    labelTag.innerHTML  = labelText ;

    //---------------------------------------------------

    let courseNameDiv = document.createElement("div") ;
    courseNameDiv.style.margin = "5px" ;
    courseNameDiv.appendChild(courseName) ;

    let courseCreditDiv = document.createElement("div") ;
    courseCreditDiv.style.margin = "5px" ;
    courseCreditDiv.appendChild(courseCredit) ;

    let courseGradeDiv = document.createElement("div") ;
    courseGradeDiv.style.margin = "5px" ;
    courseGradeDiv.appendChild(courseGrade) ;

    coursesDiv.appendChild(labelTag) ;
    coursesDiv.appendChild(courseNameDiv) ;
    coursesDiv.appendChild(courseCreditDiv) ;
    coursesDiv.appendChild(courseGradeDiv) ;

    mainDiv.appendChild(coursesDiv) ;
    
}

resetButton.addEventListener("click" , function(){

    // let allInputFields = document.getElementsByTagName("input") ; //returns a collection

    // allInputFields = Array.from(allInputFields) ; //collection -> array

    // allInputFields.forEach(function(item){
    //     item.value = "" ;
    // }) ;

    let currentPage = location.href ;
    location.assign(currentPage) ; // mane reset button a click korle page ta refresh hye jabe .

}) ;



let courseCredit1 = document.querySelectorAll(".creditClass") ;
let courseGrade = document.getElementsByTagName("select") ;


calculateButton.addEventListener("click",function(){

    let creditXgrade = [] ;

    for(let i=0 ; i<numberOfCourse ; i++)
    {
        let multi = courseCredit1[i].value * courseGrade[i].value ;
        creditXgrade.push(multi) ;
    }

    let courseCredit2 = Array.from(courseCredit1) ;

    let sumOfCredit = courseCredit2.reduce(function (result, current) {
        return result + Number(current.value); 
    }, 0);

    calculateGPA(creditXgrade , sumOfCredit) ;

}) ;

let inputCGPA = document.querySelector("#inputCGPA") ;
inputCGPA.classList.add("flex-sm-column");
inputCGPA.classList.add("flex-lg-row");

function calculateGPA (creditXgrade , sumOfCredit)
{

    let gpaCGPA = document.getElementById("resultDiv") ;
    let gpa = gpaCGPA.children[0] ;
    let cgpa = gpaCGPA.children[1] ;

    let inputField = document.getElementById("inputField") ;
    let currentCGPA = Number(inputField.children[0].value) ;
    let currentCompleteCredit = Number(inputField.children[1].value);

    let currentCreditXcurrentCGPA = currentCompleteCredit * currentCGPA ; 

    let sumOf_creditXgrade = creditXgrade.reduce(function(result,current){
        return result + current ;
    },0) ;

    let GPA = sumOf_creditXgrade / sumOfCredit ;
    let x1 = sumOf_creditXgrade + currentCreditXcurrentCGPA ;
    let x2 = currentCompleteCredit + sumOfCredit ;
    let CGPA = x1 / x2 ;

    if(isNaN(GPA) || isNaN(CGPA))
    {
        alert("Enter the correct value !!!") ;
    }
    else
    {
        gpa.innerHTML = `Term GPA : ${GPA.toFixed(2)}` ;
        cgpa.innerHTML = `Total CGPA : ${CGPA.toFixed(2)}` ;
    }

    
}



