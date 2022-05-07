window.addEventListener('load', (event) => addListeners());

function addListeners(){
    let minusButtons = document.getElementsByClassName("minus-button");
    for(minusButton of minusButtons){
        minusButton.addEventListener("click", event => decrement(event));
    }
    let plusButtons = document.getElementsByClassName("plus-button");
    for(plusButton of plusButtons){
        plusButton.addEventListener("click", event => increment(event));
    }
}

function increment(event){
    let target = event.target;
    let numberField = getNumberField(target);
    let value = numberField.innerHTML;
    numberField.innerHTML = (parseInt(value) + 1);
}

/**
 * Makes the amount value decrease. 
 * @param {clicked decrement button} event the button that was pressed. 
 */
function decrement(event){
    let target = event.target;
    let numberField = getNumberField(target);
    let value = numberField.innerHTML;
    if(value > 1){
        numberField.innerHTML = (parseInt(value) - 1);
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