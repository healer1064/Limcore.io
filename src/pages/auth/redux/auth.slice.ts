import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../../app/redux/store'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {},
})

const { actions, reducer } = authSlice
// export const {} = actions
export const authSelector = (state: RootState) => state.auth

export default reducer
