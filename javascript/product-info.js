document.getElementById("descriptionContainer").addEventListener("click", event => openDescription(event))

function getParentContainer(target) {
    let container = null;
    if (!target.classList.contains("dropdown")) {
        let collection = document.getElementsByClassName("dropdown");
        let i = 0;
        while (container == null && i < collection.length) {
            let item = collection[i]
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
    makeContainerAppear(description, parent)
}

document.getElementById("ingredientsContainer").addEventListener("click", event => openIngredients(event));

function openIngredients(event) {
    let parent = getParentContainer(event.target);
    let ingredients = document.getElementById("ingredients");
    makeContainerAppear(ingredients, parent)
}

document.getElementById("productReviewsContainer").addEventListener("click", openProductReviews)
document.querySelector(".star-rating").addEventListener("click", openProductReviews)

function openProductReviews(event){
    let parent = getParentContainer(event.target);
    let reviews = document.getElementById("hiddenReview");
    makeContainerAppear(reviews, parent)
}

document.getElementById("reviewButton").addEventListener("click", event => makeReview(event))

async function makeReview(event) {
    let parent = getParentContainer(event.target);
    let makeReviewContainer = document.getElementById("productReviews")
    let reviews = document.getElementById("hiddenReview");
    reviews.classList.add("instantAnimation");
    let logo = parent.querySelector(".logo");
    logo.classList.add("instantAnimation");
    makeContainerAppear(makeReviewContainer, null);
    openProductReviews(event);
    openProductReviews(event);
    reviews.classList.remove("instantAnimation")
    logo.classList.remove("instantAnimation");
    filterStars();
}


function makeContainerAppear(node, parentNode) {
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

num = document.querySelector(".num-to-change");
let a = 1;

function incButton() {
    a++;
    num.innerText = a;
    console.log(a);
}

function decButton() {
    if (a > 1) {
        a--;
        num.innerText = a;
        console.log(a);
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
            })
        }
    })
}



