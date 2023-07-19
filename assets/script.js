//Variable section
var apiKey = "1"
var navBarEl = document.getElementsByClassName("nav-bar")
var formEl = document.querySelector('#inputSearch')
var searchBtn = document.querySelector('#btn')
var recipeBox = document.getElementById('recipe-box')
var resultsBox = document.getElementById('results');
// var urlRequest = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
var urlRequest = "https://www.themealdb.com/api/json/v1/1/search.php?s="

// Varibale for DOM Append that will allow the recipe to display inside the table under the search button. 
var body = document.body;
var h1El = document.createElement("h1");
// var infoEl = document.createElement("div");

// This code will display the recipe as an ordered list within the result box found under the search button. 
var listEl = document.createElement("ol");




//this code represents the information users will receive upon searching for recipe
function Submit(event) {
    event.preventDefault()
    var userInput = formEl.value
    fetch(urlRequest + userInput).then(function(data){
        return data.json()
    })
    .then(function(data){
        // This commented code shows searched data in search 
        console.log(data) 
        for (var i = 0; i < data.meals.length; i++) {
            console.log(data.meals[i].strMeal, data.meals[i].strInstructions);
            // We will assign this var to create a div
            // everything in orange goes away after the bootstrap is done. 
            var card = ` 
            <div class="card" style="width: 18rem;">
  <div class="card-body">
    <img class="card-img-top" src=${data.meals[i].strMealThumb}>
    <h5 class="card-title">${data.meals[i].strMeal}</h5>
    <p class="card-text"><div>${data.meals[i].strIngredient1}</div> <div>${data.meals[i].strIngredient2}</div></p>
    <a href="https://www.youtube.com/watch?v=e52IL8zYmaE" class="btn btn-primary">Start Cooking</a>
  </div>
</div>`
       resultsBox.innerHTML = card
    //    build h5, p, anchor, button, put inside, class-card gets appended
    // First element var = card, append to this the next div = card-body
    // append h5, p, anchor to card body
    // append btn to card body
    // Figure out how to limit the character set or grab something else other than instructions
    // restrict paragraph to first 500 characters or pull something else out of API. 
    // append card to result box --- final step
        }

    })



}

btn.addEventListener('click', Submit)
