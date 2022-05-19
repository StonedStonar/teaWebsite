window.addEventListener('load', () => addListeners());

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
    amount.innerHTML = 0;
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
    let numberField = getNumberField(target);
    let value = numberField.value;
    numberField.value = (parseInt(value) + 1);
}

/**
 * Makes the amount value decrease. 
 * @param {clicked decrement button} event the button that was pressed. 
 */
function decrement(event){
    let target = event.target;
    let numberField = getNumberField(target);
    let value = numberField.value;
    if(value > 1){
        numberField.value = (parseInt(value) - 1);
    }
}

/**
 * Gets the number field of the pressed target button.
 * @param {pressed button} target the target that was pressed.
 * @returns the number field to change.
 */
function getNumberField(target){
    let orderedProduct = getOrderedProductContainer(target);
    return orderedProduct.querySelector(".num-to-change");
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