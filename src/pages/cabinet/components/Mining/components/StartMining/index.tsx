import React, { useState } from 'react'

import styles from './styles.module.scss'
import startMiningFrame from '@icons/StartMiningFrame.svg'
import arrowWhiteRight from '@icons/arrowWhiteRight.svg'
import { Modal } from '@components/Modal'
import { CloseIcon } from '@icons/CloseIcon'
import classNames from 'classnames'
import { ModalTable } from './components/ModalTable/index'

export const StartMining: React.FC = () => {
  const [passedTB] = useState<number>(120)
  const [allTB] = useState<number>(2000)
  const [percentageLoading] = useState<number>(Math.floor((passedTB / allTB) * 100))

  const [remainingDays] = useState<number>(4)
  const [allDays] = useState<number>(60)

  const [modalOpened, setModalOpened] = useState(true)
  const [popupInModalOpened, setPopupInModalOpened] = useState(true)

  const openModal = () => setModalOpened(true)
  const closeModal = () => setModalOpened(false)

  const hidePopupInModal = () => setPopupInModalOpened(false)

  return (
    <div className={styles.startMining} style={{ background: `url("${startMiningFrame}") 0 0/100% 100%` }}>
      <div className={styles.startMining__beforeStart} onClick={openModal}>
        <p>До старта майнинга</p>
        <img src={arrowWhiteRight} />

        <Modal active={modalOpened} setActive={closeModal} crossFlag>
          <div className={styles.modal__container}>
            <h5 className={styles.modal__title}>До старта майнинга</h5>

            <div className={styles.startMining__loading} style={{ marginBottom: 0 }}>
              <p className={styles.startMining__line} style={{ width: `${percentageLoading}%` }} />
            </div>
            <div className={styles.startMining__stats}>
              <p>
                Осталось {remainingDays} дня из {allDays}
              </p>
              <p>
                {passedTB} TB / {allTB} TB
              </p>
            </div>

            <div className={classNames(styles.modal__wrapper, popupInModalOpened && styles.modal__wrapper_active)}>
              <div className={styles.modal__wrapper_upper}>
                <h6 className={styles.modal__why}>Почему нужно ждать?</h6>
                <CloseIcon onClick={hidePopupInModal} className={styles.modal__svg} />
              </div>
              <p className={styles.modal__text}>
                Продавая токены LIMC с lock-up периодом, мы приобретаем оборудование на средства вырученные с покупки
                Вами токенов LIMC. В счёт этого, мы предоставляем Вам скидку, но нам требуется дополнительное время
                чтобы купить оборудование, установить его, настроить и создать «плоты» на жёстких дисках
              </p>
            </div>
          </div>

          <ModalTable />
        </Modal>
      </div>
      <div className={styles.startMining__loadingBlock}>
        <div className={styles.startMining__loading}>
          <p className={styles.startMining__line} style={{ width: `${percentageLoading}%` }} />
        </div>
      </div>
      <div className={styles.startMining__stats}>
        <p>
          Осталось {remainingDays} дня из {allDays}
        </p>
        <p>
          {passedTB} TB / {allTB} TB
        </p>
      </div>
    </div>
  )
}
