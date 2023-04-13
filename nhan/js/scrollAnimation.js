const $scrolls = document.querySelectorAll('.scroll')

window.addEventListener('scroll', () => {
    $scrolls.forEach(function (scroll) {
        if (scroll.getBoundingClientRect().top <= 0.9*document.documentElement.clientHeight) {
            scroll.classList.add('active')
        } else {
            scroll.classList.remove('active')
        }
    })       
})