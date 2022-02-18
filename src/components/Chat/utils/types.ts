/* eslint-disable camelcase */
export type TVisibleContent = '' | 'loading' | 'error' | 'content' | 'no-content'

export interface ISendInterface {
  command: number
  group?: string
  message?: string | number
  page?: number
}

export interface IMemberInterface {
  is_blocked: boolean
  role: number
  user: IUserInterface
}

export interface IMessageInterface {
  created_at: string
  group: number | null
  id: number
  is_edited: boolean
  is_read: boolean
  message: string
  msg_type: number
  updated_at: string
  user: IUserInterface
  files?: any[]
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
  settings?: {
    role: number
  }
}

export interface IUserInterface {
  // limc_balance: number
  avatar?: string
  chat_name?: string
  email: string
  first_name?: string
  gender?: string
  id: number
  last_name?: string
  middle_name?: string
  about_me?: string
  phone: string
  status: number
  limc_balance: number | string
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

export interface ISendMessage {
  command: number
  group?: string
  recipient?: string
  message?: string
  // eslint-disable-next-line camelcase
  files_pk?: number[]
}
