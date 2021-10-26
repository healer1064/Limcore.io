import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from '../../../app/api'

export const getWalletAdress: any = createAsyncThunk('wallet/getWalletAdress', async function () {
  const response = await api.get('api/v1/wallets/my/')
  return response
})

export const walletSlice = createSlice({
  name: 'wallet',
  initialState: {},
  reducers: {
    // setProcessType: (state, { payload }) => {
    //   state.processType = payload
    // },
  },
  extraReducers: {},
})

const { actions, reducer } = walletSlice
// export const {} = actions

export default reducer
