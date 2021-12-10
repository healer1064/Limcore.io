import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../../app/redux/store'
import { IDialogueInterface, IMemberInterface, IMessageInterface } from '../utils/types'

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    visibleContent: 'loading', // '' | 'loading' | 'error' | 'content' | 'no-content'
    searchedValue: '',
    currentGenMessagesPage: 1,
    wholeGenMessagesPages: 1,
    currentSlug: '',

    currentMessages: [] as IMessageInterface[],
    genChatMembers: [] as IMemberInterface[],
    dialogues: [] as IDialogueInterface[],
  },
  reducers: {
    setIsSearched: (state, { payload }) => {
      state.searchedValue = payload
    },
    setCurrentMessages: (state, { payload }) => {
      state.currentMessages = payload
    },
    setGenChatMembers: (state, { payload }) => {
      state.genChatMembers = payload
    },
    setDialogues: (state, { payload }) => {
      state.dialogues = payload
    },
    setContent: (state, { payload }) => {
      state.visibleContent = payload
    },
    setGeneralMessagesPage: (state, { payload }) => {
      state.currentGenMessagesPage = payload
    },
    setWholeGenMessagesPages: (state, { payload }) => {
      state.wholeGenMessagesPages = payload
    },
    setCurrentSlug: (state, { payload }) => {
      state.currentSlug = payload
    },
  },
})

const { actions, reducer } = chatSlice
export const {
  setIsSearched,
  setCurrentMessages,
  setDialogues,
  setContent,
  setGenChatMembers,
  setGeneralMessagesPage,
  setWholeGenMessagesPages,
  setCurrentSlug,
} = actions

export const chatSelector = (state: RootState) => state.chat
export default reducer
