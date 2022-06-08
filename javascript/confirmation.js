document.addEventListener("DOMContentLoaded", addEventListeners());
/**
 * Adds event listeners to objects.
 */
function addEventListeners() {
    let deliverySelect = document.getElementById("selectDelivery");
    let paymentSelect = document.getElementById("selectPayment");


    deliverySelect.addEventListener("change", () => updateDelivery());
    paymentSelect.addEventListener("change", () => updatePayment());
    updateSubtotal();


}

/**
 * Updates what delivery is selected and updates the subtotal.
 */
function updateDelivery() {
    let deliverySelect = document.getElementById("selectDelivery");
    let selectedText = getSelectedItemFromSelect(deliverySelect);
    let shippingInfo = document.getElementById("shippingCost");
    shippingInfo.innerHTML = selectedText;
    updateSubtotal();
}

/**
 * Updates what payment is selected and updates the subtotal.
 */
function updatePayment() {
    let paymentSelect = document.getElementById("selectPayment");
    let selectedText = getSelectedItemFromSelect(paymentSelect);
    let paymentInfo = document.getElementById("paymentCost");
    paymentInfo.innerHTML = selectedText;

    updateSubtotal();
}

/**
 * Gets selected item from select.
 * @param {*} select the select tag.
 * @returns the text within the selected option.
 */
function getSelectedItemFromSelect(select) {
    let value = select.value;
    let text = null;
    if (value != 0) {
        let i = 0;
        let options = select.querySelectorAll(".option");
        while(i < options.length && text == null) {
            let option = options[i];
            if (option.selected){
                text = option.innerHTML;
            }
            i++;
        }

    }

    return text;

}

/**
 * Updates the total amount.
 */
function updateSubtotal(){
    let costCollection = document.getElementsByClassName("costs");
    let i = 0;
    let totalCost = 0;
    while(i<costCollection.length) {
        let costsSpan = costCollection[i];

        totalCost += parseInt(costsSpan.innerHTML);

        i++;
    }

    let totalCostSpan = document.getElementById("TotalCost");

    totalCostSpan.innerHTML = totalCost;
}