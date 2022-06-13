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

const myProject = {
  name: 'Keeping track of hundreds of components',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  featuredImage: './assets/project-detail-desktop.png',
  technologies: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  liveLink: 'https://htetnaing0814.github.io/Portfolio/',
  sourceLink: 'https://github.com/HtetNaing0814/Portfolio',
};

window.localStorage.setItem('myObject', JSON.stringify(myProject));

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