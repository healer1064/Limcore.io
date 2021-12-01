import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../../app/redux/store'

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    isChatVisible: '',
    isContentVisible: '',
    isListVisible: '',
    isRaitingVisible: '',
    isSearched: '',
    closeButtonVisible: false,
    resetButtonVisible: false,
    sendIconVisible: false,
  },
  reducers: {
    setIsChatVisible: (state, { payload }) => {
      state.isChatVisible = payload
    },
    setIsContentVisible: (state, { payload }) => {
      state.isContentVisible = payload
    },
    setIsListVisible: (state, { payload }) => {
      state.isListVisible = payload
    },
    setIsRaitingVisible: (state, { payload }) => {
      state.isRaitingVisible = payload
    },
    setIsSearched: (state, { payload }) => {
      state.isSearched = payload
    },
    setCloseButtonVisible: (state, { payload }) => {
      state.closeButtonVisible = payload
    },
    setResetButtonVisible: (state, { payload }) => {
      state.resetButtonVisible = payload
    },
    setSendIconVisible: (state, { payload }) => {
      state.sendIconVisible = payload
    },
  },
})

const { actions, reducer } = chatSlice
export const {
  setIsChatVisible,
  setIsContentVisible,
  setIsListVisible,
  setIsRaitingVisible,
  setIsSearched,
  setCloseButtonVisible,
  setResetButtonVisible,
  setSendIconVisible,
} = actions

export const chatSelector = (state: RootState) => state.chat
export default reducer
