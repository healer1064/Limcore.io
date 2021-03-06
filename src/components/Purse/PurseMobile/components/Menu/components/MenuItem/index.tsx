import React from 'react'
import styles from './styles.module.scss'
import BlueArrow from '../../../../images/BlueArrow/BlueArrow'
import { ShouldSinc } from '../../../Balance/Icons/ShouldSinc'
import { useAppSelector } from '@app/redux/hooks'
import lockIcon from '@icons/lock-me.svg'
import { ModalLimc } from '../ModalLimc'
import { ModalUsdt } from '../ModalUsdt'
import { changeViewContent } from '../../../../../../../pages/cabinet/redux/cabinetSlice'
import { useDispatch } from 'react-redux'
import { balanceLimc, balanceUsdt } from '@components/Purse/PurseDesktop/images'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

export const MenuItem = ({ type }) => {
  const [t] = useTranslation()
  const dispatch = useDispatch()

  const isSinc = useAppSelector((state) => state.auth.isSincWithWallet)
  const viewContent = useAppSelector((state) => state.cabinet.viewContent)

  const limcBalance = useAppSelector((state) => state.auth.walletConnectLimc)
  const usdtBalance = useAppSelector((state) => state.auth.walletConnectUsdt)
  const profileComplete = useAppSelector((state) => state.cabinet.profileComplete)

  const openLimc = () => dispatch(changeViewContent('LIMC'))
  const openUsdt = () => dispatch(changeViewContent('USDT'))
  const closePopup = () => dispatch(changeViewContent(''))

  switch (type) {
    case 'limc':
      return (
        <button
          type='button'
          className={classNames(styles.menu__item, styles.menu__balance)}
          onClick={isSinc ? openLimc : () => {}}
        >
          <span className={styles.menu__icon}>{isSinc ? <BlueArrow /> : <ShouldSinc />}</span>
          <img src={balanceLimc} width='40' height='40' className={styles.menu__img} alt='icon' />
          <h5 className={styles.menu__title}>{t('balance')} LIMC</h5>

          {isSinc ? (
            <div className={styles.row}>
              <span>{limcBalance} LIMC</span>
              <img src={lockIcon} alt='Lock' />
            </div>
          ) : (
            <p className={styles.menu__sum}>{t('purse_needSync')}</p>
          )}

          <ModalLimc
            profileComplete={profileComplete}
            balance={limcBalance}
            isActive={viewContent === 'LIMC'}
            onClose={closePopup}
          />
        </button>
      )
    case 'usdt':
      return (
        <button
          type='button'
          className={classNames(styles.menu__item, styles.menu__balance)}
          onClick={isSinc ? openUsdt : () => {}}
        >
          <span className={styles.menu__icon}>{isSinc ? <BlueArrow /> : <ShouldSinc />}</span>
          <img src={balanceUsdt} width='40' height='40' className={styles.menu__img} alt='icon' />
          <h5 className={styles.menu__title}>{t('balance')} USDT</h5>

          {isSinc ? (
            <div className={styles.row}>
              <span>{usdtBalance} USDT</span>
            </div>
          ) : (
            <p className={styles.menu__sum}>{t('purse_needSync')}</p>
          )}

          <ModalUsdt balance={usdtBalance} isActive={viewContent === 'USDT'} onClose={closePopup} />
        </button>
      )
  }
}
