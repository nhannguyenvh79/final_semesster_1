// add variables
const $header = document.querySelector('#header');
const $navbar = document.querySelector('#navbar');
const $navbarLogoLight = document.querySelector('#nav-logo-light');
const $navbarLogoDark = document.querySelector('#nav-logo-dark');


// scroll effect
window.addEventListener('scroll', () => {
    let heightScrollIndex = document.documentElement.scrollTop;
    let width = window.innerWidth
                        || document.documentElement.clientWidth
                        || document.body.clientWidth; 
    if (heightScrollIndex > 90 && width > 992) {
        $header.setAttribute('style', 'background-color: rgba(255,255,255,1); height: 68px; box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;');
        $navbar.setAttribute('class', 'navbar navbar-scroll');
    } else if (heightScrollIndex <= 90 && width > 992) {
        $header.setAttribute('style', 'background-color: rgba(255,255,255,0); height: 78px;');
        $navbar.setAttribute('class', 'navbar');
    }
    },
    { passive: true })


//navbar for small screen:
////add menu button: (can use :before or :after)
let $navMenuBtn = document.createElement('div');
$navMenuBtn.innerHTML = `<svg fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" height="1em" width="1em" style="overflow: visible;"><path d="M3 12h18M3 6h18M3 18h18"></path></svg> `
$navMenuBtn.setAttribute('class', 'nav-menu-btn')
$navMenuBtn.setAttribute('id', 'nav-menu-btn')
$navbarLogoDark.after($navMenuBtn)
////onclick button
const $navbarMenuButton = document.querySelector('#nav-menu-btn');
let heightHeader = $header.clientHeight
$navbarMenuButton.onclick = function () {
    let currentHieght = $header.clientHeight
    if (heightHeader == currentHieght) {
        $header.setAttribute('class', 'header mobile-header')
    } else {
        $header.setAttribute('class', 'header')
    }
}


////responsive
function responsiveHeader() {
    let heightScrollIndex = document.documentElement.scrollTop;
    let width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    if (width <= 992) {
        $header.setAttribute('style', 'background-color: rgba(255,255,255,1); box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px; display: flex; justify-content: center;');
        $navbar.setAttribute('class', 'navbar navbar-scroll mobile-navbar');
    } else if(width <= 576) {
        const $mobileNavbar = document.querySelector('.mobile-navbar');
        $mobileNavbar.style.width = '95%'
    }  else if (width > 992) { //return pre-effect
        if (heightScrollIndex > 90) {
            $header.setAttribute('style', 'background-color: rgba(255,255,255,1); height: 68px; box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;');
            $navbar.setAttribute('class', 'navbar navbar-scroll');
        } else if (heightScrollIndex <= 90) {
            $header.setAttribute('style', 'background-color: rgba(255,255,255,0); height: 78px;');
            $navbar.setAttribute('class', 'navbar');
        }
    }
}
window.addEventListener('resize', () => {responsiveHeader()})
window.addEventListener('load', () => {responsiveHeader()})


// highlight link
const $navbarLinks = document.querySelectorAll('.navbar .nav-link li')
const $sections = document.querySelectorAll('section')
function highlightSection () {
    for (const $section of $sections) {
        const $sectionToTop = $section.offsetTop - 68 // minus header height
        if ($sectionToTop <= document.documentElement.scrollTop) {
                $navbarLinks.forEach(($link) => {
                    $link.setAttribute('class', 'nav-item')
                    if ($link.querySelector(`a[href='#${$section.id}']`)) {
                        $link.setAttribute('class', 'nav-item link-active')
                    } 
                })
            }
    }
}
window.addEventListener('scroll', () => {highlightSection()}, {passive: true});
