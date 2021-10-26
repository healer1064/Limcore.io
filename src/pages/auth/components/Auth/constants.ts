export const phoneMask = /^(\+|\d)[0-9]{7,16}$/
export const emailMask = /^\S*@?\S*$/
export const SMSMask = '0000'

export const initialTime = 42 * 1000
export const interval = 1000

export enum Process {
  Registration = 'REGISTRATION',
  Authorization = 'AUTHORIZATION',
}

export enum Method {
  Phone = 'PHONE',
  Email = 'EMAIL',
}

export enum Auth {
  Step1,
  Step2,
  Step3,
  Step4,
}
