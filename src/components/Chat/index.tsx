import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { FooterMobile } from '@components/Footer/FooterMobile'
import { SearchForm } from '@components/Chat/components/SearchForm'
import { Message } from '@components/Chat/components/Message'
import { useTranslation } from 'react-i18next'
import close from '@icons/greyClose.svg'
import useWindowSize from '../../helpers/useWindowSizeHook'
import { Spinner } from '@components/Spinner'
import { nanoid } from '@reduxjs/toolkit'
import limcoreIcon from '@icons/limcore.svg'
import { IGroupInterface, IMemberInterface } from './utils/types'
import { getHoursAndMinutes, getMonthAndDay, getYear } from './utils/chat'

export let socket = null

export const Chat = ({ handleChatClose }) => {
  const [t] = useTranslation()
  const { width } = useWindowSize()

  const [groups, setGroups] = useState([])
  const [participants, setParticipants] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const tokenObj = { ...JSON.parse(localStorage.getItem('jwtToken')) }
  const token = tokenObj.access
  const desktop = width >= 769

  socket = new WebSocket(`ws://217.28.228.152:9005/ws/chat/?token=${token}`)

  useEffect(() => {
    if (groups.length === 0) {
      socket.onmessage = (event: MessageEvent) => {
        const data = JSON.parse(event.data)
        const groupsArr = []
        const participantsArr = []
        console.log(data.groups[0])

        data.groups.map((group: any) => {
          let groupName = group.name
          if (group.name === 'General chat') {
            groupName = 'Mining Data Centre Limcore'
          }

          const groupObj: IGroupInterface = {
            id: nanoid(),
            image: limcoreIcon,
            name: groupName,
            slug: group.slug,
            message: group.last_message.message,
            date: getMonthAndDay(group.last_message.created_at),
            time: getHoursAndMinutes(group.last_message.created_at),
            year: getYear(group.last_message.created_at),
            unreadMessages: group.unread_count,
          }
          groupsArr.push(groupObj)

          // Participants
          group.members.map((member: IMemberInterface) => {
            const participantObj = {
              id: member.user.id,
              foto: member.user.avatar,
              name: `${member.user.first_name} ${member.user.last_name}`,
            }
            participantsArr.push(participantObj)
          })
        })

        setParticipants(participantsArr)
        setGroups(groupsArr)
        setIsLoading(false)
      }
    }
  }, [])

  return desktop ? (
    <section className={styles.desktop}>
      <div className={styles.chat}>
        <div className={styles.header}>
          <h1 className={styles.title}>{t('chat_title')}</h1>
          <button className={styles.button} type='button' onClick={handleChatClose}>
            <img src={close} alt='' />
          </button>
        </div>
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
  ) : (
    <div className={styles.chat}>
      <SearchForm desktop={desktop} />
      <article className={styles.messageSection}>
        {groups.map((message) => (
          <Message key={message.id} {...message} message={message} participants={participants} />
        ))}
      </article>
      <FooterMobile />
    </div>
  )
}
