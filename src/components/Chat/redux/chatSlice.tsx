import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../../app/redux/store'

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    isSupportVisible: false,
    isGroupVisible: false,
    isParticipantsListVisible: false,
    isRaitingListVisible: false,
    isSearched: '',
    closeButtonVisible: false,
    resetButtonVisible: false,
    sendIconVisible: false,
  },
  reducers: {
    setIsSupportVisible: (state, { payload }) => {
      state.isSupportVisible = payload
    },
    setIsGroupVisible: (state, { payload }) => {
      state.isGroupVisible = payload
    },
    setIsParticipantsListVisible: (state, { payload }) => {
      state.isParticipantsListVisible = payload
    },
    setIsRaitingListVisible: (state, { payload }) => {
      state.isRaitingListVisible = payload
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
  setIsSupportVisible,
  setIsGroupVisible,
  setIsParticipantsListVisible,
  setIsRaitingListVisible,
  setIsSearched,
  setCloseButtonVisible,
  setResetButtonVisible,
  setSendIconVisible,
} = actions

export const chatSelector = (state: RootState) => state.chat
export default reducer
