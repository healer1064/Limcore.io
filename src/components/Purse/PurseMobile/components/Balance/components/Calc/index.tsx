import React, { useState } from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'
import { ModalHeader } from '../../../ModalHeader'
import { InputRadio } from '../../../../../../../ui-kit/InputRadio'
import { Label } from '../../../../../../../ui-kit/Label'
import { ButtonBig } from '../../../../../../../ui-kit/ButtonBig'
import { chevronUp, refresh } from '@components/Purse/PurseMobile/images'
import { CalcTable } from '../CalcTable/index'
// import InputMask from 'react-input-mask'

export const Calc = ({ onClick, money }) => {
  const [sumValue, setSumValue] = useState(money)
  const [resultValue, setResultValue] = useState('2')
  const [radioChecked, setRadioChecked] = useState(true)
  const [activeItem, setActiveItem] = useState(0)
  const [isTableVisible, setIsTableVisible] = useState(false)
  const [refreshClick, setRefreshClick] = useState(false)

  const items = [{ title: '3 мес.' }, { title: '6 мес.' }, { title: '1 год' }]

  const handleSumChange = (event) => {
    setSumValue(event.target.value)
  }

  const handleResultChange = (event) => {
    setResultValue(event.target.value)
  }

  const handleCountClick = (event) => {
    event.preventDefault()
    setIsTableVisible(true)
  }

  // const handleInputRadioChange = () => {
  //   setRadioChecked(!radioChecked)
  //   console.log('handleInputRadioChange')
  // }

  const handleOpenItem = (event) => {
    setActiveItem(+event.target.dataset.index)
  }

  const handleRefreshClick = () => {
    console.log('handleRefreshClick')
    setIsTableVisible(true)

    setRefreshClick(true)
    setTimeout(() => {
      setRefreshClick(false)
    }, 2000)
  }

  return (
    <div className={styles.calc}>
      <ModalHeader title='Расчет в калькуляторе' onClick={onClick} crossFlag />

      <div className={styles.body}>
        <form className={styles.form}>
          <label className={styles.label}>Получено с форков</label>
          {/* <InputMask
            type='text'
            mask='999999999999,999'
            maskChar=''
            className={styles.input}
            value={sumValue}
            onChange={handleSumChange}
          /> */}
          <input type='text' className={styles.input} value={sumValue} onChange={handleSumChange} />
          <span
            className={classNames(refreshClick ? styles.refresh__active : styles.refresh)}
            onClick={handleRefreshClick}
          >
            <img src={refresh} />
          </span>
        </form>
        <label className={styles.listLabel} style={{ display: 'block', marginBottom: '10px' }}>
          Период
        </label>
        <ul className={styles.list}>
          {items.map((item, i) => (
            <button
              className={classNames(i === activeItem ? styles.item__active : styles.item)}
              onClick={handleOpenItem}
              data-index={i}
              key={i}
            >
              {item.title}
            </button>
          ))}
        </ul>

        {/* Тут с инпутами еще повозиться надо */}
        <Label className={styles.radioLabel}>
          {/* <InputRadio titleRadio='Покупать LIMC' checked={radioChecked} onChange={handleInputRadioChange} /> */}
          <InputRadio titleRadio='Покупать LIMC' />
          {radioChecked && (
            <span className={styles.procentInfo}>
              <img src={chevronUp} />
              5%
            </span>
          )}
        </Label>
        <Label className={styles.radioLabel}>
          {/* <InputRadio titleRadio='Оставлять на балансе' checked={!radioChecked} onChange={handleInputRadioChange} /> */}
          <InputRadio titleRadio='Оставлять на балансе' />
        </Label>

        <form className={styles.form} style={{ marginTop: '35px' }}>
          <label className={styles.label}>Доходность за 1 день</label>
          <input type='text' className={styles.input} value={resultValue} onChange={handleResultChange} />
          <ButtonBig onClick={handleCountClick} className={styles.formBtn}>
            Рассчитать
          </ButtonBig>
        </form>

        {isTableVisible && (
          <>
            <div className={styles.resultSum}>
              <h3 className={styles.resultSumTitle}>$876,976</h3>
              <p className={styles.resultSumSubtitle}>К концу срока (365 дней)</p>
            </div>
            <CalcTable />
          </>
        )}
      </div>
    </div>
  )
}
