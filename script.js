const nameID = document.getElementById('name');
const email = document.getElementById('email');
const textarea = document.getElementById('textarea');

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
const myProjects = [{
  name: 'To Do List with Webpack and Jest',
  info: 'To Do List app where users can ADD, REMOVE, EDIT and CHECK COMPLETED tasks to the local storage.',
  deskImg: './assets/project-detail-desktop.png',
  mobileImg: './assets/project-detail-mobile.png',
  tech: ['HTML', 'CSS', 'Javascript', 'Webpack', 'Jest', 'GitHub'],
  live: 'https://htetnaing0814.github.io/to-do-list/',
  source: 'https://github.com/HtetNaing0814/to-do-list/',
},
{
  name: 'Keeping track of hundreds of components',
  info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  deskImg: './assets/project-detail-desktop.png',
  mobileImg: './assets/project-detail-mobile.png',
  tech: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  live: 'https://htetnaing0814.github.io/Portfolio/',
  source: 'https://github.com/HtetNaing0814/Portfolio',
},
{
  name: 'Keeping track of hundreds of components',
  info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  deskImg: './assets/project-detail-desktop.png',
  mobileImg: './assets/project-detail-mobile.png',
  tech: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  live: 'https://htetnaing0814.github.io/Portfolio/',
  source: 'https://github.com/HtetNaing0814/Portfolio',
},
{
  name: 'Keeping track of hundreds of components',
  info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  deskImg: './assets/project-detail-desktop.png',
  mobileImg: './assets/project-detail-mobile.png',
  tech: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  live: 'https://htetnaing0814.github.io/Portfolio/',
  source: 'https://github.com/HtetNaing0814/Portfolio',
},
];

myProjects.forEach((project) => {
  const cards = document.getElementById('cards-container');
  const card = document.createElement('div');
  card.classList.add('card', 'font');
  card.innerHTML = `<div class="cover"></div>
  <div>
      <h1 class="card-name">${project.name}</h1>
      <ul class="language-container">
          <li class="language">${project.tech[0]}</li>
          <li class="language">${project.tech[1]}</li>
          <li class="language">${project.tech[2]}</li>
          <li class="language">${project.tech[3]}</li>
          <li class="language">${project.tech[4]}</li>
          <li class="language">${project.tech[5]}</li>
      </ul>
      <div class="center">
          <button class="project-btn see-project font">
              See Project
          </button>
      </div>
  </div>`;
  cards.appendChild(card);
});

const project = document.getElementById('project');
const btns = document.getElementsByClassName('project-btn');

for (let i = 0; i < btns.length; i += 1) {
  btns[i].onclick = function () {
    project.innerHTML = `
    <div class="detail">
      <span id="close" class="close">
        <img class="mobile mobileX" src="./assets/x.svg" alt="cancel" />
        <img class="desktop" src="./assets/x.svg" alt="cancel">
      </span>
      <img id="img" class="desktop" src=${myProjects[i].deskImg}
        alt="project detail photo for desktop">
      <img class="mobile" src=${myProjects[i].mobileImg} alt="project detail photo for mobile">
      <div class="header">
        <p class="font headline">
          ${myProjects[i].name}
        </p>
        <div class="desktop">
            <div class="btn-container">
                <a id="live" href=${myProjects[i].live}
                    class="see-project btn font">
                    <div class="mr-10">
                        See Live
                    </div>
                    <img src="./assets/live.svg" alt="see live">
                </a>
                <a id="source" href=${myProjects[i].source}
                    class="see-project btn font">
                    <div class="mr-10;">
                        See Source
                    </div>
                    <img src="./assets/source.svg" alt="see live">
                </a>
            </div>
        </div>
      </div>
      <ul id="tech" class="badge-container">
        <li class="language font">${myProjects[i].tech[0]}</li>
        <li class="language font">${myProjects[i].tech[1]}</li>
        <li class="language font">${myProjects[i].tech[2]}</li>
        <li class="language font">${myProjects[i].tech[3]}</li>
        <li class="language font">${myProjects[i].tech[4]}</li>
        <li class="language font">${myProjects[i].tech[5]}</li>
      </ul>
      <p id="info" class="text font">${myProjects[i].info}</p>
      <div class="mobile">
        <div class="btn-container">
            <a href=${myProjects[i].live} class="see-project btn font">
                <div class="mr-10">
                    See Live
                </div>
                <img src="./assets/live.svg" alt="see live">
            </a>
            <a href=${myProjects[i].source} class="see-project btn font">
                <div class="mr-10">
                    See Source
                </div>
                <img src="./assets/source.svg" alt="see live">
            </a>
        </div>
      </div>
    </div>`;
    project.style.display = 'block';
    const close = document.getElementById('close');

    close.onclick = function () {
      project.style.display = 'none';
    };

    window.onclick = function (event) {
      if (event.target === project) {
        project.style.display = 'none';
      }
    };
  };
}

// Validate contact form

function showMessage(input, message, type) {
  const msg = input.parentNode.querySelector('p');
  msg.innerText = message;
  if (type === true) {
    input.classList.add('success');
  } else {
    input.classList.add('error');
  }
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, '', true);
}

function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message);
  }
  return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
  if (!hasValue(input, requiredMsg)) {
    return false;
  }

  const email = input.value.trim();
  if (email !== email.toLowerCase()) {
    return showError(input, invalidMsg);
  }
  return true;
}

const form = document.querySelector('#signup');

const EMAIL_REQUIRED = 'Please enter your email';
const EMAIL_INVALID = 'Please enter a correct email address format using only lowercase letters';

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailValid = validateEmail(form.elements.email, EMAIL_REQUIRED, EMAIL_INVALID);
  if (emailValid) {
    document.signup.submit();
  }
});

// Preserve data in the browser

if (!localStorage.getItem('formObj')) {
  const formObj = {
    nameVal: '',
    emailVal: '',
    textVal: '',
  };
  localStorage.setItem('formObj', JSON.stringify(formObj));
}

function onChanged(input, objVal) {
  input.addEventListener('change', () => {
    const formObj = JSON.parse(localStorage.getItem('formObj'));
    formObj[objVal] = input.value;
    localStorage.setItem('formObj', JSON.stringify(formObj));
  });
}

const formData = JSON.parse(window.localStorage.getItem('formObj'));
nameID.value = formData.nameVal;
email.value = formData.emailVal;
textarea.value = formData.textVal;

onChanged(nameID, 'nameVal');
onChanged(email, 'emailVal');
onChanged(textarea, 'textVal');