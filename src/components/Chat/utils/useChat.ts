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
} from '../redux/chatSlice'
import { IDialogueInterface, ISendInterface } from './types'
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
  // еще есть IS_TYPING
}

let socket: WebSocket = null

export const useChat = () => {
  const dispatch = useDispatch()

  const tokenObj = { ...JSON.parse(localStorage.getItem('jwtToken')) }
  const token = tokenObj.access

  const currentMessages = useAppSelector((state) => state.chat.currentMessages)
  const currentSlug = useAppSelector((state) => state.chat.currentSlug)
  const currentDialogueMember = useAppSelector((state) => state.chat.currentDialogueMember)
  const currentDialogues = useAppSelector((state) => state.chat.dialogues)
  const currentGenChatMembers = useAppSelector((state) => state.chat.genChatMembers)
  const uploadedFile = useAppSelector((state) => state.chat.uploadedFile)

  useEffect(() => {
    if (!socket) {
      socket = new WebSocket(`ws://217.28.228.152:9005/ws/chat/?token=${token}`)

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

      if (data.command === 1) {
        if (currentSlug === 'general_chat') {
          const arr = []
          arr.push(data.message)
          dispatch(setCurrentMessages([...currentMessages, ...arr]))
        }
        dispatch(setDialoguesLastMessage(data))
      }

      if (data.command === 3) {
        const isDialogueExist = currentDialogues.some((dialogue) => dialogue.slug === data.group.slug)
        if (isDialogueExist) {
          if (currentSlug === data.group.slug || currentDialogueMember.id === data.group.other_user.id) {
            const arr = []
            arr.push(data.message)
            dispatch(setCurrentMessages([...currentMessages, ...arr]))
          }

          dispatch(setDialoguesLastMessage(data))

          return
        }

        getGroupsList(1)
      }

      if (data.command === 4) {
        dispatch(setCurrentMessages([...data.result.reverse(), ...currentMessages]))
        dispatch(setCurrentPage(data.page))
        dispatch(setWholePages(data.num_pages))
      }

      if (data.command === 5) {
        dispatch(setDialogues(data.result))
      }

      if (data.command === 10) {
        dispatch(setDialogueUnreadedCount(data))
      }

      if (data.command === 11) {
        data.result.length === 0 ? dispatch(setCurrentMessages([])) : dispatch(setCurrentMessages(data.result))
      }

      if (data.command === 12 || data.command === 13) {
        const dataToDispatch = { id: data.user_pk, status: data.command === 12 ? 1 : 0 }
        const isExistingDialogue = currentDialogues.some((dialogue) => {
          if (dialogue.other_user) {
            return dialogue.other_user.id === data.user_pk
          }
        })
        const isExistingGenChatUser = currentGenChatMembers.some((member) => {
          return member.user.id === data.user_pk
        })

        if (isExistingDialogue) {
          dispatch(setDialogueStatus(dataToDispatch))
        }
        if (isExistingGenChatUser) {
          dispatch(setGenChatMembersStatus(dataToDispatch))
        }
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

  return {
    sendGroupMessage,
    joinGroup,
    sendDialogueMessage,
    sendLastReadedMessage,
    getGroupMessages,
    getGroupsList,
    checkDialogueExistence,
  }
}
