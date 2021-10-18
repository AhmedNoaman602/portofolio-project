let element = document.querySelector('#changemode');
let body = document.querySelector('body');
let navbar = document.querySelector('nav');
element.onclick = function () {
    body.style.backgroundColor = 'white'
    body.style.color = 'black'
    navbar.style.backgroundColor = 'white'
};

