/* eslint-disable camelcase */
export interface IGroupInterface {
  id: string | number
  name: string
  slug: string
  message: string
  date: string
  time: string
  year: string
  unreadMessages: number

  image: any // TODO
  status?: string // TODO: boolean
  numberOfParticipants?: number
}

export interface ISendInterface {
  command: number
  group?: string
  message?: string
  page?: number
}

export interface IMemberInterface {
  join: string
  role: number

  user: {
    avatar: any
    chat_name: string | null
    email: string
    first_name: string
    gender: string | null
    id: number
    last_name: string
    middle_name: string
    phone: string
  }
}
