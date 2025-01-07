// initial work 
"use strict" 
console.clear() ;

// select all the html elements
let taskField = document.querySelector("#taskField") ;
let addButton = document.querySelector("#addButton") ;
let taskList = document.querySelector("#taskList") ;
let i=0 ;

addButton.addEventListener("click",function(){

    let liTag = document.createElement("li") ;
    liTag.innerHTML = (++i) + " . " + taskField.value ;
    taskList.appendChild(liTag) ;

    deleteTask(liTag) ;
    editTask(liTag) ;
    taskField.value = "" ;

}) ;

function deleteTask(liTag)
{
    let deleteButton = document.createElement("button") ;
    deleteButton.innerText = "Delete" ;
    deleteButton.style.marginLeft = "auto" ;
    deleteButton.classList.add("btn" , "btn-danger" , "btn-sm");
    liTag.appendChild(deleteButton) ;

    deleteButton.addEventListener("click",function(){
        liTag.remove() ;
    }) ;

    taskField.value = "" ;
}

function editTask(liTag)
{
    let editButton = document.createElement("button") ;
    editButton.innerText = "Edit" ;
    editButton.style.marginLeft = "6px" ;
    editButton.classList.add("btn" , "btn-warning" , "btn-sm");
    liTag.appendChild(editButton) ;

    editButton.addEventListener("click",function(){
        taskField.value = liTag.childNodes[0].textContent;
    }) ;

    
    
}

