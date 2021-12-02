import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { FooterMobile } from '@components/Footer/FooterMobile'
import { SearchForm } from '@components/Chat/components/SearchForm'
import { Message } from '@components/Chat/components/Message'
import { useTranslation } from 'react-i18next'
import fotoExample from '@icons/supportFotoExample.svg'
import grey from '@icons/raitingGrey.svg'
import fotoPart1 from '@icons/groupPart1.svg'
import purple from '@icons/raitingPurple.svg'
import fotoPart2 from '@icons/groupPart2.svg'
import orange from '@icons/raitingOrange.svg'
import close from '@icons/greyClose.svg'
import useWindowSize from '../../helpers/useWindowSizeHook'
import { Spinner } from '@components/Spinner'
import { nanoid } from '@reduxjs/toolkit'
import RUS from '../../assets/icons/flag-ru.svg'
import { IGroupInterface } from './utils/types'

export let socket = null

export const Chat = ({ handleChatClose }) => {
  const [t] = useTranslation()
  const { width } = useWindowSize()

  const [groups, setGroups] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const tokenObj = { ...JSON.parse(localStorage.getItem('jwtToken')) }
  const token = tokenObj.access
  const desktop = width >= 769

  socket = new WebSocket(`ws://217.28.228.152:9005/ws/chat/?token=${token}`)
  socket.onopen = () => {
    console.log('ON OPEN')
  }

  useEffect(() => {
    socket.onmessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data)
      console.log(data.groups)

      const arr = []

      data.groups.map((group: any) => {
        const msgDate = new Date(group.last_message.created_at)

        const obj: IGroupInterface = {
          id: nanoid(), // maybe TODO
          image: RUS, // TODO
          name: group.name,
          message: group.last_message.message,
          date: `${msgDate.getHours()}:${msgDate.getMinutes()}`,
          unreadMessages: group.unread_count,
          owner: false,
          group: false,
        }
        arr.push(obj)
      })

      setGroups(arr)
      setIsLoading(false)
    }
  }, [])

  const participants = [
    {
      id: 11,
      foto: fotoExample,
      message:
        'Доброго времени суток всем, не могу закончить регистрацию на сайте, так как сайт не принимает паспортные данные',
      raitingIcon: grey,
      score: 0,
      status: 'В сети',
      rank: 'Admin',
      name: 'Поддержка',
    },
    {
      id: 22,
      foto: fotoPart1,
      message: 'Кстати, за актуальными курсами форков можно следить на сайте https://xchforks.com',
      raitingIcon: purple,
      score: 49,
      status: 'Не в сети',
      rank: '',
      name: 'Анастасия Иванова',
    },
    {
      id: 33,
      foto: fotoPart2,
      message:
        'Chia громко заявила о себe в самом начале, и тот кто хотел и имел возможность, уже зашёл. Дальше стоит ожидать только крупных игроков, типо нас!',
      raitingIcon: orange,
      score: 987,
      status: 'Была в сети',
      rank: 'CEO Limcore.io',
      name: 'Дмитрий Шумаев',
    },
  ]

  return (
    <section className={!desktop ? styles.cont : styles.cont_desktop}>
      <div className={styles.chat}>
        {desktop ? (
          <div className={styles.header}>
            <h1 className={styles.title}>{t('chat_title')}</h1>
            <button className={styles.button} type='button' onClick={handleChatClose}>
              <img src={close} alt='' />
            </button>
          </div>
        ) : null}
        <SearchForm desktop={desktop} />
        <section className={styles.messageSection}>
          {isLoading && (
            <div className={styles.spinnerContainer}>
              <Spinner />
            </div>
          )}
          {groups.map((message) => (
            <Message key={message.id} {...message} message={message} participants={participants} />
          ))}
        </section>
        <FooterMobile />
      </div>
    </section>
  )
}
