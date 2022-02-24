// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IWalletConnect {
  address: string
  chainId: number | null
}

const initialState: IWalletConnect = {
  address: '',
  chainId: null,
}

export const walletConnectSlice = createSlice({
  name: 'walletConnect',
  initialState,
  reducers: {
    walletConnectAction(state, action: PayloadAction<IWalletConnect>) {
      state.address = action.payload.address
      state.chainId = action.payload.chainId
    },
  },
})

export default walletConnectSlice.reducer
