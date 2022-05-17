document.getElementById("filter").addEventListener("click", event => openProductFilter(event))

function getParentContainer(target) {
    let container = null;
    if (!target.classList.contains("product-filter")) {
        let collection = document.getElementsByClassName("product-filter");
        let i = 0;
        while (container == null && i < collection.length) {
            let item = collection[i]
            if(item.contains(target)) {
                container = item;
            }

            i++;
        }
    } else {
        container = target;
    }
    return container;
}

function openProductFilter(event) {
    console.log(event);
    let parent = getParentContainer(event.target);
    let productFilter = document.getElementById("hidden-filter");
    makeContainerAppear(productFilter, parent)
}

function makeContainerAppear(node, parentNode) {
    console.log(node);
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
