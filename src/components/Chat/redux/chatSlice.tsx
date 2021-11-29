import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../../app/redux/store'

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    isSupportVisible: false,
    isGroupVisible: false,
  },
  reducers: {
    setIsSupportVisible: (state, { payload }) => {
      state.isSupportVisible = payload
    },
    setIsGroupVisible: (state, { payload }) => {
      state.isGroupVisible = payload
    },
  },
})

const { actions, reducer } = chatSlice
export const { setIsSupportVisible, setIsGroupVisible } = actions

export const chatSelector = (state: RootState) => state.chat
export default reducer
