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

function openProductReviews() {
    let reviews = document.getElementById("productReviews");
    if (!reviews.classList.contains("containerAnimation")) {
        reviews.classList.add("containerAnimation");
    } else {
        reviews.classList.remove("containerAnimation");
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

const stars = document.querySelectorAll(".star");

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



