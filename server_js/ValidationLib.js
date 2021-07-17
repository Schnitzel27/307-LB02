/**
 * Beschreibung
 * @param id: Identifikation des eingegebenen Datenelement
 * @param message: Fehlermeldung
 * @returns {string}
 */

function errormsg(id, message) {
    return `${id}: ${message}`;
}

function successmsg(id) {
    return `${id} successfully validated!`;
}

function emailCheck(id,input) {
    let result = {
        isNotValid: false,
        msg: successmsg
    (id)
    }
    //regex aus dem Internet 
    const regularexpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regularexpression.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: errormsg
            (id, 'Email is not valid')
        }
    }
    return result;
}

function phonenumberCheck(id,input) {
    let result = {
        isNotValid: false,
        msg: successmsg
    (id)
    }
    //regex aus dem Internet für Telefonnummer 
    const regularexpressionPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (!regularexpressionPhone.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: errormsg
            (id, 'Phone number is not valid')
        }
    }
    return result;
}

function checkRequired(id, input) {
    let result = {
        isNotValid: false,
        msg: successmsg
    (id)
    }
 
    if (input.trim() === '') {
       
        result = {
            isNotValid: true,
            msg: errormsg
            (id, `${input.toString()} is required`)
        }
    }
    return result;
}

/*Vergleichen der Passwörter funktioniert aber nicht ganz

function checkPasswords(id) {
    var password = document.getElementById("password").value
    var password2 = document.getElementById("password2").value

    let result = {
        isNotValid: false,
        msg: successmsg
    (id)
    }
    if (password != password2) {
        result = {
            isNotValid: true,
            msg: errormsg
            (id,'Your passwords do not match')
        }
    }
    return result;
} */
    

function checkLength(id, input, min, max) {
    let result = {
        isNotValid: false,
        msg: successmsg
    (id)
    }
    if (input.length < min) {
        result = {
            isNotValid: true,
            msg: errormsg
            (id,
            `${id} must be at least ${min} characters`)
        }
    } else if (input.length > max) {
        result = {
            isNotValid: true,
            msg: errormsg
            (id,
                `${id} must be less than ${max} characters`)
        }
    }
    return result;
}

module.exports = {
    emailCheck,
    checkLength,
    checkRequired,
    phonenumberCheck,
    //checkPasswords
}