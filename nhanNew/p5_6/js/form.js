const $btn = document.getElementById('btn-form')
const $firstname = document.getElementById('firstname')
const $lastname = document.getElementById('lastname')
const $email = document.getElementById('email')
const $phonenumber = document.getElementById('phonenumber')
const $subject = document.getElementById('subject')
const $message = document.getElementById('message')

function isEmail(email) {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
}
function isPhoneNumber(phoneNumber) { //phone number is string
    const regex = /^\d{10}$/; // định dạng số điện thoại 10 chữ số
    return regex.test(phoneNumber);
  }
function alertTrue () {
    document.getElementById ('alert-1').style.display = 'none';
    document.getElementById ('alert-2').style.display = 'block';
}
function aleartFalse () {
    document.getElementById ('alert-1').style.display = 'block';
    document.getElementById ('alert-2').style.display = 'none';
}

function checkValid (email, phoneNumber) {
    if (isEmail(email) && isPhoneNumber(phoneNumber)) {
        alertTrue()
        return true;
    } else if (!isPhoneNumber(phoneNumber)) {
        document.getElementById('error').innerHTML = 'Phone Number'
        aleartFalse()
        return false;
    } else if (!isEmail(email)) {
        document.getElementById('error').innerHTML = 'Email Eddress'
        aleartFalse()
        return false;
    }
}  


$btn.addEventListener('click', (event) => {
    event.preventDefault();
})
$btn.onclick = () => {
    checkValid($email.value, $phonenumber.value)
    if (checkValid($email.value, $phonenumber.value)) {
        let object = {
            firstname: $firstname.value,
            lastname: $lastname.value,
            email: $email.value,
            phonenumber: $phonenumber.value,
            subject: $subject.value,
            message: $message.value,
        }
        console.log(object)
        let objectToJson = JSON.stringify(object)
        let i = localStorage.length;
        i++
        localStorage.setItem(`user ${i}`, objectToJson)
        backHome()
    }
    
}
// const value = localStorage.getItem("Nhân")
// const jsonToObject = JSON.parse(value)
// console.log(jsonToObject)

const $backHome = document.getElementById("back-home")
function backHome () {
    let i = 5;
    setInterval(() => {
        $backHome.innerHTML = `Page will reload after ${i} seconds`
        $backHome.style.display = 'block'
        i--
        if (i == 0) {
            clearInterval()
            location.reload();
        }
    }, 1000)
}