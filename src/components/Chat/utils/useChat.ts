import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  setCurrentMessages,
  setDialogues,
  setGenChatMembers,
  setGeneralMessagesPage,
  setWholeGenMessagesPages,
  setContent,
} from '../redux/chatSlice'
import { ISendInterface } from './types'
import { useAppSelector } from './../../../app/redux/hooks'

const commands = {
  sendGroupMessage: 1, // пока что только в общий чат
  joinGroup: 2,
  sendDialogueMessage: 3, // чаты 1 на 1
  getGroupMessages: 4, // пока что только группы
  getGroupsList: 5, // пока что только группы
  // еще есть IS_TYPING, MESSAGE_READ
  sendLastReadedMessage: 9,
}

let socket: WebSocket = null

export const useChat = () => {
  const dispatch = useDispatch()

  const tokenObj = { ...JSON.parse(localStorage.getItem('jwtToken')) }
  const token = tokenObj.access

  const currentMessages = useAppSelector((state) => state.chat.currentMessages)
  // const currentGenMessagesPage = useAppSelector((state) => state.chat.currentGenMessagesPage)

  useEffect(() => {
    if (!socket) {
      socket = new WebSocket(`ws://217.28.228.152:9005/ws/chat/?token=${token}`)
      // socket = new WebSocket(`ws://87c4-37-52-131-48.ngrok.io/ws/chat/?token=${token}`)
      console.log(socket)

      socket.onopen = () => {
        dispatch(setContent(''))
      }

      socket.onerror = () => {
        dispatch(setContent('error'))
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
          dispatch(setGenChatMembers(data.groups[0].members))
          dispatch(setDialogues(data.groups))
        }
      }

      if (data.groups && data.groups?.length === 0) {
        dispatch(setContent('no-content'))
      } else {
        if (data.groups) {
          dispatch(setGenChatMembers(data.groups[0].members))
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

      if (data.command === 5) {
        dispatch(setDialogues(data.result))
      }

      if (data.command === 4) {
        dispatch(setCurrentMessages([...data.result.reverse(), ...currentMessages]))
        dispatch(setGeneralMessagesPage(data.page))
        dispatch(setWholeGenMessagesPages(data.num_pages))
      }
    }
  }

  const send = (data: ISendInterface) => {
    // console.log('sent', data)
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

  return { sendGroupMessage, joinGroup, sendDialogueMessage, sendLastReadedMessage, getGroupMessages, getGroupsList }
}
