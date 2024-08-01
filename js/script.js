let navbar = document.getElementById("navbar");
let nav_canvas = document.getElementById('nav-canvas')
let logo = document.getElementById('logo')
let loader = document.getElementById('loader')

let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
window.addEventListener("scroll",function(){
    if (document.documentElement.scrollTop > 70) {
        navbar.style.backgroundColor = 'black';
    }else{
        navbar.style.backgroundColor = 'rgb(15, 15, 15)';
    }
})

let flag = 0;
let menu = document.getElementById('menu')
function toggleMenu(){
    if (flag == 0) {
        menu.style.top = '80px';
        nav_canvas.style.top = '0';
        logo.style.opacity = '0';
        flag = 1
    } else {
        menu.style.top = '-30rem';
        nav_canvas.style.top = '-100%';
        logo.style.opacity = '1';
        flag = 0
    }
}

function menuLinkClicked(){
    if (flag == 1) {
        menu.style.top = '-30rem';
        nav_canvas.style.top = '-100%';
        logo.style.opacity = '1';
        flag = 0
    }else{
        menu.style.top = '80px';
        nav_canvas.style.top = '0';
        flag = 1
    }
}

setTimeout(() => {
    loader.style.top = '-100%';
}, 4000);


// ===== Scroll Animation =====

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true
});
sr.reveal('.home',{delay: 4500})
sr.reveal('.skills-paragraph, .footer-contacts, .about',{})
sr.reveal('.form-input, .skills-bar, .work-container a',{interval:200})
