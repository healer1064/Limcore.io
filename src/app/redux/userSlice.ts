import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { apiTypes } from '@app/apiTypes'
import { api } from '@app/api'

// export const postUserEmail = createAsyncThunk('user/setUserEmail', async (data: { userId: string; email: string }) => {
//   const response = await api.post<apiTypes.UserData>(`user/${data.userId}/email/${data.email}`, {})
//   return response.data
// })

export const getUser: any = createAsyncThunk('user/getUser', async () => {
  const response = await api.get('users/me/')
  return response.data
})

export const updateUser: any = createAsyncThunk('user/updateUser', async (data: any) => {
  const response = await api.post('users/profile/', data)
  return response.data
})

export const updateProfileUser: any = createAsyncThunk('user/updateProfileUser', async (data: any) => {
  const response = await api.patch('users/profile/', data)
  return response.data
})

export const updateAvatarUser: any = createAsyncThunk('user/updateAvatarUser', async (data: any) => {
  const response = await api.sendFile('users/profile/', data, 'PATCH')
  return response.data
})

export const get2FAUrl: any = createAsyncThunk('user/get2FAUrl', async () => {
  const response = await api.get('users/totp/create/')
  return response.data
})

export const confirm2FA: any = createAsyncThunk('user/confirm2FA', async (data: any) => {
  const response = await api.get(`users/totp/confirm/${data}/`)
  return response.data
})

export const cancel2FA: any = createAsyncThunk('user/cancel2FA', async () => {
  const response = await api.get(`users/totp/remove/`)
  return response.data
})

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userId: null,
    dealerId: null,
    userData: null,
    error: false,
    email: null,
    middleName: false,
    data2FA: {
      key: '',
      qr_url: '',
    },
    data: {
      avatar: '',
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
      home_city: '',
      home_street: '',
      home_house_number: '',
      home_building_number: '',
      home_apartment_number: '',
      chat_name: null,
    },
  },
  reducers: {
    setData2FA(state, { payload }) {
      state.data2FA = payload
    },
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
    builder.addCase(cancel2FA.fulfilled, (state, { payload }) => {
      console.log('cancel2FA', payload)
    })
    builder.addCase(cancel2FA.rejected, (state, { payload }) => {
      console.log('cancel2FA', payload)
    })
    builder.addCase(updateAvatarUser.fulfilled, (state, { payload }) => {
      console.log('updateAvatarUser', payload)
    })
    builder.addCase(updateAvatarUser.rejected, (state, { payload }) => {
      console.log('updateAvatarUser', payload)
    })
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      console.log('getUser', payload)
      state.userData = payload as any // TODO - убрать any
    })
    builder.addCase(getUser.rejected, (state, { payload }) => {
      console.log('getUser', payload)
    })
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      state.error = false
      console.log('updateUser', payload)
    })
    builder.addCase(updateUser.rejected, (state, { payload }) => {
      state.error = true
      console.log('updateUser', payload)
    })
    builder.addCase(updateProfileUser.fulfilled, (state, { payload }) => {
      console.log('updateProfileUser', payload)
    })
    builder.addCase(updateProfileUser.rejected, (state, { payload }) => {
      console.log('updateProfileUser', payload)
    })
    builder.addCase(get2FAUrl.fulfilled, (state, { payload }) => {
      console.log('get2FAUrl', payload)
    })
    builder.addCase(get2FAUrl.rejected, (state, { payload }) => {
      console.log('get2FAUrl', payload)
    })
    builder.addCase(confirm2FA.fulfilled, (state, { payload }) => {
      console.log('confirm2FA', payload)
    })
    builder.addCase(confirm2FA.rejected, (state, { payload }) => {
      console.log('confirm2FA', payload)
    })
  },
})

export const { setData2FA, setUserId, setDealerId, setUserEmail, setData, setMiddleName } = userSlice.actions

export default userSlice.reducer
