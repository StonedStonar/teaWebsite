addEventListeners();

/**
 * Adds all the event listeners that is needed.
 */
function addEventListeners(){
    let button = document.getElementById("switchViewButton");
    button.addEventListener("click", () => swithView())
}

/**
 * Switches the viewed thing on the screen.
 */
function swithView(){
    let previewCollection = document.getElementsByClassName("preview");
    let i = 0;
    let placeOfCurrentContainer = -1;
    while(i < previewCollection.length){
        let container = previewCollection[i];
        if(container.classList.contains("showPreview")){
            container.classList.remove("showPreview");
            if(placeOfCurrentContainer == -1){
                placeOfCurrentContainer = i;
            }
        }
        i++;
    }
    if(placeOfCurrentContainer != -1){
        let newPlace = (placeOfCurrentContainer+1)%previewCollection.length;
        previewCollection[newPlace].classList.add("showPreview");
        console.log(newPlace)
    }
}