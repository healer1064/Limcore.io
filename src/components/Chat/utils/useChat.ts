import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setMessages, setIsLoading, setDialogues } from '../redux/chatSlice'
import { ISendInterface } from './types'

const commands = {
  sendGroupMessage: 1, // пока что только в общий чат
  joinGroup: 2,
  sendDialogueMessage: 3, // чаты 1 на 1
  getGroupMessages: 4, // пока что только группы
  getGroupsList: 5, // пока что только группы
  // еще есть IS_TYPING, MESSAGE_READ
}

let socket: WebSocket = null

export const useChat = () => {
  const dispatch = useDispatch()

  const tokenObj = { ...JSON.parse(localStorage.getItem('jwtToken')) }
  const token = tokenObj.access

  useEffect(() => {
    if (!socket) {
      socket = new WebSocket(`ws://217.28.228.152:9005/ws/chat/?token=${token}`)
      console.log(socket)

      socket.onopen = () => {
        dispatch(setIsLoading(false))
      }
    }
  }, [])

  if (socket) {
    socket.onmessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data)
      console.log(data)

      if (data.groups) {
        dispatch(setDialogues([...data.groups, ...data.dialogs]))
      }

      if (data.command === 4) {
        dispatch(setMessages(data.result))
      }

      dispatch(setIsLoading(false))
    }
  }

  const send = (data: ISendInterface) => {
    console.log(data)
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

  return { sendGroupMessage, joinGroup, sendDialogueMessage, getGroupMessages, getGroupsList }
}
