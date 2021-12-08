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
  group: number | null
  id: number
  is_edited: boolean
  message: string
  msg_type: number
  update_at: string
  user: IUserInterface
}

export interface IDialogueInterface {
  created_at: string
  last_message: IMessageInterface
  unread_count: number
  other_user?: IUserInterface
  description?: string
  group_type?: number
  members?: IMemberInterface[]
  name?: string
  owner?: number
  slug?: string
}

export interface IUserInterface {
  email: string
  id: number
  phone: string
}
