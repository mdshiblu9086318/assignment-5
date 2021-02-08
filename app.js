const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', () => {
    const searchInput = document.getElementById('searchInput').value;
    document.getElementById('searchInput').value = '';
    searchDisplay(searchInput);

});

const searchDisplay = meals => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meals}`
    fetch(url)
        .then(res => res.json())
        .then(data => searchDisplayResult(data.meals));
};

const searchDisplayResult = meal => {
    const mealDiv = document.getElementById('searchResult');
    mealDiv.innerHTML = '';
    meal.forEach(meals => {
        const mealsDiv = document.createElement('div');
        mealsDiv.className = 'meals';
        mealsDiv.innerHTML = `
        <div onclick="showResultDetail('${meals.idMeal}')">
            <img src="${meals.strMealThumb}">
            <h6>${meals.strMeal}</h6>
        </div>
        `;
        mealDiv.appendChild(mealsDiv);
    });
};

const showResultDetail = meals => {
    url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meals}`
    fetch(url)
        .then(res => res.json())
        .then(data => mealDetails(data.meals[0]))
};

const mealDetails = meal => {
    const mealDiv = document.getElementById('mealDetails');
    mealDiv.innerHTML = `
        <img src="${meal.strMealThumb}">
        <br><br>
        <h3>${meal.strMeal}</h3>
        <br>
        <h5>Ingredients</h5>
        <br>
        <p>${meal.strIngredient1}</p>
        <p>${meal.strIngredient2}</p>
        <p>${meal.strIngredient3}</p>
        <p>${meal.strIngredient4}</p>
        <p>${meal.strIngredient5}</p>
        <p>${meal.strIngredient6}</p>
    `;
};