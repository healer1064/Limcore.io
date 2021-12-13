import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../../app/redux/store'
import { IDialogueInterface, IMemberInterface, IMessageInterface, IUserInterface } from '../utils/types'

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    visibleContent: 'loading', // '' | 'loading' | 'error' | 'content' | 'no-content' TODO type

    currentSlug: '',
    currentDialogueMember: {} as IUserInterface,
    currentMessages: [] as IMessageInterface[],
    currentPage: 0,
    wholePages: 0,

    genChatMembers: [] as IMemberInterface[],
    dialogues: [] as IDialogueInterface[],
  },
  reducers: {
    setCurrentMessages: (state, { payload }) => {
      state.currentMessages = payload
    },
    setGenChatMembers: (state, { payload }) => {
      state.genChatMembers = payload
    },
    setDialogues: (state, { payload }) => {
      state.dialogues = payload
    },
    setDialogueUnreadedCount: (state, { payload }) => {
      const dialogueIndex = state.dialogues.findIndex((dialogue) => dialogue.slug === payload.group)
      state.dialogues[dialogueIndex].unread_count = payload.unread_count
    },
    setContent: (state, { payload }) => {
      state.visibleContent = payload
    },
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload
    },
    setWholePages: (state, { payload }) => {
      state.wholePages = payload
    },
    setCurrentSlug: (state, { payload }) => {
      state.currentSlug = payload
    },
    setCurrentDialogueMember: (state, { payload }) => {
      state.currentDialogueMember = payload
    },
  },
})

const { actions, reducer } = chatSlice
export const {
  setCurrentMessages,
  setDialogues,
  setDialogueUnreadedCount,
  setContent,
  setGenChatMembers,
  setCurrentPage,
  setWholePages,
  setCurrentSlug,
  setCurrentDialogueMember,
} = actions

export const chatSelector = (state: RootState) => state.chat
export default reducer
