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
export const getLimcAmount: any = createAsyncThunk('wallet/getLimcAmount', async function () {
  const response = await api.get('api/v1/limc_amount/')
  return response
})

export const buyLimc: any = createAsyncThunk('wallet/buyLimc', async function (data) {
  const response = await api.post('api/v1/wallets/buy_token/', data)
  console.log(response)
  return response
})

export const getForksPrice: any = createAsyncThunk('wallet/getForksPrice', async function () {
  const response = await api.get('api/v1/wallets/xchforks/')
  console.log(response)
  return response
})

export const getLimcCount: any = createAsyncThunk('wallet/getLimcCount', async function () {
  const response = await api.get('api/v1/wallets/limc-count/')
  return response
})

export const walletSlice = createSlice({
  name: 'wallet',
  initialState: {
    address: '',
    sum_limc_balance: '0',
    usdt_balance: '0',
    limc_price: {
      lock_time: 0,
      slug: '',
      title: '',
      usdt_amount: '',
    },
    limcCount: 0,
    limcLimit: 80000,
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
    [getLimcCount.fulfilled]: (state, { payload }) => {
      state.limcCount = payload.data.current_count
      state.limcLimit = payload.data.limit
    },
  },
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { actions, reducer } = walletSlice
// export const {} = actions

export default reducer
