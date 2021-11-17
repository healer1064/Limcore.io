import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from '../../../app/api'

export const getForksPrice: any = createAsyncThunk('wallet/getForksPrice', async function () {
  const response = await api.get('api/v1/wallets/xchforks/')
  console.log(response)
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
  extraReducers: {},
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { actions, reducer } = walletSlice
// export const {} = actions

export default reducer
