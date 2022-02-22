import React, { useState } from 'react'
import styles from './style.module.scss'
import { ReactComponent as ArrowButton } from '@icons/arrowButton.svg'
import { BottomModal } from '@components/Modal/BottomModal'
import { ReactComponent as InfoIcon } from '@icons/whiteInfoIcon.svg'

export interface IMobileTab {
  title: string
  data: string
  info?: boolean
  infoTitle?: string
  infoData?: string
  onClick: () => void
}

export const MobileTab: React.FC<IMobileTab> = ({ title, data, info, infoTitle, infoData, onClick }) => {
  const [active, setActive] = useState(false)
  return (
    <>
      <div onClick={onClick} className={styles.wrapper}>
        <p className={styles.title}>{title}</p>
        <div className={styles.description}>
          <div className={styles.data_container}>
            {data}
            {info && <InfoIcon onClick={() => setActive((prev) => !prev)} className={styles.info_icon} />}
          </div>
          <ArrowButton className={styles.icon} />
        </div>
      </div>
      {info && (
        <BottomModal active={active} setActive={setActive}>
          <h3 className={styles.modal_title}>{infoTitle}</h3>
          <p className={styles.modal_description}>{infoData}</p>
        </BottomModal>
      )}
    </>
  )
}
