window.addEventListener('load', (event) => addListeners())

function addListeners() {
    let elements = document.getElementsByClassName("orderContainer");
    //i = 0; i < elements.length; i++
    for (thing of elements) {
        thing.addEventListener("click", event => {
            handleContainer(event);
        });
    }
}

function handleContainer(event) {
    let container = getOrderFromTarget(event.target);
    if (container != null) {
        let target = container.querySelector("div:first-of-type")
        if (!target.classList.contains("openContainer")) {
            openContainer(target, container, "rotatableLogo");
        } else {
            closeContainer(target, container, "rotatableLogo");
        }
    }
}

function getOrderFromTarget(target) {
    let result = null;
    if (!target.classList.contains("order") && !target.classList.contains("orderContainer")) {
        let collection = document.getElementsByClassName("orderContainer");
        let i = 0;
        let clickValid = checkThatClickWasNotInOrder(target);
        while (i < collection.length && clickValid) {
            let container = collection[i];
            if (container.contains(target)) {
                result = container;
            }
            i++;
        }
    } else {
        result = target;
    }
    return result;
}


function checkThatClickWasNotInOrder(target) {
    let valid = true;
    let collection = document.getElementsByClassName("order");
    let i = 0;
    while (i < collection.length && valid) {
        let item = collection[i];
        if (item.contains(target)) {
            valid = false;
        }
        i++;
    }
    return valid;
}


function openContainer(container, containerHolder, logoClassName) {
    container.classList.add("openContainer");
    containerHolder.getElementsByClassName("logo")[0].classList.add("rotateLogo");
    containerHolder.classList.add("openOrder");
}


function closeContainer(container, containerHolder, logoClassName) {
    container.classList.remove("openContainer");
    containerHolder.getElementsByClassName(logoClassName)[0].classList.remove("rotateLogo");
    containerHolder.classList.remove("openOrder")
}