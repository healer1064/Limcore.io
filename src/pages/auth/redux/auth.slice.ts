import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from '../../../app/api'
import { RootState } from '../../../app/redux/store'
import { Process, Auth, Method } from '../components/Auth/constants'

export const registerUserEmail: any = createAsyncThunk('auth/registerUserEmail', async function (data) {
  const response = await api.post('users/registration/', data)
  return response
})

export const registerUserEmailConfirmation: any = createAsyncThunk(
  'auth/registerUserEmailConfirmation',
  async function (data) {
    const response = await api.post('users/registration/confirmation/', data)
    return response
  },
)

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    processType: Process.Registration,
    authStep: Auth.Step3,
    authMethod: Method.Email,
    '2FA': true,
    confirmationEmail: { code: '', unique_identifier: '' },
    isAuth: false,
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
  },
  extraReducers: {
    [registerUserEmail.fulfilled]: (state, action) => {
      console.log('action', action)
      const data = { code: '', unique_identifier: '' }

      data.code = action.payload.data.result.slice(35, 40)
      data.unique_identifier = action.payload.data.result.slice(42, 78)

      state.confirmationEmail = data
    },
    [registerUserEmailConfirmation.fulfilled]: (state, action) => {
      state.isAuth = !state.isAuth
    },
  },
})

const { actions, reducer } = authSlice
export const { setProcessType, setMethod, getAuthNextStep, setAuthStep } = actions
export const authSelector = (state: RootState) => state.auth

export default reducer
