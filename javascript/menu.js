function openMenu(){
    let sideMenu = document.getElementById("sideMenu")
    sideMenu.style.width = "200px";
    sideMenu.style.transition = "1s";
}

function closeMenu(){
    document.getElementById("sideMenu").style.width = "0";
    sideMenu.style.transition = "1s";
}