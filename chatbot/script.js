// initial code 
"use strict"
console.clear() ;

// select all html element 
let searchBar = document.querySelector("#searchBar") ;
let searchField = searchBar.children[0] ;
let searchButton = searchBar.children[1] ;
let outputDiv = document.getElementById("outputDiv") ;
let ans = outputDiv.children[0] ;
let logo = document.getElementById("logo");

// manipulation API 

function callingAPI(config) {
    return axios(config);
}

function getData() {

    let question = searchField.value;

    callingAPI({
        method: 'POST',
        url: 'https://infinite-gpt.p.rapidapi.com/infinite-gpt',
        headers: {
            'x-rapidapi-key': '3b93bd37a1mshbcd8631ca791dd4p185783jsnde69ca4041ff',
            'x-rapidapi-host': 'infinite-gpt.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        data: {
            query: question, 
        }
    })
    .then(function(res) {
        // console.log(res.data.msg); 

        let ans = res.data.msg ;

        let questionTag = document.createElement("h5") ;
        questionTag.innerText = `Question : ${searchField.value}`;
        questionTag.style.margin = "10px" ;
        questionTag.classList.add("p-3","rounded");
        questionTag.style.backgroundColor = "#d4efdf" ;
        searchField.value = "" ;
        

        let ansTag = document.createElement("p")  ;
        ansTag.innerText = `Answer : ${ans}` ;
        ansTag.classList.add("p-3","rounded");
        ansTag.style.backgroundColor = "#f6ddcc" ;        

        outputDiv.appendChild(questionTag) ;
        outputDiv.appendChild(ansTag) ;

    })
    .catch(function(err) {

        if(err.status >= 400)
        {
            let errMsg = document.createElement("h5") ;
            errMsg.innerText = "Server Down !!! Please try again after 24 hours";
            errMsg.style.margin = "10px" ;
            errMsg.style.textAlign = "center";
            errMsg.classList.add("p-3","rounded");
            errMsg.style.backgroundColor = "#DAF7A6" ;
            searchField.value = "" ;

            outputDiv.appendChild(errMsg);
        }

    });
}

searchButton.addEventListener("click", function() {
    getData(); 
});

logo.innerHTML = "<h4>A<span style='color:red; font-size:2rem'>L</span>I</h4>" ;
logo.style.textDecoration = "none";
logo.title = "AI" ;
