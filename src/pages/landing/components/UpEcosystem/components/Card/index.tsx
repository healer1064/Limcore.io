import React from 'react'
import Styles from './styles.module.scss'
import mark from '@icons/limcore.svg'
import arrowUp from '@icons/arrow-up-green.svg'
import arrowDown from '@icons/arrow-down-red.svg'

export const Card = (props) => {
  return (
    <button
      className={`${Styles.container} ${props.isActive && Styles.container_active}`}
      id={props.item.id}
      onClick={props.onClick}
    >
      <h6 className={Styles.title}>{props.item.title}</h6>
      {props.item.isMark && (
        <div className={Styles.mark__container}>
          <img src={mark} alt='mark' />
          <p className={Styles.mark__text}>{props.item.text}</p>
        </div>
      )}
      <div className={Styles.value}>{props.item.value}</div>
      <div className={Styles.dinamic__container}>
        <div className={Styles.dinamic__container}>
          {props.item.isUp ? (
            <>
              <img src={arrowUp} alt='up' />
              <span className={`${Styles.dinamic} ${Styles.dinamic__up}`}>{props.item.dinamikValue}%</span>
            </>
          ) : (
            <>
              <img src={arrowDown} alt='down' />
              <span className={`${Styles.dinamic} ${Styles.dinamic__down}`}>{props.item.dinamikValue}%</span>
            </>
          )}{' '}
          <span className={Styles.dinamic}>last 30 days</span>
        </div>
      </div>
    </button>
  )
}
