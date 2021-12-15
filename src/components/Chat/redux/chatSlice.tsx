import { api } from '@app/api'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../../app/redux/store'
import {
  IDialogueInterface,
  IMemberInterface,
  IMessageInterface,
  IUserInterface,
  TVisibleContent,
} from '../utils/types'

export const uploadFile: any = createAsyncThunk('chat/upload', async function (file) {
  const response = await api.post('chat/upload/', file)
  return response.data
})

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    visibleContent: 'loading' as TVisibleContent,

    currentSlug: '',
    currentDialogueMember: {} as IUserInterface,
    currentMessages: [] as IMessageInterface[],
    currentPage: 0,
    wholePages: 0,
    uploadedFile: [],

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
    setUploadedFile: (state, { payload }) => {
      state.uploadedFile = payload
    },
  },
  extraReducers: {
    [uploadFile.fulfilled]: (state, action) => {
      console.log('uploadFile', action.payload)
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
  setUploadedFile,
} = actions

export const chatSelector = (state: RootState) => state.chat
export default reducer
