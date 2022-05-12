const headerSpan = document.getElementById('headerSpan');
const form = document.getElementById('form');
const radioIn = Array.from(document.getElementsByName('radioIn'));
const radioOut = Array.from(document.getElementsByClassName('radioOut'));
const inputIn = document.getElementById('inputIn');
const inputOut = document.getElementById('inputOut');
const equals = document.getElementById('equals');
const labelIn = document.getElementById('labelIn');
const labelOut = document.getElementById('labelOut');

let v = document.getElementsByClassName('radioIn');
headerSpan.textContent = `на ${new Date().toLocaleDateString('uk')}`;

let date = new Date().toLocaleDateString('uk');

const getCurrencyPBank = async () => {
  const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
  const current = await response.json();
  localStorage.setItem(date, JSON.stringify(current));
};

getCurrencyPBank();

const currentVal = JSON.parse(localStorage.getItem(date));

function setConversation() {

  let radioValueIn = '';
  let radioValueOut = '';

  radioIn.forEach((radio) => {
    if (radio.checked) {
      radioValueIn = radio.value;
      labelIn.innerHTML = radio.value;
    }
  });

  radioOut.forEach((radio) => {
    if (radio.checked) {
      radioValueOut = radio.value;
      labelOut.innerHTML = radio.value;
    }
  });

  if (isNaN(inputIn.value)) {
    console.log('isNan');
  }


  let rateIn = '';
  let rateOut = '';

  currentVal.forEach((el) => {
    if (
      radioValueIn.toLowerCase() === el['ccy'].toLowerCase() ||  radioValueIn.toLowerCase() === 'ua' 
    ) {
      rateIn = el['sale'];
    }
    if (
      radioValueOut.toLowerCase() === el['ccy'].toLowerCase() ||  radioValueIn.toLowerCase() === 'ua'
    ) {
      rateOut = el['sale'];
    }

    inputOut.value = (inputIn.value / rateIn * rateOut).toFixed(3);
  }
  );
}

equals.addEventListener('click', setConversation);
