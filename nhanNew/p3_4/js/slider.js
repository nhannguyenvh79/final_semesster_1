const $pics = document.querySelectorAll('.pic')
const $dots = document.querySelectorAll('.dot')
const $picContainer = document.getElementById('pic-container')



const originalMatrix = new DOMMatrix(getComputedStyle($picContainer).transform);
const originalTranslateX = originalMatrix.m41;
let gap = parseInt($pics[1].offsetWidth) + parseInt(getComputedStyle($pics[1]).marginLeft) + parseInt(getComputedStyle($pics[1]).marginRight)

function translatePic (index) {
    const currntMatrix = new DOMMatrix(getComputedStyle($picContainer).transform);
    let currentTranlateX =  currntMatrix.m41 - gap
    if (index == 0) {currentTranlateX  = originalTranslateX}
    $picContainer.style.transform = `translateX(${currentTranlateX}px)` 
}

function translateDot (index) {
    for (let i = 0; i <= $dots.length - 1; i++) {
        $dots.forEach((dot) => {dot.classList.remove('active')})
        $dots[index].classList.add('active')
        }
}


let index = 1;
setInterval ( () => {
    for (let i = 0; i <= $pics.length - 1; i++) {
    $pics.forEach((pic) => {pic.classList.remove('active')})
    $pics[index].classList.add('active')
    }
    translateDot(index)
    translatePic(index)
    index = index + 1;
    if (index == $pics.length) {
        index = 0
    }  
},3000)
