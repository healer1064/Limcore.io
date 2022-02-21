import React, { useState } from 'react'
import Styles from './styles.module.scss'
import { ButtonBig } from '../../ui-kit/ButtonBig'
import { Modal } from '@components/Modal'

import usdt from '../../assets/images/usdt.svg'
import limc from '../../assets/images/yellow_chip.svg'
import closeImg from '../../assets/icons/close.svg'
import useWindowSize from '@helpers/useWindowSizeHook'

interface IBuyLimcButton {
  className?: string
}

export const BuyLimcButton = ({ className }: IBuyLimcButton) => {
  const [opened, setOpened] = useState(false)

  const open = () => setOpened(true)
  const close = () => setOpened(false)

  const { width } = useWindowSize()
  const desktop = width >= 769

  return (
    <>
      <ButtonBig onClick={open} className={className}>
        КУПИТЬ LIMC
      </ButtonBig>

      <Modal active={opened} setActive={close} isAuthModal={desktop} isDesktop={desktop} isMobile={!desktop}>
        <div className={Styles.container}>
          <button type='button' className={Styles.close} onClick={close}>
            <img src={closeImg} alt='close-button' />
          </button>

          <div className={Styles.upper}>
            <h3 className={Styles.title}>КУПИТЬ LIMC</h3>

            <div className={Styles.prices}>
              <button type='button' className={Styles.price__btn}>
                $300 HitBTC
              </button>
              <button type='button' className={Styles.price__btn}>
                $250
              </button>
            </div>

            <p className={Styles.subtitle}>Старт майнинга с момента покупки</p>
            <a href='https://hitbtc.com/' className={Styles.link}>
              hitbtc.com
            </a>
          </div>

          <div className={Styles.lower}>
            <div className={Styles.currency}>
              <img className={Styles.currency__img} src={usdt} alt='usdt-image' />
              <p className={Styles.currency__title}>USDT</p>
              {/* <MoodalDropdown title='TRON'>
                <form>
                  <div className={Styles.container__flex}>
                    <input type='radio' value='TRON' checked={gender === 'TRON'} onChange={handleChange} /> TRON
                  </div>
                  <div className={Styles.container__flex}>
                    <input type='radio' value='ERC-20' checked={gender === 'ERC-20'} onChange={handleChange} /> ERC-20
                  </div>
                </form>
              </MoodalDropdown> */}
            </div>
            <input className={Styles.input} type='text' defaultValue='2,450.23' />

            <div className={Styles.currency}>
              <img className={Styles.currency__img} src={limc} alt='limc' />
              <p className={Styles.currency__title}>LIMC</p>
            </div>
            <input className={Styles.input} type='text' defaultValue='10,000' />

            <ButtonBig type='button' className={Styles.connect__btn}>
              Подключить кошелек
            </ButtonBig>
          </div>
        </div>
      </Modal>
    </>
  )
}
