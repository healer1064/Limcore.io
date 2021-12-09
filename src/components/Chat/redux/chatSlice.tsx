import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../../app/redux/store'
import { IDialogueInterface, IMemberInterface, IMessageInterface } from '../utils/types'

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    visibleContent: '',
    searchedValue: '',
    isLoading: true,
    currentGenMessagesPage: 1,
    wholeGenMessagesPages: 1,

    genChatMessages: [] as IMessageInterface[],
    genChatMembers: [] as IMemberInterface[],
    personsChatMessages: {} as IDialogueInterface,
    dialogues: [] as IDialogueInterface[],
  },
  reducers: {
    setIsSearched: (state, { payload }) => {
      state.searchedValue = payload
    },
    setGenChatMessages: (state, { payload }) => {
      state.genChatMessages = payload
    },
    setGenChatMembers: (state, { payload }) => {
      state.genChatMembers = payload
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
    setGeneralMessagesPage: (state, { payload }) => {
      state.currentGenMessagesPage = payload
    },
    setWholeGenMessagesPages: (state, { payload }) => {
      state.wholeGenMessagesPages = payload
    },
  },
})

const { actions, reducer } = chatSlice
export const {
  setIsSearched,
  setGenChatMessages,
  setDialogues,
  setIsLoading,
  setContent,
  setPersonsChatMessages,
  setGenChatMembers,
  setGeneralMessagesPage,
  setWholeGenMessagesPages,
} = actions

export const chatSelector = (state: RootState) => state.chat
export default reducer
