import React, { useState } from 'react'
import styles from './style.module.scss'
import { StyledInputRange } from '@components/StyledComponents/StyledInputRange/StyledInputRange'
import { data, BrownianMotion } from './BrownianMotion/BrownianMotion.jsx'

export const Calculator = () => {
  const [rangeValue, setRangeValue] = useState(1)
  const [modal, setModal] = useState(false)
  const handleModal = () => {
    setModal(!modal)
  }
  const handleChange = (val) => {
    setRangeValue(val)
  }
  return (
    <section className={styles.calc}>
      <div className={styles.calc__limc}>
        <div className={styles.calc__logo} />
        <label htmlFor='limc' className={styles.calc__counter}>
          {rangeValue} LIMC
        </label>
        <p className={styles.calc__grid_one}>1 LIMC</p>
        <p className={styles.calc__grid_two}>10,000 LIMC</p>
        <StyledInputRange min={1} max={10000} step={1} />
      </div>
      <div className={styles.calc__grid}>
        <div className={styles.calc__up} />
        <div className={styles.calc__click_zona}>
          {data.map((item) => (
            <div
              key={Math.random()}
              className={styles.calc__click_img}
              style={{
                left: `${item.position.left}px`,
                top: `${item.position.top}px`,
              }}
            >
              <BrownianMotion interval={1} distance={100} step={40}>
                <div
                  className={styles.calc__click_image}
                  style={{
                    backgroundColor: item.color,
                    backgroundRepeat: 'no-repeat',
                    width: `${item.diameter}px`,
                    height: `${item.diameter}px`,
                  }}
                />
              </BrownianMotion>
            </div>
          ))}
        </div>
        <p className={styles.calc__text}>Общий доход за 30d при текущем курсе</p>
        <div className={styles.calc__image} onMouseEnter={handleModal} onMouseLeave={handleModal}>
          <h3 className={styles.calc__money}>$5</h3>
          <p className={styles.calc__money_year}>
            26$ годовых в $<span className={styles.calc__info} />
          </p>
        </div>
        <div className={modal ? styles.calc__warn : styles.disabled}>
          <p className={styles.calc__warn_text}> без учета перспектив роста стоимости активов</p>
        </div>
        <div className={styles.calc__img} />
      </div>
    </section>
  )
}
