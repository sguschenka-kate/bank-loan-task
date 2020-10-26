let salary = Number(prompt('Привет! Я - банк. Хочешь кредит? Для начала скажи, какая у тебя заработная плата:', ''));
let loan = null;
let maxLoan = null;
let rate = null;
let term = null;
let result = null;
let q = null;

start();
function start() {
  console.log(salary)
  if (isNaN(salary)) {
    salary = Number(prompt('Введи число, а не то, что ты ввел)', ''));
    start();
  } else if (salary === 0) {
    alert('До свидания!');
  } else {
    checkSalary();
  }
}

function checkSalary() {
  if (salary < 6000) {
    alert('Твоя ЗП слишком маленькая, мы не дадим тебе кредит. До свидания!');
    return;
  } else if (6000 <= salary && salary < 15000) {
    maxLoan = 100000;
    alert('Неплохо, твоя максимальная сумма кредита может составлять ' + maxLoan + ' гривен.');
    loan = Number(prompt('Укажи желаемую сумму кредита (в гривнах) до ' + maxLoan + ' гривен.', ''));
  } else if (salary >= 15000) {
    alert('Проси скок хочешь)');
    loan = Number(prompt('Укажи желаемую сумму кредита (в гривнах)', ''));
  } else if (loan === 0) {
    alert('До свидания!')
  }

  checkLoan();
}

function checkLoan(){

  if (isNaN(loan)) {
    alert('Сумма должна быть числом');
    loan = prompt('Давай, введи сумму кредита (в гривнах) ', '');
    checkLoan();
  } else if (6000 <= salary && salary < 15000 && loan > maxLoan) {
    loan = Number(prompt('Твоя максимальная сумма кредита ' + maxLoan + ' гривен. Укажи соотвествующую сумму: ', ''));
    checkLoan();
  } else if (loan === 0) {
    alert('До свидания!')
  } else {
    calculateRate();
  }
}

function calculateRate(){
  if (loan < 5000) {
    rate = 15;
    alert('Кредиты на сумму до 5000 гривен мы выдаем под 15%');
  } else if (5000 <= loan && loan < 50000) {
    rate = 12;
    alert('Кредиты на сумму от 5000 до 50000 гривен мы выдаем под 12%');
  } else if (50000 <= loan && loan < 200000) {
    rate = 9;
    alert('Кредиты на сумму от 50000 до 200000 гривен мы выдаем под 9%');
  } else if (loan === 0) {
    alert('До свидания!')
  } else {
    let q = confirm('Ого, у нас нет так много денег)) Максимальная доступная сумма кредита - 200000 грн. Ставка - 9%. Возьми хотя бы сток))');
    if (!q || q === 0) {
      alert('До свидания');
      return;
    } else {
      loan = 200000;
      rate = 9;
    }
  }

  getTerm();
}

function getTerm() {
  term = Number(prompt('Если еще не передумал брать кредит, введи срок, на который ты хочешь взять его:', ''));
  if (term === 0) {
    alert('До свидания!');
  } else {
  checkTerm();
  }
}

function checkTerm() {
  if (isNaN(term)) {
    alert('Введи число, а не то, что ты ввел)');
    getTerm();
  } if (term === 0) {
    alert('До свидания!');
  } else { 
    calculateLoan();
  }
}

function calculateLoan() {
  result = loan + (loan * (rate / 100) * term); 
  let years = getYears();
  alert('Сумма кредита составляет ' + loan + ' гривен. Процентная ставка ' + rate + '%. Сумма, которую ты должен вернуть через ' + term + ' ' + years + ' , составляет ' + result + ' гривен.');
}

function getYears() {
  if (11 <= term && term <= 14) {
    return 'лет'
  }

  let number = String(term);
  number = +number[number.length-1];

  console.log(number);
  if (number === 1) {
    return 'год';
  } else if (2 <= number && number <= 4) {
    return 'года';
  } else {
    return 'лет';
  }
}