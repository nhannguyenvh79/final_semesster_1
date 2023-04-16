const $scrolls = document.querySelectorAll('.scroll')
const animation = () => {
    $scrolls.forEach(function (scroll) {
        if (scroll.getBoundingClientRect().top <= 0.9*document.documentElement.clientHeight) {
            scroll.classList.add('active')
        } else {
            scroll.classList.remove('active')
        }
    })       
}

window.addEventListener('scroll', animation)
window.addEventListener('load', animation)