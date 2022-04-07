let burger = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');
let leftNav = document.querySelector('.leftNav');
let rightNav = document.querySelector('.rightNav');



burger.addEventListener('click', () => {
navbar.classList.toggle('h-nav');
leftNav.classList.toggle('v-display');
rightNav.classList.toggle('v-display');
})