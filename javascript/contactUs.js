document.addEventListener("DOMContentLoaded", () => addAllEventListeners());

function addAllEventListeners() {
    let collection = document.getElementsByClassName("FAQOpener");
    for(let container of collection) {
        container.addEventListener("click", event => openContainer(event));
    }
}

function openContainer(event) {
    let target = event.target;
    let collection = document.getElementsByClassName("FAQ");
    for(let FAQ of collection) {
        if(FAQ.contains(target)) {
            let info = FAQ.querySelector(".info");
            let arrow = target.querySelector(".logo");
            
            if(!info.classList.contains("infoAnimation")){
                info.classList.add("infoAnimation");
                arrow.classList.add("rotateLogo");
            } else {
                info.classList.remove("infoAnimation");
                arrow.classList.remove("rotateLogo");
            }
        }
    }
}