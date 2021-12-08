import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../../app/redux/store'
import { IDialogueInterface } from '../utils/types'

const personsChatMessages = {} as IDialogueInterface

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    visibleContent: '',
    searchedValue: '',
    genChatMessages: [],
    personsChatMessages,
    dialogues: [],
    isLoading: true,
  },
  reducers: {
    setIsSearched: (state, { payload }) => {
      state.searchedValue = payload
    },
    setGenChatMessages: (state, { payload }) => {
      state.genChatMessages = payload
    },
    setPersonsChatMessages: (state, { payload }) => {
      state.personsChatMessages = payload
    },
    setDialogues: (state, { payload }) => {
      state.dialogues = payload
    },
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload
    },
    setContent: (state, { payload }) => {
      state.visibleContent = payload
    },
  },
})

const { actions, reducer } = chatSlice
export const { setIsSearched, setGenChatMessages, setDialogues, setIsLoading, setContent, setPersonsChatMessages } =
  actions

export const chatSelector = (state: RootState) => state.chat
export default reducer
