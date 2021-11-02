import React, { useState } from 'react'
import Styles from './styles.module.scss'
import classNames from 'classnames'

import { Label } from '../../../../../../ui-kit/Label'
import { InputText } from '../../../../../../ui-kit/InputText'
import { ButtonBig } from '../../../../../../ui-kit/ButtonBig'

import { PopupMainPage } from '../../../../components/Main/components/PopupMainPage'
import PopupStyles from '../../../../components/Main/components/PopupMainPage/styles.module.scss'

import { IconArrow } from '@icons/IconArrow'
import limcoreIcon from '@icons/limcore.svg'
import useWindowSize from '@helpers/useWindowSizeHook'
import { useHistory } from 'react-router'
import ModalAuth from '../../../../../landing/components/ModalAuth/index'
import { useAppDispatch } from '@app/redux/hooks'
import { setIsBuyLimcClick } from '../../../../../../pages/auth/redux/auth.slice'
import { InfoIcon } from '@icons/InfoIcon'

export const CalculatorCaption: React.FC = () => {
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false)
  const [popupOpen, setPopupOpen] = useState(false)

  const dispatch = useAppDispatch()
  const history = useHistory()
  const { width } = useWindowSize()
  const desktop = width >= 768

  const closePopup = () => {
    setPopupOpen(false)
  }
  const openPopup = () => {
    setPopupOpen(true)
  }

  const handleLoginModalOpen = (event) => {
    event.preventDefault()
    dispatch(setIsBuyLimcClick(true))
    desktop ? setIsLoginModalVisible(true) : history.push('/auth')
  }
  const handleLoginModalClose = () => {
    setIsLoginModalVisible(false)
  }

  // Calculator
  const [limcNumber, setLimcNumber] = useState('1')
  const [investNumber, setInvestNumber] = useState('95')
  // const [limcNumber, setLimcNumber] = useState('1 LIMC')
  // const [investNumber, setInvestNumber] = useState('95 USDT')
  const [classForTranslate, setClassForTranslate] = useState(false)
  const topLabelClass = classForTranslate ? Styles.labelToBottom : null
  const bottomLabelClass = classForTranslate ? Styles.labelToTop : null

  const handleArrowClick = () => {
    setClassForTranslate((prev) => !prev)
  }

  const handleLimcNumberChange = (event) => {
    const validated = Number(event.target.value.replace(/,/g, '')) // убираю запятые, затем проверяю цифра это или нет
    if (!validated) {
      return
    }

    setLimcNumber(validated.toLocaleString('en'))
    setInvestNumber((validated * 95).toLocaleString('en'))
  }
  const handleInvestNumberChange = (event) => {
    const validated = Number(event.target.value.replace(/,/g, '')) // убираю запятые, затем проверяю цифра это или нет
    if (!validated) {
      return
    }

    const limc = Math.round(validated / 95)
    setLimcNumber(limc.toLocaleString('en'))
    setInvestNumber(validated.toLocaleString('en'))
  }

  return (
    <div className={Styles.caption}>
      <h2 className={Styles.title}>Калькулятор доходности</h2>
      <span className={Styles.designation}>Данный калькулятор не учитывает</span>
      <ul className={Styles.list}>
        <li className={Styles.item}>
          <span>Возможный рост стоимости токена LIMC</span>
        </li>
        <li className={Styles.item}>
          <span>Возможный рост стоимости Chia coin и производных форков</span>
        </li>
        <li className={Styles.item}>
          <span>Появление новых форков и их стоимость</span>
        </li>
      </ul>
      <span className={Styles.designation}>Все данные актуальны на текущий момент</span>
      <form className={Styles.form}>
        <div className={Styles.block}>
          <div className={Styles.labels}>
            <Label className={classNames(Styles.label, topLabelClass)} titleText='Количество LIMC'>
              {/* <InputText value={`${limcNumber} LIMC`} onChange={handleLimcNumberChange} placeholder='' /> */}
              <InputText
                className={Styles.inputCount}
                value={limcNumber}
                onChange={handleLimcNumberChange}
                placeholder=''
              />
            </Label>
            {/* <img src={arrowIcon} alt='Иконка' className={Styles.arrowSwitch} onClick={handleArrowClick} /> */}
            <IconArrow className={Styles.arrowSwitch} onClick={handleArrowClick} />
            <Label className={classNames(Styles.label, bottomLabelClass)} titleText='Сумма инвестиций в USDT'>
              {/* <InputText value={`${investNumber} USDT`} onChange={handleInvestNumberChange} placeholder='' /> */}
              <InputText
                className={Styles.inputCount}
                value={investNumber}
                onChange={handleInvestNumberChange}
                placeholder=''
              />
            </Label>
          </div>
          <div className={Styles.range}>
            <div className={Styles.scale}>
              <span>
                <img src={limcoreIcon} alt='Иконка' /> 1 LIMC
              </span>
              <span>
                <img src={limcoreIcon} alt='Иконка' /> 100,000 LIMC
              </span>
            </div>
            <input type='range' min='1' max='100000' onChange={handleLimcNumberChange} className={Styles.rangeInput} />
          </div>
        </div>
        <div className={Styles.block}>
          <div className={Styles.info}>
            <div className={Styles.container}>
              <span className={Styles.signification}>Распределение вознаграждений</span>
              <div className={Styles.line}>
                <div className={Styles.column}>
                  <strong>Холдер LIMC</strong>
                  <strong>85%</strong>
                </div>
                <div className={Styles.column}>
                  <strong>Limcore</strong>
                  <strong className={Styles.informationIcon}>
                    15% <InfoIcon className={Styles.icon} onClick={openPopup} />
                  </strong>
                </div>
              </div>
              <div className={Styles.wrap}>
                <div className={Styles.inner}>
                  <span>Доход с 85%</span>
                  <span>21,6% годовых в $</span>
                </div>
                <div className={Styles.row}>
                  <div className={Styles.inner}>
                    <span>В час</span>
                    <span>$93,6</span>
                  </div>
                  <div className={Styles.inner}>
                    <span>В день</span>
                    <span>$2,248.7</span>
                  </div>
                  <div className={Styles.inner}>
                    <span>В месяц</span>
                    <span>$68,400</span>
                  </div>
                </div>
              </div>
            </div>
            <PopupMainPage closePopup={closePopup} popupOpen={popupOpen} className={PopupStyles.popup}>
              Покрытие расходов на поддержание инфраструктуры
            </PopupMainPage>
          </div>
          <ButtonBig onClick={handleLoginModalOpen}>Купить LIMC</ButtonBig>

          {desktop && <ModalAuth isVisible={isLoginModalVisible} setModalClose={handleLoginModalClose} />}
        </div>
      </form>
    </div>
  )
}
