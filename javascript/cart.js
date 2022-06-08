window.addEventListener('load', () => addListeners());


document.getElementById("form").addEventListener("submit", event => sendForm(event));
/**
 * Sends the form to the server.
 */
function sendForm(event){
    event.preventDefault();
    let collection = event.target.querySelectorAll(".num-to-change");
    let link = window.location.origin;
    link = link + "/users/cart?";
    for(let i = 0; i < collection.length; i++){
        let input = collection[i];
        let extraAnd = "";
        if(i > 0){
            extraAnd = "&";
        }
        link = link + extraAnd + input.name + "=" + input.value;
    }
    let http = new XMLHttpRequest();
    http.open("PUT", link);
    http.send();
}

async function sendCart(event){
    let updateCartButton = document.getElementById("updateCartButton");
    updateCartButton.click();
    await new Promise(resolve => setTimeout(resolve, 5000));
}

/**
 * Adds all the listeners.
 */
function addListeners(){
    let minusButtons = document.getElementsByClassName("minus-button");
    for(let minusButton of minusButtons){
        minusButton.addEventListener("click", event => decrement(event));
    }
    let plusButtons = document.getElementsByClassName("plus-button");
    for(let plusButton of plusButtons){
        plusButton.addEventListener("click", event => increment(event));
    }
    let removePrductButtons = document.getElementsByClassName("removeButton");
    for(let removeButton of removePrductButtons){
        removeButton.addEventListener("click", event => removeProduct(event));
    }
    let clearCartButton = document.getElementById("clearCartButton");
    clearCartButton.addEventListener("click", () => removeAllProducts());
    document.getElementById("form").addEventListener("submit", event => sendForm(event));
    let collection = document.getElementsByTagName("a");
    for(let a of collection){
        a.addEventListener("click", event => sendCart(event));
    }
    let productCollection = document.getElementsByClassName("orderedProduct");
    for(let productContainer of productCollection){
        updateTotalOfProduct(productContainer);
    }
    updateTotalAmounts();
}

function updateTotalOfProduct(container){
    let pricePer = container.querySelector(".pricePer");
    let amount = container.querySelector(".num-to-change");
    let totalSpan = container.querySelector(".totalPricePerProduct");
    let totalPrice = parseFloat(pricePer.innerHTML) * parseFloat(amount.value);
    totalSpan.innerHTML = totalPrice;

    let discountPer = container.querySelector(".discountPer");
    let discountSpan = container.querySelector(".discountPerProduct");
    let totalDiscount = parseFloat(discountPer.innerHTML) * parseFloat(amount.value);
    discountSpan.innerHTML = totalDiscount;

    updateTotalAmounts();
}

function updateTotalAmounts(){
    updateTotalSum();
    updateTotalDiscount();
}

function updateTotalSum(){
    let totalPricesCollection = document.getElementsByClassName("totalPricePerProduct");
    let i = 0;
    let totalPrice = 0;
    while(i < totalPricesCollection.length){
        let totalPriceSpan = totalPricesCollection[i];
        totalPrice += parseFloat(totalPriceSpan.innerHTML)
        i++;
    }
    let totalPriceTag = document.getElementById("totalSum");
    totalPriceTag.innerHTML = totalPrice;
}

function updateTotalDiscount(){
    let totalDiscountCollecton = document.getElementsByClassName("discountPerProduct");
    let i = 0;
    let totalDiscount = 0;
    while(i < totalDiscountCollecton.length){
        let totalDiscountSpan = totalDiscountCollecton[i];
        totalDiscount += parseFloat(totalDiscountSpan.innerHTML)
        i++;
    }
    let totalDiscountTag = document.getElementById("totalDiscount");
    totalDiscountTag.innerHTML = totalDiscount;

}

/**
 * Removes a product form the cart.
 * @param {*} event the click event.
 */
function removeProduct(event){
    let target = event.target;
    let productContainers = document.getElementsByClassName("orderedProduct");
    let i = 0;
    let foundContainer = false;
    while(i < productContainers.length && !foundContainer){
        let productContainer = productContainers[i];
        if(productContainer.contains(target)){
            foundContainer = true;
            hideContainer(productContainer);
        }
        i++;
    }
}

/**
 * Hides an container.
 * @param {*} productContainer the container to hide.
 */
function hideContainer(productContainer){
    let amount = productContainer.querySelector(".num-to-change");
    amount.value = 0;
    updateTotalOfProduct(productContainer);
    productContainer.classList.add("hideProduct");
}

/**
 * Removes all products from the cart.
 */
function removeAllProducts(){
    let orderedProducts = document.getElementsByClassName("orderedProduct");
    for(let container of orderedProducts) {
        hideContainer(container);
    }
}

/**
 * Increments the target product.
 * @param {*} event the click event.
 */
function increment(event){
    let target = event.target;
    let orderedProduct = getOrderedProductContainer(target);
    let numberField = getNumberField(orderedProduct);
    let value = numberField.value;
    numberField.value = (parseInt(value) + 1);
    updateTotalOfProduct(orderedProduct);
}

/**
 * Makes the amount value decrease.
 * @param {clicked decrement button} event the button that was pressed.
 */
function decrement(event){
    let target = event.target;
    let orderedProduct = getOrderedProductContainer(target);
    let numberField = getNumberField(orderedProduct);
    let value = numberField.value;
    if(value > 1){
        numberField.value = (parseInt(value) - 1);
        updateTotalOfProduct(orderedProduct);
    }
}

/**
 * Gets the number field of the target container
 * @param {container} container the cotnainer.
 * @returns the number field to change.
 */
function getNumberField(container){
    return container.querySelector(".num-to-change");
}

/**
 * Gets the ordered product container.
 * @param {clicked target} target the ordered product container.
 * @returns the ordered product container that holds this target.
 */
function getOrderedProductContainer(target){
    let orderedProducts = document.getElementsByClassName("orderedProduct");
    let orderdProductContainer = null;
    let i = 0;
    while(orderdProductContainer == null && i < orderedProducts.length){
        let orderContainer = orderedProducts[i];
        if(orderContainer.contains(target)){
            orderdProductContainer = orderContainer;
        }
        i++;
    }
    return orderdProductContainer;
}