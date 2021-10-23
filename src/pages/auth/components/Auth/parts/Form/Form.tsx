import React, { FC, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik'
import classNames from 'classnames'
import IMask from 'imask'
import * as Yup from 'yup'
import { useAppDispatch, useAppSelector } from '../../../../../../app/redux/hooks'
import styles from './Form.module.scss'
import { Button } from '..'

const Form: FC = () => {
  const inputRef = useRef(null)

  useEffect(() => {
    if (inputRef.current) {
      IMask(inputRef.current, { mask: '+{7}(000) 000 00-00' })
    }
  })

  return (
    <Formik
      initialValues={{
        emailOrPhone: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string().email('Некорректный email').required('Поле обязательно для заполнения'),
      })}
      onSubmit={async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 500))
        alert(JSON.stringify(values, null, 2))
      }}
    >
      {({ handleChange }) => (
        <FormikForm className={styles.form} autoComplete='off'>
          <fieldset className={styles.formFieldset}>
            <legend className={styles.formLegend}>Авторизация</legend>
            <label className={styles.formLabel} htmlFor='PhoneOrEmail'>
              Телефон или e-mail
            </label>
            <Field
              className={styles.formField}
              name='PhoneOrEmail'
              type='text'
              id='PhoneOrEmail'
              placeholder='Введите телефон или e-mail'
              ref={inputRef}
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
