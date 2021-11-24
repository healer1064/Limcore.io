import React, { useState } from 'react'
import { UserHasTransactions } from '../UserHasTransactions'
import {
  s7,
  balanceLimc,
  balanceUsdt,
  chevronDown,
  pyaterochka,
  details1,
  buttonCloseWhite,
} from '@components/Purse/PurseMobile/images/index'
import styles from './styles.module.scss'
import { BottomModal } from '../../../BottomModal'
import { CurrencySort } from './components/CurrencySort/index'
import { TypeSort } from './components/TypeSort/index'
// import { PeriodSort } from './components/PeriodSort/index'
import { SumSort } from './components/SumSort/index'

export const TransactionsDetails = () => {
  // Модалки по клику на табы
  const [isCurrencyVisible, setIsCurrencyVisible] = useState(false)
  const [isTypeVisible, setIsTypeVisible] = useState(false)
  // const [isPeriodVisible, setIsPeriodVisible] = useState(false)
  const [isSumVisible, setIsSumVisible] = useState(false)

  // клик на "Свой период", по нему календарь открывается
  // const [isOwnPeriodVisible, setIsOwnPeriodVisible] = useState(false)

  // Инпуты в "сумме"
  const [fromSum, setFromSum] = useState('288')
  const [toSum, setToSum] = useState('5,000')

  // Дополнительные табы при сортировке
  const [isResetTabVisible, setIsResetTabVisible] = useState(false)
  const [isCurrentTabVisible, setIsCurrentTabVisible] = useState(false)
  const [currencySort, setCurrentSort] = useState('')
  const [isTypeTabVisible, setIsTypeTabVisible] = useState(false)
  const [typeSort, setTypeSort] = useState('')

  // Чекбоксы в модалке "валюта"
  const handleCurrencyChange = (event) => {
    const name = event.target.dataset.title

    if (event.target.checked) {
      // Чтобы не появилась запись ", LIMC" при одном активном чекбоксе
      if (currencySort === '') {
        setCurrentSort(name)
      } else {
        setCurrentSort((prev) => `${prev}, ${name}`)
      }
      setIsCurrentTabVisible(true)
    } else {
      // Удаление из таба имени сортировки неактивного чекбокса
      if (currencySort.includes(name)) {
        const newString = currencySort.replace(`${name}, `, '')
        setCurrentSort(newString)
      }
    }
  }
  // Чекбоксы в модалке "тип"
  const handleTypeChange = (event) => {
    const name = event.target.dataset.title

    if (event.target.checked) {
      // Чтобы не появилась запись ", LIMC" при одном активном чекбоксе
      if (typeSort === '') {
        setTypeSort(name)
      } else {
        setTypeSort((prev) => `${prev}, ${name}`)
      }
      setIsTypeTabVisible(true)
    } else {
      // Удаление из таба имени сортировки неактивного чекбокса
      if (typeSort.includes(name)) {
        const newString = typeSort.replace(`${name}, `, '')
        setTypeSort(newString)
      }
    }
  }

  // Сбросить все сортировки
  const handleAllSortsReset = () => {
    setIsResetTabVisible(false)
    setIsCurrentTabVisible(false)
    setIsTypeTabVisible(false)
  }

  // По клику на крестик в табе "валюты"
  const handleResetCurrencySort = () => {
    setIsCurrentTabVisible(false)
  }
  // По клику на крестик в табе "типы"
  const handleResetTypeSort = () => {
    setIsTypeTabVisible(false)
  }

  // По клику на крестик в табе "От .. до .."
  const handleResetSumSort = () => {
    setIsResetTabVisible(false)
  }

  // От в "сумме"
  const handleFromChange = (event) => {
    setFromSum(event.target.value)
  }
  // До в "сумме"
  const handleToChange = (event) => {
    setToSum(event.target.value)
  }

  // Сбросить в "сумме"
  const handleResetSumInputsClick = () => {
    setFromSum('')
    setToSum('')
  }
  // Применить в "сумме"
  const handleApplySumInputsClick = () => {
    setIsResetTabVisible(true)
    setIsSumVisible(false)
  }

  // Валюта
  const handleCurrencyOpenClick = () => {
    setIsCurrencyVisible(true)
  }
  const handleCurrencyCloseClick = () => {
    setIsCurrencyVisible(false)
  }

  // Тип
  const handleTypeOpenClick = () => {
    setIsTypeVisible(true)
  }
  const handleTypeCloseClick = () => {
    setIsTypeVisible(false)
  }

  // Сумма
  const handleSumOpenClick = () => {
    setIsSumVisible(true)
  }
  const handleSumCloseClick = () => {
    setIsSumVisible(false)
  }

  // Временные данные
  const tempInfo = [
    {
      date: 'Вчера',
      data: [
        { img: s7, title: 'S7 Airlines', sum: '−$3240', cardInfo: 'c карты *2774', isSwitch: false },
        { img: balanceLimc, title: 'LIMC', sum: '+120 LIMC', isSwitch: false },
      ],
    },
    {
      date: '12 сентября, пн',
      data: [
        {
          img: balanceLimc,
          title: 'LIMC',
          sum: '−$324',
          cardInfo: '−120 LIMC',
          isSwitch: true,
          img2: balanceUsdt,
          title2: 'USDT',
        },
        { img: balanceLimc, title: 'LIMC', sum: '-1220 LIMC', isSwitch: false },
        { img: s7, title: 'S7 Airlines', sum: '+$3240', cardInfo: 'c карты *2774', isSwitch: false },
      ],
    },
    {
      date: '3 сентября, ср',
      data: [
        { img: s7, title: 'LIMC', sum: '-1220 LIMC', isSwitch: false },
        {
          img: details1,
          title: 'LIMC',
          sum: '−$324',
          cardInfo: '−120 LIMC',
          isSwitch: true,
          img2: balanceUsdt,
          title2: 'USDT',
        },
        {
          img: details1,
          title: 'S7 Airlines',
          sum: '+$3240',
          cardInfo: '+$1,200 на кошелек qp8r78...',
          isSwitch: false,
        },
      ],
    },
    {
      date: '18 августа, вс',
      data: [
        {
          img: pyaterochka,
          title: 'LIMC',
          sum: '−$324',
          cardInfo: '−120 LIMC',
          isSwitch: true,
          img2: balanceUsdt,
          title2: 'USDT',
        },
        { img: s7, title: 'LIMC', sum: '-1220 LIMC', isSwitch: false },
        { img: s7, title: 'S7 Airlines', sum: '+$3240', cardInfo: 'c карты *2774', isSwitch: false },
      ],
    },
  ]

  return (
    <div className={styles.details}>
      <h2 className={styles.title}>Транзакции</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <button className={styles.btn} onClick={handleCurrencyOpenClick}>
            Валюта
            <img src={chevronDown} />
          </button>
          <BottomModal title='Валюта' active={isCurrencyVisible} setActive={handleCurrencyCloseClick}>
            <CurrencySort onChange={handleCurrencyChange} />
          </BottomModal>
        </li>
        <li className={styles.item}>
          <button className={styles.btn} onClick={handleTypeOpenClick}>
            Тип операции
            <img src={chevronDown} />
          </button>
          <BottomModal title='Тип операции' active={isTypeVisible} setActive={handleTypeCloseClick}>
            <TypeSort onChange={handleTypeChange} />
          </BottomModal>
        </li>
        {/* <li className={styles.item}>
          <button className={styles.btn} onClick={handlePeriodOpenClick}>
            Период
            <img src={chevronDown} />
          </button>

          <BottomModal title='Период' active={isPeriodVisible} setActive={handlePeriodCloseClick}>
            <PeriodSort
              ownPeriodOpen={handleOwnPeriodOpen}
              activeForModal={isOwnPeriodVisible}
              setActiveForModal={handleOwnPeriodClose}
            />
          </BottomModal>
        </li> */}
        <li className={styles.item}>
          <button className={styles.btn} onClick={handleSumOpenClick}>
            Сумма
            <img src={chevronDown} />
          </button>

          <BottomModal title='Сумма' active={isSumVisible} setActive={handleSumCloseClick}>
            <SumSort
              fromSum={fromSum}
              handleFromChange={handleFromChange}
              toSum={toSum}
              handleToChange={handleToChange}
              handleResetSumInputsClick={handleResetSumInputsClick}
              handleApplySumInputsClick={handleApplySumInputsClick}
            />
          </BottomModal>
        </li>
        {isResetTabVisible && (
          <li className={styles.item}>
            <button className={styles.btn} style={{ backgroundColor: '#67686C', color: '#fff' }}>
              От {fromSum} до {toSum}
              <img src={buttonCloseWhite} className={styles.cross} onClick={handleResetSumSort} />
            </button>
          </li>
        )}
        {isCurrentTabVisible && (
          <li className={styles.item}>
            <button className={styles.btn} style={{ backgroundColor: '#67686C', color: '#fff' }}>
              {currencySort}
              <img src={buttonCloseWhite} className={styles.cross} onClick={handleResetCurrencySort} />
            </button>
          </li>
        )}
        {isTypeTabVisible && (
          <li className={styles.item}>
            <button
              className={styles.btn}
              style={{
                backgroundColor: '#67686C',
                maxWidth: '191px',
              }}
            >
              <span className={styles.btnSpan}>{typeSort}</span>
              <img src={buttonCloseWhite} className={styles.cross} onClick={handleResetTypeSort} />
            </button>
          </li>
        )}

        {/* Кнопка сбросить появляется если активна какая либо сортировка */}
        {isResetTabVisible ||
          isCurrentTabVisible ||
          (isTypeTabVisible && (
            <li className={styles.item}>
              <button className={styles.btn} style={{ backgroundColor: 'transparent' }} onClick={handleAllSortsReset}>
                Сбросить
              </button>
            </li>
          ))}
      </ul>
      <h4 className={styles.transactions}>{tempInfo[0].date}</h4>
      <UserHasTransactions data={tempInfo[0].data} />

      <h4 className={styles.transactions}>{tempInfo[1].date}</h4>
      <UserHasTransactions data={tempInfo[1].data} />

      <h4 className={styles.transactions}>{tempInfo[2].date}</h4>
      <UserHasTransactions data={tempInfo[2].data} />

      <h4 className={styles.transactions}>{tempInfo[3].date}</h4>
      <UserHasTransactions data={tempInfo[3].data} />
      <button className={styles.moreButton} type='button'>
        Загрузить еще
      </button>
    </div>
  )
}
