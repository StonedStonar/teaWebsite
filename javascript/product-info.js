document.getElementById("descriptionContainer").addEventListener("click", openDescription)

function openDescription() {
    let description = document.getElementById("description");
    if(!description.classList.contains("containerAnimation")){
        description.classList.add("containerAnimation");
    } else {
        description.classList.remove("containerAnimation");
    }
}

document.getElementById("ingredientsContainer").addEventListener("click", openIngredients)

function openIngredients(){
    let ingredients = document.getElementById("ingredients");
    if (!ingredients.classList.contains("containerAnimation")) {
        ingredients.classList.add("containerAnimation");
    } else {
        ingredients.classList.remove("containerAnimation");
    }
}

document.getElementById("productReviewsContainer").addEventListener("click", openProductReviews)
document.querySelector(".star-rating").addEventListener("click", openProductReviews)

function openProductReviews() {
    let reviews = document.getElementById("hiddenReview");
    if (!reviews.classList.contains("containerAnimation")) {
        console.log("opens reviews")
        reviews.classList.add("containerAnimation");
    } else {
        console.log("closesReiews")
        reviews.classList.remove("containerAnimation");
    }
}

document.getElementById("reviewButton").addEventListener("click", makeReview)

async function makeReview(){
    let makeReviewContainer = document.getElementById("productReviews")
    let reviews = document.getElementById("hiddenReview");
    reviews.classList.add("instantAnimation");
    makeContainerAppear(makeReviewContainer);
    openProductReviews();
    openProductReviews();
    reviews.classList.remove("instantAnimation")
    filterStars();
}


function makeContainerAppear(node){
    if (!node.classList.contains("containerAnimation")) {
        node.classList.add("containerAnimation");
    } else {
        node.classList.remove("containerAnimation");
    }
}

document.querySelector(".plus-button", "num-to-change").addEventListener("click", incButton)
document.querySelector(".minus-button").addEventListener("click", decButton)

num = document.querySelector(".num-to-change");
let a = 1;

function incButton() {
    a++;
    num.innerText = a;
    console.log(a);
}

function decButton() {
    if(a > 1) {
        a--;
        num.innerText = a;
        console.log(a);
    }
}

var stars = [];

function filterStars(){
    let containerOfStars = document.getElementById("reviewStars");
    stars = containerOfStars.querySelectorAll(".star");
}

filterStars();

function giveStars(){
    stars.forEach((star, i) => {
        star.onclick = function () {
            let current_star = i + 1;
    
            stars.forEach((star, j) => {
                if (current_star >= j + 1) {
                    star.innerHTML = "&#9733";
                } else {
                    star.innerHTML = "&#9734";
                }
            })
        }
    })
}



