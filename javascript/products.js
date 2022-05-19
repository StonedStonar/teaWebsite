document.addEventListener("DOMContentLoaded", addListener());


function getFilterOption(target) {
    let collection = document.getElementsByClassName("filterOption");
    let container = null;
    let i = 0;
    while(i < collection.length && container == null) {
        let contain = collection[i];
        if (contain.contains(target) || contain == target) {
            container = contain;
        }
        i++;
    }
    return container;
}

function openProductFilter(event) {
    let productFilter = document.getElementById("hidden-filter");
    makeContainerAppear(productFilter, event.target);
    let filter = document.getElementById("product-filter");
    if (!filter.classList.contains("containerAnimation")) {
        let collection = filter.querySelectorAll(".closeable");
        let i = 0;
        while (i < collection.length) {
            let filterOption = collection[i];
            if (filterOption.classList.contains("containerAnimation")) {
                filterOption.classList.remove("containerAnimation");
            }
            i++; 
        }
        let arrowCollection = filter.querySelectorAll(".rotatableLogo");
        let j = 0;
        while (j < arrowCollection.length) {
            let arrow = arrowCollection[j];
            if (arrow.classList.contains("rotateLogo")) {
                arrow.classList.remove("rotateLogo");
            }
            j++;
        }
    }
}

function makeContainerAppear(node, target) {
    let parentNode = getFilterOption(target);
    let logo;
    if (parentNode != null) {
        logo = parentNode.querySelector(".logo");
    }
    if (!node.classList.contains("containerAnimation")) {
        node.classList.add("containerAnimation");
        if(logo != null) {
            logo.classList.add("rotateLogo");
        }
    } else {
        node.classList.remove("containerAnimation");
        if (logo != null) {
            logo.classList.remove("rotateLogo");
        }
    }
}



function openTea(event) {
    let productType = document.getElementById("openTea");
    makeContainerAppear(productType, event.target);
}

function openMug(event) {
    let productType = document.getElementById("openMug");
    makeContainerAppear(productType, event.target);
}

/**
 * 
 */
 function addListener() {
     countReviewsOnCards();
     let filter = document.getElementById("filter");
     if (filter != null) {
        filter.addEventListener("click", event => openProductFilter(event));
     }

     let tea = document.getElementById("tea");
     if (tea != null ) {
        tea.addEventListener("click", event => openTea(event));
     }

     let mug = document.getElementById("mug");
     if (mug != null) {
         mug.addEventListener("click", event => openMug(event));
     }
     
}


/**
 * 
 * @param {*} starAmount 
 * @param {*} parentContainer 
 */
 function averageStarsOnCard(starAmount, parentContainer) {
    let starContainer = parentContainer.querySelector(".rating-on-cards");
    let stars = starContainer.querySelectorAll(".star");
    let i = 0;
    while (i < starAmount) {
        let star = stars[i];
        star.innerHTML = "&#9733";
        i++;
    }
}

function countReviewsOnCards() {
    let cardCollection = document.getElementsByClassName("card");
    let i = 0;
    console.log(cardCollection);
    while (i < cardCollection.length) {
        let card = cardCollection[i];
        let averageStarsSpan = card.querySelector(".average-stars");
        averageStarsOnCard(averageStarsSpan.innerHTML, card);
        i++;
    }
    
}
