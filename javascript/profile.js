addListeners();

/**
 * Adds all listeners to objects.
 */
function addListeners(){
    let removeButton = document.getElementById("deleteProfileButton");
    if(removeButton != null){
        removeButton.addEventListener("click", deleteProfile);
    }
}


/**
 * Deletes the profile with spam messages.
 */
function deleteProfile(){
    if(confirm("Are you completely sure that you want to delete your profile?")){
        alert("Your profile should be deleted but this function haven't been implemented.");
        window.location.href = "index.html";
    }
}
