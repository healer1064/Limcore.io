/* eslint-disable camelcase */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from '../../../app/api'

// только уже /landing-page/xchforks
// export const getForksPrice: any = createAsyncThunk('wallet/getForksPrice', async function () {
//   const response = await api.get('api/v1/wallets/xchforks/')
//   console.log(response)
//   return response
// })

export const getSyncData: any = createAsyncThunk('wallet/getSyncData', async function (address) {
  const response = await api.post('walletconnect/', address)
  console.log('getSyncData', response)
  return response.data
})

export const walletSlice = createSlice({
  name: 'wallet',
  initialState: {
    address: '',
    countdown_days: 0,
    limc_balance: 0,
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
    [getSyncData.fulfilled]: (state, action) => {
      const { limc, days_passed } = action.payload.limc_balance[0]

      days_passed > 80 ? (state.countdown_days = 80) : (state.countdown_days = 80 - days_passed)

      const numberLimc = Number(limc)
      numberLimc === 0 ? (state.limc_balance = 0) : (state.limc_balance = Number(numberLimc.toFixed(4)))
    },
  },
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { actions, reducer } = walletSlice
// export const {} = actions

export default reducer
