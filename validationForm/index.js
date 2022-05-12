const container = document.getElementById('container');
const header = document.createElement('div');
const logo = document.createElement('img');
const headerBtn = document.createElement('button');
const wrapper = document.createElement('div');
const title = document.createElement('h1');
const subtitle = document.createElement('h3');
const form = document.createElement('form');
const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');
const li5 = document.createElement('li');
const li6 = document.createElement('li');
const inputFirName = document.createElement('input');
const inputSecName = document.createElement('input');
const inputDisName = document.createElement('input');
const inputEmail = document.createElement('input');
const inputPassword = document.createElement('input');
const inputPassConf = document.createElement('input');
const radioWrap1 = document.createElement('div');
const radioWrap2 = document.createElement('div');
const inputRadio1 = document.createElement('input');
const inputRadio2 = document.createElement('input');
const labelRadio1 = document.createElement('label');
const labelRadio2 = document.createElement('label');
const inputCheckbox = document.createElement('input');
const labelCheckbox = document.createElement('label');
const formBtn = document.createElement('button');

header.className = 'header';
logo.className = 'logo';
headerBtn.className = 'headerBtn';
wrapper.className = 'wrapper';
title.className = 'title';
subtitle.className = 'subtitle';
ul.className = 'ul';
inputFirName.className = 'input';
inputSecName.className = 'input';
inputDisName.className = 'input';
inputEmail.className = 'input';
inputPassword.className = 'input';
inputPassConf.className = 'input';
radioWrap1.className = 'radioWrap';
radioWrap2.className = 'radioWrap';
labelRadio1.className = 'inputRadio';
labelRadio2.className = 'inputRadio';
inputCheckbox.className = 'inputCheckbox';
labelCheckbox.className = 'labelCheckbox';
formBtn.className = 'formBtn';

logo.setAttribute('src', 'https://www.squadhelp.com/img/logo.png');
logo.setAttribute('alt', 'logo-image');
headerBtn.textContent = 'Login';
title.textContent = 'CREATE AN ACCOUNT';
subtitle.textContent = 'We always keep your name and email address private.';
form.setAttribute('action', '/my-handling-form-page');
form.setAttribute('method', 'post');
inputFirName.setAttribute('type', 'text');
inputFirName.setAttribute('id', 'inputFirName');
inputFirName.setAttribute('name', 'user_firstName');
inputFirName.setAttribute('placeholder', 'First Name');
inputSecName.setAttribute('type', 'text');
inputSecName.setAttribute('id', 'inputSecName');
inputSecName.setAttribute('name', 'user_secondName');
inputSecName.setAttribute('placeholder', 'Second Name');
inputDisName.setAttribute('type', 'text');
inputDisName.setAttribute('id', 'inputDisName');
inputDisName.setAttribute('name', 'user_displayName');
inputDisName.setAttribute('placeholder', 'Display Name');
inputEmail.setAttribute('type', 'email');
inputEmail.setAttribute('id', 'inputEmail');
inputEmail.setAttribute('name', 'user_mail');
inputEmail.setAttribute('placeholder', 'Email Adress');
inputPassword.setAttribute('type', 'password');
inputPassword.setAttribute('id', 'inputPassword');
inputPassword.setAttribute('name', 'user_password');
inputPassword.setAttribute('placeholder', 'Password');
inputPassConf.setAttribute('type', 'password');
inputPassConf.setAttribute('id', 'inputPassConf');
inputPassConf.setAttribute('name', 'user_passConf');
inputPassConf.setAttribute('placeholder', 'Password Confirmation');
inputRadio1.setAttribute('type', 'radio');
inputRadio1.setAttribute('id', 'inputRadio1');
inputRadio1.setAttribute('name', 'inputRadio');
labelRadio1.innerHTML =
  'Join As a Buyer <span>I am looking for a Name, Logo or Tagline for my business, brand or product.</span>';
