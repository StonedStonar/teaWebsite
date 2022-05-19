addListeners();

/**
 * Adds all listeners to objects.
 */
function addListeners(){
    document.getElementById("deleteProfileButton").addEventListener("click", deleteProfile);
    document.getElementById("editProfile").addEventListener("click", event => openOverlay(event));
    document.getElementById("editPassword").addEventListener("click", event => openOverlay(event));
    let exitOverlayCollection = document.getElementsByClassName("exitOverlay");
    let i = 0;
    checkForParameters();
    while(i < exitOverlayCollection.length){
        exitOverlayCollection[i].addEventListener("click", event => openOverlay(event));
        i++;
    }
}

/**
 * Checks if any of the paramters should open an overlay.
 */
function checkForParameters(){
    let url = window.location.search;
    let urlParams = new URLSearchParams(url);
    if(urlParams.has("editProfile") || urlParams.has("editAddress")){
        document.getElementById("editProfile").click();
    }else if(urlParams.has("editPassword")){
        document.getElementById("editPassword").click();
    }
}

/**
 * Deletes the profile with spam messages.
 */
function deleteProfile(){
    if(confirm("Are you completly sure that you want to delete your profile?")){
        alert("You fucked up human");
        alert("Better watch your back for the next months");
        alert("Your profile has now been deleted.");
        window.location.href = "index.html";
    }
}

/**
 * Opens an overlay based on an event.
 * @param {*} event the button that was pressed. 
 */
function openOverlay(event){
    let overlay = event.target;
    if(overlay.classList.contains("logo")){
        overlay = getOverlayForCross(overlay);
    }else if(overlay.classList.contains("button")){
        overlay = document.getElementById("editProfileContainer");
    }else if(overlay.id == "editPassword"){
        overlay = document.getElementById("editPasswordContainer");
    }
    if(!overlay.classList.contains("openOverlay")){
        overlay.classList.add("openOverlay");
    }else{
        overlay.classList.remove("openOverlay");
    }
}

/**
 * Gets the overlay this cross belongs too.
 * @param {*} targetCross the cross.
 * @returns the overlay.
 */
function getOverlayForCross(targetCross){
    let overlays = document.getElementsByClassName("editContainer");
    let result = null;
    let i = 0;
    while(result == null && i < overlays.length){
        let selectedOverlay = overlays[i];
        if(selectedOverlay.contains(targetCross)){
            result = selectedOverlay;
        }
        i++;
    }
    return result;
}