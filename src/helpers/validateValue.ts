import validator from 'validator'

export const validateEmail = (email) => {
  return validator.isEmail(email)
}

export const validatePhone = (phone) => {
  return validator.isMobilePhone(phone)
}
