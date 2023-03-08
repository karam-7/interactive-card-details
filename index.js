const formInput = document.querySelectorAll('.form-input');
const nameInput = document.querySelector('#name');
const numberInput = document.querySelector('#number');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');
const cvInput = document.querySelector('#cvc');
const error1 = document.querySelector('.error1');
const error = document.querySelectorAll('.error');
const namePara = document.querySelector('.name-para');
const frontH1 = document.querySelector('.front-h1');
const cvPara = document.querySelector('.cv-para');
const monthPara = document.querySelector('.month');
const yearPara = document.querySelector('.year');
const infoDiv = document.querySelector('.info');
const thankDiv = document.querySelector('.thank');
const btn = document.querySelector('.btn');
const btn1 = document.querySelector('.btn1');
 
btn.addEventListener('click', function(e) {
  e.preventDefault();
  let isValid = true;
  if (nameInput.value.trim() === '') {
    error[0].style.display = 'block';
    nameInput.style.borderColor = 'hsl(0, 100%, 66%)';
    isValid = false;
  } else {
    namePara.textContent = nameInput.value;
  }
 
  if (numberInput.value.trim() === '') {
    error[1].style.display = 'block';
    numberInput.style.borderColor = 'hsl(0, 100%, 66%)';
    isValid = false;
  } else if (!/^[0-9]+$/.test(numberInput.value.trim())) {
    error1.style.display = 'block';
    error[1].style.display = 'none';
    numberInput.style.borderColor = 'hsl(0, 100%, 66%)';
    isValid = false;
  } else {
    frontH1.textContent = numberInput.value.trim().replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4');
  }
 
  if (monthInput.value.trim() === '') {
    error[2].style.display = 'block';
    monthInput.style.borderColor = 'hsl(0, 100%, 66%)';
    isValid = false;
  } else {
    monthPara.textContent = monthInput.value;
  }
 
  if (yearInput.value.trim() === '') {
    error[2].style.display = 'block';
    yearInput.style.borderColor = 'hsl(0, 100%, 66%)';
    isValid = false;
  } else {
    yearPara.textContent = yearInput.value;
  }
 
  if (cvInput.value.trim() === '') {
    error[3].style.display = 'block';
    cvInput.style.borderColor = 'hsl(0, 100%, 66%)';
    isValid = false;
  } else {
    cvPara.textContent = cvInput.value;
  }
 
  if (isValid) {
    infoDiv.style.display = 'none';
    thankDiv.style.display = 'block';
  }
});
 
btn1.addEventListener('click', function(e) {
  e.preventDefault();
  nameInput.value = '';
  numberInput.value = '';
  monthInput.value = '';
  yearInput.value = '';
  cvInput.value = '';
  namePara.textContent = 'Jane Appleseed';
  frontH1.textContent = '0000 0000 0000 0000';
  cvPara.textContent = '000';
  monthPara.textContent = '00';
  yearPara.textContent = '00';
  thankDiv.style.display = 'none';
  infoDiv.style.display = 'block';
  error[0].style.display = 'none';
  error[1].style.display = 'none';
  error[2].style.display = 'none';
  error[3].style.display = 'none';
  error1.style.display = 'none';
});
 
