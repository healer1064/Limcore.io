import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from '@components/Chat/components/Group/styles.module.scss'
import { InputText } from '../../../../ui-kit/InputText'
import fotoExample from '@icons/supportFotoExample.svg'
import grey from '@icons/raitingGrey.svg'
import fotoPart1 from '@icons/groupPart1.svg'
import purple from '@icons/raitingPurple.svg'
import fotoPart2 from '@icons/groupPart2.svg'
import orange from '@icons/raitingOrange.svg'
import { Message } from '@components/Chat/components/Message'
import { GroupText } from '../GroupText'

export const Group = ({ groupVisible, handleGroupClose, message }) => {
  const [t] = useTranslation()
  const [sendIconVisible, setSendIconVisible] = useState(false)

  const handleSendIconVisibility = () => {
    setSendIconVisible(true)
  }

  const participants = [
    {
      id: 1,
      foto: fotoExample,
      message:
        'Доброго времени суток всем, не могу закончить регистрацию на сайте, так как сайт не принимает паспортные данные',
      raitingIcon: grey,
      score: 0,
    },
    {
      id: 2,
      foto: fotoPart1,
      message: 'Кстати, за актуальными курсами форков можно следить на сайте https://xchforks.com',
      raitingIcon: purple,
      score: 49,
    },
    {
      id: 3,
      foto: fotoPart2,
      message:
        'Chia громко заявила о себe в самом начале, и тот кто хотел и имел возможность, уже зашёл. Дальше стоит ожидать только крупных игроков, типо нас!',
      raitingIcon: orange,
      score: 987,
    },
  ]

  return (
    <section className={groupVisible ? styles.groupContainer : styles.groupContainer_invisible}>
      <article className={styles.groupHeader}>
        <svg
          className={styles.arrow}
          onClick={handleGroupClose}
          width='10'
          height='17'
          viewBox='0 0 10 17'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M8.26758 15.0282L1.50701 8.26764L8.26758 1.50708'
            stroke='#4A70F8'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <img src={message.image} alt='' className={styles.foto} />
        <p className={styles.name}>{message.name}</p>
        <p className={styles.status}>{`${message.numberOfParticipants} ${t('group_number')}`}</p>
      </article>
      {participants.map((member) => (
        <GroupText key={member.id} {...member} member={member} />
      ))}
      <div className={styles.inputContainer}>
        <button className={styles.button} type='button'>
          <svg
            className={styles.clip}
            width='23'
            height='26'
            viewBox='0 0 23 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M15.7493 7.375L5.98667 17.2998C5.63504 17.6514 5.4375 18.1283 5.4375 18.6256C5.4375 19.1229 5.63504 19.5998 5.98667 19.9514C6.33831 20.303 6.81522 20.5006 7.3125 20.5006C7.80978 20.5006 8.2867 20.303 8.63833 19.9514L20.276 8.15165C20.6242 7.80343 20.9004 7.39003 21.0889 6.93506C21.2773 6.48009 21.3743 5.99246 21.3743 5.5C21.3743 5.00754 21.2773 4.51991 21.0889 4.06494C20.9004 3.60997 20.6242 3.19657 20.276 2.84835C19.9277 2.50013 19.5143 2.22391 19.0594 2.03545C18.6044 1.847 18.1168 1.75 17.6243 1.75C17.1319 1.75 16.6442 1.847 16.1892 2.03545C15.7343 2.22391 15.3209 2.50013 14.9727 2.84835L3.33502 14.6481C2.28013 15.703 1.6875 17.1337 1.6875 18.6256C1.6875 20.1174 2.28013 21.5482 3.33502 22.6031C4.38992 23.6579 5.82066 24.2506 7.3125 24.2506C8.80434 24.2506 10.2351 23.6579 11.29 22.6031L20.9056 13'
              stroke='#4A70F8'
              strokeWidth='1.8'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
        <InputText
          className={styles.inputText}
          placeholder='Сообщение'
          onChange={handleSendIconVisibility}
          type='textarea'
        />
        <button className={styles.button} type='submit'>
          <svg
            className={sendIconVisible ? styles.sendIcon : styles.sendIcon_invisible}
            width='40'
            height='40'
            viewBox='0 0 40 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='20' cy='20' r='20' fill='#4A70F8' />
            <path
              d='M20 11L23.5 14.5425M20 11L16.5 14.5425M20 11L20 29'
              stroke='white'
              strokeWidth='1.8'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </div>
    </section>
  )
}
