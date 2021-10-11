import { useAppSelector } from '@app/redux/hooks'
import { Spinner } from '@components/Spinner'
import React from 'react'
import { DetailOrderContent } from './components/DetailOrderContent'
import { DetailOrderFooter } from './components/DetailOrderFooter'
import { DetailOrderHeader } from './components/DetailOrderHeader'
import Styles from './style.module.scss'

interface OrderDrawerProps {
  onClose: () => void
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({ onClose }) => {
  const status = useAppSelector((state) => state.detailOrderInfo.isLoading)

  return (
    <div className={Styles.order_container}>
      <div className={Styles.content}>
        {status === 'loading' || !status ? (
          <div className={Styles.spinnerContainer}>
            <Spinner />
          </div>
        ) : (
          <>
            <DetailOrderHeader closeDetailOrder={onClose} />
            <DetailOrderContent />
            <DetailOrderFooter />
          </>
        )}
      </div>
    </div>
  )
}
