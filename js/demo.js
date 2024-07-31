/*===== MENU SHOW =====*/
/**
   * Easy selector helper function
   */
// const select = (el, all = false) => {
//     el = el.trim()
//     if (all) {
//         return [...document.querySelectorAll(el)]
//     } else {
//         return document.querySelector(el)
//     }
// }

/**
   * Easy on scroll event listener 
   */
// const onscroll = (el, listener) => {
//     el.addEventListener('scroll', listener)
// }
// const showMenu = (toggleId, navId) => {
//     const toggle = document.getElementById(toggleId),
//         nav = document.getElementById(navId)

//     if (toggle && nav) {
//         toggle.addEventListener('click', () => {
//             nav.classList.toggle('show')
//         })
//     }
// }
// showMenu('nav-toggle', 'nav-menu')

// /*==================== REMOVE MENU MOBILE ====================*/
// const navLink = document.querySelectorAll('.nav__link')

// function linkAction() {
//     const navMenu = document.getElementById('nav-menu')
//     // When we click on each nav__link, we remove the show-menu class
//     navMenu.classList.remove('show')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// const sections = document.querySelectorAll('section[id]')

// function scrollActive() {
//     const scrollY = window.pageYOffset

//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50;
//         sectionId = current.getAttribute('id')

//         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
//         } else {
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '60px',
//     duration: 2000,
//     delay: 200,
//     //     reset: true
// });

/**
 * Scrolls to an element with header offset
 */
// const scrollto = (el) => {
//     let header = select('#header')
//     let offset = header.offsetHeight

//     if (!header.classList.contains('header-scrolled')) {
//         offset -= 10
//     }

//     let elementPos = select(el).offsetTop
//     window.scrollTo({
//         top: elementPos - offset,
//         behavior: 'smooth'
//     })
// }

/**
 * Toggle .header-scrolled class to #header when page is scrolled
 */
// let selectHeader = select('#header')
// if (selectHeader) {
//     const headerScrolled = () => {
//         if (window.scrollY > 100) {
//             selectHeader.classList.add('header-scrolled')
//         } else {
//             selectHeader.classList.remove('header-scrolled')
//         }
//     }
//     window.addEventListener('load', headerScrolled)
//     onscroll(document, headerScrolled)
// }

// sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
// sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
// sr.reveal('.home__social-icon', { interval: 200 });
// sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 }); 