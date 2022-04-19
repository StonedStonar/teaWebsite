document.getElementById("descriptionContainer").addEventListener("click", openDescription)

function openDescription () {
    let description = document.getElementById("description");
    if(!description.classList.contains("containerAnimation")){
        description.classList.add("containerAnimation");
    } else {
        description.classList.remove("containerAnimation");
    }
}

document.getElementById("ingredientsContainer").addEventListener("click", openIngredients)

function openIngredients() {
    let ingredients = document.getElementById("ingredients");
    if (!ingredients.classList.contains("containerAnimation")) {
        ingredients.classList.add("containerAnimation");
    } else {
        ingredients.classList.remove("containerAnimation");
    }

}

document.getElementById("productReviewsContainer").addEventListener("click", openProductReviews)

function openProductReviews() {
    let reviews = document.getElementById("productReviews");
    if (!reviews.classList.contains("containerAnimation")) {
        reviews.classList.add("containerAnimation");
    } else {
        reviews.classList.remove("containerAnimation");
    }
}