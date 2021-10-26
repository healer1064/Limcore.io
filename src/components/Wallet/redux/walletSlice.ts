import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from '../../../app/api'

export const getWalletAdress: any = createAsyncThunk('wallet/getWalletAdress', async function () {
  const response = await api.get('api/v1/wallets/my/')
  return response
})
export const getWalletBalance: any = createAsyncThunk('wallet/getWalletBalance', async function () {
  const response = await api.get('api/v1/wallets/balance/')
  return response
})
export const getLimcPrice: any = createAsyncThunk('wallet/getLimcPrice', async function () {
  const response = await api.get('api/v1/wallets/pricing/')
  return response
})

export const walletSlice = createSlice({
  name: 'wallet',
  initialState: {
    address: '',
    sum_limc_balance: '',
    usdt_balance: '',
    limc_price: {
      lock_time: 0,
      slug: '',
      title: '',
      usdt_amount: '',
    },
  },
  reducers: {},
  extraReducers: {
    [getWalletAdress.fulfilled]: (state, { payload }) => {
      state.address = payload.data.eth_address
    },
    [getWalletBalance.fulfilled]: (state, { payload }) => {
      state.sum_limc_balance = payload.data.limc.sum_limc_balance
      state.usdt_balance = payload.data.usdt.usdt_balance
    },
    [getLimcPrice.fulfilled]: (state, { payload }) => {
      state.limc_price = payload.data[0]
    },
  },
})

const { actions, reducer } = walletSlice
// export const {} = actions

export default reducer
