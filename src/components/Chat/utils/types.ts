/* eslint-disable camelcase */
// TODO: удалить этот интерфейс, он неверный
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
    email: string
    id: number
    phone: string
  }
}

export interface IMessageInterface {
  created_at: string
  group: number
  id: number
  is_edited: boolean
  message: string
  msg_type: number
  update_at: string
  user: number
}

export interface IDialogueInterface {
  created_at: string
  description: string
  group_type: number
  last_message: IMessageInterface
  members: IMemberInterface[]
  name: string
  owner: number
  slug: string
  unread_count: number
}
