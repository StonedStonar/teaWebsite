document.addEventListener("DOMContentLoaded", event => addAllEventListeners())

function addAllEventListeners() {
    let collection = document.getElementsByClassName("FAQOpener");
    for(container of collection) {
        container.addEventListener("click", event => openContainer(event))
    }
}

function openContainer(event) {
    let target = event.target;
    let collection = document.getElementsByClassName("FAQ");
    for(FAQ of collection) {
        if(FAQ.contains(target)) {
            let info = FAQ.querySelector(".info");
            if(!info.classList.contains("infoAnimation")){
                info.classList.add("infoAnimation");
            } else {
                info.classList.remove("infoAnimation");
            }

            let arrow = target.querySelector(".logo");
        }
    }
}