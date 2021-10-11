import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiTypes } from '@app/apiTypes'
import { api } from '@app/api'

type getAgreementsType = {
  userId: string | null
  dealerId: string | null
}

export const getAgreements = createAsyncThunk('profile/getAgreements', async (data: getAgreementsType) => {
  const response = await api.get<apiTypes.Agreement[]>(`agreements/user/${data.userId}/partner/${data.dealerId}`)
  return response.data
})

// accountNumber: any - вместо any - использовать созданный интерфейс из apiTypes.exampleInterface
export const getBalance = createAsyncThunk('profile/getBalance', async (accountNumber: any) => {
  // api.get<any> - вместо any - использовать созданный интерфейс из apiTypes.exampleInterface
  const response = await api.get<any>(`accountNumber/${accountNumber}/balance`)
  return response.data
})

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    agreements: [],
    status: null,
    activeAgreement: null,
    balance: null,
  } as any, // as any - вместо any - использовать созданный интерфейс из apiTypes.exampleInterface
  reducers: {
    setActiveAgreement(state, { payload }) {
      state.activeAgreement = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAgreements.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(getAgreements.fulfilled, (state, { payload }) => {
      state.agreements = payload
      state.status = 'success'
      state.activeAgreement = payload[0] || null
    })
    builder.addCase(getBalance.fulfilled, (state, { payload }) => {
      state.balance = payload
    })
  },
})

export const { setActiveAgreement } = profileSlice.actions

export default profileSlice.reducer
