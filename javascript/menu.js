
function openSearch(){
    let search = document.getElementById("searchForm");
    search.addEventListener("click", search)
    console.log(search.style.height)
    if(search.style.height != "1.5em"){
        search.style.height = "1.5em";
        search.style.paddingTop = "0.5em";
        search.style.paddingBottom = "0.5em";
        search.style.border = "black"
        search.style.borderBottom = "1px solid black"
        search.style.borderTop = "1px solid black"
        document.getElementById("productSearch").focus()
    }else{
        search.style.height = "0";
        search.style.paddingTop = "0";
        search.style.paddingBottom = "0";
        search.style.borderTop = "none"
    }
}

function search(){
    let written = document.getElementById("productSearch").value;
    console.log(written)
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
    window.location = "https://www.nyan.cat", '','width=,height=,resizable=no'
}

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
    let width = window.innerWidth;
    if(width >= 800){
        let sidemenu = document.getElementById("sideMenu");
        sidemenu.style.width = ""
        sideMenu.style.transition = "none";
        window.removeEventListener("resize", fixMenu)
    }
}