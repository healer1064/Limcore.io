import React, { FC, useState } from 'react'
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik'
import classNames from 'classnames'
import { useIMask } from 'react-imask'
import * as Yup from 'yup'
import { useAppDispatch, useAppSelector } from '../../../../../../app/redux/hooks'
import styles from './Form.module.scss'
import { Button } from '..'
import { dynamicMask } from '../../../../../../utils/constants/auth.constants'
import { isNumbersOnly } from '../../../../../../utils/helpers/number.helpers'

const Form: FC = () => {
  const [opts] = useState(dynamicMask)
  const { ref, maskRef } = useIMask(opts)

  const {
    mask: [{ mask: phoneMask }],
  } = dynamicMask

  const phoneMaskLength = (phoneMask as string).length

  const loginValidationSchema = Yup.object({
    emailOrPhone: Yup.string().when('isEmail', {
      is: '1',
      then: Yup.string().email('Неверный формат e-mail').required('Вы забыли ввести e-mail'),
      otherwise: Yup.string()
        .min(phoneMaskLength, 'Неверный формат телефона')
        .max(phoneMaskLength, 'Неверный формат телефона')
        .required('Вы забыли ввести номер телефона'),
    }),
  })

  return (
    <Formik
      initialValues={{
        isEmail: '1',
        emailOrPhone: '',
      }}
      validationSchema={loginValidationSchema}
      onSubmit={async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 500))
        alert(JSON.stringify(values, null, 2))
      }}
    >
      {({ handleChange, values, touched, errors }) => (
        <FormikForm className={styles.form} autoComplete='off'>
          <fieldset className={styles.formFieldset}>
            <legend className={styles.formLegend}>Авторизация</legend>
            <label className={styles.formLabel} htmlFor='emailOrPhone'>
              Телефон или e-mail
            </label>
            <Field
              className={classNames(styles.formField, {
                [styles.formFieldHasErrors]: touched.emailOrPhone && errors.emailOrPhone,
                [styles.formFieldIsEmpty]: !values.emailOrPhone,
              })}
              placeholder='Введите телефон или e-mail'
              name='emailOrPhone'
              type='text'
              id='emailOrPhone'
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                handleChange('emailOrPhone')(event)
                if (isNumbersOnly(values.emailOrPhone)) {
                  handleChange('isEmail')('0')
                } else {
                  handleChange('isEmail')('1')
                }
              }}
              autoFocus={false}
              innerRef={ref}
              maxLength={isNumbersOnly(maskRef?.current?.value || '') ? phoneMaskLength : null}
            />
            <div className={styles.formFieldErrorMessage}>
              <ErrorMessage name='emailOrPhone' />
            </div>
          </fieldset>
          <Button className={styles.formSubmit}>Получить код</Button>
        </FormikForm>
      )}
    </Formik>
  )
}

export default Form
