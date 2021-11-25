let ul     = document.querySelector('ul');
let i      = document.querySelector('#burger i');
let burger = document.getElementById('burger');


burger.addEventListener('click', function() {
    ul.classList.toggle('active');
    i.classList.toggle('fa-times');
});