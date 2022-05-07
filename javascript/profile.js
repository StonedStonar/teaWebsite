addListeners();

console.log(document.getElementsByClassName("exitOverlay"))

function addListeners(){
    document.getElementById("deleteProfileButton").addEventListener("click", deleteProfile);
    document.getElementById("editProfile").addEventListener("click", event => openOverlay(event));
    document.getElementById("editPassword").addEventListener("click", event => openOverlay(event));
    let exitOverlayCollection = document.getElementsByClassName("exitOverlay");
    for(i = 0; i < exitOverlayCollection.length; i++){
        exitOverlayCollection[i].addEventListener("click", event => openOverlay(event))
    }
}

function deleteProfile(){
    if(confirm("Are you completly sure that you want to delete your profile?")){
        alert("You fucked up human")
        alert("Better watch your back for the next months")
        alert("Your profile has now been deleted.")
        window.location.href = "index.html";
    }
}

function openOverlay(event){
    let overlay = event.target;
    let body = document.body;
    if(overlay.classList.contains("logo")){
        overlay = getOverlayForCross(overlay);
    }else if(overlay.classList.contains("button")){
        overlay = document.getElementById("editProfileContainer")
    }else if(overlay.classList.contains("editPassword")){
        overlay = document.getElementById("editPasswordContainer");
    }
    if(!overlay.classList.contains("openOverlay")){
        overlay.classList.add("openOverlay");
    }else{
        overlay.classList.remove("openOverlay");
    }
}

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