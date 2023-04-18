const $pics = document.querySelectorAll('.pic')
const $dots = document.querySelectorAll('.dot')
const $picContainer = document.getElementById('pic-container')



const originalMatrix = new DOMMatrix(getComputedStyle($picContainer).transform);
const originalTranslateX = originalMatrix.m41;
let gap = parseInt($pics[1].offsetWidth) + parseInt(getComputedStyle($pics[1]).marginLeft) + parseInt(getComputedStyle($pics[1]).marginRight)


function translatePic (index) {
    let currentTranlateX =  originalTranslateX - (gap *index)
    $picContainer.style.transform = `translateX(${currentTranlateX}px)` 
}

function translateDot (index) {
    for (let i = 0; i <= $dots.length - 1; i++) {
        $dots.forEach((dot) => {dot.classList.remove('active')})
        $dots[index].classList.add('active')
        }
}
function changeCenterPic (index) {
    for (let i = 0; i <= $pics.length - 1; i++) {
        $pics.forEach((pic) => {pic.classList.remove('active')})
        $pics[index].classList.add('active')
        }
}

let index = 0;
let interval = setInterval ( () => {
    index = index + 1;
    if (index == $pics.length) {
        index = 0
    } 
    changeCenterPic(index)
    translateDot(index)
    translatePic(index)
},3000)

for (let i = 0; i < $dots.length; i++) {
    $dots[i].onclick = () => {
        translateDot(i)
        translatePic(i)
        changeCenterPic(i)
        
        clearInterval(interval)
        interval = setInterval ( () => {
            i = i + 1;
            if (i == $pics.length) {
                i = 0
            } 
            changeCenterPic(i)
            translateDot(i)
            translatePic(i)
        },3000)
    }
}
