const form = document.getElementById('form');
const name = document.getElementById('name')
const surname = document.getElementById('surname')
const username = document.getElementById('username')
const email = document.getElementById('e-mail');
const phone = document.getElementById('phone')
const password = document.getElementById('pw');
const password2 = document.getElementById('pw2')

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'validate error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'validate success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhone(phone) {
    return /^\+(?:[0-9] ?){6,14}[0-9]$/.test(phone);
    // supports international phone numbers
    // +1 1234567890123
    // +12 123456789
    // +123 123456
}


function checkInputs() {
    // trim to remove the whitespaces
    const nameValue = name.value.trim();
    const surnameValue = surname.value.trim();
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const phoneValue = phone.value.trim();

    if (nameValue === '') {
        setErrorFor(name, 'Please enter your name');
    } else {
        setSuccessFor(name);
    }

    if (surnameValue === '') {
        setErrorFor(surname, 'Please enter your surname');
    } else {
        setSuccessFor(surname);
    }

    if (usernameValue === '') {
        setErrorFor(username, 'A username is required');
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'An email address is required');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }
    
    if (phoneValue === '') {
        setErrorFor(phone, 'Enter your phone number!');
    } else if (!isPhone(phoneValue)) {
        setErrorFor(phone, 'The given phone number is not valid');
    } else {
        setSuccessFor(phone);
    }

    if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Please reenter your Password');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Password does not match');
	} else{
		setSuccessFor(password2);
	}

}
