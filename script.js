// Menu
const sideNav = document.querySelector(".sideNav")
const ham = document.querySelector(".ham")
const menuX = document.querySelector(".menuX")
const menuItems = document.querySelectorAll(".menuLink")

menuItems.forEach(menuItem => {
    menuItem.addEventListener("click", toggleHamburger)
})

ham.addEventListener("click", toggleHamburger)
menuX.addEventListener("click", toggleHamburger)

function toggleHamburger() {
    sideNav.classList.toggle("showNav")
}

// Popup
var project = document.getElementById("project");
var btns = document.querySelectorAll('[id=project-btn]');;
var close = document.getElementsByClassName("close")[0];

btns.forEach (btn => {
    btn.addEventListener("click", function () {
        project.style.display = "block";
    })
})

close.onclick = function () {
    project.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == project) {
        project.style.display = "none";
    }
}