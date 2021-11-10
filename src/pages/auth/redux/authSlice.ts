import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from '../../../app/api'
import { RootState } from '../../../app/redux/store'

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
  const response = await api.post('api/v1/token/verify/', data)
  return response
})

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
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

    confirmationEmail: { code: '', unique_identifier: '' },
  },
  reducers: {
    setIsAuth: (state, { payload }) => {
      state.isAuth = payload
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
  },
  extraReducers: {
    [registerUserPhone.fulfilled]: (state, action) => {
      console.log('fulfilled!!!', action)
    },
    [registerUserPhone.rejected]: (state, action) => {
      console.log('rejected!!!', action)
    },
    [registerUserEmail.fulfilled]: (state, action) => {
      console.log('fulfilled!!!', action)
    },
    [registerUserEmail.rejected]: (state, action) => {
      console.log('rejected!!!', action)
    },
    [authorizationUserEmail.fulfilled]: (state, action) => {
      console.log('action', action)
      const data = { code: '', unique_identifier: '' }

      data.code = action.payload.data.result.slice(35, 40)
      data.unique_identifier = action.payload.data.result.slice(42, 78)

      state.confirmationEmail = data
    },
    // [registerUserEmail.fulfilled]: (state, action) => {
    //   console.log('action', action)
    //   const data = { code: '', unique_identifier: '' }

    //   data.code = action.payload.data.result.slice(35, 40)
    //   data.unique_identifier = action.payload.data.result.slice(42, 78)

    //   state.confirmationEmail = data
    // },
    [registerUserEmailConfirmation.fulfilled]: (state, action) => {
      console.log('action', action)
      state.isAuth = !state.isAuth
    },
    [authorizationUserEmailConfirmation.fulfilled]: (state, action) => {
      console.log('action', action)
      state.isAuth = !state.isAuth
    },
    [getJwtToken.fulfilled]: (state, action) => {
      console.log(action)
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
  },
})

const { actions, reducer } = authSlice
export const {
  setIsAuth,
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
} = actions
export const authSelector = (state: RootState) => state.auth

export default reducer
