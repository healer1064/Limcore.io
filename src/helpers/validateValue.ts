import validator from 'validator'

export const validateEmail = (email) => {
  return validator.isEmail(email)
}

export const validatePhone = (phone: string) => {
  return validator.isMobilePhone(`+${phone}`)
}
