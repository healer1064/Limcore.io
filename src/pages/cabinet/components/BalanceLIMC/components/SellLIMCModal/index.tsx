import React, { useState } from 'react'

import styles from './styles.module.scss'
import { Modal } from '@components/Modal'
import useWindowSize from '@helpers/useWindowSizeHook'
import USDTIcon from '@icons/USDTIcon.svg'
import limcYellowIcon from '@icons/limcYellow.svg'
import { InputUI } from '../../../../../../ui-kit/InputUI'
import { Option } from '../../../../../../ui-kit/SelectUI'
import { ButtonBig } from '../../../../../../ui-kit/ButtonBig'

const options: Option[] = [
  {
    label: 'TRON',
    value: 'TRON',
  },
  {
    label: 'ERC-20',
    value: 'ERC-20',
  },
]

interface SellLIMCModalProps {
  modalOpened: boolean
  closeModal: () => unknown
}

export const SellLIMCModal: React.FC<SellLIMCModalProps> = ({ modalOpened, closeModal }) => {
  const { width } = useWindowSize()
  const isMobile = width <= 768

  const [inputValue, setInputValue] = useState<string>('')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectValue, setSelectValue] = useState<Option>()

  const onChangeInput = (value: string) => {
    setInputValue(() => value)
  }
  const getSelectValue = (value: Option) => {
    setSelectValue(() => value)
  }

  const formattedInputValue = (+inputValue / 4.08).toFixed(2)

  return (
    <Modal
      classname={styles.modalClass}
      active={modalOpened}
      setActive={closeModal}
      isMobile={isMobile}
      isDesktop={!isMobile}
      crossFlag
    >
      <div className={styles.sellLIMCContainer}>
        <h2>Продать LIMC</h2>
        <div className={styles.sellLIMCInputs}>
          <InputUI icon={limcYellowIcon} label='LIMC' value={inputValue} type='number' onChange={onChangeInput} />
          <InputUI
            icon={USDTIcon}
            label='USDT'
            select={{ options, getValue: getSelectValue, defaultValue: 'TRON' }}
            value={formattedInputValue}
            type='number'
            disabled={Boolean(true)}
          />
          <ButtonBig className={styles.sellLIMCInputsButton}>Продать LIMC</ButtonBig>
        </div>
      </div>
    </Modal>
  )
}
