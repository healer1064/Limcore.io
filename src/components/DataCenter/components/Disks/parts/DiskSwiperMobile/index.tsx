import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { BottomModal } from '@components/Modal/BottomModal'
import ActiveBtn from '@components/DataCenter/components/Disks/parts/DiskSwiperMobile/ActiveBtn'
import NoneActiveBtn from '@components/DataCenter/components/Disks/parts/DiskSwiperMobile/NoneActiveBtn'

export const DiskSwiperMobile = ({ data, setActiveTab, activeTab = 1 }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [view, setView] = useState(false)
  const active = data.filter((i) => i.id === activeTab)
  const hidePopup = () => {
    setIsOpen(false)
  }

  const chengAndClose = (id) => {
    setActiveTab(id)
    setView((prev) => !prev)
    hidePopup()
  }

  useEffect(() => {
    if (isOpen === false) {
      setView(false)
    }
  }, [isOpen])

  return (
    <div className={styles.wrapper}>
      <BottomModal active={isOpen} setActive={hidePopup}>
        <div className={styles.wrapper__btn}>
          {data && data.map((i) => <NoneActiveBtn key={i.id} chengAndClose={chengAndClose} item={i} />)}
        </div>
      </BottomModal>
      <ActiveBtn active={active[0]} setIsOpen={setIsOpen} view={view} setView={setView} />
    </div>
  )
}