labelRadio1.setAttribute('for', 'inputRadio1');
inputRadio2.setAttribute('type', 'radio');
inputRadio2.setAttribute('id', 'inputRadio2');
inputRadio2.setAttribute('name', 'inputRadio');
labelRadio2.innerHTML =
  'Join As a Creative or Marketplace Seller <span>I plan to submit name ideas, Logo designs or sell names in Domain Marketplace. Join As a Creative or Marketplace Seller </span>';
labelRadio2.setAttribute('for', 'inputRadio2');
inputCheckbox.setAttribute('type', 'checkbox');
inputCheckbox.setAttribute('id', 'inputCheckbox');
inputCheckbox.setAttribute('name', 'inputCheckbox');
labelCheckbox.setAttribute('for', 'inputCheckbox');
labelCheckbox.textContent =
  'Allow Squadhelp to send marketing/promotional offers from time to time';
formBtn.textContent = 'Create account';

container.appendChild(header);
container.appendChild(wrapper);
header.appendChild(logo);
header.appendChild(headerBtn);
wrapper.appendChild(title);
wrapper.appendChild(subtitle);
wrapper.appendChild(form);
form.appendChild(ul);
form.appendChild(radioWrap1);
form.appendChild(radioWrap2);
form.appendChild(inputCheckbox);
form.appendChild(labelCheckbox);
form.appendChild(formBtn);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);
ul.appendChild(li6);
li1.append(inputFirName);
li2.append(inputSecName);
li3.append(inputDisName);
li4.append(inputEmail);
li5.append(inputPassword);
li6.append(inputPassConf);
radioWrap1.appendChild(inputRadio1);
radioWrap1.appendChild(labelRadio1);
radioWrap2.appendChild(inputRadio2);
radioWrap2.appendChildgit (labelRadio2);

const textErr = document.createElement('div');
textErr.className = 'textErr';

inputFirName.addEventListener('focusout', (e) => {
  textErr.textContent = `Field cannot be empty`;
  if (!e.target.value) {
    inputFirName.parentNode.appendChild(textErr);
    inputFirName.classList.add('inputErr');
  }
});

inputFirName.addEventListener('focusin', () => {
  textErr.remove();
  inputFirName.classList.remove('inputErr');
});

inputSecName.addEventListener('focusout', (e) => {
  textErr.textContent = `Field cannot be empty`;
  const nextEl = e.target.parentNode.nextSibling;
  if (!e.target.value) {
    inputFirName.parentNode.appendChild(textErr);
    inputSecName.classList.add('inputErr');
  }
});

inputSecName.addEventListener('focusin', () => {
  textErr.remove();
  inputSecName.classList.remove('inputErr');
});

inputEmail.addEventListener('focusout', (e) => { 
  let val = e.target.value;
  if (!val) {
    inputDisName.parentNode.appendChild(textErr);
    inputEmail.classList.add('inputErr');
    textErr.textContent = `Field cannot be empty`;
  }
  if (!isValidateEmail(val)) {
    inputDisName.parentNode.appendChild(textErr);
    inputEmail.classList.add('inputErr');
    textErr.textContent = `Email is not valid`;
  }
});

inputEmail.addEventListener('focusin', () => {
  textErr.remove();
  inputEmail.classList.remove('inputErr');
});

inputPassword.addEventListener('focusout', (e) => {
  let val = e.target.value;
  if (!val) {
    inputDisName.parentNode.appendChild(textErr);
    inputPassword.classList.add('inputErr');
    textErr.textContent = `Field cannot be empty`;
  }
  if (!isValidPassword(val)) {
    inputPassword.parentNode.appendChild(textErr);
    inputPassword.classList.add('inputErr');
    textErr.textContent = `Password is not valid`;
  }
});

inputPassword.addEventListener('focusin', () => {
  textErr.remove();
  inputPassword.classList.remove('inputErr');
});

function isValidateEmail(email) {
  const regexp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,7}$/;
  return regexp.test(email);
}

function isValidPassword(password) {
  const regexp = /[0-9a-zA-Z_]{8,15}/;
  return regexp.test(password);
}
