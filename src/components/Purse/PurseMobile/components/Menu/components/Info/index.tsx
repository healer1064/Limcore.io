import React from 'react'
import styles from './styles.module.scss'
import { Modal } from '../../../Modal/index'
import { ModalHeader } from '../../../ModalHeader'
import { LimcButtons } from './components/LimcButtons/index'
import { UsdtButtons } from './components/UsdtButtons/index'
import { CardButtons } from './components/CardButtons/index'
import { UserHasTransactions } from '../../../Transactions/components/UserHasTransactions'
import { balanceUsdt, balanceLimc, s7, pyaterochka } from '@components/Purse/PurseMobile/images'

export const Info = ({ active, setActive, title, setNotActive, image, balance }) => {
  let type = null
  if (title.includes('LIMC')) {
    type = 'LIMC'
  } else if (title.includes('USDT')) {
    type = 'USDT'
  } else {
    type = 'CARD'
  }

  let tempInfo = null
  // Изменение данных в зависимости от типа, когда будет ясен бэк, надо сделать по-человечески
  if (type === 'LIMC') {
    tempInfo = [
      {
        date: 'Вчера',
        data: [
          { img: balanceLimc, title: 'LIMC', sum: '+120 LIMC', isSwitch: false },
          { img: s7, title: 'S7 Airlines', sum: '−$3240', cardInfo: 'c карты *2774', isSwitch: false },
          {
            img: balanceLimc,
            title: 'LIMC',
            sum: '−$324',
            cardInfo: '−120 LIMC',
            isSwitch: true,
            img2: balanceUsdt,
            title2: 'USDT',
          },
        ],
      },
      {
        date: '12 сентября, пн',
        data: [
          { img: s7, title: 'S7 Airlines', sum: '+$3240', cardInfo: 'c карты *2774', isSwitch: false },
          {
            img: balanceLimc,
            title: 'LIMC',
            sum: '−$324',
            cardInfo: '−120 LIMC',
            isSwitch: true,
            img2: balanceUsdt,
            title2: 'USDT',
          },
          { img: balanceLimc, title: 'LIMC', sum: '-1220 LIMC', isSwitch: false },
        ],
      },
    ]
  } else if (type === 'USDT') {
    tempInfo = [
      {
        date: 'Вчера',
        data: [
          { img: s7, title: 'S7 Airlines', sum: '−$3240', cardInfo: 'c карты *2774', isSwitch: false },
          { img: balanceLimc, title: 'LIMC', sum: '+120 LIMC', isSwitch: false },
        ],
      },
      {
        date: '12 сентября, пн',
        data: [
          {
            img: balanceLimc,
            title: 'LIMC',
            sum: '−$324',
            cardInfo: '−120 LIMC',
            isSwitch: true,
            img2: balanceUsdt,
            title2: 'USDT',
          },
          { img: balanceLimc, title: 'LIMC', sum: '-1220 LIMC', isSwitch: false },
          { img: s7, title: 'S7 Airlines', sum: '+$3240', cardInfo: 'c карты *2774', isSwitch: false },
        ],
      },
    ]
  } else {
    tempInfo = [
      {
        date: 'Вчера',
        data: [
          { img: pyaterochka, title: 'Пятерочка', sum: '−$24', isSwitch: false },
          { img: balanceUsdt, title: 'USDT', sum: '-$1200', isSwitch: false },
        ],
      },
      {
        date: '12 сентября, пн',
        data: [
          { img: balanceUsdt, title: 'USDT', sum: '+$1200', isSwitch: false },
          { img: s7, title: 'S7 Airlines', sum: '-$324', isSwitch: false },
          { img: balanceUsdt, title: 'USDT', sum: '-$1200', isSwitch: false },
          { img: pyaterochka, title: 'Пятерочка', sum: '−$24', isSwitch: false },
          { img: balanceUsdt, title: 'USDT', sum: '-$1200', isSwitch: false },
        ],
      },
    ]
  }

  return (
    <Modal active={active} setActive={setActive} style={{ overflow: 'auto' }}>
      <div className={styles.info}>
        <ModalHeader title={title} onClick={setNotActive} />
        <div className={styles.header}>
          <div className={styles.headerInner}>
            <span className={styles.headerLogo}>
              <img src={image} />
            </span>
            <h2 className={styles.headerTitle}>{balance}</h2>
          </div>
          {type !== 'CARD' && <p className={styles.headerSubtitle}>$0</p>}
        </div>
        {type === 'LIMC' && <LimcButtons />}
        {type === 'USDT' && <UsdtButtons />}
        {type === 'CARD' && <CardButtons />}

        <h4 className={styles.transactions}>Транзакции</h4>
        <h4 className={styles.transactions}>{tempInfo[0].date}</h4>
        <UserHasTransactions data={tempInfo[0].data} />
        <h4 className={styles.transactions}>{tempInfo[1].date}</h4>
        <UserHasTransactions data={tempInfo[1].data} />
      </div>
    </Modal>
  )
}
