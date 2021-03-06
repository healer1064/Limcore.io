import React, { useState } from 'react'
import styles from './styles.module.scss'
import defaultAvatar from '@icons/defaultAvatar.svg'
import { getUserName } from '@components/Chat/utils/funcs'
import { IMessageInterface, IUserInterface } from '@components/Chat/utils/types'
import { LimcRating } from '../LimcRating'
import active from '@icons/activeStatus.svg'
import { useAppSelector } from '@app/redux/hooks'
import classNames from 'classnames'
import { Message } from './components/Message'
import { AboutMeModal } from './components/AboutMeModal/AboutMeModal'
import supportImage from '@images/support.png'

interface IMessageComponent {
  user: IUserInterface
  message: IMessageInterface
  isMyMsg: boolean
  date: string
  firstMessage: boolean
  openRating: (event: React.SyntheticEvent) => void
  openMenu: (event: React.SyntheticEvent) => void
}

export const MessageComponent = ({
  user,
  message,
  isMyMsg,
  date,
  firstMessage,
  openRating,
  openMenu,
}: IMessageComponent) => {
  const currentSlug = useAppSelector((state) => state.chat.currentSlug)
  const [aboutModal, setAboutModal] = useState(false)

  const IS_SUPPORT = currentSlug.includes('support')
  const IS_GENERAL_CHAT = currentSlug === 'general_chat'
  const toShowRaiting = Boolean(user.limc_balance)

  let avatar = null
  const notSupportAvatar = user.avatar ? user.avatar : defaultAvatar
  IS_SUPPORT ? (avatar = supportImage) : (avatar = notSupportAvatar)

  const isDateAbove = date ? classNames(styles.member, styles.firstMessageMember) : styles.member
  const userName = isMyMsg ? '' : getUserName(user)

  const openAboutModal = () => setAboutModal(true)
  const closeAboutModal = () => setAboutModal(false)

  return firstMessage ? (
    <>
      {date && <div className={styles.date}>{date}</div>}
      <div className={isDateAbove}>
        {isMyMsg ? (
          <Message message={message} openMenu={openMenu} isMyMsg />
        ) : (
          <>
            {aboutModal && IS_GENERAL_CHAT && (
              <AboutMeModal user={user} closeModal={closeAboutModal} avatar={avatar} username={userName} />
            )}
            <button onClick={openAboutModal}>
              <img src={avatar} alt='avatar' className={styles.foto} />
            </button>
            {user.status === 1 && <img alt='status' src={active} className={styles.status} />}

            <Message message={message} openMenu={openMenu}>
              {currentSlug === 'general_chat' && (
                <>
                  <span className={styles.member_name}>{userName}</span>
                  <span className={styles.raiting} onClick={openRating}>
                    {toShowRaiting && <LimcRating limcBalance={Math.floor(Number(user.limc_balance))} />}
                  </span>
                </>
              )}
            </Message>
          </>
        )}
      </div>
    </>
  ) : (
    <>
      {date && <div className={styles.date}>{date}</div>}
      <div className={classNames(styles.member, styles.firstMessageMember)}>
        {isMyMsg ? (
          <Message message={message} openMenu={openMenu} isMyMsg />
        ) : (
          <Message message={message} openMenu={openMenu} notFirstMessage />
        )}
      </div>
    </>
  )
}
