//Variable section
var apiKey = "1"
var navBarEl = document.getElementsByClassName("nav-bar")
var formEl = document.querySelector('#inputSearch')
var searchBtn = document.querySelector('#btn')
var recipeBox = document.getElementById('recipe-box')
// var urlRequest = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
var urlRequest = "https://www.themealdb.com/api/json/v1/1/search.php?s="


//this code represents the information users will receive upon searching for recipe
function Submit(event) {
    event.preventDefault()
    var userInput = formEl.value
    fetch(urlRequest + userInput).then(function(data){
        return data.json()
    })
    .then(function(data){
        console.log(data)
    })
    



}

btn.addEventListener('click', Submit)
