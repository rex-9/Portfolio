// Menu
const sideNav = document.querySelector('.sideNav');
const ham = document.querySelector('.ham');
const menuX = document.querySelector('.menuX');
const menuItems = document.querySelectorAll('.menuLink');

function toggleHamburger() {
  sideNav.classList.toggle('showNav');
}

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', toggleHamburger);
});

ham.addEventListener('click', toggleHamburger);
menuX.addEventListener('click', toggleHamburger);

// Popup
const project = document.getElementById('project');
const btns = document.getElementsByClassName('project-btn');
const close = document.getElementsByClassName('close')[0];

for (let i = 0; i < btns.length; i += 1) {
  btns[i].onclick = function () {
    project.style.display = 'block';
  };
}

close.onclick = function () {
  project.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target === project) {
    project.style.display = 'none';
  }
};