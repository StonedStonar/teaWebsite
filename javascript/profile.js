addListeners();

/**
 * Adds all listeners to objects.
 */
function addListeners(){
    document.getElementById("deleteProfileButton").addEventListener("click", deleteProfile);
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
