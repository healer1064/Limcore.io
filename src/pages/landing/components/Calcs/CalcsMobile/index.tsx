import React, { useState } from 'react'
import styles from './style.module.scss'
import { StyledInputRange } from '@components/StyledComponents/StyledInputRange/StyledInputRange'
import { Modal } from '../Modal/Modal'
import { dataMobile } from '../constants'
import { BrownianMotion } from '../BrownianMotion/BrownianMotion'
export const CalcsMobile = () => {
  const [rangeValue, setRangeValue] = useState(1)
  const [coin, setCoin] = useState('1')
  const [modal, setModal] = useState(false)
  const handleModal = () => {
    setModal(!modal)
  }
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
    <section className={styles.mobile}>
      <div className={styles.mobile__limc}>
        <div className={styles.mobile__logo} />
        <label className={styles.mobile__counter}>{rangeValue} LIMC</label>
        <div className={styles.mobile__div_txt}>
          <p className={styles.mobile__txt}>1 LIMC</p>
          <p className={styles.mobile__txt}>10,000 LIMC</p>
        </div>
        <StyledInputRange
          min={1}
          max={40000}
          step={1}
          style={{ gridArea: '2/1', width: '335px', margin: '30px 0 16px 0', padding: '0' }}
          onChange={handleRange}
        />
        <p className={styles.mobile__text}>Общий доход за 30d при текущем курсе</p>
        <div className={styles.mobile__coin_img} onClick={handleModal}>
          <h3 className={styles.mobile__money}>${coin}</h3>
          <span className={styles.mobile__info} onClick={handleModal} />
        </div>
        <div className={styles.mobile__borders}>
          <div className={styles.mobile__border_up} />
          <div className={styles.mobile__border}>
            {dataMobile.map((item) => (
              <div
                key={Math.random()}
                className={styles.mobile__click_img}
                style={{
                  left: `${item.position.left}px`,
                  top: `${item.position.top}px`,
                  zIndex: -10,
                }}
              >
                <BrownianMotion interval={1} distance={100} step={40}>
                  <div
                    className={styles.mobile__click_image}
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
        </div>
      </div>
      <Modal modal={modal} styles={styles} />
    </section>
  )
}