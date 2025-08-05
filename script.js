 var typed = new Typed('#element', {
            strings: ['Web Developer', 'Passionate Python developer', 'Java Developer','Software Developer'],
            typeSpeed: 50,
        });

// const menuIcon = document.getElementById('menu-icon');
// const navLinks = document.getElementById('nav-links');

// menuIcon.addEventListener('click', () => {
//     navLinks.classList.toggle('show');
// });

document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('nav-menu').classList.toggle('show');
});

