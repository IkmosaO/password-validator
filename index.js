// purpose:the function returns true if the password has 8 characters and has 
// at least one lower case letter, upper case letter, numeric value and special character

// accepted parameter(s): string userpassword

// expected output: boolean

const validatePassword = (userPassword) => {

    // if password is less than 8 characters return false
    if (userPassword.length < 8) return false

    // split the userPassword into an array
    let passArray = userPassword.split('')

    let hasNumb = false
    let hasUpper = false
    let hasLower = false
    let hasSpec = false

    // loop through each character
    for(let i = 0; i < passArray.length; i++) {
        const currentChar = passArray[i]

        // call in each functions using parameter
        if (numberCheck(currentChar)) {
            hasNumb = true
            continue
        }

        if (upperCaseCheck(currentChar)) {
            hasUpper = true
            continue
        }

        if (lowerCaseCheck(currentChar)) {
            hasLower = true
            continue
        }

        if (specialCharCheck(currentChar)) {
            hasSpec = true
            continue
        }
    }
    return hasNumb && hasUpper && hasLower && hasSpec
}

// function for checking if a parameter is a number
function numberCheck(parameter) {
    const numberConverted = Number(parameter)

    return !isNaN(numberConverted)
}

// function for checking if a parameter is an uppercase number
const upperCaseCheck = (parameter) => {
    if (numberCheck(parameter)) return false
    return parameter.toUpperCase() === parameter
}

// function for checking if a parameter is a lowercase number
const lowerCaseCheck = (parameter) => {
    if (numberCheck(parameter)) return false
    return parameter.toLowerCase() === parameter
}

// function for checking if a parameter is a special character
const specialCharCheck = (parameter) => {
    const specChars = '"~`!#$%^&*+=-[]\\\';,/{}|\":<>?"'

    for(let i = 0; i < specChars.length; i++) {
        const eachChar = specChars[i]
        if (eachChar === parameter) return true
    }
    return false
}

module.exports = validatePassword