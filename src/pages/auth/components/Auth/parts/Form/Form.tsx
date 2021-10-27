import React, { FC, useState, useEffect, useCallback } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik'
import classNames from 'classnames'
import { useIMask } from 'react-imask'
import useCountDown from 'react-countdown-hook'
import format from 'format-duration'
import useLocalStorage from 'react-use-localstorage'
import { phoneMask, emailMask, SMSMask, initialTime, interval, Process, Auth, Method } from '../../constants'
import { useAppDispatch, useAppSelector } from '../../../../../../app/redux/hooks'
import {
  authorizationUserEmail,
  getJwtTokenTest,
  authorizationUserEmailConfirmation,
  registerUserEmail,
  registerUserEmailConfirmation,
  getJwtToken,
  getNewCode,
  setIsAuth,
} from '../../../../redux/auth.slice'
import { authSelector, getAuthNextStep, setAuthStep, setMethod, setProcessType } from '../../../../redux/auth.slice'
import { Button } from '..'
import { getValidationSchema } from '../../helpers/yup.helpers'
import { isNumbersOnly } from '../../helpers/number.helpers'
import styles from './Form.module.scss'
import { number } from 'yup'

const Form: FC = () => {
  const history = useHistory()
  const dispatch = useAppDispatch()
  const auth = useAppSelector(authSelector)
  const confirmationEmail = useAppSelector((state) => state.auth.confirmationEmail)
  const [timeLeft, { start }] = useCountDown(initialTime, interval)
  const [opts, setOpts] = useState<any>({})
  const { ref, maskRef } = useIMask(opts)
  const [phone, setPhone] = useLocalStorage('phone', '')
  const [email, setEmail] = useLocalStorage('email', '')
  const [numberCode, setNumberCode] = useLocalStorage('code', '')

  const onAuthorization = (email) => {
    // console.log('E-mail with the code has been sent: 0540, dc2684e0-cc8b-4515-8fa7-9f831c7ef5bf.'.slice(42, 78))
    // dispatch(getJwtToken({ email }))

    // users/login-code/ - в теле отправить email (будет отправлен код)
    dispatch(getJwtTokenTest({ email }))
  }

  const onRegistration = async (email) => {
    // console.log('E-mail with the code has been sent: 0540, dc2684e0-cc8b-4515-8fa7-9f831c7ef5bf.'.slice(42, 78))
    const response = await dispatch(registerUserEmail({ email })) // придет unique_identifier
    console.log(response)
    const id = response.payload?.data.unique_identifier || null // вылетит ошибка если такой майл уже существует
    localStorage.setItem('uniqueId', id)
  }

  const onRegistrationConfirm = () => {
    // нужно отдать code + unique_identifier
    const data = {
      code: localStorage.getItem('code'), // берет старый код почему-то
      unique_identifier: localStorage.getItem('uniqueId'),
    }
    dispatch(registerUserEmailConfirmation(data))
    // dispatch(getJwtToken(auth.confirmationEmail))
    dispatch(getJwtToken({ email: localStorage.getItem('email'), code: data.code }))
    history.push('/')
  }

  const onAuthorizationConfirm = async () => {
    // dispatch(authorizationUserEmailConfirmation())
    // dispatch(getJwtToken(auth.confirmationEmail))

    // в теле отправить email и code. В ответ придет токен
    const data = {
      email: localStorage.getItem('email'),
      code: localStorage.getItem('code'),
    }
    // dispatch(authorizationUserEmailConfirmation())
    // dispatch(getJwtToken(data))
    const response = await dispatch(getJwtToken(data))
    // const token = response.payload.data.access

    if (response.payload.status === 200) {
      dispatch(setIsAuth(true))
      history.push('/')
    }
  }

  useEffect(() => {
    switch (auth.processType) {
      case Process.Authorization:
        switch (auth.authStep) {
          case Auth.Step1:
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
          case Auth.Step2:
          case Auth.Step3:
            setOpts({ mask: SMSMask })
            break
          default:
            throw new Error(`Unknown authStep: ${auth.authStep}`)
        }
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
            throw new Error(`Unknown authStep: ${auth.authStep}`)
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
    dispatch(getNewCode({ email }))
  }, [])

  const validationSchema = getValidationSchema(auth.processType, auth.authStep)

  const TRUE = true

  switch (auth.processType) {
    case Process.Authorization:
      switch (auth.authStep) {
        case Auth.Step1:
          return (
            <Formik
              initialValues={{
                isEmail: '1',
                emailOrPhone: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm, setSubmitting }) => {
                // if (isNumbersOnly(values.emailOrPhone)) {
                //   dispatch(setMethod(Method.Phone))
                //   setPhone(values.emailOrPhone)
                // } else {
                //   dispatch(setMethod(Method.Email))
                //   setEmail(values.emailOrPhone)
                // }

                if (TRUE) {
                  dispatch(setMethod(Method.Email))
                  setEmail(values.emailOrPhone)
                }

                dispatch(getAuthNextStep())
                setTimeout(() => {
                  setSubmitting(false)
                  resetForm()
                }, 0)
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
                        // maxLength={isNumbersOnly(maskRef?.current?.value || '') ? phoneMask.length : null}
                      />
                      <p
                        className={classNames(styles.formFieldErrorMessage, {
                          [styles.formFieldErrorMessageHidden]: Object.keys(errors).length === 0,
                        })}
                      >
                        <ErrorMessage name='emailOrPhone' />
                      </p>
                    </fieldset>
                    <Button
                      className={styles.formSubmit}
                      disabled={Object.keys(errors).length !== 0 || values.emailOrPhone === ''}
                      onClick={() => onAuthorization(values.emailOrPhone)}
                    >
                      Получить код
                    </Button>
                  </FormikForm>
                )
              }}
            </Formik>
          )
        case Auth.Step2:
        case Auth.Step3:
          return (
            <Formik
              initialValues={{ SMS: '' }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm, setSubmitting }) => {
                if (auth['2FA']) {
                  if (auth.authStep === Auth.Step2) {
                    dispatch(getAuthNextStep())
                  } else {
                    dispatch(setAuthStep(Auth.Step1))
                  }
                } else {
                  dispatch(setAuthStep(Auth.Step1))
                }

                setTimeout(() => {
                  setSubmitting(false)
                  resetForm()
                }, 0)
              }}
            >
              {({ handleChange, submitForm, values, touched, errors, isValid }) => {
                return (
                  <FormikForm className={styles.form}>
                    <fieldset className={styles.formFieldset}>
                      <legend className={styles.formLegend}>
                        Введите код {auth.authMethod === Method.Phone ? 'из СМС' : 'из письма'}
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
                        <Link to='#!' className={styles.formLink} onClick={() => dispatch(setAuthStep(Auth.Step1))}>
                          Изменить
                        </Link>
                      </label>
                      {/* <legend className={styles.formLegend}>
                        {auth.authStep === Auth.Step3
                          ? 'Введите 2-FA код'
                          : `Введите код ${auth.authMethod === Method.Phone ? 'из СМС' : 'из письма'}`}
                      </legend>
                      <label className={styles.formLabel} htmlFor='SMS'>
                        {auth.authStep === Auth.Step3 ? (
                          'Введите код, сгенерированный приложением Google Authenticator'
                        ) : (
                          <>
                            <span>
                              Мы отправили код{' '}
                              {auth.authMethod === Method.Phone
                                ? 'на номер'
                                : auth.authMethod === Method.Email
                                ? 'на адрес'
                                : null}
                            </span>
                            {auth.authMethod === Method.Phone ? phone : auth.authMethod === Method.Email ? email : null}{' '}
                            <Link to='#!' className={styles.formLink} onClick={() => dispatch(setAuthStep(Auth.Step1))}>
                              Изменить
                            </Link>
                          </>
                        )}
                      </label> */}
                      <Field
                        className={classNames(styles.formField, styles.formFieldTextCenter, {
                          [styles.formFieldHasErrors]: touched.SMS && errors.SMS,
                          [styles.formFieldIsEmpty]: !values.SMS,
                        })}
                        placeholder='_ _ _ _'
                        name='SMS'
                        type='text'
                        id='SMS'
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                          handleChange(event)
                          setNumberCode(event.target.value)
                          setTimeout(submitForm, 0)
                        }}
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
                      {!!timeLeft && auth.authStep !== Auth.Step3 && (
                        <p className={styles.formFieldMessage}>
                          Получить новый код можно через {format(timeLeft, { leading: true })}
                        </p>
                      )}
                      {!timeLeft && auth.authStep !== Auth.Step3 && (
                        <Link
                          to='#!'
                          className={classNames(styles.formLink, styles.formFieldMessage)}
                          onClick={restart}
                        >
                          Отправить новый код
                        </Link>
                      )}
                    </fieldset>
                    {/* {(!auth['2FA'] || auth.authStep === Auth.Step3) && isValid && ( */}
                    <Button className={styles.formSubmit} onClick={() => onAuthorizationConfirm()}>
                      Войти
                    </Button>
                    {/* )} */}
                  </FormikForm>
                )
              }}
            </Formik>
          )
      }
      break

    case Process.Registration:
      switch (auth.authStep) {
        case Auth.Step1:
          return (
            <Formik
              initialValues={{ phone: '' }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm, setSubmitting }) => {
                dispatch(getAuthNextStep())
                dispatch(setMethod(Method.Phone))
                setPhone(maskRef.current.value)

                setTimeout(() => {
                  setSubmitting(false)
                  resetForm()
                }, 0)
              }}
            >
              {({ handleChange, values, touched, errors }) => {
                return (
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
                        // maxLength={phoneMask.length}
                      />
                      <p
                        className={classNames(styles.formFieldErrorMessage, {
                          [styles.formFieldErrorMessageHidden]: Object.keys(errors).length === 0,
                        })}
                      >
                        <ErrorMessage name='phone' />
                      </p>
                    </fieldset>
                    <Button
                      className={styles.formSubmit}
                      disabled={Object.keys(errors).length !== 0 || values.phone === ''}
                    >
                      {' '}
                      Получить код
                    </Button>
                  </FormikForm>
                )
              }}
            </Formik>
          )

        case Auth.Step2:
        case Auth.Step4:
          return (
            <Formik
              initialValues={{ SMS: '' }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm, setSubmitting }) => {
                if (auth.authStep === Auth.Step4) {
                  dispatch(getAuthNextStep())
                  dispatch(setProcessType(Process.Authorization))
                } else {
                  dispatch(getAuthNextStep())
                }

                setTimeout(() => {
                  setSubmitting(false)
                  resetForm()
                }, 0)
              }}
            >
              {({ handleChange, submitForm, values, touched, errors, isValid }) => (
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
                      <Link to='#!' className={styles.formLink} onClick={() => dispatch(setAuthStep(Auth.Step1))}>
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
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        handleChange(event)
                        setNumberCode(event.target.value)
                        if (auth.authStep === Auth.Step2) {
                          setTimeout(submitForm, 0)
                        }
                      }}
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
                  {auth.authStep === Auth.Step4 && isValid && (
                    <Button
                      className={styles.formSubmit}
                      disabled={Object.keys(errors).length !== 0 || values.SMS === ''}
                      onClick={() => onRegistrationConfirm()}
                    >
                      Зарегистрироваться
                    </Button>
                  )}
                </FormikForm>
              )}
            </Formik>
          )

        case Auth.Step3:
          return (
            <Formik
              initialValues={{ email: '' }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm, setSubmitting }) => {
                setEmail(maskRef.current.value)
                dispatch(getAuthNextStep())
                dispatch(setMethod(Method.Email))

                setTimeout(() => {
                  setSubmitting(false)
                  resetForm()
                }, 0)
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
                        // [styles.formFieldHasErrors]: touched.email && errors.email,
                        [styles.formFieldIsEmpty]: values.email,
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
                  <Button
                    className={styles.formSubmit}
                    disabled={Object.keys(errors).length !== 0 || values.email === undefined}
                    onClick={() => onRegistration(values.email)}
                  >
                    Получить код
                  </Button>
                </FormikForm>
              )}
            </Formik>
          )
      }
  }
}

export default Form
