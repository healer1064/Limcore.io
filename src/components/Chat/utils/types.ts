/* eslint-disable camelcase */
export interface IGroupInterface {
  id: string | number
  name: string
  message: string
  date: string
  unreadMessages: number
  owner: boolean
  group: boolean

  image: any // TODO
  status?: string // TODO: boolean
  numberOfParticipants?: number

  // id: 2,
  // name: 'Mining Data Centre Limcore',
  // message: 'Привет всем! Что думаете...',
  // date: 11.08,
  // unreadMessages: 0,
  // owner: false,
  // group: true,

  // image: limc,
  // status: 'Не в сети',
  // numberOfParticipants: 70,
}

export interface ISendInterface {
  command: number
  group?: string
  message?: string
  page?: number
}
