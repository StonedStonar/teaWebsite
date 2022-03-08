let menu = false;

function openMenu(){
    let sideMenu = document.getElementById("sideMenu")
    sideMenu.style.width = "200px";
    sideMenu.style.transition = "1s";
}

function closeMenu(){
    document.getElementById("sideMenu").style.width = "0";
    window.addEventListener("resize", fixMenu)
}

function fixMenu(){
    console.log(window.innerWidth)
    let width = window.innerWidth;
    if(width >= 800){
        let sidemenu = document.getElementById("sideMenu");
        sidemenu.style.width = ""
        sideMenu.style.transition = "none";
        window.removeEventListener("resize", fixMenu)
    }
}