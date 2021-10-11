import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiTypes } from '@app/apiTypes'
import { api } from '@app/api'

export const getUserRole = createAsyncThunk('user/getUserData', async (userId: string) => {
  const response = await api.get<apiTypes.UserData>(`user/${userId}`)
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
    userData: {
      id: 228,
      name: 'Valentin Vorobyev',
      roles: [{ id: 0, name: 'firstUser' }], // TODO Пример - userData должно быть null, когда будет API
    },
    email: null,
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
  },
  extraReducers: (builder) => {
    builder.addCase(getUserRole.fulfilled, (state, { payload }) => {
      state.userData = payload as any // TODO - убрать any
    })
  },
})

export const { setUserId, setDealerId, setUserEmail } = userSlice.actions

export default userSlice.reducer
