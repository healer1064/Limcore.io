/* eslint-disable camelcase */
export type TVisibleContent = '' | 'loading' | 'error' | 'content' | 'no-content'

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
  file?: any[]
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
  avatar?: string
  chat_name?: string
  email: string
  first_name?: string
  gender?: string
  id: number
  last_name?: string
  middle_name?: string
  phone: string
  status: string
}

export interface IFileInterface {
  created_at: string
  duration: number
  file: string
  filename: string
  id: number
  size: number
  type: number
}
