import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  setCurrentMessages,
  setDialogues,
  setDialogueUnreadedCount,
  setGenChatMembers,
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
  // еще есть IS_TYPING
}

let socket: WebSocket = null

export const useChat = () => {
  const dispatch = useDispatch()

  const tokenObj = { ...JSON.parse(localStorage.getItem('jwtToken')) }
  const token = tokenObj.access

  const currentMessages = useAppSelector((state) => state.chat.currentMessages)

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
        const arr = []
        arr.push(data.message)
        dispatch(setCurrentMessages([...currentMessages, ...arr]))

        // TODO захардкодил страницу с группами нужно поправить
        getGroupsList(1)
      }

      if (data.command === 3) {
        const arr = []
        arr.push(data.message)

        dispatch(setCurrentMessages([...currentMessages, ...arr]))
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
    }
  }

  const send = (data: ISendInterface) => {
    console.log('sent', data)
    socket.send(JSON.stringify(data))
  }

  const sendGroupMessage = (groupName: string, message: string) => {
    const dataToSend = {
      command: commands.sendGroupMessage,
      group: groupName,
      message,
    }

    send(dataToSend)
  }

  const joinGroup = (groupName: string) => {
    const dataToSend = {
      command: commands.joinGroup,
      group: groupName,
    }

    send(dataToSend)
  }

  const sendDialogueMessage = (recipient: string, message: string) => {
    console.log('sendDialogueMessage')
    const dataToSend = {
      command: commands.sendDialogueMessage,
      recipient,
      message,
    }

    send(dataToSend)
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
