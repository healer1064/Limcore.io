import { checkToken, refreshToken } from './../../../pages/auth/redux/authSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  setCurrentMessages,
  setDialogues,
  setDialogueUnreadedCount,
  setGenChatMembers,
  setDialoguesLastMessage,
  setCurrentPage,
  setWholePages,
  setContent,
  setLoader,
  setCurrentSlug,
} from '../redux/chatSlice'
import { ISendInterface, IMessageInterface } from './types'
import { useAppSelector } from './../../../app/redux/hooks'

const commands = {
  sendGroupMessage: 1,
  sendDialogueMessage: 2,
  getGroups: 3,
  getGroupMessages: 4,
  getDialogMessages: 5,
  getSingleGroup: 6,
  getMembersGroup: 7,
  messageUpdate: 8,
  messageRead: 9,
  messageReadAllBeforeCurrent: 10,
  unreadMessageCount: 11,
  leaveGroup: 12,
  isTyping: 13,
  online: 14,
  offline: 15,
  blockMember: 17,
  unblockMember: 18,
  deleteMessage: 19,
}

let socket: WebSocket = null

export const useChat = () => {
  const dispatch = useDispatch()

  const tokenObj = { ...JSON.parse(localStorage.getItem('jwtToken')) }
  let token = tokenObj.access

  const currentMessages = useAppSelector((state) => state.chat.currentMessages)
  const currentSlug = useAppSelector((state) => state.chat.currentSlug)
  const currentDialogues = useAppSelector((state) => state.chat.dialogues)
  const uploadedFile = useAppSelector((state) => state.chat.uploadedFile)
  const currentDialogueMember = useAppSelector((state) => state.chat.currentDialogueMember)

  const { REACT_APP_API_HOST, REACT_APP_CHAT_ENDPOINT } = process.env

  useEffect(() => {
    const connect = () => {
      if (!socket || socket.readyState === 3) {
        socket = new WebSocket(`wss://${REACT_APP_API_HOST}${REACT_APP_CHAT_ENDPOINT}?token=${token}`)

        socket.onopen = () => {
          dispatch(setContent(''))
        }

        socket.onerror = (err) => {
          console.log('error', err)
        }

        socket.onclose = (ev) => {
          dispatch(setContent('loading'))
          console.log('...websocket is closing', ev)
          // check if the disconnect is caused by an invalid token
          if (ev.code === 1006) {
            dispatch(checkToken({ token: tokenObj.access })).then(
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              (resolve) => {
                connect()
              },
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              (reject) => {
                dispatch(refreshToken({ refresh: tokenObj.refresh })).then(
                  (resolve) => {
                    token = resolve.payload.data.access
                    connect()
                  },
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  (reject) => {
                    window.location.reload()
                  },
                )
              },
            )
          }
        }
      }
    }
    connect()
  }, [])

  if (socket) {
    socket.onmessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data)
      console.log('comming data', data)

      if (data.groups?.length === 0) {
        dispatch(setContent('no-content'))
      } else {
        if (data.groups) {
          dispatch(setDialogues(data.groups))
        }
      }

      if (data.command === 0) {
        dispatch(setLoader(false))
      }

      if (data.command === 1) {
        if (currentDialogues.some((dialogue) => dialogue.slug === 'general_chat')) {
          if (currentSlug === 'general_chat') {
            const arr = []
            arr.push(data.message)
            dispatch(setCurrentMessages([...currentMessages, ...arr]))
          }
        }
      }

      if (data.command === 2) {
        const isDialogueInList = currentDialogues.some((dialogue) => dialogue.slug === data.group.slug)

        if (currentSlug === 'nonExistDialogue' && data.group.other_user.id === currentDialogueMember.id) {
          dispatch(setCurrentSlug(data.group.slug))
        }

        if (isDialogueInList) {
          dispatch(setDialoguesLastMessage(data))
        }

        if (currentSlug === data.group.slug || currentDialogueMember.id === data.group.other_user.id) {
          const arr = []
          arr.push(data.message)
          dispatch(setCurrentMessages([...currentMessages, ...arr]))
        }
      }

      if (data.command === 4) {
        const sortedMessagesByDate = data.result.sort((a: any, b: any) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          return new Date(b.updated_at) - new Date(a.updated_at)
        })

        dispatch(setCurrentPage(data.page))
        dispatch(setWholePages(data.num_pages))
        dispatch(setCurrentMessages(sortedMessagesByDate.reverse()))
        dispatch(setLoader(false))
      }

      if (data.command === 3) {
        dispatch(setDialogues(data.result))
      }

      if (data.command === 5) {
        dispatch(setGenChatMembers(data.result))
      }

      if (data.command === 11) {
        getGroups()
        dispatch(setDialogueUnreadedCount(data))
        dispatch(setLoader(false))
      }

      if (data.command === 19) {
        const withoutDeletedMessage = currentMessages.filter((msg: IMessageInterface) => msg.id !== data.message_pk)
        dispatch(setCurrentMessages(withoutDeletedMessage))
        getGroups()
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

  const sendLastReadedMessage = (messageId: number[], groupName: string) => {
    const dataToSend = {
      command: commands.messageRead,
      message_ids: messageId,
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

  const getGroups = () => {
    const dataToSend = {
      command: commands.getGroups,
    }

    send(dataToSend)
  }

  const getMembersGroup = (group: string) => {
    const dataToSend = {
      command: commands.getMembersGroup,
      group,
    }

    send(dataToSend)
  }

  const unreadMessageCount = (userId: number) => {
    const dataToSend = {
      command: commands.unreadMessageCount,
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
      command: commands.blockMember,
      user_pk: userId,
      group: groupName,
    }

    send(dataToSend)
  }

  const unblockUser = (userId: number, groupName: string) => {
    const dataToSend = {
      command: commands.unblockMember,
      user_pk: userId,
      group: groupName,
    }

    send(dataToSend)
  }

  return {
    sendGroupMessage,
    sendDialogueMessage,
    getMembersGroup,
    sendLastReadedMessage,
    getGroupMessages,
    unreadMessageCount,
    deleteMessage,
    blockUser,
    unblockUser,
  }
}
