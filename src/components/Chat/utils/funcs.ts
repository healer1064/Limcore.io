import { IUserInterface } from './types'

export const getMonthAndDay = (date: string) => {
  const msgDate = new Date(date)

  let day = String(msgDate.getDate())
  let month = String(msgDate.getMonth() + 1)

  if (day.length === 1) {
    day = '0' + day
  }

  if (month.length === 1) {
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

export const getMonthNameWithDate = (date: string) => {
  const msgDate = new Date(date)

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const monthName = monthNames[msgDate.getMonth()]
  let day = String(msgDate.getDate())

  if (day.length === 1) {
    day = '0' + day
  }

  return `${day} ${monthName}`
}

export const getUserName = (user: IUserInterface): string => {
  if (user.chat_name) {
    return user.chat_name
  } else if (user.first_name && user.last_name) {
    return `${user.first_name} ${user.last_name[0]}.`
  } else if (user.first_name || user.last_name) {
    return user.first_name || user.last_name
  } else {
    return `User #${user.id}`
  }
}
