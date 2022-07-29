const menu = document.querySelector('.menu');
const menuBurger = document.querySelector('.menu-burger');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.onclick = function() {
    menuBurger.classList.toggle('open');
};

dococument.addEventListener('click', function(e) {
    if (!e.target.closest('.menu-burger')) {
        menuBurger.classList.remove('open');
    }
});
// menuBurger.addEventListener('click', function() {
//     menuBurgerSpan.classList.toggle('active');
//     menu.classList.toggle('animate');
// });

// const 
//     signUp = doc.querySelector('.signUp'),
//     menu = doc.querySelector('.menu'),
//     newLi = doc.createElement('li'),
//     clouse = doc.querySelector('.menu__close'),
//     burgerMenuBtn = doc.querySelector('.burgerMenuBtn'),
//     burgerMenuBtnSpan = doc.querySelector('.burgerMenuBtn span');

// burgerMenuBtn.addEventListener('click', function() {
//     burgerMenuBtnSpan.classList.toggle('active');
//     menu.classList.toggle('animate');

//     newLi.append(signUp);
//     menu.append(newLi);
//     newLi.className = 'menu__item';
// });

// clouse.addEventListener('click', function(e) {
//     const target = e.target;
//     if (target.classList.contains('menu__close')) {
//         menu.classList.remove('animate');
//         burgerMenuBtnSpan.classList.remove('active');
//     }
// });

// doc.addEventListener('click', function(e) {
//     if (!e.target.closest('.menuBlock')) {
//         menu.classList.remove('animate');
//         burgerMenuBtnSpan.classList.remove('active');
//     }
// });