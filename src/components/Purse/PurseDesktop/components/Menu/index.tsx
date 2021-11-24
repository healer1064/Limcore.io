import React from 'react'
import styles from './styles.module.scss'
import { balanceLimc, balanceUsdt } from '../../images'
import { MenuItem } from './components/MenuItem/index'
import { useAppSelector } from '@app/redux/hooks'
import { useTranslation } from 'react-i18next'

export const Menu = ({
  handleBalanceUsdtOpenClick,
  handlePageBalanceLIMCOpenClick,
  handlePageBalanceUSDTOpenClick,
  handlePageBalanceLIMCCloseClick,
  handlePageBalanceUSDTCloseClick,
  handlePageCardBalanceCloseClick,
}) => {
  const [t] = useTranslation()
  const isSync = useAppSelector((state) => state.auth.isSincWithWallet)
  const limcBalance = useAppSelector((state) => state.auth.walletConnectLimc)
  const usdtBalance = useAppSelector((state) => state.auth.walletConnectUsdt)

  const handleLIMCBalance = () => {
    handlePageBalanceLIMCOpenClick()
    handlePageBalanceUSDTCloseClick()
    handlePageCardBalanceCloseClick()
  }

  const handleUSDTBalance = () => {
    handlePageBalanceUSDTOpenClick()
    handlePageBalanceLIMCCloseClick()
    handlePageCardBalanceCloseClick()
  }

  return (
    <div className={styles.menu}>
      <h2 className={styles.name}>{t('purse_myAccounts')}</h2>
      <MenuItem
        onClick={handleLIMCBalance}
        image={balanceLimc}
        title='LIMC'
        balance={isSync ? `${limcBalance} LIMC` : t('purse_notSync')}
      />
      <MenuItem
        onClick={handleUSDTBalance}
        image={balanceUsdt}
        title='USDT'
        balance={isSync ? `${usdtBalance} USDT` : t('purse_notSync')}
        setActive={handleBalanceUsdtOpenClick}
      />
    </div>
  )
}
