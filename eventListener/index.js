const form = document.getElementById('form');
const inputFirName = document.getElementById('inputFirName');
const inputSecName = document.getElementById('inputSecName');
const inputAge = document.getElementById('inputAge');
const inputEmail = document.getElementById('inputEmail');
const submitBtn = document.getElementById('submitBtn');
const cancelBtn = document.getElementById('cancelBtn');

class Person {
  constructor(name, lastname, age, email){
    this.user_fname = name;
    this.user_lname = lastname;
    this.user_age = age;
    this.user_mail = email;
  }
}

let obj = new Person();

function setLocalSt (e){
  e.preventDefault();
  const inputArr = Array.from(document.getElementsByClassName('inputArr'));
  inputArr.forEach((el) => {
    obj[el.name] = el.value;
  });
  localStorage.setItem(`${obj.user_fname}`, JSON.stringify(obj));
}


submitBtn.addEventListener('click', setLocalSt);