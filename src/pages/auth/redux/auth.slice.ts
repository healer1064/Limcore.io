import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from '../../../app/api'
import { RootState } from '../../../app/redux/store'
import { Process, Auth, Method } from '../components/Auth/constants'

export const authorizationUserEmail: any = createAsyncThunk('auth/authorizationUserEmail', async function (data) {
  const response = await api.post('users/registration/', data)
  return response
})

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
    const response = await api.post('users/registration/confirmation/email/', data)
    return response
  },
)

export const registerUserPhoneConfirmation: any = createAsyncThunk(
  'auth/registerUserPhoneConfirmation',
  async function (data) {
    const response = await api.post('users/registration/confirmation/phone/', data)
    return response
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
  console.log(data)
  const response = await api.post('users/login/', data)
  return response
})

export const getJwtTokenTest: any = createAsyncThunk('auth/getJwtTokenTest', async function (data) {
  const response = await api.post('users/login-code/', data)
  console.log(response)
  return response
})

export const getNewCode: any = createAsyncThunk('auth/getNewCode', async function (data) {
  const response = await api.post('users/registration/resend/', data)
  return response
})

export const checkToken: any = createAsyncThunk('auth/checkToken', async function (data) {
  const response = await api.post('api/v1/token/verify/', data)
  return response
})

// export const getTransactions: any = createAsyncThunk('auth/getTransactions', async function () {
//   const response = await api.get('api/v1/transactions/')
//   return response
// })

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    processType: Process.Authorization,
    authStep: Auth.Step1,
    authMethod: Method.Phone,
    '2FA': true,
    confirmationEmail: { code: '', unique_identifier: '' },
    isAuth: false,
    isBuyLimcClick: false,
    uniqueId: '',
    transactions: [],
  },
  reducers: {
    setProcessType: (state, { payload }) => {
      state.processType = payload
    },
    setMethod: (state, { payload }) => {
      state.authMethod = payload
    },
    getAuthNextStep: (state) => {
      state.authStep = (Auth[Auth[state.authStep + 1]] || Auth.Step1) as Auth
    },
    setAuthStep: (state, { payload }) => {
      state.authStep = payload
    },
    setIsAuth: (state, { payload }) => {
      state.isAuth = payload
    },
    setIsBuyLimcClick: (state, { payload }) => {
      state.isBuyLimcClick = payload
    },
  },
  extraReducers: {
    [authorizationUserEmail.fulfilled]: (state, action) => {
      console.log('action', action)
      const data = { code: '', unique_identifier: '' }

      data.code = action.payload.data.result.slice(35, 40)
      data.unique_identifier = action.payload.data.result.slice(42, 78)

      state.confirmationEmail = data
    },
    // [registerUserEmail.fulfilled]: (state, action) => {
    //   console.log('action', action)
    //   state.uniqueId = action.payload.data.unique_identifier
    // },
    [registerUserPhone.fulfilled]: (state, action) => {
      console.log('fulfilled!!!', action)
      state.uniqueId = action.payload.data.unique_identifier
    },
    [registerUserPhone.rejected]: (state, action) => {
      console.log('rejected!!!', action)
    },
    [registerUserEmailConfirmation.fulfilled]: (state) => {
      state.isAuth = !state.isAuth
    },
    [registerUserPhoneConfirmation.fulfilled]: (state, action) => {
      const data = { ...action.payload.data }
      localStorage.setItem('jwtToken', JSON.stringify(data))
      const tokenObj = { ...JSON.parse(localStorage.getItem('jwtToken')) }
      const token = tokenObj.access
      if (action.payload.status === 200) {
        state.isAuth = true
        api.setUserToken(token)
      } else {
        api.setUserToken('')
      }
    },
    [authorizationUserEmailConfirmation.fulfilled]: (state) => {
      state.isAuth = !state.isAuth
    },
    [getJwtToken.fulfilled]: (state, action) => {
      // console.log(action)
      const data = { ...action.payload.data }
      localStorage.setItem('jwtToken', JSON.stringify(data))
    },
    [getNewCode.fulfilled]: (state, action) => {
      console.log(action)
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
    // [getTransactions.fulfilled]: (state, { payload }) => {
    //   state.transactions = payload
    // },
  },
})

const { actions, reducer } = authSlice
export const { setProcessType, setMethod, getAuthNextStep, setAuthStep, setIsAuth, setIsBuyLimcClick } = actions
export const authSelector = (state: RootState) => state.auth

export default reducer
