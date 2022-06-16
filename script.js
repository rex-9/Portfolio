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
const myProjects = {
  project1: {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './assets/project-detail-desktop.png',
    tech: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'https://htetnaing0814.github.io/Portfolio/',
    sourceLink: 'https://github.com/HtetNaing0814/Portfolio',
  },
  project2: {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './assets/project-detail-desktop.png',
    tech: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'https://htetnaing0814.github.io/Portfolio/',
    sourceLink: 'https://github.com/HtetNaing0814/Portfolio',
  },

  project3: {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './assets/project-detail-desktop.png',
    tech: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'https://htetnaing0814.github.io/Portfolio/',
    sourceLink: 'https://github.com/HtetNaing0814/Portfolio',
  },
  project4: {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './assets/project-detail-desktop.png',
    tech: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'https://htetnaing0814.github.io/Portfolio/',
    sourceLink: 'https://github.com/HtetNaing0814/Portfolio',
  },
};

window.localStorage.setItem('myProjects', JSON.stringify(myProjects));

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

function onChanged(input) {
  input.addEventListener('change', function () {
    const formObj = {
      nameID: nameID.value,
      email: email.value,
      textarea: textarea.value,
    };
    window.localStorage.setItem('formObj', JSON.stringify(formObj));
  });
}

const formData = JSON.parse(window.localStorage.getItem('formObj'));
nameID.value = formData.nameID;
email.value = formData.email;
textarea.value = formData.textarea;

onChanged(nameID);
onChanged(email);
onChanged(textarea);