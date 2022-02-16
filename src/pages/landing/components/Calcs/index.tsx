import React, { useState } from 'react'
import styles from './style.module.scss'
import { StyledInputRange } from '@components/StyledComponents/StyledInputRange/StyledInputRange'
import { BrownianMotion } from './BrownianMotion/BrownianMotion'
import { data } from './constants'
import { Modal } from './Modal/Modal'

export const Calcs = () => {
  const [rangeValue, setRangeValue] = useState(1)
  const [coin, setCoin] = useState('1')
  const [modal, setModal] = useState(false)

  const handleModal = () => setModal(!modal)

  const handleRange = (e, data) => {
    const money = data * 0.002 * 24 * 30
    setRangeValue(data)
    if (String(Math.round(money)).length >= 4) {
      setCoin(String(Math.round(money)).slice(0, 2) + 'K')
    }
    if (String(Math.round(money)).length < 5 && String(Math.round(money)).length > 3) {
      setCoin(String(Math.round(money)).slice(0, 2).split('').join(',') + 'K')
    }
    if (String(Math.round(money)).length <= 3) {
      setCoin(String(Math.round(money)).slice(0, 3))
    }
  }

  return (
    <section className={styles.calc}>
      <div>
        <div className={styles.calc__limc}>
          <div className={styles.calc__logo} />
          <label className={styles.calc__counter}>{rangeValue} LIMC</label>
          <p className={styles.calc__grid_one}>1 LIMC</p>
          <p className={styles.calc__grid_two}>40,000 LIMC</p>
          <StyledInputRange min={1} max={40000} step={1} onChange={handleRange} />
        </div>
        <div className={styles.calc__grid}>
          <div className={styles.calc__up} />
          <div className={styles.calc__click_zona}>
            {data.map((item, i) => (
              <div
                key={i}
                className={styles.calc__click_img}
                style={{
                  left: '50%',
                  top: '50%',
                }}
              >
                <BrownianMotion interval={item.interval} distance={item.distance} step={item.step}>
                  <div
                    className={styles.calc__click_image}
                    style={{
                      backgroundColor: item.color,
                      backgroundRepeat: 'no-repeat',
                      width: `${item.diameter}px`,
                      height: `${item.diameter}px`,
                    }}
                  >
                    <img
                      src={item.backgroundImage}
                      alt='image'
                      style={{ width: item.imgSizeW, height: item.imgSize, margin: item.margin }}
                    />
                  </div>
                </BrownianMotion>
              </div>
            ))}
          </div>
          <div className={styles.calc__image} onMouseEnter={handleModal} onMouseLeave={handleModal}>
            <p className={styles.calc__text}>Общий доход за 30d при текущем курсе</p>
            <h3 className={styles.calc__money}>${coin}</h3>
            <p className={styles.calc__money_year}>
              26$ годовых в $<span className={styles.calc__info} />
            </p>
            <div className={styles.calc__img} />

            <Modal modal={modal} styles={styles} />
          </div>
        </div>
      </div>
    </section>
  )
}
