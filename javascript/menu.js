function openSearch(){
    let search = document.getElementById("searchForm");
    search.addEventListener("click", search)
    if(!search.classList.contains("openSearch")){
        search.classList.add("openSearch")
        window.addEventListener("click", listenForCloseSearch)
        document.getElementById("productSearch").focus()
    }else{
        closeSearch();
    }
}

function listenForCloseSearch(click){
    let searchMenu = document.getElementById("searchForm");
    let target = click.target;
    let search = document.getElementById("search");
    if(search.classList.contains("openSearch") && target != searchMenu && target.parentElement != searchMenu && target.parentElement != search && target.parentElement != search.parentElement){
        closeSearch();
        window.removeEventListener("click", listenForCloseSearch);
    }
}

function closeSearch(){
    document.getElementById("searchForm").classList.remove("openSearch");
}

function search(){
    let written = document.getElementById("productSearch");
    console.log(written.value)
    alert("You just tried to search you little sh****** \nAnd you wrote:\n" + written)
    alert("Ever watched porn?")
    let popup = window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '','width=,height=,resizable=no').blur();
    window.location = "https://www.nyan.cat";
}

function openMenu(){
    let sideMenu = document.getElementById("sideMenu")
    sideMenu.classList.add("openMenu")
    window.addEventListener("click", listenForCloseMenu)
}

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

function closeMenu(){
    document.getElementById("sideMenu").classList.remove("openMenu");
}

function openProfileMenu(){
    let profileMenu = document.getElementById("profileMenuOptions");
    if(!profileMenu.classList.contains("openProfileMenu")){
        profileMenu.classList.add("openProfileMenu")
    }else{
        closeProfileMenu();
    }
    window.addEventListener("click", listenForProfileClose)
}

function listenForProfileClose(click){
    let profileMenu = document.getElementById("profileMenuOptions")
    let target = click.target
    if(profileMenu.classList.contains("openProfileMenu") && (target.parentElement != profileMenu.parentElement && target.parentElement != profileMenu)){
        closeProfileMenu();
        window.removeEventListener("click", listenForProfileClose)
    }
}

function closeProfileMenu(){
    let profileMenu = document.getElementById("profileMenuOptions")
    profileMenu.classList.remove("openProfileMenu")
}