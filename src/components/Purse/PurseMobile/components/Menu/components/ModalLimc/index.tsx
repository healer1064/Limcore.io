import React from 'react'
import styles from './styles.module.scss'
import { Modal } from '@components/Modal'
import { ModalHeader } from '@components/Modal/ModalHeader'
import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig'
import limcoreIcon from '@icons/limcore.svg'
import buyIcon from '@icons/buy.svg'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'

export const ModalLimc = ({ isActive, onClose, balance }) => {
  const [t] = useTranslation()
  const history = useHistory()

  return (
    <Modal active={isActive} classname={styles.balanceModal} setActive={onClose} isMobile>
      <ModalHeader title='LIMC' onClick={onClose} crossFlag />
      <div className={styles.balanceBlock}>
        <div className={styles.block}>
          <div className={styles.line}>
            <img src={limcoreIcon} alt='' />
            <span className={styles.title}>{balance} LIMC</span>
          </div>
          <span className={styles.usd}>{}</span>
          <ButtonBig className={styles.buyBtn}>
            <a href='https://round1.limcore.io' className={styles.buyLink}>
              <img className={styles.icon} src={buyIcon} alt='' />
              {t('buy')}
            </a>
          </ButtonBig>
          <div className={styles.container}>
            <span className={styles.desc}>{t('purse_fillToRestore')}</span>
            <span className={styles.desc}>{t('lockUp')}</span>
          </div>
          <div className={styles.nextCont}>
            <button className={styles.next} onClick={() => history.push('/profile')}>
              {t('purse_goFilling')}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}
