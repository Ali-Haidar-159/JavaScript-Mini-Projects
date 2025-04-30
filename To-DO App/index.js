// initial code 

"use strict" 
console.clear() ;

// main code 

let addBtn = document.getElementById("addBtn") ;
let lists = document.getElementById("lists") ;
let inputField = document.getElementById("inputField") ;

addBtn.addEventListener("click" , function(){

    if(inputField.value === "")
    {
        alert("You have to wright something !!!") ;
    }
    else
    {
        let tag = document.createElement("li") ;
        tag.textContent = inputField.value ;
    
        lists.appendChild(tag) ;
    
        let spanTag = document.createElement("span") ;
        spanTag.innerHTML = "\u00d7" ;
        tag.appendChild(spanTag) ;

        inputField.value = "" ;
        saveData() ;
    }


});


lists.addEventListener("click" , function(event){

    // console.dir(event.target) ;

    if(event.target.tagName === "LI")
    {
        event.target.classList.toggle("checked") ;
        saveData() ;
    }
    else
    {
        event.target.parentNode.remove() ;
        saveData() ;
    }

}) ;

function saveData ()
{
    localStorage.setItem("data" , lists.innerHTML) ;
}

function showDataAfterRefresh()
{
    lists.innerHTML = localStorage.getItem("data") ;
}

showDataAfterRefresh() ;

