/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from '../../../app/api'
import { RootState } from '../../../app/redux/store'

export const registerUserEmail: any = createAsyncThunk('auth/registerUserEmail', async function (data) {
  try {
    const response = await api.post('users/registration/email/', data)
    return response
  } catch (error) {
    const customError = {
      name: 'Custom axios error',
      message: error.response.data.code_error,
      data: error.response.data,
    }

    throw customError
  }
})

export const registerUserPhone: any = createAsyncThunk('auth/registerUserPhone', async function (data) {
  try {
    const response = await api.post('users/registration/phone/', data)
    return response
  } catch (error) {
    const customError = {
      name: 'Custom axios error',
      message: error.response.data.code_error,
      data: error.response.data,
    }

    throw customError
  }
})

export const registerUserEmailConfirmation: any = createAsyncThunk(
  'auth/registerUserEmailConfirmation',
  async function (data) {
    try {
      const response = await api.post('users/registration/confirmation/email/', data)
      return response
    } catch (error) {
      const customError = {
        name: 'Custom axios error',
        message: error.response.data.code_error,
        data: error.response.data,
      }

      throw customError
    }
  },
)

export const registerUserPhoneConfirmation: any = createAsyncThunk(
  'auth/registerUserPhoneConfirmation',
  async function (data) {
    try {
      const response = await api.post('users/registration/confirmation/phone/', data)
      return response
    } catch (error) {
      const customError = {
        name: 'Custom axios error',
        message: error.response.data.code_error,
        data: error.response.data,
      }

      throw customError
    }
  },
)

export const authorizationUserEmailConfirmation: any = createAsyncThunk(
  'auth/authorizationUserEmailConfirmation',
  async function (data) {
    const response = await api.post('users/registration/confirmation/', data)
    return response
  },
)

export const getJwtToken: any = createAsyncThunk('auth/getJwtToken', async function (data) {
  try {
    const response = await api.post('users/login/', data)
    return response
  } catch (error) {
    const customError = {
      name: 'Custom axios error',
      message: error.response.data.code_error,
      data: error.response.data,
    }

    throw customError
  }
})

export const getJwtTokenTest: any = createAsyncThunk('auth/getJwtTokenTest', async function (data) {
  try {
    const response = await api.post('users/login-code/', data)
    return response
  } catch (error) {
    const customError = {
      name: 'Custom axios error',
      message: error.response.data.code_error,
      data: error.response.data,
    }

    throw customError
  }
})

export const getNewCode: any = createAsyncThunk('auth/getNewCode', async function (data) {
  const response = await api.post('users/registration/resend/', data)
  return response
})

export const checkToken: any = createAsyncThunk('auth/checkToken', async function (data) {
  const response = await api.post('token/verify/', data)
  return response
})

export const refreshToken: any = createAsyncThunk('auth/refreshToken', async function (data) {
  const response = await api.post('token/refresh/', data)
  return response
})

