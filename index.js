const validatePassword = (userPassword) => {
  if (userPassword.length < 8) return false
  let passArray = userPassword.split('')
  let hasNumb = false
  let hasUpper = false
  let hasLower = false
  let hasSpec = false

  for (let i = 0; i < passArray.length; i++) {
    const currentChar = passArray[i]

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
const numberCheck = (parameter) => {
  const numberConverted = Number(parameter)

  return !isNaN(numberConverted)
}
const upperCaseCheck = (parameter) => {
  if (numberCheck(parameter)) return false

  return parameter.toUpperCase() === parameter
}
const lowerCaseCheck = (parameter) => {
  if (numberCheck(parameter)) return false

  return parameter.toLowerCase() === parameter
}

const specialCharCheck = (parameter) => {
  const specChars = '~`!#$%^&*:<>?'
  let charArray = specChars.split('')

  for (let i = 0; i < charArray.length; i++) {
    const eachChar = charArray[i]

    if (eachChar === parameter) return
  }

  return false
}

module.exports = validatePassword
