let navbar = document.getElementById("navbar");
let nav_canvas = document.getElementById('nav-canvas')
let logo = document.getElementById('logo')
let loader = document.getElementById('loader')
let darkModeBtn = document.getElementById("dark-mode-btn")
let lightModeBtn = document.getElementById("light-mode-btn")

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
        flag = 1
    } else {
        menu.style.top = '-30rem';
        nav_canvas.style.top = '-100%';
        flag = 0
    }
}

function menuLinkClicked(){
    if (flag == 1) {
        menu.style.top = '-30rem';
        nav_canvas.style.top = '-100%';
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
sr.reveal('.home, .about',{delay: 4500})
sr.reveal('.skills-paragraph, .footer-contacts',{})
sr.reveal('.form-input, .skills-bar, .work-container a',{interval:200})


// ========= Dark Light Mode ===========

let darklightMode = 0;

darkModeBtn.addEventListener("click",() =>{
    darkModeBtn.style.display = 'none';
    lightModeBtn.style.display = 'block';
    document.documentElement.style.setProperty('--white', 'black'); // Example value, change as needed
    document.documentElement.style.setProperty('--dark-black', 'white'); // Example value, change as needed
    document.documentElement.style.setProperty('--light-black', 'rgb(240, 240, 240)'); // Example value, change as needed
    document.documentElement.style.setProperty('--gray', 'rgb(30,30,30)'); // Example value, change as needed
    document.documentElement.style.setProperty('--wheat', 'rgb(222, 156, 32)');
    document.documentElement.style.setProperty('--light-white', 'rgb(70, 70, 70)');
    document.documentElement.style.setProperty('--btn-gray', 'white');
    document.documentElement.style.setProperty('--para-gray', 'rgb(60, 60 , 60)');
})

lightModeBtn.addEventListener("click",() => {
    lightModeBtn.style.display = 'none';
    darkModeBtn.style.display = 'block';
    document.documentElement.style.setProperty('--white', 'white');
    document.documentElement.style.setProperty('--dark-black', 'black');
    document.documentElement.style.setProperty('--light-black', 'rgb(15, 15, 15)');
    document.documentElement.style.setProperty('--gray', 'gray');
    document.documentElement.style.setProperty('--wheat', 'wheat');
    document.documentElement.style.setProperty('--light-white', 'rgb(223, 223, 223)');
    document.documentElement.style.setProperty('--btn-gray', 'gray');
    document.documentElement.style.setProperty('--para-gray', 'rgb(175,175,175)');
})