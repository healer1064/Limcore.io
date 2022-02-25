import React, { useState } from 'react'
import styles from './style.module.scss'
import { BottomModal } from '@components/Modal/BottomModal'
import { ReactComponent as ArrowUpRight } from '@icons/arrow-up-right.svg'
import { ReactComponent as Suitcase } from '@icons/SuitcaseIcon.svg'
import { ReactComponent as ArrowGray } from '@icons/arrowUpRightGray.svg'
import { Fork } from '../../../ForksTableChartMobile/parts/ForksModal/Fork'
import { ForksModalHeader } from './parts/ForksModalHeader'
import useWindowSize from '@helpers/useWindowSizeHook'

export const TableModal = ({ active, setActive, forkData, address }) => {
  const [description, setDescription] = useState(false)
  const { width } = useWindowSize()

  return (
    <BottomModal
      isFork
      style={{ zIndex: 9999 }}
      active={active}
      setActive={() => {
        setActive()
        setDescription(false)
      }}
    >
      {!description ? (
        <div className={styles.chose_wrapper}>
          <div className={styles.description} onClick={() => setDescription((prev) => !prev)}>
            <Suitcase className={styles.description__icon} />
            Смотреть все форки кошелька
          </div>
          <div className={styles.description}>
            <a className={styles.link} href='https://bscscan.com' target='_blank' rel='noreferrer'>
              <ArrowUpRight className={styles.description__icon} />
              Перейти в кошелек на BscScan
            </a>
          </div>
        </div>
      ) : (
        <div className={styles.fork_wrapper}>
          <div className={styles.modal_header}>
            <ForksModalHeader address={address} width={width} />
          </div>
          {forkData.slice(0, 12).map((el) => {
            return (
              <div key={el.id} className={styles.fork_content}>
                <div className={styles.modal_fork}>
                  <Fork fork={el} />
                </div>
                <ArrowGray className={styles.gray_arrow} />
              </div>
            )
          })}
        </div>
      )}
    </BottomModal>
  )
}
