const $btn = document.getElementById('btn-form')
const $firstname = document.getElementById('firstname')
const $lastname = document.getElementById('lastname')
const $email = document.getElementById('email')
const $phonenumber = document.getElementById('phonenumber')
const $subject = document.getElementById('subject')
const $message = document.getElementById('message')
const arr = [$firstname, $lastname, $subject, $message, $email, $phonenumber]

////////////////////////////////
function isEmail(email) {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
}

function isPhoneNumber(phoneNumber) {
    const regex = /^\d{10}$/; 
    return regex.test(phoneNumber);
}

function checkInput () {
    arr.forEach((el) => {
        if (el.value == '') {
            el.style.border = '1px solid red'
            document.getElementById('alert-1').innerHTML = 'Please complete all information!'
            document.getElementById ('alert-1').style.opacity = '1';
        } else if (!(el.value == '')) {
            el.style.border = '1px solid green'
        } 
    })
    if (arr.every((el) => el.value != '')) {
        document.getElementById ('alert-1').style.opacity = '0';
    }
}

function checkPhoneNumber () {
    $phonenumber.addEventListener("input",() => {
        if (isPhoneNumber($phonenumber.value)) {
            $phonenumber.style.border = '1px solid green'
            document.getElementById('alert-1').innerHTML = 'Please complete all information!'
        } else {
            $phonenumber.style.border = '1px solid red'
            document.getElementById('alert-1').innerHTML = 'Please enter the correct <span> Phone Number </span>'
            document.getElementById ('alert-1').style.opacity = '1';
        }
      });
}
  
function checkMail () {
    $email.addEventListener("input",() => {
        if (isEmail($email.value)) {
            $email.style.border = '1px solid green'
            document.getElementById('alert-1').innerHTML = 'Please complete all information!'
        } else {
            $email.style.border = '1px solid red'
            document.getElementById('alert-1').innerHTML = 'Please enter the correct <span> Email </span>'
            document.getElementById ('alert-1').style.opacity = '1';
        }
      });
}

function backHome () {
    let i = 5;
    setInterval(() => {
        document.getElementById('alert-2').innerHTML = `Your information has been sent, Page will reload after ${i} seconds`
        document.getElementById('alert-2').style.opacity = '1'
        i--
        if (i == 0) {
            clearInterval()
            location.reload();
        }
    }, 1000)
}

//////////////////////////////////
arr.forEach((el) => {
    el.oninput = () => {checkInput()}
})


$btn.addEventListener('click', (event) => {
    event.preventDefault();
})

$btn.onclick = () => {
    if (!isEmail($email.value)) {
        $email.style.border = '1px solid red'
        document.getElementById('alert-1').innerHTML = 'Please enter the correct <span> Email </span>'
        document.getElementById ('alert-1').style.opacity = '1';
        checkMail ()
    } else if (!isPhoneNumber($phonenumber.value)) {
        $phonenumber.style.border = '1px solid red'
        document.getElementById('alert-1').innerHTML = 'Please enter the correct <span> Phone Number </span>'
        document.getElementById ('alert-1').style.opacity = '1';
        checkPhoneNumber ()
    }
    if (arr.every((el) => el.value != '') && isPhoneNumber($phonenumber.value) && isEmail($email.value)) {
        $btn.disabled = true;
        let object = {
            firstname: $firstname.value,
            lastname: $lastname.value,
            email: $email.value,
            phonenumber: $phonenumber.value,
            subject: $subject.value,
            message: $message.value,
        }
        let objectToJson = JSON.stringify(object)
        let i = localStorage.length;
        i++
        localStorage.setItem(`user ${i}`, objectToJson)
        backHome()
    }
}
