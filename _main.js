//closing blue message box
var welcomeMessage = document.querySelector('.welcome-message');
var close = document.querySelector('.img-close');

close.addEventListener('click', () => welcomeMessage.style.display = 'none');

// toggling nav icons
var blueBorderBalance = document.querySelector('.assets');
var blueBorderWallet = document.querySelector('.transactions');
var blueBorderPerson = document.querySelector('.profile');
var mainContent = document.querySelector('main');

blueBorderWallet.addEventListener('click', function () {
  blueBorderBalance.style.border = '0px';
  blueBorderPerson.style.border = '0px';
  blueBorderWallet.style.borderLeft = '5px #1CA3BA solid';
  mainContent.style.display = 'none';
});

blueBorderBalance.addEventListener('click', function () {
  blueBorderWallet.style.border = '0px';
  blueBorderPerson.style.border = '0px';
  blueBorderBalance.style.borderLeft = '5px #1CA3BA solid';
  mainContent.style.display = 'grid';
});

blueBorderPerson.addEventListener('click', function () {
  blueBorderBalance.style.border = '0px';
  blueBorderWallet.style.border = '0px';
  blueBorderPerson.style.borderLeft = '5px #1CA3BA solid';
});











//

//test: change color of each table row
const tableRow = document.querySelectorAll('tr');
tableRow.forEach(tr => {
  tr.addEventListener('click', event => {
    tr.style.color = '#1CA3BA';
  });
});

//test: changes heahing color
const h1 = document.querySelector('h1');
h1.addEventListener('click', () => h1.style.color = '#1CA3BA');
