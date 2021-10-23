import React from 'react'
import styles from './styles.module.scss'
import { Modal } from '../../../Modal/index'
import { ModalHeader } from '../../../ModalHeader'
import { LimcButtons } from './components/LimcButtons/index'
import { UsdtButtons } from './components/UsdtButtons/index'
import { Transactions } from './components/Transactions/index'

export const Info = ({ active, setActive, title, setNotActive, image, balance }) => {
  const type = title.includes('LIMC')

  // Надо добавить в меню карточку баланса и тут с тайпом придумать что-нибудь дабы понять что это баланс
  return (
    <Modal active={active} setActive={setActive}>
      <div className={styles.info}>
        <ModalHeader title={title} onClick={setNotActive} />
        <div className={styles.header}>
          <div className={styles.headerInner}>
            <span className={styles.headerLogo}>
              <img src={image} />
            </span>
            <h2 className={styles.headerTitle}>{balance}</h2>
          </div>
          <p className={styles.headerSubtitle}>$18,884</p>
        </div>
        {/* Для списка транзакция нужно будет создать массив, который типа пришел с бэка, создать компонент и туда мапом прокидывать нужные свойства */}
        {type ? <LimcButtons /> : <UsdtButtons />}

        <h4 className={styles.transactions}>Транзакции</h4>
        <h4 className={styles.transactions}>Вчера</h4>

        <Transactions />
      </div>
    </Modal>
  )
}
