document.getElementById("descriptionContainer").addEventListener("click", event => openDescription(event));

function getParentContainer(target) {
    let container = null;
    if (!target.classList.contains("dropdown")) {
        let collection = document.getElementsByClassName("dropdown");
        let i = 0;
        while (container == null && i < collection.length) {
            let item = collection[i];
            if (item.contains(target)) {
                container = item;
            }
            i++;
        }
    }else{
        container = target;
    }
    return container;
}

function openDescription(event) {
    let parent = getParentContainer(event.target);
    let description = document.getElementById("description");
    makeProductContainerAppear(description, parent);
}

document.getElementById("ingredientsContainer").addEventListener("click", event => openIngredients(event));

function openIngredients(event) {
    let parent = getParentContainer(event.target)
    let ingredients = document.getElementById("ingredients");
    makeProductContainerAppear(ingredients, parent);
}


document.getElementById("productReviewsContainer").addEventListener("click", event => openProductReviews(event));
document.querySelector(".star-rating").addEventListener("click", event => openProductReviews(event));

function openProductReviews(event){
    let parent = null;
    let reviewCounter = document.getElementsByClassName("inStock");
    if(reviewCounter[0].contains(event.target)){
        parent = document.getElementById("productReviewsContainer");
    }else{
        parent = getParentContainer(event.target)
    }
    let reviews = document.getElementById("hiddenReview");
    makeProductContainerAppear(reviews, parent);
}

document.getElementById("reviewButton").addEventListener("click", event => makeReview(event));

async function makeReview(event) {
    let parent = getParentContainer(event.target);
    let makeReviewContainer = document.getElementById("productReviews");
    let reviews = document.getElementById("hiddenReview");
    reviews.classList.add("instantAnimation");
    let logo = parent.querySelector(".logo");
    logo.classList.add("instantAnimation");
    makeProductContainerAppear(makeReviewContainer, null);
    openProductReviews(event);
    openProductReviews(event);
    reviews.classList.remove("instantAnimation");
    logo.classList.remove("instantAnimation");
    filterStars();
}


function makeProductContainerAppear(node, parentNode) {
    let logo;
    if(parentNode != null){
        logo = parentNode.querySelector(".logo");
    }
    if (!node.classList.contains("containerAnimation")) {
        node.classList.add("containerAnimation");
        if(logo != null){
            logo.classList.add("rotateLogo");
        }
    } else {
        node.classList.remove("containerAnimation");
        if(logo != null){
            logo.classList.remove("rotateLogo");
        }
    }
}

document.querySelector(".plus-button", "num-to-change").addEventListener("click", event => incButton(event));
document.querySelector(".minus-button").addEventListener("click", event => decButton(event));

const num = document.querySelector(".num-to-change");
let a = 1;

function incButton() {
    a++;
    num.value = a;
}

function decButton() {
    if (a > 1) {
        a--;
        num.value = a;
    }
}

var stars = [];

function filterStars() {
    let containerOfStars = document.getElementById("reviewStars");
    stars = containerOfStars.querySelectorAll(".star");
}

filterStars();

function giveStars() {
    stars.forEach((star, i) => {
        star.onclick = function () {
            let current_star = i + 1;

            stars.forEach((star, j) => {
                if (current_star >= j + 1) {
                    star.innerHTML = "&#9733";
                } else {
                    star.innerHTML = "&#9734";
                }
            });
        };
    });
}

document.getElementById("reviewButton").addEventListener("click", () => {
    changeReivewButton();
});

function changeReivewButton(){
    let reviewButton = document.getElementById("reviewButton");
    let productReviewsContainer = document.getElementById("productReviews");
    if (productReviewsContainer.classList.contains("containerAnimation")) {
        reviewButton.innerText = "Close review"; 
    } else {
        reviewButton.innerText = "Write your review";
    }
}


document.addEventListener("DOMContentLoaded", addListener());
/**
 * 
 */
function countReviews() {
    let allReviews = document.getElementsByClassName("reviews-container");
    let amountOfReviews = document.getElementById("amount-of-reviews");
    amountOfReviews.innerText = allReviews.length;
    let allReview = document.getElementsByClassName("reviews-container");
    let i = 0;
    let totalStars = 0;
    while (i < allReview.length) {
        let reveiw = allReview[i];
        let ratingSpan = reveiw.querySelector(".rating-numb");
        let ratingNumb = ratingSpan.innerHTML;
        totalStars += parseInt(ratingNumb);
        i++;
    }
    let averageStars = totalStars/allReview.length;
    countAverageStars(averageStars, document.getElementById("price-and-review"));
}

/**
 * 
 */
function addListener() {
    SetAllRatingNumbers();
    countReviews();
    let starContainer = document.getElementById("reviewStars");
    let starCollection = starContainer.querySelectorAll(".star");
    console.log(starContainer);
    for (let star of starCollection) {
        star.addEventListener("click", event => setStars(event));
    }
}


/**
 * 
 */
function SetAllRatingNumbers() {
    let reviewCollection = document.getElementsByClassName("reviews-container");
    let i = 0;
    while (i < reviewCollection.length) {
        let getReview = reviewCollection[i];
        let ratingOfReview = getReview.querySelector(".rating-numb");
        let averageStars = ratingOfReview.innerHTML;
        countAverageStars(averageStars, getReview);
        i++;
    }
}

/**
 * 
 * @param {*} starAmount 
 * @param {*} parentContainer 
 */
function countAverageStars(starAmount, parentContainer) {
    let starContainer = parentContainer.querySelector(".review-star-rating");
    let stars = starContainer.querySelectorAll(".star");
    let i = 0;
    while (i < starAmount) {
        let star = stars[i];
        star.innerHTML = "&#9733";
        i++;
    }
}

function setStars(event) {
    let starContainer = document.getElementById("reviewStars");
    let starCollection = starContainer.querySelectorAll(".star");
    let setStarRating = document.getElementById("setStarRating");
    let i = 0;
    let amountOfStars = 0;
    let foundStar = false;
    while (i < starCollection.length) {
        let star = stars[i];
        if (star == event.target) {
            foundStar = true;
            console.log(star);
            star.innerHTML = "&#9733";
            amountOfStars = i+1;
            setStarRating.value = amountOfStars;
        } else {
            star.innerHTML = "&#9734"
        }
        if (!foundStar) {
            star.innerHTML = "&#9733";
        } 
        i++;
    } 
}










