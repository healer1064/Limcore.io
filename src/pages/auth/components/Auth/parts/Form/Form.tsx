import React, { FC, useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik'
import classNames from 'classnames'
import { useIMask } from 'react-imask'
import useCountDown from 'react-countdown-hook'
import format from 'format-duration'
import useLocalStorage from 'react-use-localstorage'
import { phoneMask, emailMask, SMSMask, initialTime, interval, Process, Auth, Method } from '../../constants'
import { useAppDispatch, useAppSelector } from '../../../../../../app/redux/hooks'
import {
  authSelector,
  getRegistrationNextStep,
  setRegistrationStep,
  setMethod,
  setProcessType,
} from '../../../../redux/auth.slice'
import { Button } from '..'
import { getValidationSchema } from '../../helpers/yup.helpers'
import { isNumbersOnly } from '../../helpers/number.helpers'
import styles from './Form.module.scss'

const Form: FC = () => {
  const dispatch = useAppDispatch()
  const auth = useAppSelector(authSelector)
  const [timeLeft, { start }] = useCountDown(initialTime, interval)
  const [opts, setOpts] = useState<any>({})
  const { ref, maskRef } = useIMask(opts)
  const [phone, setPhone] = useLocalStorage('phone', '')
  const [email, setEmail] = useLocalStorage('email', '')

  useEffect(() => {
    switch (auth.processType) {
      case Process.Authorization:
        setOpts({
          mask: [
            {
              mask: phoneMask,
            },
            {
              mask: emailMask,
            },
          ],
        })
        break
      case Process.Registration:
        switch (auth.authStep) {
          case Auth.Step1:
            setOpts({ mask: phoneMask })
            break
          case Auth.Step2:
          case Auth.Step4:
            setOpts({ mask: SMSMask })
            break
          case Auth.Step3:
            setOpts({ mask: emailMask })
            break
          default:
            throw new Error(`Unknown registrationStep: ${auth.authStep}`)
        }
        break
      default:
        throw new Error(`Unknown processType: ${auth.processType}`)
    }
  }, [auth.processType, auth.authStep])

  useEffect(() => {
    if (auth.authStep === Auth.Step2) {
      start()
    }
  }, [auth])

  const restart = useCallback(() => {
    start(initialTime)
  }, [])

  const validationSchema = getValidationSchema(auth.processType, auth.authStep)

  switch (auth.processType) {
    case Process.Authorization:
      return (
        <Formik
          initialValues={{
            isEmail: '1',
            emailOrPhone: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            resetForm({})
          }}
        >
          {({ handleChange, values, touched, errors }) => {
            return (
              <FormikForm className={styles.form}>
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
                    autoComplete='off'
                    value={values.emailOrPhone}
                    innerRef={ref}
                    maxLength={isNumbersOnly(maskRef?.current?.value || '') ? phoneMask.length : null}
                  />
                  <p
                    className={classNames(styles.formFieldErrorMessage, {
                      [styles.formFieldErrorMessageHidden]: Object.keys(errors).length === 0,
                    })}
                  >
                    <ErrorMessage name='emailOrPhone' />
                  </p>
                </fieldset>
                <Button type='submit' className={styles.formSubmit}>
                  Получить код
                </Button>
              </FormikForm>
            )
          }}
        </Formik>
      )
    case Process.Registration:
      switch (auth.authStep) {
        case Auth.Step1:
          return (
            <Formik
              initialValues={{ phone: '' }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                resetForm()
                dispatch(getRegistrationNextStep())
                dispatch(setMethod(Method.Phone))
                setPhone(maskRef.current.value)
              }}
            >
              {({ handleChange, values, touched, errors }) => (
                <FormikForm className={styles.form}>
                  <fieldset className={styles.formFieldset}>
                    <legend className={styles.formLegend}>Регистрация</legend>
                    <label className={styles.formLabel} htmlFor='phone'>
                      Телефон
                    </label>
                    <Field
                      className={classNames(styles.formField, {
                        [styles.formFieldHasErrors]: touched.phone && errors.phone,
                        [styles.formFieldIsEmpty]: !values.phone,
                      })}
                      placeholder='Введите номер телефона'
                      name='phone'
                      type='text'
                      id='phone'
                      onChange={handleChange}
                      autoComplete='off'
                      value={values.phone}
                      innerRef={ref}
                      maxLength={phoneMask.length}
                    />
                    <p
                      className={classNames(styles.formFieldErrorMessage, {
                        [styles.formFieldErrorMessageHidden]: Object.keys(errors).length === 0,
                      })}
                    >
                      <ErrorMessage name='phone' />
                    </p>
                  </fieldset>
                  <Button className={styles.formSubmit}>Получить код</Button>
                </FormikForm>
              )}
            </Formik>
          )

        case Auth.Step2:
        case Auth.Step4:
          return (
            <Formik
              initialValues={{ SMS: '' }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                resetForm({})
                auth.authStep === Auth.Step4 && dispatch(setProcessType(Process.Authorization))
                dispatch(getRegistrationNextStep())
              }}
            >
              {({ handleChange, values, touched, errors }) => (
                <FormikForm className={styles.form}>
                  <fieldset className={styles.formFieldset}>
                    <legend className={styles.formLegend}>
                      Введите код {auth.authMethod === Method.Phone ? 'из СМС' : null}
                    </legend>
                    <label className={styles.formLabel} htmlFor='SMS'>
                      <span>
                        Мы отправили код{' '}
                        {auth.authMethod === Method.Phone
                          ? 'на номер'
                          : auth.authMethod === Method.Email
                          ? 'на адрес'
                          : null}
                      </span>
                      {auth.authMethod === Method.Phone ? phone : auth.authMethod === Method.Email ? email : null}{' '}
                      <Link
                        to='#!'
                        className={styles.formLink}
                        onClick={() => dispatch(setRegistrationStep(Auth.Step1))}
                      >
                        Изменить
                      </Link>
                    </label>
                    <Field
                      className={classNames(styles.formField, styles.formFieldTextCenter, {
                        [styles.formFieldHasErrors]: touched.SMS && errors.SMS,
                        [styles.formFieldIsEmpty]: !values.SMS,
                      })}
                      placeholder='_ _ _ _'
                      name='SMS'
                      type='text'
                      id='SMS'
                      onChange={handleChange}
                      autoComplete='off'
                      value={values.SMS}
                      innerRef={ref}
                      maxLength={SMSMask.length}
                    />
                    <p
                      className={classNames(styles.formFieldErrorMessage, {
                        [styles.formFieldErrorMessageHidden]: Object.keys(errors).length === 0,
                      })}
                    >
                      <ErrorMessage name='SMS' />
                    </p>
                    {!!timeLeft && (
                      <p className={styles.formFieldMessage}>
                        Получить новый код можно через {format(timeLeft, { leading: true })}
                      </p>
                    )}
                    {!timeLeft && (
                      <Link to='#!' className={classNames(styles.formLink, styles.formFieldMessage)} onClick={restart}>
                        Отправить новый код
                      </Link>
                    )}
                  </fieldset>
                </FormikForm>
              )}
            </Formik>
          )

        case Auth.Step3:
          return (
            <Formik
              initialValues={{ email: '' }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                resetForm({})
                dispatch(getRegistrationNextStep())
                dispatch(setMethod(Method.Email))
                setEmail(maskRef.current.value)
              }}
            >
              {({ handleChange, values, touched, errors }) => (
                <FormikForm className={styles.form}>
                  <fieldset className={styles.formFieldset}>
                    <legend className={styles.formLegend}>Регистрация</legend>
                    <label className={styles.formLabel} htmlFor='email'>
                      E-mail
                    </label>
                    <Field
                      className={classNames(styles.formField, {
                        [styles.formFieldHasErrors]: touched.email && errors.email,
                        [styles.formFieldIsEmpty]: !values.email,
                      })}
                      placeholder='Введите e-mail'
                      name='email'
                      type='text'
                      id='email'
                      onChange={handleChange}
                      autoComplete='off'
                      value={values.email}
                      innerRef={ref}
                    />
                    <p
                      className={classNames(styles.formFieldErrorMessage, {
                        [styles.formFieldErrorMessageHidden]: Object.keys(errors).length === 0,
                      })}
                    >
                      <ErrorMessage name='email' />
                    </p>
                  </fieldset>
                  <Button className={styles.formSubmit}>Получить код</Button>
                </FormikForm>
              )}
            </Formik>
          )
      }
  }
}

export default Form
