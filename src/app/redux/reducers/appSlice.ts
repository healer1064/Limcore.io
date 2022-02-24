// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IAppSlice {
  openModalConnectWallet: boolean
}
const initialState: IAppSlice = {
  openModalConnectWallet: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    handlerOpenAndCloseModalConnectWallet(state, action: PayloadAction<boolean>) {
      state.openModalConnectWallet = action.payload
    },
  },
})

export default appSlice.reducer
