var menuIcon = document.querySelector('.menu_toggler');
// console.log(menuIcon);
var ourHeader = document.querySelector('header');
console.log(ourHeader)


menuIcon.addEventListener('click', function () {
    ourHeader.classList.toggle('showNav')
    this.classList.toggle('la-times')
})