const validateLib = require('./ValidationLib');

/**
 * Validate User
 * @param userObj
 * @returns {boolean|{msg: string, isNotValid: boolean}|{isNotValid}|*}
 */
function inputValidation(userObj) {
   
    let result = validateLib.checkRequired("username", userObj.username);
    if (result.isNotValid) { 
        return result; 
    }
    //Validierung auf Vorhandensein von Vorname
    result = validateLib.checkRequired("prename", userObj.prename);
    if (result.isNotValid) { 
        return result; 
    }
    //Validierung auf Vorhandensein von Nachname
    result = validateLib.checkRequired("name", userObj.name);
    if (result.isNotValid) { 
        return result; 
    }

    result = validateLib.checkRequired("email", userObj.email);
    if (result.isNotValid) { 
        return result; 
    }

    result = validateLib.checkRequired("password", userObj.password);
    if (result.isNotValid) {
        return result;
     }

    result = validateLib.checkLength("username",userObj.username, 3, 15);
    if (result.isNotValid) {
         return result;
         }

    //Validierung auf Vorhandensein von Länge 2 bis 50
   result = validateLib.checkLength("name",userObj.name, 2, 50);
    if (result.isNotValid) {
         return result;
        }
    
    //Validierung auf Vorhandensein von Länge 2 bis 20
    result = validateLib.checkLength("prename",userObj.prename, 2, 20);
    if (result.isNotValid) {
        return result;
        }

    result = validateLib.checkLength("password", userObj.password, 8, 25);
    if (result.isNotValid) {
         return result; 
        }

    result = validateLib.emailCheck("email", userObj.email);
    if (result.isNotValid) { 
        return result;
     }
     //Validierung der Telefonnummer
    result = validateLib.phonenumberCheck("phonenumber", userObj.phonenumber);
    if (result.isNotValid) { 
        return result;
     }

     //Vergleichen der Passwörter
     
     /*result = validateLib.checkPasswords("password")
     if (result.isNotValid){
         return result;
     } */ 

    return false;
}

module.exports = {
    inputValidation
}