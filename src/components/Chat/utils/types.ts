/* eslint-disable camelcase */
export interface ISendInterface {
  command: number
  group?: string
  message?: string
  page?: number
}

export interface IMemberInterface {
  join: string
  role: number

  user: IUserInterface
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
  other_user?: IUserInterface
}

export interface IUserInterface {
  email: string
  id: number
  phone: string
}
