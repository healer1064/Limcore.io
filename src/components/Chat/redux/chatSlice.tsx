import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../../app/redux/store'
import {
  IDialogueInterface,
  IMemberInterface,
  IMessageInterface,
  IUserInterface,
  TVisibleContent,
} from '../utils/types'

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    visibleContent: 'loading' as TVisibleContent,

    currentSlug: '',
    currentDialogueMember: {} as IUserInterface,
    currentMessages: [] as IMessageInterface[],
    currentPage: 0,
    wholePages: 0,

    genChatMembers: [] as IMemberInterface[],
    dialogues: [] as IDialogueInterface[],
    filteredDialogues: [] as IDialogueInterface[],
  },
  reducers: {
    setCurrentMessages: (state, { payload }) => {
      state.currentMessages = payload
    },
    setGenChatMembers: (state, { payload }) => {
      state.genChatMembers = payload
    },
    setGenChatMembersStatus: (state, { payload }) => {
      const userIndex = state.genChatMembers.findIndex((user) => {
        return user.user.id === payload.id
      })
      state.genChatMembers[userIndex].user.status = payload.status
    },
    setDialogues: (state, { payload }) => {
      // TODO когда сортировка будет реализована на бэке - убрать
      payload.sort((a, b) => {
        const aTime = new Date(a.last_message.updated_at).getTime()
        const bTime = new Date(b.last_message.updated_at).getTime()
        return bTime - aTime
      })
      state.dialogues = payload
    },
    setDialogueStatus: (state, { payload }) => {
      const currentDialogue = state.dialogues.findIndex((dialogue) => {
        return dialogue.slug !== 'general_chat' && dialogue.other_user.id === payload.id
      })
      state.dialogues[currentDialogue].other_user.status = payload.status
    },
    setFilteredDialogues: (state, { payload }) => {
      state.filteredDialogues = payload
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
  setFilteredDialogues,
  setDialogueUnreadedCount,
  setContent,
  setGenChatMembers,
  setGenChatMembersStatus,
  setDialogueStatus,
  setCurrentPage,
  setWholePages,
  setCurrentSlug,
  setCurrentDialogueMember,
} = actions

export const chatSelector = (state: RootState) => state.chat
export default reducer
