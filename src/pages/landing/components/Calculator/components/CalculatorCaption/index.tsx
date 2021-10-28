import React, { useState } from 'react'
import Styles from './styles.module.scss'

import { Label } from '../../../../../../ui-kit/Label'
import { InputText } from '../../../../../../ui-kit/InputText'
import { ButtonBig } from '../../../../../../ui-kit/ButtonBig'

import { PopupMainPage } from '../../../../components/Main/components/PopupMainPage'
import PopupStyles from '../../../../components/Main/components/PopupMainPage/styles.module.scss'

import arrowIcon from '@icons/icon-arrow.svg'
import limcoreIcon from '@icons/limcore.svg'
import infoIcon from '@icons/info-icon.svg'
import { Modal } from '@components/Purse/PurseMobile/components/Modal'
import AuthComponent from '../../../../../../pages/auth/components/Auth/Auth'

export const CalculatorCaption: React.FC = () => {
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false)
  const [popupOpen, setPopupOpen] = useState(false)
  const closePopup = () => {
    setPopupOpen(false)
  }
  const openPopup = () => {
    setPopupOpen(true)
  }

  const handleLoginModalOpen = (event) => {
    event.preventDefault()
    setIsLoginModalVisible(true)
  }
  const handleLoginModalClose = () => {
    setIsLoginModalVisible(false)
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
            <Label className={Styles.label} titleText='Выберите количество LIMC'>
              <InputText value='40,000 LIMC' onChange={() => {}} placeholder='' />
            </Label>
            <img src={arrowIcon} alt='Иконка' />
            <Label className={Styles.label} titleText='Сумма инвестиций в USDT'>
              <InputText value='3,800,000 USDT' onChange={() => {}} placeholder='' />
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
            <input type='range' min='1' max='100000' />
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
                    15% <img className={Styles.icon} src={infoIcon} alt='Иконка' onClick={openPopup} />
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

          <Modal
            active={isLoginModalVisible}
            setActive={handleLoginModalClose}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
            classname={Styles.modalAuth}
            crossFlag
          >
            <div className={Styles.modalAuthInner}>
              <AuthComponent />
            </div>
          </Modal>
        </div>
      </form>
    </div>
  )
}
