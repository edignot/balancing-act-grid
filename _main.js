// toggling nav icons
var blueBorderBalance = document.querySelector('.assets');
var blueBorderWallet = document.querySelector('.transactions');
var blueBorderPerson = document.querySelector('.profile');

blueBorderWallet.addEventListener('click', function () {
  blueBorderBalance.style.border = '0px';
  blueBorderPerson.style.border = '0px';
  blueBorderWallet.style.borderLeft = '5px #1CA3BA solid';
});

blueBorderBalance.addEventListener('click', function () {
  blueBorderWallet.style.border = '0px';
  blueBorderPerson.style.border = '0px';
  blueBorderBalance.style.borderLeft = '5px #1CA3BA solid';
});

blueBorderPerson.addEventListener('click', function () {
  blueBorderBalance.style.border = '0px';
  blueBorderWallet.style.border = '0px';
  blueBorderPerson.style.borderLeft = '5px #1CA3BA solid';
});

//closing blue message box
var welcomeMessage = document.querySelector('.welcome-message');
var close = document.querySelector('.img-close');

close.addEventListener('click', () => welcomeMessage.style.display = 'none');










//test: changes heahing color
//const h1 = document.querySelector('h1');
//h1.addEventListener('click', () => h1.style.color = 'red');
