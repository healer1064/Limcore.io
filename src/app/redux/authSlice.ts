import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'auth',
  initialState: {
    oneLimcPrice: 300,
    isAuth: false,
    usdtBalance: 0,
    unlockedLimcBalance: 0,
    lockedLimcBalance: 0,
    userWallet: '',
  },
  reducers: {
    setIsAuth(state, { payload }) {
      state.isAuth = payload
    },
    setUsdtBalance(state, { payload }) {
      state.usdtBalance = payload
    },
    setUnlockedLimcBalance(state, { payload }) {
      state.unlockedLimcBalance = payload
    },
    setLockedLimcBalance(state, { payload }) {
      state.lockedLimcBalance = payload
    },
    setUserWallet(state, { payload }) {
      state.userWallet = payload
    },
  },
  extraReducers: () => {},
})

export const { setIsAuth, setUnlockedLimcBalance, setLockedLimcBalance, setUserWallet, setUsdtBalance } =
  userSlice.actions

export default userSlice.reducer
