import * as Yup from 'yup'
import { Process, Auth, SMSMask } from '../constants'

export const getValidationSchema = (processType: Process, authStep: Auth) => {
  switch (processType) {
    case Process.Authorization:
      switch (authStep) {
        case Auth.Step1:
          return Yup.object({
            emailOrPhone: Yup.string().when('isEmail', {
              is: '1',
              then: Yup.string().email('Неверный формат e-mail').required('Вы забыли ввести телефон или e-mail'),
              otherwise: Yup.string()
                // .min(phoneMask.length, 'Неверный формат телефона')
                // .max(phoneMask.length, 'Неверный формат телефона')
                .required('Вы забыли ввести телефон или e-mail'),
            }),
          })
        case Auth.Step2:
        case Auth.Step3:
          return Yup.object({
            SMS: Yup.string()
              .min(SMSMask.length, 'Неверный код. Попробуйте еще раз')
              .max(SMSMask.length, 'Неверный код. Попробуйте еще раз')
              .required('Поле обязательно для заполнения'),
          })
        default:
          throw new Error(`Unknown registration step: ${authStep}`)
      }

    case Process.Registration:
      switch (authStep) {
        case Auth.Step1:
          return Yup.object({
            phone: Yup.string()
              // .min(phoneMask.length, 'Неверный формат телефона')
              // .max(phoneMask.length, 'Неверный формат телефона')
              .required('Вы забыли ввести номер телефона'),
          })
        case Auth.Step3:
          return Yup.object({
            email: Yup.string().email('Некорректный email').required('Поле обязательно для заполнения'),
          })
        case Auth.Step2:
        case Auth.Step4:
          return Yup.object({
            SMS: Yup.string()
              .min(SMSMask.length, 'Неверный код. Попробуйте еще раз')
              .max(SMSMask.length, 'Неверный код. Попробуйте еще раз')
              .required('Поле обязательно для заполнения'),
          })
        default:
          throw new Error(`Unknown registration step: ${authStep}`)
      }

    default:
      throw new Error(`Unknown processType: ${processType}`)
  }
}
