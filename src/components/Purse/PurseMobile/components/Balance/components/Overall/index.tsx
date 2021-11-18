import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { downloadIcon } from '../../../../images'
import { SwitchToggler } from '../../../../../../../ui-kit/SwitchToggler/index'
import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig/index'
import { InputRadio } from '../../../../../../../ui-kit/InputRadio'
import { Label } from '../../../../../../../ui-kit/Label'
import { BottomModal } from '../../../BottomModal'
import { Modal } from '../../../Modal/index'
import { ModalHeader } from '../../../ModalHeader'
import { Calc } from '../Calc/index'
import { useTranslation } from 'react-i18next'

export const Overall = ({ onClick, money, limcBalance, usdtBalance }) => {
  const [t] = useTranslation()
  const [isSwitchToggled, setIsSwitchToggled] = useState(true)
  const [disabledColor, setDisabledColor] = useState('#99A0AD')
  const [dotsColor, setDotsColor] = useState('#99A0AD')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isCalcOpen, setIsCalcOpen] = useState(false)
  // const [payInputRadioChecked, setPayInputRadioChecked] = useState(true)

  const Item = (title, sum) => (
    <li className={styles.modalItem}>
      <p className={styles.modalItemTitle}>{title}</p>
      <span className={styles.modalItemSum}>{sum}</span>
    </li>
  )

  const handleCalcOpenClick = () => {
    setIsCalcOpen(true)
  }

  const handleCalcCloseClick = () => {
    setIsCalcOpen(false)
  }

  const handleModalOpenClick = () => {
    setIsModalVisible(true)
  }

  const handleModalCloseClick = () => {
    setIsModalVisible(false)
  }

  const handleApplyClick = () => {
    console.log('handleApplyClick')
  }

  const handleSwitchToggle = () => {
    setIsSwitchToggled(!isSwitchToggled)
  }

  // const handlePayInputRadioChange = () => {
  //   setPayInputRadioChecked(!payInputRadioChecked)
  // }

  useEffect(() => {
    if (isSwitchToggled) {
      setDisabledColor('#99A0AD')
      setDotsColor('#99A0AD')
    } else {
      setDisabledColor('#393C42')
      setDotsColor('#4A70F8')
    }
  }, [isSwitchToggled])

  return (
    <div className={styles.modal}>
      <ModalHeader title={t('commonBalance')} onClick={onClick} />
      <div className={styles.balance}>
        <h3 className={styles.balanceTitle}>{t('commonBalance')}</h3>
        <p className={styles.balanceSum}>{`$${money}`}</p>
      </div>

      <ul className={styles.list}>
        {Item('Получено с майнинга', '$0')}
        {Item('Получено в сети XCH', '$0')}
        {Item('Инвестировано', '$0')}
        {Item(`${t('balance')} LIMC`, `$${limcBalance}`)}
        {Item(`${t('balance')} USDT`, `$${usdtBalance}`)}
      </ul>

      <ul className={styles.btns}>
        <li className={styles.item}>
          <div className={styles.icon}>
            <img src={downloadIcon} />
          </div>
          <div className={styles.body}>
            <h4 className={styles.title}>Автоматически покупать LIMC на деньги с форков</h4>
            <p className={styles.subtitle}>Доходность составит 30%</p>
            <button type='button' className={styles.btn} onClick={handleCalcOpenClick}>
              Расчет в калькуляторе
            </button>

            <Modal active={isCalcOpen} setActive={handleCalcCloseClick} style={{ zIndex: 1111, overflow: 'auto' }}>
              <Calc onClick={handleCalcCloseClick} money={money} />
            </Modal>
          </div>
          <SwitchToggler isChecked={isSwitchToggled} onChange={handleSwitchToggle} />
        </li>

        <li className={styles.item}>
          <div className={styles.icon}>
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M21.5391 10.564L12.9111 10.564M12.9111 10.564L16.0821 7.38477M12.9111 10.564L16.0821 13.7431'
                stroke={disabledColor}
                strokeWidth='1.6'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M10.6559 7H5C4.44772 7 4 7.44772 4 8V16C4 16.5523 4.44772 17 5 17H17.3318'
                stroke={disabledColor}
                strokeWidth='1.6'
                strokeLinecap='round'
              />
            </svg>
          </div>
          <div className={styles.body}>
            <h4 className={styles.title} style={{ color: disabledColor }}>
              Пополнение виртуальной карты
            </h4>
            <p className={styles.subtitle}>С баланса LIMC</p>
          </div>
          <button type='button' className={styles.btn__modal} disabled={isSwitchToggled} onClick={handleModalOpenClick}>
            <svg width='18' height='4' viewBox='0 0 18 4' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <circle cx='2' cy='2' r='2' fill={dotsColor} />
              <circle cx='9' cy='2' r='2' fill={dotsColor} />
              <circle cx='16' cy='2' r='2' fill={dotsColor} />
            </svg>
          </button>

          <BottomModal
            active={isModalVisible}
            setActive={handleModalCloseClick}
            title='Пополнение виртуальной карты'
            subtitle='Задать приоритетный способ пополнения виртуальной карты'
          >
            <div className={styles.pay}>
              <Label className={styles.label}>
                <InputRadio
                  titleRadio='С майнинга'
                  // checked={payInputRadioChecked}
                  // onChange={handlePayInputRadioChange}
                />
              </Label>
              <Label className={styles.label}>
                <InputRadio
                  titleRadio='С баланса LIMC'
                  // checked={!payInputRadioChecked}
                  // onChange={handlePayInputRadioChange}
                />
              </Label>
              <ButtonBig onClick={handleApplyClick} className={styles.apply}>
                Применить
              </ButtonBig>
            </div>
          </BottomModal>
        </li>
      </ul>
    </div>
  )
}
