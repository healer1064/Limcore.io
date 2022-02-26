import React, { useState } from 'react'

import styles from './styles.module.scss'
import { Modal } from '@components/Modal'
import useWindowSize from '@helpers/useWindowSizeHook'
import USDTIcon from '@icons/USDTIcon.svg'
import limcYellowIcon from '@icons/limcYellow.svg'
import { HitBTC, Variebles } from './components/HitBTC'
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

interface BuyLIMCModalProps {
  modalOpened: boolean
  closeModal: () => unknown
}

export const BuyLIMCModal: React.FC<BuyLIMCModalProps> = ({ modalOpened, closeModal }) => {
  const { width } = useWindowSize()

  const [HitBTCValue, setHitBTCValue] = useState<Variebles>(0)

  const [inputValue, setInputValue] = useState<string>('')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectValue, setSelectValue] = useState<Option>()

  const onChangeValue = (value: Variebles) => {
    return () => {
      setHitBTCValue(() => value)
    }
  }

  const onChangeInput = (value: string) => {
    setInputValue(() => value)
  }
  const onChangeSelect = (value: Option) => {
    setSelectValue(() => value)
  }

  const formattedValue = (+inputValue * 4.08).toFixed(2)

  const isMobile = width <= 768

  return (
    <Modal
      classname={styles.modalClass}
      active={modalOpened}
      setActive={closeModal}
      isMobile={isMobile}
      isDesktop={!isMobile}
      crossFlag
    >
      <div className={styles.buyLIMCContainer}>
        <h2>Купить LIMC</h2>
        <HitBTC onChange={onChangeValue} value={HitBTCValue} />
        <div className={styles.buyLIMCInputs}>
          <InputUI
            type='number'
            icon={USDTIcon}
            label='USDT'
            select={{ options, getValue: onChangeSelect, defaultValue: 'TRON' }}
            value={inputValue}
            onChange={onChangeInput}
          />
          <InputUI type='number' icon={limcYellowIcon} label='LIMC' value={formattedValue} disabled={Boolean(true)} />
          <ButtonBig className={styles.buyLIMCInputs__button}>Купить LIMC</ButtonBig>
        </div>
      </div>
    </Modal>
  )
}
