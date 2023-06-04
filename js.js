//home icon hover bounce effect
const homeHoverList = document.getElementById("homeHover");
const homeHoverState = document.getElementById("homeButton")
homeHoverList.onmouseenter = () => {
    homeHoverState.classList.add("fa-bounce");
}
homeHoverList.onmouseleave = () => {
    homeHoverState.classList.remove("fa-bounce");
}

//projects icon hover spin effect
const projectsHoverlist = document.getElementById("projectHover");
const projectHoverState = document.getElementById("projectButton");
projectsHoverlist.onmouseenter = () => {
    projectHoverState.classList.add("fa-shake");
}
projectsHoverlist.onmouseleave = () => {
    projectHoverState.classList.remove("fa-shake");
}

//resume icon hover spin effect
const resumeHoverlist = document.getElementById("resumeHover");
const resumeHoverState = document.getElementById("resumeButton");
resumeHoverlist.onmouseenter = () => {
    resumeHoverState.classList.add("fa-flip");
}
resumeHoverlist.onmouseleave = () => {
    resumeHoverState.classList.remove("fa-flip");
}

//contact icon hover spin effect
const contactHoverlist = document.getElementById("contactHover");
const contactHoverState = document.getElementById("contactButton");
contactHoverlist.onmouseenter = () => {
    contactHoverState.classList.add("fa-beat");
}
contactHoverlist.onmouseleave = () => {
    contactHoverState.classList.remove("fa-beat");
}


//slide in menu
const menuButton = document.getElementById("cursorDiv");
menuButton.onclick = slideInMenu;
function slideInMenu() {
    const navList = document.getElementById("navList");
    navList.classList.remove("navDisplaySetting")
    let flag = navList.classList.toggle("slideInMenu");
    if (!flag) {
        navList.classList.toggle("slideOutMenu");
        setTimeout(() => {
            navList.classList.add("navDisplaySetting")
            navList.classList.toggle("slideOutMenu")
        }, 300);
    }
}


/* 
            /\
            /\ 
            /\ 
This is layout JS for all pages
*/

/*----------------------------------------------------- */