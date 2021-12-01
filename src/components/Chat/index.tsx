import React from 'react'
import styles from './styles.module.scss'
import { FooterMobile } from '@components/Footer/FooterMobile'
import { SearchForm } from '@components/Chat/components/SearchForm'
import { Message } from '@components/Chat/components/Message'
import { useTranslation } from 'react-i18next'
import fotoExample from '@icons/supportFotoExample.svg'
import limc from '@icons/limcBig.svg'
import grey from '@icons/raitingGrey.svg'
import fotoPart1 from '@icons/groupPart1.svg'
import purple from '@icons/raitingPurple.svg'
import fotoPart2 from '@icons/groupPart2.svg'
import orange from '@icons/raitingOrange.svg'
import close from '@icons/greyClose.svg'
import useWindowSize from '../../helpers/useWindowSizeHook'

export const Chat = ({ handleChatClose }) => {
  const [t] = useTranslation()
  const { width } = useWindowSize()
  const desktop = width >= 769
  const messages = [
    {
      id: 1,
      name: 'Поддержка',
      message: 'Привет! Здесь вы можете задать вопросы по операциям и услугам нашего сервиса.',
      date: 11.08,
      image: fotoExample,
      status: 'В сети',
      unreadMessages: 0,
      owner: true,
      group: false,
    },
    {
      id: 2,
      name: 'Mining Data Centre Limcore',
      message: 'Привет всем! Что думаете...',
      date: 11.08,
      image: limc,
      status: 'Не в сети',
      unreadMessages: 0,
      owner: false,
      group: true,
      numberOfParticipants: 70,
    },
  ]

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
        <article className={styles.messageSection}>
          {messages.map((message) => (
            <Message key={message.id} {...message} message={message} participants={participants} />
          ))}
        </article>
        <FooterMobile />
      </div>
    </section>
  ) : (
    <div className={styles.chat}>
      <SearchForm desktop={desktop} />
      <article className={styles.messageSection}>
        {messages.map((message) => (
          <Message key={message.id} {...message} message={message} participants={participants} />
        ))}
      </article>
      <FooterMobile />
    </div>
  )
}
