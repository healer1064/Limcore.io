import React from 'react'

import styles from './styles.module.scss'
import { Coin } from './../../mockData'
import { Modal } from '@components/Modal'
import useWindowSize from '@helpers/useWindowSizeHook'
import copyIcon from '@icons/copySquareIcon.svg'
import plusYellowIcon from '@icons/plusYellowIcon.svg'
import outPurseYellowIcon from '@icons/outPurseYellowIcon.svg'

interface ForkModalProps {
  onClickClose: () => unknown
  modalOpened: boolean
  purseConnect: boolean
  fork: Coin
}

export const ForkModal: React.FC<ForkModalProps> = ({ onClickClose, fork, modalOpened, purseConnect }) => {
  const { width } = useWindowSize()

  const isMobile = width <= 768

  return (
    <Modal
      classname={styles.modalClass}
      active={modalOpened}
      setActive={onClickClose}
      isDesktop={!isMobile}
      isMobile={isMobile}
      crossFlag
    >
      <div className={styles.modal__container}>
        <h3>{fork?.name}</h3>
        <div className={styles.modal__asset}>
          <img src={fork?.icon} alt='fork icon' />
          {fork?.name}
          <span>{fork?.suffix}</span>
        </div>
        <div className={styles.modal__greenCaption}>
          <p>Баланс</p>
          {fork?.balance}
        </div>
        <div className={styles.modal__greenCaption} style={{ margin: purseConnect ? '0 0 16px 0' : '0 0 42px 0' }}>
          <p>Стоимость</p>${fork?.cost}
        </div>
        {purseConnect && (
          <div className={styles.modal__purse}>
            <p>Адрес кошелька</p>
            <div>
              <a href='#'>qp8r78kv2rrctgsdmknvvmt0rjs8szjcmvcsge5pz8</a>
              <img src={copyIcon} alt='copy' />
            </div>
            <p>AllTheBlocks &#129125;</p>
          </div>
        )}
        <div className={styles.modal__actions}>
          <p>Действия</p>
          <button>
            <img src={plusYellowIcon} alt='plusYellowIcon' />
            Привязать внешний кошелек
          </button>
          <button>
            <img src={outPurseYellowIcon} alt='outPurseYellowIcon' />
            Вывести на сторонний кошелек
          </button>
        </div>
      </div>
    </Modal>
  )
}
