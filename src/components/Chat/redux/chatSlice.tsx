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
    isButtonVisible: '',
    sendIconVisible: false,
    messages: [],
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
    setIsButtonVisible: (state, { payload }) => {
      state.isButtonVisible = payload
    },
    setMessages: (state, { payload }) => {
      state.messages = payload
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
  setIsButtonVisible,
  setMessages,
} = actions

export const chatSelector = (state: RootState) => state.chat
export default reducer
