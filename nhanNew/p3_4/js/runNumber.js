const $brand = document.getElementById('brand');
const $client = document.getElementById('client');
const $idea = document.getElementById('idea');
const $user = document.getElementById('user');
const $achievement = document.getElementById('achievement');

const $brandNumber = $brand.innerHTML
const $clientNumber = $client.innerHTML
const $ideaNumber = $idea.innerHTML
const $userNumber = $user.innerHTML

//plus gap units during 1ms (should fixnum % gap == 0)
function upNumber (variable, gap, fixedNum) {
    let i = 0
    setInterval(() => {
        if (i < fixedNum) {
            i+= gap
            variable.innerHTML = i;
        } else if (i >= fixedNum) {
            clearInterval()
        }
    } ,7)
}

function runNumber () {
    if ($achievement.getBoundingClientRect().top >= 0.9*document.documentElement.clientHeight) {
        upNumber($brand, 2, $brandNumber)
        upNumber($client, 5, $clientNumber)
        upNumber($idea, 2, $ideaNumber)
        upNumber($user, 5, $userNumber)
    }
}

const debounce = (fun, delay) => {
    let timerId;
    return () => {
            if (timerId) {
                clearTimeout(timerId)
            } 
        timerId = setTimeout(fun, delay);
}
}
window.addEventListener('scroll',debounce(() => {runNumber ()}, 50) )