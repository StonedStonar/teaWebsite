window.addEventListener('load', () => addListeners());

/**
 * Adds listeners to all the interactions that needs it.
 */
function addListeners() {
    let elements = document.getElementsByClassName("orderContainer");
    //i = 0; i < elements.length; i++
    for (let thing of elements) {
        thing.addEventListener("click", event => {
            handleContainer(event);
        });
    }
}


/**
 * Handles the opening and closing of a container.
 * @param {target container} event element in the container.
 */
function handleContainer(event) {
    let container = getOrderFromTarget(event.target);
    if (container != null) {
        let target = container.querySelector("div:first-of-type");
        if (!target.classList.contains("openContainer")) {
            openContainer(target, container);
        } else {
            closeContainer(target, container);
        }
    }
}

/**
 * Gets the order that the cliked item is part of.
 * @param {click target} target the clicked target.
 * @returns the order container that was cliked.
 */
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

/**
 * Checks if the clicked target was not in the order itself.
 * @param {target} target the clicked target.
 * @returns true if the target is inside the order. False otherwise.
 */
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

/**
 * Opens the wanted container. 
 * @param {*} container the container to open.
 * @param {*} containerHolder the element that holds that container.
 */
function openContainer(container, containerHolder) {
    container.classList.add("openContainer");
    containerHolder.getElementsByClassName("logo")[0].classList.add("rotateLogo");
    containerHolder.classList.add("openOrder");
}

/**
 * Closes the wanted container. 
 * @param {*} container the container to close.
 * @param {*} containerHolder the element that holds that container.
 * @param {*} logoClassName the logo that should be flipped.
 */
function closeContainer(container, containerHolder) {
    container.classList.remove("openContainer");
    containerHolder.getElementsByClassName("logo")[0].classList.remove("rotateLogo");
    containerHolder.classList.remove("openOrder");
}