export const login2FA: any = createAsyncThunk('user/login2FA', async (data: any) => {
  const response = await api.post('users/login/2fa/', data)
  return response.data
})

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isBuyLimcClick: false,
    isAuth: false,
    isSincWithWallet: false,
    walletConnectLimc: '0',
    walletConnectUsdt: '0',
    walletConnectSoldLimcs: 0,
    processType: 'authorization',
    stepRegistration: 1,
    stepAuthorization: 1,
    typeAuthorization: '',
    phone: '',
    codePhone: '',
    email: '',
    codeEmail: '',
    phoneOrEmail: '',
    codePhoneOrEmail: '',
    code2FA: '',
  },
  reducers: {
    setIsBuyLimcClick: (state, { payload }) => {
      state.isBuyLimcClick = payload
    },
    setIsAuth: (state, { payload }) => {
      state.isAuth = payload
    },
    setIsSincWithWallet: (state, { payload }) => {
      state.isSincWithWallet = payload
    },
    setWalletConnectUsdt: (state, { payload }) => {
      state.walletConnectUsdt = payload
    },
    setWalletConnectLimc: (state, { payload }) => {
      state.walletConnectLimc = payload
    },
    setWalletConnectSoldLimcs: (state, { payload }) => {
      state.walletConnectSoldLimcs = payload
    },
    setProcessType: (state, { payload }) => {
      state.processType = payload
    },
    setStepRegistration: (state, { payload }) => {
      state.stepRegistration = payload
    },
    setStepAuthorization: (state, { payload }) => {
      state.stepAuthorization = payload
    },
    setTypeAuthorization: (state, { payload }) => {
      state.typeAuthorization = payload
    },
    setPhone: (state, { payload }) => {
      state.phone = payload
    },
    setCodePhone: (state, { payload }) => {
      state.codePhone = payload
    },
    setEmail: (state, { payload }) => {
      state.email = payload
    },
    setCodeEmail: (state, { payload }) => {
      state.codeEmail = payload
    },
    setPhoneOrEmail: (state, { payload }) => {
      state.phoneOrEmail = payload
    },
    setCodePhoneOrEmail: (state, { payload }) => {
      state.codePhoneOrEmail = payload
    },
    setCode2FA: (state, { payload }) => {
      state.code2FA = payload
    },
  },
  extraReducers: {
    [login2FA.fulfilled]: (state, action) => {
      console.log('login2FA', action)

      const data = { ...action.payload, is_2fa: true }
      localStorage.setItem('jwtToken', JSON.stringify(data))
    },
    [login2FA.rejected]: (state, action) => {
      console.log('login2FA', action)
    },
    [registerUserPhone.fulfilled]: (state, action) => {
      console.log('registerUserPhone', action)
    },
    [registerUserPhone.rejected]: (state, action) => {
      console.log('registerUserPhone', action)
    },
    [registerUserEmail.fulfilled]: (state, action) => {
      console.log('registerUserEmail', action)
    },
    [registerUserEmail.rejected]: (state, action) => {
      console.log('registerUserEmail', action)
    },
    [registerUserEmailConfirmation.fulfilled]: (state, action) => {
      console.log('registerUserEmailConfirmation', action)

      state.isAuth = !state.isAuth
    },
    [authorizationUserEmailConfirmation.fulfilled]: (state, action) => {
      console.log('authorizationUserEmailConfirmation', action)

      state.isAuth = !state.isAuth
    },
    [getJwtToken.fulfilled]: (state, action) => {
      console.log('getJwtToken', action)

      const data = { ...action.payload.data }
      localStorage.setItem('jwtToken', JSON.stringify(data))
    },
    [getNewCode.fulfilled]: (state, action) => {
      console.log('getNewCode', action)
    },
    [checkToken.fulfilled]: (state, action) => {
      const tokenObj = { ...JSON.parse(localStorage.getItem('jwtToken')) }
      const token = tokenObj.access

      if (action.payload.status === 200) {
        state.isAuth = true
        api.setUserToken(token)
      } else {
        api.setUserToken('')
      }
    },
    [checkToken.rejected]: (state, action) => {
      throw new Error('access_token_invalid')
    },
    [refreshToken.fulfilled]: (state, action) => {
      console.log('refreshToken', action)
      const jwtObj = JSON.parse(localStorage.getItem('jwtToken'))
      const data = { ...jwtObj, access: action.payload.data.access }

      localStorage.setItem('jwtToken', JSON.stringify(data))

      window.location.reload()
    },
    [refreshToken.rejected]: (state, action) => {
      console.log('refreshToken rejected')
      localStorage.removeItem('jwtToken')
      throw new Error(action.error)
    },
  },
})

const { actions, reducer } = authSlice
export const {
  setIsBuyLimcClick,
  setIsAuth,
  setIsSincWithWallet,
  setProcessType,
  setStepRegistration,
  setStepAuthorization,
  setTypeAuthorization,
  setPhone,
  setCodePhone,
  setEmail,
  setCodeEmail,
  setPhoneOrEmail,
  setCodePhoneOrEmail,
  setWalletConnectUsdt,
  setWalletConnectLimc,
  setWalletConnectSoldLimcs,
  setCode2FA,
} = actions

export const authSelector = (state: RootState) => state.auth
export default reducer
