// initial work 
"use strict"
console.clear() ;

// select all the html elements 
let inputDiv2 = document.querySelector("#inputDiv2") ;
let writeTask = inputDiv2.children[0] ;
let addButton = inputDiv2.children[1] ;
let lists = document.querySelector("#lists") ;

let listArr = new Array () ;

addButton.addEventListener("click",function(){

    let task = writeTask.value;
    writeTask.value = "" ;

    if(task === "")
    {
        alert("Enter a task !!!") ;s
    }
    else
    {
        addTaskInTheList(task) ;
    }
    
}) ;

function addTaskInTheList(task)
{
    let liTag = document.createElement("li") ;
    let text = document.createTextNode(task) ;
    liTag.appendChild(text) ;
    liTag.style.display = "flex";
    liTag.style.justifyContent = "space-between"; 
    liTag.style.marginTop = "4px" ;
    liTag.style.padding = "2px" ;
    
    let removeButton = document.createElement("button");
    removeButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    removeButton.className = "btn btn-danger btn-sm"; 
    removeButton.name = task ;
    
    liTag.appendChild(removeButton);
    lists.appendChild(liTag);
    
    let getValue = JSON.parse(localStorage.getItem("tasks"))  || []; // local storage a kono value thakle seta getvalue 
                                                                    //te joma hbe ar nahle getValue ti faka array dara initialize hbe
    if(getValue.length === 0)
    {
        listArr.push(task) ;
        localStorage.setItem("tasks" , JSON.stringify(listArr)) ;
    }

    if(getValue.length > 0)
    {
        listArr = [...getValue] ;
        listArr.push(task) ;
        localStorage.setItem("tasks" , JSON.stringify(listArr)) ;
    }

    removeButton.addEventListener("click",function(){
        removeElement(liTag,lists,removeButton.name) ;
    }) ;
}

function removeElement(liTag,lists,name)
{   
    let getValue = JSON.parse(localStorage.getItem("tasks"))
    listArr = [...getValue] ;
    
    let index = listArr.indexOf(name) ;
    listArr.splice(index,1) ;
    
    localStorage.setItem("tasks" , JSON.stringify(listArr)) ;

    lists.removeChild(liTag) ;
}

function ali (task)
{
    let liTag = document.createElement("li") ;
    let text = document.createTextNode(task) ;
    liTag.appendChild(text) ;
    liTag.style.display = "flex";
    liTag.style.justifyContent = "space-between"; 
    liTag.style.marginTop = "4px" ;
    liTag.style.padding = "2px" ;
    
    let removeButton = document.createElement("button");
    removeButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    removeButton.className = "btn btn-danger btn-sm"; 
    removeButton.name = task ;

    let editButton = document.createElement("button") ;
    editButton.innerHTML = "Edit" ;
    editButton.className = "btn btn-warning btn-sm"; 
    editButton.name = task ;

    let divForButton = document.createElement("div") ;
    divForButton.classList.add("btn-group") ;

    divForButton.appendChild(editButton) ;
    divForButton.appendChild(removeButton) ;
    
    lists.appendChild(liTag);
    liTag.appendChild(divForButton) ;

    editButton.addEventListener("click",function(){

        let newTask = prompt("Enter a new task : ") ;
        liTag.textContent = newTask ;

        if(newTask === "")
        {
            alert("Enter a task !!!") ;s
        }
        else
        {
            editElement(lists,editButton.name,newTask) ;
        }        
        
    }) ;

    removeButton.addEventListener("click",function(){
        removeElement(liTag,lists,removeButton.name) ;
    }) ;
}

function editElement(lists,name,newTask)
{   
    let getValue = JSON.parse(localStorage.getItem("tasks"))
    listArr = [...getValue] ;
    
    let index = listArr.indexOf(name) ;
    listArr.splice(index,1,newTask) ;
    
    localStorage.setItem("tasks" , JSON.stringify(listArr)) ;
}



window.addEventListener("load",()=>{

    alert("This website is developed by 🖥 Ali haidar") ;
    
    lists.innerHTML = "" ;

    let getValue2 = JSON.parse(localStorage.getItem("tasks")) || [] ;

    if(getValue2.length > 0)
    {
        for(let v of getValue2)
        {
            ali(v) ;
        }
    }

}) ;