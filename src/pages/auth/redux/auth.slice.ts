import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../../app/redux/store'
import { Process, Auth, Method } from '../components/Auth/constants'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    processType: Process.Authorization,
    authStep: Auth.Step1,
    authMethod: Method.Phone,
    '2FA': true,
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
})

const { actions, reducer } = authSlice
export const { setProcessType, setMethod, getAuthNextStep, setAuthStep } = actions
export const authSelector = (state: RootState) => state.auth

export default reducer
