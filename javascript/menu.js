function openSearch(){
    let search = document.getElementById("searchForm");
    search.addEventListener("click", search)
    if(search.style.height != "1.5em"){
        search.style.height = "1.5em";
        search.style.paddingTop = "0.5em";
        search.style.paddingBottom = "0.5em";
        search.style.visibility = "visible";
        search.style.border = "black";
        search.style.borderBottom = "1px solid black";
        search.style.borderTop = "1px solid black";
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
    if(searchMenu.style.height != "" && target != searchMenu && target.parentElement != searchMenu && target.parentElement != search && target.parentElement != search.parentElement){
        closeSearch();
        window.removeEventListener("click", listenForCloseSearch);
    }
}

function closeSearch(){
    document.getElementById("searchForm").style = null;
}

function search(){
    let written = document.getElementById("productSearch");
    console.log(written.value)
    alert("You just tried to search you little sh****** \nAnd you wrote:\n" + written)
    alert("Ever watched porn?")
    let popup = window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '','width=,height=,resizable=no').blur();
    let result = window.confirm("Are you happy with this?")
    if(result){
        alert("Good for you")
        alert("But yeeaah you have to suffer")
    }else{
        alert("Well, it always can...")
    }
    window.location = "https://www.nyan.cat";
}

function openMenu(){
    let sideMenu = document.getElementById("sideMenu")
    sideMenu.style.visibility = "visible"
    sideMenu.style.width = "200px";
    sideMenu.style.transition = "1s";
    window.addEventListener("click", listenForCloseMenu)
}

function listenForCloseMenu(click){
    let sideMenu = document.getElementById("sideMenu")
    let hambuger = document.getElementById("hamburgerMenu")
    let target = click.target
    if((sideMenu.style.width != "") && (target.parentElement != hambuger && target != hambuger && target != sideMenu)){
        console.log("closing")
        closeMenu();
        window.removeEventListener("click", listenForCloseMenu);
    }
}

function closeMenu(){
    document.getElementById("sideMenu").style = null;
}

function openProfileMenu(){
    let profileMenu = document.getElementById("profileMenuOptions");
    if(profileMenu.style.opacity == ""){
        profileMenu.style.visibility = "visible";
        profileMenu.style.opacity = 1;
    }else{
        profileMenu.style = "null";
    }
    window.addEventListener("click", listenForProfileClose)
}

function listenForProfileClose(click){
    let profileMenu = document.getElementById("profileMenuOptions")
    let target = click.target
    if((profileMenu.style.opacity != "") && (target.parentElement != profileMenu.parentElement && target.parentElement != profileMenu)){
        closeProfileMenu();
        window.removeEventListener("click", listenForProfileClose)
    }
}

function closeProfileMenu(){
    let profileMenu = document.getElementById("profileMenuOptions")
    profileMenu.style = null
}