import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  setCurrentMessages,
  setDialogues,
  setDialogueUnreadedCount,
  setGenChatMembers,
  setGenChatMembersStatus,
  setDialogueStatus,
  setDialoguesLastMessage,
  setCurrentPage,
  setWholePages,
  setContent,
  setLoader,
  setCurrentSlug,
} from '../redux/chatSlice'
import { IDialogueInterface, ISendInterface, IMessageInterface } from './types'
import { useAppSelector } from './../../../app/redux/hooks'

const commands = {
  sendGroupMessage: 1,
  joinGroup: 2,
  sendDialogueMessage: 3,
  getGroupMessages: 4,
  getGroupsList: 5,
  sendLastReadedMessage: 9,
  getUnreadedCount: 10,
  checkDialogueExistence: 11,
  userCame: 12,
  userLeft: 13,
  deleteMessage: 15,
  blockUser: 16,
  unblockUser: 17,
  getDialogue: 18,
  // еще есть IS_TYPING
}

let socket: WebSocket = null

export const useChat = () => {
  const dispatch = useDispatch()

  const tokenObj = { ...JSON.parse(localStorage.getItem('jwtToken')) }
  const token = tokenObj.access

  const currentMessages = useAppSelector((state) => state.chat.currentMessages)
  const currentSlug = useAppSelector((state) => state.chat.currentSlug)
  const currentDialogues = useAppSelector((state) => state.chat.dialogues)
  const currentGenChatMembers = useAppSelector((state) => state.chat.genChatMembers)
  const uploadedFile = useAppSelector((state) => state.chat.uploadedFile)
  const currentDialogueMember = useAppSelector((state) => state.chat.currentDialogueMember)
  const userId = useAppSelector((state) => state.user.userData.id)

  useEffect(() => {
    if (!socket) {
      socket = new WebSocket(`wss://limcore.dev.iamrobot.xyz/ws/chat/?token=${token}`)

      socket.onopen = () => {
        dispatch(setContent(''))
      }

      socket.onerror = () => {
        dispatch(setContent('error'))
      }

      socket.onclose = () => {
        console.log('...websocket is closing')
      }
    }
  }, [])

  if (socket) {
    socket.onmessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data)
      console.log('comming data', data)

      // TODO: очень странное, но рабочее условие, надо бы переделать
      if (data.groups?.length === 0) {
        dispatch(setContent('no-content'))
      } else {
        if (data.groups) {
          const generalChat = data.groups.find((group: IDialogueInterface) => group.slug === 'general_chat')
          dispatch(setGenChatMembers(generalChat?.members))
          dispatch(setDialogues(data.groups))
        }
      }

      if (data.command === 0) {
        dispatch(setLoader(false))
      }

      if (data.command === 1) {
        if (currentSlug === 'general_chat') {
          const arr = []
          arr.push(data.message)
          dispatch(setCurrentMessages([...currentMessages, ...arr]))
        }
        dispatch(setDialoguesLastMessage(data))
      }

      if (data.command === 3) {
        const isDialogueInList = currentDialogues.some((dialogue) => dialogue.slug === data.group.slug)

        if (currentSlug === 'nonExistDialogue' && data.group.other_user.id === currentDialogueMember.id) {
          dispatch(setCurrentSlug(data.group.slug))
        }

        if (isDialogueInList) {
          dispatch(setDialoguesLastMessage(data))
        } else {
          getGroupsList(1)
        }

        if (currentSlug === data.group.slug || currentDialogueMember.id === data.group.other_user.id) {
          const arr = []
          arr.push(data.message)
          dispatch(setCurrentMessages([...currentMessages, ...arr]))
        }
      }

      if (data.command === 4) {
        if (data.group === currentSlug) {
          dispatch(setCurrentMessages([...data.result.reverse(), ...currentMessages]))
          dispatch(setCurrentPage(data.page))
          dispatch(setWholePages(data.num_pages))
          dispatch(setLoader(false))
        }
      }

      if (data.command === 5) {
        dispatch(setDialogues(data.result))
        const generalChat = data.result.find((group: IDialogueInterface) => group.slug === 'general_chat')
        dispatch(setGenChatMembers(generalChat?.members))
      }

      if (data.command === 10) {
        dispatch(setDialogueUnreadedCount(data))
      }

      if (data.command === 11) {
        data.result.length === 0 ? dispatch(setCurrentMessages([])) : dispatch(setCurrentMessages(data.result))
        dispatch(setLoader(false))
      }

      if (data.command === 12 || data.command === 13) {
        const dataToDispatch = { id: data.user_pk, status: data.command === 12 ? 1 : 0 }
        const isExistingDialogue = currentDialogues.some((dialogue) => {
          if (dialogue.other_user) {
            return dialogue.other_user.id === data.user_pk
          }
        })
        const isExistingGenChatUser = currentGenChatMembers?.some((member) => {
          return member.user.id === data.user_pk
        })

        if (isExistingDialogue) {
          dispatch(setDialogueStatus(dataToDispatch))
        }
        if (isExistingGenChatUser) {
          dispatch(setGenChatMembersStatus(dataToDispatch))
        }
      }

      if (data.command === 15) {
        const withoutDeletedMessage = currentMessages.filter((msg: IMessageInterface) => msg.id !== data.message_pk)
        dispatch(setCurrentMessages(withoutDeletedMessage))
        getGroupsList(1)
      }

      if (data.command === 16) {
        getGroupsList(1) // - для обновления списка участников общего чата
        if (data.user_pk === userId) {
          dispatch(setContent(''))
        }
      }

      if (data.command === 17) {
        getGroupsList(1) // - для обновления списка участников общего чата
      }
    }
  }

  const send = (data: ISendInterface) => {
    console.log('sent', data)
    socket.send(JSON.stringify(data))
  }

  const sendGroupMessage = (groupName: string, message: string) => {
    const dataToSend1 = {
      command: commands.sendGroupMessage,
      group: groupName,
      message,
      files_pk: uploadedFile,
    }

    const dataToSend2 = {
      command: commands.sendGroupMessage,
      group: groupName,
      message,
    }

    uploadedFile.length === 0 ? send(dataToSend2) : send(dataToSend1)
  }

  const joinGroup = (groupName: string) => {
    const dataToSend = {
      command: commands.joinGroup,
      group: groupName,
    }

    send(dataToSend)
  }

  const sendDialogueMessage = (recipient: string, message: string) => {
    const dataToSend1 = {
      command: commands.sendDialogueMessage,
      recipient,
      message,
      files_pk: uploadedFile,
    }

    const dataToSend2 = {
      command: commands.sendDialogueMessage,
      recipient,
      message,
    }

    uploadedFile.length === 0 ? send(dataToSend2) : send(dataToSend1)
  }

  const sendLastReadedMessage = (messageId: number, groupName: string) => {
    const dataToSend = {
      command: commands.sendLastReadedMessage,
      message_pk: messageId,
      group: groupName,
    }

    send(dataToSend)
  }

  const getGroupMessages = (groupName: string, page: number) => {
    dispatch(setLoader(true))
    const dataToSend = {
      command: commands.getGroupMessages,
      group: groupName,
      page,
    }

    setTimeout(() => {
      send(dataToSend)
    })
  }

  const getGroupsList = (page: number) => {
    const dataToSend = {
      command: commands.getGroupsList,
      page,
    }

    send(dataToSend)
  }

  const checkDialogueExistence = (userId: number) => {
    const dataToSend = {
      command: commands.checkDialogueExistence,
      user_pk: userId,
    }

    send(dataToSend)
  }

  const deleteMessage = (messageId: number) => {
    const dataToSend = {
      command: commands.deleteMessage,
      message_pk: messageId,
    }

    send(dataToSend)
  }

  const blockUser = (userId: number, groupName: string) => {
    const dataToSend = {
      command: commands.blockUser,
      user_pk: userId,
      group: groupName,
    }

    send(dataToSend)
  }

  const unblockUser = (userId: number, groupName: string) => {
    const dataToSend = {
      command: commands.unblockUser,
      user_pk: userId,
      group: groupName,
    }

    send(dataToSend)
  }

  const getDialogue = (groupName: string) => {
    const dataToSend = {
      command: commands.getDialogue,
      group: groupName,
    }

    send(dataToSend)
  }

  return {
    sendGroupMessage,
    joinGroup,
    sendDialogueMessage,
    sendLastReadedMessage,
    getGroupMessages,
    getGroupsList,
    checkDialogueExistence,
    deleteMessage,
    blockUser,
    unblockUser,
    getDialogue,
  }
}
