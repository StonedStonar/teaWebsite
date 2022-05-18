document.getElementById("filter").addEventListener("click", event => openProductFilter(event));

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

document.getElementById("tea").addEventListener("click", event => openTea(event));

function openTea(event) {
    let productType = document.getElementById("openTea");
    makeContainerAppear(productType, event.target);
}

document.getElementById("mug").addEventListener("click", event => openMug(event));

function openMug(event) {
    let productType = document.getElementById("openMug");
    makeContainerAppear(productType, event.target);
}