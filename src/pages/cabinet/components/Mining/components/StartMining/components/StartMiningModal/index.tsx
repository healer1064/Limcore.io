import React, { useState } from 'react'

import styles from './styles.module.scss'
import styles2 from './../../styles.module.scss'
import classNames from 'classnames'
import { CloseIcon } from '@icons/CloseIcon'
import { ModalTable } from '../ModalTable'
import { Modal } from '@components/Modal'
import useWindowSize from '@helpers/useWindowSizeHook'

interface StartMiningModalProps {
  percentageLoading: number
  remainingDays: number
  allDays: number
  passedTB: number
  allTB: number
  modalOpened: boolean
  closeModal: () => unknown
}

export const StartMiningModal: React.FC<StartMiningModalProps> = ({
  percentageLoading,
  passedTB,
  allDays,
  allTB,
  remainingDays,
  modalOpened,
  closeModal,
}) => {
  const { width } = useWindowSize()

  const [popupInModalOpened, setPopupInModalOpened] = useState(true)

  const hidePopupInModal = () => setPopupInModalOpened(false)

  const mobile = width <= 768

  return (
    <Modal
      classname={styles.modalClass}
      active={modalOpened}
      setActive={closeModal}
      crossFlag
      isMobile={mobile}
      isDesktop={!mobile}
    >
      <div className={styles.modal__container}>
        <h5 className={styles.modal__title}>До старта майнинга</h5>

        <div className={styles2.startMining__loading} style={{ marginBottom: 0 }}>
          <p className={styles2.startMining__line} style={{ width: `${percentageLoading}%` }} />
        </div>
        <div className={styles2.startMining__stats}>
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
            Продавая токены LIMC с lock-up периодом, мы приобретаем оборудование на средства вырученные с покупки Вами
            токенов LIMC. В счёт этого, мы предоставляем Вам скидку, но нам требуется дополнительное время чтобы купить
            оборудование, установить его, настроить и создать «плоты» на жёстких дисках
          </p>
        </div>
      </div>

      <ModalTable />
    </Modal>
  )
}
