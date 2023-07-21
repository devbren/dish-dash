// This code below grabs the search bar and allows us to use in the javascript code
var formEl = document.querySelector('#inputSearch')
// This varibale below fetches data from the API
var urlRequest = "https://www.themealdb.com/api/json/v1/1/search.php?s="
// This variable below will display a result of the search in the hidden div found in the html code with the id of results
var resultsBox = document.getElementById('results');


// resultsBox.innerHTML = card;

// var card = document.createElement("div");
// card.classList.add("card");

// var cardBody = document.createElement("div");
// cardBody.classList.add("card-body");

// var heading = document.createElement("h5");
// cardBody.appendChild(heading);

// var paragraph = document.createElement("p");
// cardBody.appendChild(paragraph);

// var list = document.createElement("ul")
// cardBody.appendChild(list);

// var listItems = document.createElement("li")
// cardBody.appendChild(listItems);

function createMealCard(meal) {
    var card = document.createElement("div");
    card.classList.add("card");

    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    var heading = document.createElement("h5");
    heading.textContent = meal.strMeal;

    var img = document.createElement("img");
    img.src = meal.strMealThumb;
    img.alt = meal.strMeal;
    img.classList.add("meal-image");

    var button = document.createElement("a");
    button.textContent = "How To Cook Recipe"
    button.setAttribute("target", "_blank")

    // Add a list of five ingredients within the paragraph element
    // This code below represents the small list of the first 5 ingredients from the API. 
    var ingredients = document.createElement("ul");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    var li5 = document.createElement("li");

    

    li1.textContent = meal.strIngredient1;
    li2.textContent = meal.strIngredient2;
    li3.textContent = meal.strIngredient3;
    li4.textContent = meal.strIngredient4;
    li5.textContent = meal.strIngredient5;

    ingredients.appendChild(li1);
    ingredients.appendChild(li2);
    ingredients.appendChild(li3);
    ingredients.appendChild(li4);
    ingredients.appendChild(li5);
    // ingredients.textContent = meal.strIngredient1 + ', ';
    // ingredients.textContent += meal.strIngredient2 + ', ';
    // ingredients.textContent += meal.strIngredient3 + ', ';
    // ingredients.textContent += meal.strIngredient4 + ', ';
    // ingredients.textContent += meal.strIngredient5 + ', ';
    // console.log(meal);
    cardBody.appendChild(heading);
    cardBody.appendChild(img);
    cardBody.appendChild(ingredients);


    // TA Help 
    // This code allows users to click and access a how to video for the recipe
    button.href = meal.strYoutube;
    console.log(meal.strYoutube);

    // cardBody.appendChild(button);

    cardBody.appendChild(button);
    card.appendChild(cardBody);

    

    return card;

}

function Submit(event) {
    event.preventDefault();
    var userInput = formEl.value;
// if statement goes here so that recipe wont populate without input (TA help)
// This if statement allows nothing to fetch and show up in case users accidentally hit search without any input. 
if (userInput === "") {
    return false;
}
    fetch(urlRequest + userInput)
        .then(function (data) {
            return data.json();
        })
        .then(function (data) {
            // Clear the previous results if any
            resultsBox.innerHTML = '';
            console.log(data)
            for (var i = 0; i < data.meals.length; i++) {
                var meal = data.meals[i];
                var card = createMealCard(meal);
                resultsBox.appendChild(card);
                resultsBox.classList.remove('hidden');
            }
        });
}

btn.addEventListener('click', Submit)
















