let homeContents = [
    {
        icon: './nhan/pics/dolar-icon.png',
        h1: 'Make Your Transactions even easier with Appexy',
        p: 'Implementing user-friendly payment methods that reduce friction and improve accessibility, making it more convenient for customers to complete transactions effortlessly and quickly',
        backgroundImage: './nhan/pics/background-1.jpg'
     }, {
        icon: './nhan/pics/layers-icon.png',
        h1: 'Manage all Your Finances Easily with Appexy',
        p: 'Adopting tools and strategies that simplify the tracking and monitoring of income and expenses, providing greater visibility and control over personal or business finances',
        backgroundImage: './nhan/pics/background-2.jpg'
     }, {
        icon: './nhan/pics/rocket-icon.png',
        h1: 'Integrate Salesforce with The Apps You Use',
        p: 'The ability to use and navigate various software applications on different devices to enhance productivity and streamline daily tasks, from communication to organization and entertainment',
        backgroundImage:'./nhan/pics/background-3.jpg'
     }
];

const $homeContent = document.getElementById('home-content')
const $icon = document.getElementById('icon')
const $h1 = document.getElementById('sub-home-content-h1')
const $p = document.getElementById('sub-home-content-p')
const $leftBtn = document.getElementById('home-btn-left')
const $rightBtn = document.getElementById('home-btn-right')
const $subHomeContent = document.getElementById('sub-home-content')


function slideRight (index) {
    $subHomeContent.innerHTML = 
    `<div class="sub-home-content-icon"><img id="icon" src="${homeContents[index].icon}" alt="dolar-icon"></div>
    <h1 class="sub-home-content-h1" id="sub-home-content-h1">${homeContents[index].h1}</h1>
    <p class="sub-home-content-p" id="sub-home-content-p">${homeContents[index].p}</p>
    <button class="sub-home-content-btn"><a href="./nhanNew/Login-form/form.html">Get Started</a></button>`
    $homeContent.style.backgroundImage = `url(${homeContents[index].backgroundImage})`
}
function slideLeft (index) {
    $subHomeContent.innerHTML = `<div class="sub-home-content-icon"><img id="icon" src="${homeContents[index].icon}" alt="dolar-icon"></div>
    <h1 class="sub-home-content-h1" id="sub-home-content-h1">${homeContents[index].h1}</h1>
    <p class="sub-home-content-p" id="sub-home-content-p">${homeContents[index].p}</p>
    <button class="sub-home-content-btn"><a href="./nhanNew/Login-form/form.html">Get Started</a></button>`
    $homeContent.style.backgroundImage = `url(${homeContents[index].backgroundImage})`
}


let index = 0;
$rightBtn.addEventListener('click',() => {
    index++
    if (index == homeContents.length) {index = 0}
    slideRight (index)

    clearInterval(interval)
    interval = setInterval(() => {
    index++
    if (index == homeContents.length) {index = 0}
    slideRight (index)
    },3000)
})

$leftBtn.addEventListener('click',() => {
    index--
    if (index < 0) {index = homeContents.length - 1}
    slideLeft (index)

    clearInterval(interval)
    interval = setInterval(() => {
    index++
    if (index == homeContents.length) {index = 0}
    slideRight (index)
    },3000)
})

let interval = setInterval(() => {
    index++
    if (index == homeContents.length) {index = 0}
    slideRight (index)
},3000)

