import React from 'react'
import styles from './styles.module.scss'
import { FooterMobile } from '@components/Footer/FooterMobile'
import { SearchForm } from '@components/Chat/components/SearchForm'
import { Dialogue } from '@components/Chat/components/Dialogue'
import { useTranslation } from 'react-i18next'
import close from '@icons/greyClose.svg'
import useWindowSize from '../../helpers/useWindowSizeHook'
import { Spinner } from '@components/Spinner'
import { ButtonBig } from '../../ui-kit/ButtonBig'
import { useAppSelector } from '@app/redux/hooks'
import { useChat } from './utils/useChat'
import { GeneralChat } from './components/GeneralChat'
// import { PersonsChat } from './components/PersonsChat'
import { IDialogueInterface } from './utils/types'

export const Chat = ({ handleChatClose }) => {
  const [t] = useTranslation()
  const { width } = useWindowSize()
  const { joinGroup } = useChat()

  const desktop = width >= 769

  const dialogues = useAppSelector((state) => state.chat.dialogues)
  const content = useAppSelector((state) => state.chat.visibleContent)

  const onJoin = () => {
    joinGroup('general_chat')
    window.location.reload()
  }

  switch (content) {
    case 'loading':
      return (
        <div className={styles.spinnerContainer}>
          <Spinner />
        </div>
      )
    case 'error':
      return (
        <div className={styles.errorContainer}>
          <div className={styles.errorInner}>
            <p>Chat is not available now.</p>
            <p>Please try again later.</p>
          </div>
          <FooterMobile />
        </div>
      )
    case 'no-content':
      return (
        <div className={styles.errorContainer}>
          <div className={styles.joinChat}>
            <p className={styles.joinChat_title}>Вас еще нет в общем чате? Присоединяйтесь!</p>
            <ButtonBig onClick={onJoin}>Вступить в чат</ButtonBig>
          </div>
          <FooterMobile />
        </div>
      )
    case '':
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
              {dialogues?.map((dialogue: IDialogueInterface, i) => (
                <Dialogue key={i} data={dialogue} />
              ))}
            </section>
          </div>
        </section>
      ) : (
        <div className={styles.chat}>
          <SearchForm desktop={desktop} />
          <article className={styles.messageSection}>
            {dialogues?.map((dialogue: IDialogueInterface, i) => (
              <Dialogue key={i} data={dialogue} />
            ))}
          </article>
          <FooterMobile />
        </div>
      )
    // case 'persons':
    //   return <PersonsChat />
    case 'group':
      return <GeneralChat />
  }
}
