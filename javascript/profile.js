document.getElementById("deleteProfileButton").addEventListener("click", deleteProfile)

function deleteProfile(){
    console.log("Ello")
    if(confirm("Are you completly sure that you want to delete your profile?")){
        alert("You fucked up human")
        alert("Better watch your back for the next months")
        alert("Your profile has now been deleted.")
        window.location.href = "index.html";
    }
}