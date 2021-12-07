// import { socket } from '../index'
import { ISendInterface } from './types'

const commands = {
  sendGroupMessage: 1, // пока что только в общий чат
  joinGroup: 2,
  sendDialogueMessage: 3, // чаты 1 на 1
  getGroupMessages: 4, // пока что только группы
  getGroupsList: 5, // пока что только группы
}

export const send = (data: ISendInterface) => {
  console.log(data)
  // socket.send(JSON.stringify(data))
}

export const sendGroupMessage = (groupName: string, message: string) => {
  const dataToSend = {
    command: commands.sendGroupMessage,
    group: groupName,
    message,
  }

  send(dataToSend)
}

export const joinGroup = (groupName: string) => {
  const dataToSend = {
    command: commands.joinGroup,
    group: groupName,
  }

  send(dataToSend)
}

export const sendDialogueMessage = (recipient: string, message: string) => {
  const dataToSend = {
    command: commands.sendDialogueMessage,
    recipient,
    message,
  }

  send(dataToSend)
}

export const getGroupMessages = (groupName: string, page: number) => {
  const dataToSend = {
    command: commands.getGroupMessages,
    group: groupName,
    page,
  }

  send(dataToSend)
}

export const getGroupsList = (page: number) => {
  const dataToSend = {
    command: commands.getGroupsList,
    page,
  }

  send(dataToSend)
}

export const getMonthAndDay = (date: string) => {
  const msgDate = new Date(date)

  let day = String(msgDate.getDate())
  let month = String(msgDate.getMonth() + 1)

  if (day.length === 1) {
    day = '0' + day
  }

  if (day.length === 1) {
    month = '0' + month
  }

  return `${day}.${month}`
}

export const getHoursAndMinutes = (date: string) => {
  const msgDate = new Date(date)

  let hours = String(msgDate.getHours())
  let minutes = String(msgDate.getMinutes())

  if (hours.length === 1) {
    hours = '0' + hours
  }

  if (minutes.length === 1) {
    minutes = '0' + minutes
  }

  return `${hours}.${minutes}`
}

export const getYear = (date: string) => {
  const year = String(new Date(date).getFullYear())
  return year
}
