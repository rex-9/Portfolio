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
const myProjects = {
  project1: {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './assets/project-detail-desktop.png',
    technologies: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'https://htetnaing0814.github.io/Portfolio/',
    sourceLink: 'https://github.com/HtetNaing0814/Portfolio',
  },
  project2: {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './assets/project-detail-desktop.png',
    technologies: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'https://htetnaing0814.github.io/Portfolio/',
    sourceLink: 'https://github.com/HtetNaing0814/Portfolio',
  },

  project3: {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './assets/project-detail-desktop.png',
    technologies: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'https://htetnaing0814.github.io/Portfolio/',
    sourceLink: 'https://github.com/HtetNaing0814/Portfolio',
  },
  project4: {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './assets/project-detail-desktop.png',
    technologies: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'https://htetnaing0814.github.io/Portfolio/',
    sourceLink: 'https://github.com/HtetNaing0814/Portfolio',
  },
  project5: {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './assets/project-detail-desktop.png',
    technologies: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'https://htetnaing0814.github.io/Portfolio/',
    sourceLink: 'https://github.com/HtetNaing0814/Portfolio',
  },
  project6: {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './assets/project-detail-desktop.png',
    technologies: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'https://htetnaing0814.github.io/Portfolio/',
    sourceLink: 'https://github.com/HtetNaing0814/Portfolio',
  },
};

// window.localStorage.setItem('myProject', JSON.stringify(myProject));

const nameID = document.getElementById('name');
const img = document.getElementById('featuredImage');
const liveLink = document.getElementById('liveLink');
const sourceLink = document.getElementById('sourceLink');
const descrition = document.getElementById('description');
const tech = document.getElementById('tech');

const button1 = document.querySelector('#btn-1');
const button2 = document.querySelector('#btn-2');
const button3 = document.querySelector('#btn-3');
const button4 = document.querySelector('#btn-4');
const btnClosePop = document.querySelector('.popup-close-btn');
const popupOverlay = document.querySelector('.popup-overlay');
const popup = document.getElementById('popup');

function openPopUp() {
  popup.classList.remove('hidden');
}

function changePopup(order) {
  tech.innerHTML = '';
  const projectK = myProjects[`project${order}`];
  nameID.innerHTML = projectK.name;
  img.src = projectK.featuredImage;
  liveLink.innerHTML = projectK.liveLink;
  sourceLink.innerHTML = projectK.sourceLink;
  descrition.innerHTML = projectK.decription;
  const techLength = projectK.tech.length;
  for (let i = 0; i < techLength; i += 1) {
    const element = document.createElement('li');
    element.innerHTML = `${projectK.tech[i]}`;
    tech.appendChild(element);
  }
  openPopUp();
}

function closePopUp() {
  popup.classList.add('hidden');
}

button1.addEventListener('click', () => {
  openPopUp();
  changePopup(1);
});

button2.addEventListener('click', () => {
  openPopUp();
  changePopup(2);
});

button3.addEventListener('click', () => {
  openPopUp();
  changePopup(3);
});

button4.addEventListener('click', () => {
  openPopUp();
  changePopup(4);
});

popupOverlay.addEventListener('click', closePopUp);
btnClosePop.addEventListener('click', closePopUp);

const project = document.getElementsById('project');
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