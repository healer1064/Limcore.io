/* eslint-disable camelcase */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from '../../../app/api'

export const getForksPrice: any = createAsyncThunk('landing-page/xchforks', async function () {
  const response = await api.get('landing-page/xchforks')
  console.log('getForksPrice', response)
  return response
})

export const getSyncData: any = createAsyncThunk('wallet/getSyncData', async function (address) {
  const response = await api.post('walletconnect/', address)
  console.log('getSyncData', response)
  return response.data
})

export const walletSlice = createSlice({
  name: 'wallet',
  initialState: {
    countdown_days: 80,
    limcLimit: 80000,
    forks: {
      chia: 0,
      chives: 0,
      flax: 0,
      greendoge: 0,
      stai: 0,
      hddcoin: 0,
      flora: 0,
      nchain: 0,
      stor: 0,
      spare: 0,
      chaingreen: 0,
      maize: 0,
      dogechia: 0,
      btcgreen: 0,
      lucky: 0,
      wheat: 0,
      apple: 0,
      taco: 0,
      goji: 0,
      tad: 0,
      socks: 0,
      mogua: 0,
      mint: 0,
      cryptodoge: 0,
      kale: 0,
      avocado: 0,
      covid: 0,
      melati: 0,
      tranzact: 0,
      cannabis: 0,
      cactus: 0,
      chiarose: 0,
      sector: 0,
      fork: 0,
      scam: 0,
      seno: 0,
      enetwork: 0,
      silicoin: 0,
    },
  },
  reducers: {},
  extraReducers: {
    [getSyncData.fulfilled]: (state, action) => {
      const { days_passed } = action.payload
      days_passed > 80 ? (state.countdown_days = 80) : (state.countdown_days = 80 - days_passed)
    },
    [getForksPrice.fulfilled]: (state, action) => {
      const allForks = action.payload.data
      allForks.forEach((fork) => {
        // некоторые форки приходят с price: null
        if (!fork.price) {
          return
        }

        const resultPrice = Number(Number(fork.price).toFixed(4)) // 144,54000234 -> 144,5400 -> 144,54

        switch (fork.name) {
          case 'Chia':
            state.forks.chia = resultPrice
            break
          case 'Chives':
            state.forks.chives = resultPrice
            break
          case 'Flax':
            state.forks.flax = resultPrice
            break
          case 'GreenDoge':
            state.forks.greendoge = resultPrice
            break
          case 'STAI':
            state.forks.stai = resultPrice
            break
          case 'HDDcoin':
            state.forks.hddcoin = resultPrice
            break
          case 'Flora':
            state.forks.flora = resultPrice
            break
          case 'N-Chain':
            state.forks.nchain = resultPrice
            break
          case 'Stor':
            state.forks.stor = resultPrice
            break
          case 'Spare':
            state.forks.spare = resultPrice
            break
          case 'Chaingreen':
            state.forks.chaingreen = resultPrice
            break
          case 'Maize':
            state.forks.maize = resultPrice
            break
          case 'DogeChia':
            state.forks.dogechia = resultPrice
            break
          case 'BTCgreen':
            state.forks.btcgreen = resultPrice
            break
          case 'Lucky':
            state.forks.lucky = resultPrice
            break
          case 'Wheat':
            state.forks.wheat = resultPrice
            break
          case 'Apple':
            state.forks.apple = resultPrice
            break
          case 'Taco':
            state.forks.taco = resultPrice
            break
          case 'Goji':
            state.forks.goji = resultPrice
            break
          case 'Tad':
            state.forks.tad = resultPrice
            break
          case 'Socks':
            state.forks.socks = resultPrice
            break
          case 'Mogua':
            state.forks.mogua = resultPrice
            break
          case 'Mint':
            state.forks.mint = resultPrice
            break
          case 'CryptoDoge':
            state.forks.cryptodoge = resultPrice
            break
          case 'Kale':
            state.forks.kale = resultPrice
            break
          case 'Avocado':
            state.forks.avocado = resultPrice
            break
          case 'Covid':
            state.forks.covid = resultPrice
            break
          case 'Melati':
            state.forks.melati = resultPrice
            break
          case 'Tranzact':
            state.forks.tranzact = resultPrice
            break
          case 'Cannabis':
            state.forks.cannabis = resultPrice
            break
          case 'Cactus':
            state.forks.cactus = resultPrice
            break
          case 'Chiarose':
            state.forks.chiarose = resultPrice
            break
          case 'Sector':
            state.forks.sector = resultPrice
            break
          case 'Fork':
            state.forks.fork = resultPrice
            break
          case 'Scam':
            state.forks.scam = resultPrice
            break
          case 'Seno':
            state.forks.seno = resultPrice
            break
          case 'Equality-Network':
            state.forks.enetwork = resultPrice
            break
          case 'Silicoin':
            state.forks.silicoin = resultPrice
            break
        }
      })
    },
  },
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { actions, reducer } = walletSlice
// export const {} = actions

export default reducer
