import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiTypes } from '@app/apiTypes'
import { api } from '@app/api'

export const getUser = createAsyncThunk('user/getUser', async () => {
  const response = await api.get('users/me/')
  return response.data
})

export const updateUser = createAsyncThunk('user/updateUser', async (data: any) => {
  const response = await api.post('users/profile/', data)
  return response.data
})

export const postUserEmail = createAsyncThunk('user/setUserEmail', async (data: { userId: string; email: string }) => {
  const response = await api.post<apiTypes.UserData>(`user/${data.userId}/email/${data.email}`, {})
  return response.data
})

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userId: null,
    dealerId: null,

    userData: null,
    email: null,
    middleName: false,
    data: {
      first_name: '',
      middle_name: '',
      last_name: '',
      birth_date: '',
      gender: '',
      passport_series: '',
      passport_number: '',
      passport_division_code: '',
      passport_division_name: '',
      passport_was_issued: '',
      city: '',
      street: '',
      house_number: '',
      building_number: '',
      apartment_number: '',
      chat_name: null,
    },
  },
  reducers: {
    setUserId(state, { payload }) {
      state.userId = payload
    },
    setDealerId(state, { payload }) {
      state.dealerId = payload
    },
    setUserEmail(state, { payload }) {
      state.email = payload
    },
    setMiddleName(state, { payload }) {
      state.middleName = payload
    },
    setData(state, { payload }) {
      state.data = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state.userData = payload as any // TODO - убрать any
    })
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      console.log(payload)
      // state.userData = payload as any // TODO - убрать any
    })
  },
})

export const { setUserId, setDealerId, setUserEmail, setData, setMiddleName } = userSlice.actions

export default userSlice.reducer
