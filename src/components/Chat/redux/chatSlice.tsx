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

    loader: false,
    currentSlug: '',
    currentDialogueMember: {} as IUserInterface,
    currentMessages: [] as IMessageInterface[],
    currentPage: 0,
    wholePages: 0,
    uploadedFile: [],

    currentClickedMessage: null,
    currentClickedUser: null,

    genChatMembers: [] as IMemberInterface[],
    dialogues: [] as IDialogueInterface[],
    filteredDialogues: [] as IDialogueInterface[],
  },
  reducers: {
    setLoader: (state, { payload }) => {
      state.loader = payload
    },
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
    setDialoguesLastMessage: (state, { payload }) => {
      // TODO поменять, когда бэк по  коиманде 3 будет присылать собеседника в other_user
      const slug = payload?.group ? payload.group.slug : 'general_chat'
      const dialogueIndex = state.dialogues.findIndex((dialogue) => dialogue.slug === slug)
      state.dialogues[dialogueIndex].last_message = payload.message
      state.dialogues[dialogueIndex].unread_count += 1
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
      if (dialogueIndex !== -1) {
        state.dialogues[dialogueIndex].unread_count = payload.unread_count
      }
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
    setCurrentClickedMessage: (state, { payload }) => {
      state.currentClickedMessage = payload
    },
    setCurrentClickedUser: (state, { payload }) => {
      state.currentClickedUser = payload
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
  setLoader,
  setCurrentMessages,
  setDialogues,
  setFilteredDialogues,
  setDialogueUnreadedCount,
  setContent,
  setGenChatMembers,
  setGenChatMembersStatus,
  setDialogueStatus,
  setDialoguesLastMessage,
  setCurrentPage,
  setWholePages,
  setCurrentSlug,
  setCurrentDialogueMember,
  setUploadedFile,
  setCurrentClickedMessage,
  setCurrentClickedUser,
} = actions

export const chatSelector = (state: RootState) => state.chat
export default reducer
