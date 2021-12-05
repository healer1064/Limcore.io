import React from 'react'
import styles from './styles.module.scss'
import { balanceLimc, balanceUsdt } from '../../images'
import { MenuItem } from './components/MenuItem/index'
import { useAppSelector } from '@app/redux/hooks'
import { useTranslation } from 'react-i18next'
import { UnsyncIcon } from '@icons/unsync'

interface IMenuProps {
  openLimcBalance: () => any
  openUsdtBalance: () => any
  className: string
}

export const Menu = ({ openLimcBalance, openUsdtBalance, className }: IMenuProps) => {
  const [t] = useTranslation()

  const isSync = useAppSelector((state) => state.auth.isSincWithWallet)
  const limcBalance = useAppSelector((state) => state.auth.walletConnectLimc)
  const usdtBalance = useAppSelector((state) => state.auth.walletConnectUsdt)

  return (
    <ul className={className}>
      <h2 className={styles.name}>{t('purse_myAccounts')}</h2>
      <MenuItem
        openCard={openLimcBalance}
        image={balanceLimc}
        syncIcon={isSync ? null : <UnsyncIcon />}
        title='LIMC'
        balance={isSync ? `${limcBalance} LIMC` : t('purse_notSync')}
      />
      <MenuItem
        openCard={openUsdtBalance}
        image={balanceUsdt}
        syncIcon={isSync ? null : <UnsyncIcon />}
        title='USDT'
        balance={isSync ? `${usdtBalance} USDT` : t('purse_notSync')}
      />
    </ul>
  )
}
