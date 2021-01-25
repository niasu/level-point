const nav = document.querySelector('.nav');
const logo = document.querySelector('.nav__logo');
let topOfNav = nav.offsetTop;
console.log(nav.offsetTop);

function fixNav() {
if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
    logo.style.maxWidth = "500px";
    logo.style.transition = "all 0.5s";
    logo.style.backgroundColor = "white";
    logo.style.color = "black";
    console.log("scrolledpast");
} else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
    logo.style.maxWidth = "0px";
}
}

window.addEventListener('scroll', fixNav);
