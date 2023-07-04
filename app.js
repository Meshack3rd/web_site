const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click',function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    
}); 

const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click',() => {logregBox.classList.add('active');
});

loginLink.addEventListener('click',() => {logregBox.classList.remove('active');
});
