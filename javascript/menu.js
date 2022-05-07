
/**
 * Opens the search menu.
 */
function openSearch(){
    let search = document.getElementById("searchForm");
    search.addEventListener("click", search)
    if(!search.classList.contains("openSearch")){
        search.classList.add("openSearch")
        window.addEventListener("click", event => listenForCloseSearch(event))
        document.getElementById("productSearch").focus()
    }else{
        closeSearch();
    }
}

/**
 * Listens along and checks if a mouseevent was outside the opened search field.
 * @param {*} click the click location.
 */
function listenForCloseSearch(click){
    let searchMenu = document.getElementById("searchForm");
    let target = click.target;
    if(target != searchMenu && !searchMenu.contains(target) && target != searchMenu.parentElement && !searchMenu.parentElement.contains(target)){
        closeSearch();
        window.removeEventListener("click", listenForCloseSearch);
    }
}

/**
 * Closes the search menu.
 */
function closeSearch(){
    document.getElementById("searchForm").classList.remove("openSearch");
}

/**
 * The action of searching.
 */
function search(){
    let written = document.getElementById("productSearch");
    console.log(written.value)
    alert("You just tried to search you little sh****** \nAnd you wrote:\n" + written)
    alert("Ever watched porn?")
    let popup = window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '','width=,height=,resizable=no').blur();
    window.location = "https://www.nyan.cat";
}

/**
 * Opens the mobile menu.
 */
function openMenu(){
    let sideMenu = document.getElementById("sideMenu")
    sideMenu.classList.add("openMenu")
    window.addEventListener("click", listenForCloseMenu)
}

/**
 * Listens along if the click was outside of the mobile menu.
 * @param {*} click the click.
 */
function listenForCloseMenu(click){
    let sideMenu = document.getElementById("sideMenu")
    let hambuger = document.getElementById("hamburgerMenu")
    let target = click.target
    if(sideMenu.classList.contains("openMenu") && (target.parentElement != hambuger && target != hambuger && target != sideMenu)){
        console.log("closing")
        closeMenu();
        window.removeEventListener("click", listenForCloseMenu);
    }
}

/**
 * Closes the mobile menu.
 */
function closeMenu(){
    document.getElementById("sideMenu").classList.remove("openMenu");
}

/**
 * Opens the profile menu.
 */
function openProfileMenu(){
    let profileMenu = document.getElementById("profileMenuOptions");
    if(!profileMenu.classList.contains("openProfileMenu")){
        profileMenu.classList.add("openProfileMenu")
    }else{
        closeProfileMenu();
    }
    window.addEventListener("click", listenForProfileClose)
}

/**
 * Listens in case the profile menu is not clicked on.
 * @param {*} click the click.
 */
function listenForProfileClose(click){
    let profileMenu = document.getElementById("profileMenuOptions")
    let target = click.target
    if(profileMenu.classList.contains("openProfileMenu") && (target.parentElement != profileMenu.parentElement && target.parentElement != profileMenu)){
        closeProfileMenu();
        window.removeEventListener("click", listenForProfileClose)
    }
}

/**
 * Closes the profile menu.
 */
function closeProfileMenu(){
    let profileMenu = document.getElementById("profileMenuOptions")
    profileMenu.classList.remove("openProfileMenu")
}