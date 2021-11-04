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
  getJwtTokenTest,
  registerUserEmail,
  registerUserEmailConfirmation,
  getJwtToken,
  getNewCode,
  setIsAuth,
  authSelector,
  getAuthNextStep,
  setAuthStep,
  setMethod,
  registerUserPhoneConfirmation,
  registerUserPhone,
} from '../../../../redux/auth.slice'
import { Button } from '..'
import { getValidationSchema } from '../../helpers/yup.helpers'
import styles from './Form.module.scss'
import useWindowSize from '@helpers/useWindowSizeHook'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'

const Form: FC = () => {
  const history = useHistory()
  const dispatch = useAppDispatch()
  const auth = useAppSelector(authSelector)
  const isLimcClick = useAppSelector(authSelector).isBuyLimcClick
  const [timeLeft, { start }] = useCountDown(initialTime, interval)
  const [opts, setOpts] = useState<any>({})
  const { ref, maskRef } = useIMask(opts)

  // const [phone, setPhone] = useLocalStorage('phone', '')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useLocalStorage('email', '')
  const [numberCode, setNumberCode] = useLocalStorage('code', '')
  const [uniqueId, setUniqueId] = useLocalStorage('uniqueId', '')

  const [numberIsEmpty, setNumberIsEmpty] = useState(false)

  const { width } = useWindowSize()
  const desktop = width >= 768

  const mainStyles = {
    legend: desktop ? classNames(styles.formLegend, styles.formLegendDesktop) : styles.formLegend,
    submit: desktop ? classNames(styles.formSubmit, styles.formSubmitDesktop) : styles.formSubmit,
    form: desktop ? classNames(styles.form, styles.formDesktop) : styles.form,
    errorMessage: desktop
      ? classNames(styles.formFieldErrorMessageDesktop, styles.formFieldErrorMessage)
      : styles.formFieldErrorMessage,
  }

  // АВТОРИЗАЦИЯ
  const onAuthorization = async () => {
    // users/login-code/ - в теле отправить email/phone (будет отправлен код)
    // let data = {}
    // contact.includes('@') ? (data = { email: contact }) : (data = { phone: `+7${contact.substr(1)}` })
    // const response = await dispatch(getJwtTokenTest(data))

    if (phone === '' || phone.length < 10) {
      setNumberIsEmpty(true)

      setTimeout(() => {
        setNumberIsEmpty(false)
      }, 3000)
      return
    }

    const response = await dispatch(getJwtTokenTest({ phone: `+${phone}` }))
    const id = response.payload?.data.unique_identifier || null
    setUniqueId(id)
  }

  const onAuthorizationConfirm = async () => {
    // в теле отправить unique_identifier и code. В ответ придет токен
    const data = {
      unique_identifier: uniqueId,
      code: numberCode,
    }

    const response = await dispatch(getJwtToken(data))
    console.log(response)
    if (response.payload?.status === 200) {
      dispatch(setIsAuth(true))
      history.push('/')
    }
  }

  // РЕГИСТРАЦИЯ
  const onRegistrationPhone = async () => {
    const newPhone = `+${phone}`
    console.log(newPhone)
    const response = await dispatch(registerUserPhone({ phone: newPhone })) // придет unique_identifier
    const id = response.payload?.data.unique_identifier || null
    setUniqueId(id)
    dispatch(setAuthStep(Auth.Step2))
  }

  const onRegistrationPhoneConfirm = () => {
    // нужно отдать code + unique_identifier
    const data = {
      code: numberCode,
      unique_identifier: uniqueId,
    }
    dispatch(registerUserPhoneConfirmation(data))
  }

  const onRegistrationEmail = async (email) => {
    const response = await dispatch(registerUserEmail({ email })) // придет unique_identifier
    const id = response.payload?.data.unique_identifier || null
    setUniqueId(id)
  }

  const onRegistrationEmailConfirm = () => {
    // нужно отдать code + unique_identifier
    const data = {
      code: numberCode,
      unique_identifier: uniqueId,
    }
    dispatch(registerUserEmailConfirmation(data))
    // dispatch(getJwtToken(data))
    history.push('/')
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
                  <FormikForm className={mainStyles.form}>
                    <fieldset className={styles.formFieldset}>
                      <legend className={mainStyles.legend}>
                        {isLimcClick ? 'Чтобы купить LIMC, нужно авторизоваться' : 'Авторизация'}
                      </legend>
                      <label className={styles.formLabel} htmlFor='emailOrPhone'>
                        Введите телефон
                      </label>
                      {/* <div className={styles.formChoice}>
                        <label className={styles.formLabel}>Что будете вводить?</label>
                        <div className={styles.formChoiceBtnContainer}>
                          <button className={styles.formChoiceBtn}>Телефон</button>
                          <button className={styles.formChoiceBtn}>Почту</button>
                        </div>
                      </div> */}
                      <PhoneInput
                        buttonClass={styles.formFieldDropDown}
                        inputClass={classNames(styles.formField, {
                          [styles.formFieldHasErrors]: touched.emailOrPhone && errors.emailOrPhone,
                          [styles.formFieldIsEmpty]: !values.emailOrPhone,
                        })}
                        country='ru'
                        preferredCountries={['ua', 'ru', 'by', 'kz', 'uz', 'tj']}
                        value={phone}
                        onChange={(phone) => {
                          setNumberIsEmpty(false)
                          setPhone(phone)
                        }}
                      />
                      {/* <Field
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
                      /> */}
                      {/* <p
                        className={classNames(mainStyles.errorMessage, {
                          [styles.formFieldErrorMessageHidden]: Object.keys(errors).length === 0,
                        })}
                      >
                        <ErrorMessage name='emailOrPhone' />
                      </p> */}
                      {numberIsEmpty && <p className={mainStyles.errorMessage}>Введите номер правильно</p>}
                    </fieldset>
                    <Button className={mainStyles.submit} onClick={onAuthorization}>
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
              {({ handleChange, submitForm, values, touched, errors }) => {
                return (
                  <FormikForm className={mainStyles.form}>
                    <fieldset className={styles.formFieldset}>
                      <legend className={mainStyles.legend}>
                        Введите код {auth.authMethod === Method.Phone ? 'из СМС' : 'из письма'}
                      </legend>
                      <label className={styles.formLabel} htmlFor='SMS'>
                        <span>
                          Мы отправили код{' '}
                          {auth.authMethod === Method.Phone ? 'на' : auth.authMethod === Method.Email ? 'на' : null}
                        </span>
                        {auth.authMethod === Method.Phone ? phone : auth.authMethod === Method.Email ? email : null}{' '}
                        <Link to='#!' className={styles.formLink} onClick={() => dispatch(setAuthStep(Auth.Step1))}>
                          Изменить
                        </Link>
                      </label>
                      {/* <legend className={mainStyles.legend}>
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
                        className={classNames(mainStyles.errorMessage, {
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
                    <Button className={mainStyles.submit} onClick={() => onAuthorizationConfirm()}>
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
                // setPhone(maskRef.current.value)
                // console.log(values.phone)
                // setPhone(`+7${values.phone.substr(1)}`)

                setTimeout(() => {
                  setSubmitting(false)
                  resetForm()
                }, 0)
              }}
            >
              {({ handleChange, values, touched, errors }) => {
                return (
                  <FormikForm className={mainStyles.form}>
                    <fieldset className={styles.formFieldset}>
                      <legend className={mainStyles.legend}>Регистрация</legend>
                      <label className={styles.formLabel} htmlFor='phone'>
                        Телефон
                      </label>
                      <PhoneInput
                        buttonClass={styles.formFieldDropDown}
                        inputClass={classNames(styles.formField, {
                          [styles.formFieldHasErrors]: touched.phone && errors.phone,
                          [styles.formFieldIsEmpty]: !values.phone,
                        })}
                        country='ru'
                        preferredCountries={['ua', 'ru', 'by', 'kz', 'uz', 'tj']}
                        value={phone}
                        onChange={(phone) => setPhone(phone)}
                      />
                      <p
                        className={classNames(mainStyles.errorMessage, {
                          [styles.formFieldErrorMessageHidden]: Object.keys(errors).length === 0,
                        })}
                      >
                        <ErrorMessage name='phone' />
                      </p>
                    </fieldset>
                    <Button
                      className={mainStyles.submit}
                      // disabled={Object.keys(errors).length !== 0 || values.phone === ''}
                      onClick={() => onRegistrationPhone()}
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
                dispatch(getAuthNextStep())
                // if (auth.authStep === Auth.Step4) {
                //   dispatch(getAuthNextStep())
                //   dispatch(setProcessType(Process.Authorization))
                // } else {
                //   dispatch(getAuthNextStep())
                // }

                setTimeout(() => {
                  setSubmitting(false)
                  resetForm()
                }, 0)
              }}
            >
              {({ handleChange, submitForm, values, touched, errors, isValid }) => (
                <FormikForm className={mainStyles.form}>
                  <fieldset className={styles.formFieldset}>
                    <legend className={mainStyles.legend}>
                      Введите код {auth.authMethod === Method.Phone ? 'из СМС' : null}
                    </legend>
                    <label className={styles.formLabel} htmlFor='SMS'>
                      <span>
                        Мы отправили код {auth.authStep === Auth.Step2 ? `на +${phone}` : `на ${email}`}
                        {/* {auth.authMethod === Method.Phone ? 'на' : auth.authMethod === Method.Email ? 'на' : null} */}
                      </span>
                      {auth.authMethod === Method.Phone ? phone : auth.authMethod === Method.Email ? email : null}{' '}
                      <Link
                        to='#!'
                        className={styles.formLink}
                        onClick={() => {
                          auth.authStep === Auth.Step2
                            ? dispatch(setAuthStep(Auth.Step1))
                            : dispatch(setAuthStep(Auth.Step3))
                        }}
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
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        handleChange(event)
                        setNumberCode(event.target.value)
                        // console.log(auth.authStep === Auth.Step2)
                        // if (auth.authStep === Auth.Step2) {
                        //   setTimeout(submitForm, 0)
                        // }
                      }}
                      autoComplete='off'
                      value={values.SMS}
                      innerRef={ref}
                      maxLength={SMSMask.length}
                    />
                    <p
                      className={classNames(mainStyles.errorMessage, {
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
                  {auth.authStep === Auth.Step2 && (
                    <Button
                      className={mainStyles.submit}
                      disabled={Object.keys(errors).length !== 0 || values.SMS === undefined}
                      onClick={() => {
                        submitForm()
                        onRegistrationPhoneConfirm()
                      }}
                    >
                      Подтвердить
                    </Button>
                  )}
                  {auth.authStep === Auth.Step4 && isValid && (
                    <Button
                      className={mainStyles.submit}
                      disabled={Object.keys(errors).length !== 0 || values.SMS === ''}
                      onClick={onRegistrationEmailConfirm}
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
              {({ handleChange, values, errors }) => (
                <FormikForm className={mainStyles.form}>
                  <fieldset className={styles.formFieldset}>
                    <legend className={mainStyles.legend}>Регистрация</legend>
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
                      className={classNames(mainStyles.errorMessage, {
                        [styles.formFieldErrorMessageHidden]: Object.keys(errors).length === 0,
                      })}
                    >
                      <ErrorMessage name='email' />
                    </p>
                  </fieldset>
                  <Button
                    className={mainStyles.submit}
                    disabled={Object.keys(errors).length !== 0 || values.email === undefined}
                    onClick={() => onRegistrationEmail(values.email)}
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
