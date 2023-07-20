var formEl = document.querySelector('#inputSearch')
var urlRequest = "https://www.themealdb.com/api/json/v1/1/search.php?s="
var resultsBox = document.getElementById('results');


resultsBox.innerHTML = card;

var card = document.createElement("div");
card.classList.add("card");

var cardBody = document.createElement("div");
cardBody.classList.add("card-body");

var heading = document.createElement("h5");
cardBody.appendChild(heading);

var paragraph = document.createElement("p");

cardBody.appendChild(paragraph);

var link = document.createElement("a");
cardBody.appendChild(link);

var button = document.createElement("a");
cardBody.appendChild(button);
button.textContent = "Youtube Cooking"


card.appendChild(cardBody);

resultsBox.appendChild(card);

function createMealCard(meal) {
    var card = document.createElement("div");
    card.classList.add("Card");

    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    var heading = document.createElement("h5");
    heading.textContent = meal.strMeal;

    var img = document.createElement("img");
    img.src = meal.strMealThumb;
    img.alt = meal.strMeal;
    img.classList.add("meal-image");

    // Add a list of five ingredients within the paragraph element
    var ingredients = document.createElement("p");
    ingredients.textContent = meal.strIngredient1;
    console.log(meal);
    cardBody.appendChild(heading);
    cardBody.appendChild(img);
    cardBody.appendChild(ingredients);

    // TA Help 
    button.href = meal.strYoutube

    cardBody.appendChild(button);

    card.appendChild(cardBody);

    return card;

}

function Submit(event) {
    event.preventDefault();
    var userInput = formEl.value;
// if statement goes here so that recipe wont populate without input (TA help)
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












 



