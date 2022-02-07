import React, { useState } from 'react'
import Styles from './styles.module.scss'
import Lottie from 'react-lottie'
import rocketAnim from '@animations/rocket.json'
import popupIcon from '@icons/main_popup_icon.svg'
import { Popover } from '@material-ui/core'

export const MainCaption: React.FC = () => {
  const [isPopupOpened, setIsPopupOpened] = useState(false)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: rocketAnim,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const openPopup = () => setIsPopupOpened(true)
  const closePopup = () => setIsPopupOpened(false)

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>LIMCORE — ракета в сфере облачного майнинга!</h1>
      {/* <Lottie options={defaultOptions} height={400} width={400} />{' '} */}
      <ul className={Styles.list}>
        <li className={Styles.item}>
          <h4 className={Styles.item__title}>1 LIMC $300 HitBTC</h4>
          <p className={Styles.item__subtitle}>Токен по курсу бирж</p>
          <p className={Styles.item__subtitle}>Старт майнинга с момента покупки!</p>
        </li>
        <li className={Styles.item}>
          <h4 className={Styles.item__title}>1 LIMC $250</h4>
          <p className={Styles.item__subtitle}>Токен −15% от курса бирж</p>
          <p className={Styles.item__subtitle}>
            С условиями
            <img
              src={popupIcon}
              alt='Popup'
              className={Styles.item__popup}
              onMouseEnter={handlePopoverOpen}
              // onMouseLeave={handlePopoverClose}
            />
          </p>

          {/* {isPopupOpened && (
            <div className={Styles.popup__container}>
              <p>HI</p>
            </div>
          )} */}

          <Popover
            id='mouse-over-popover'
            // sx={{
            //   pointerEvents: 'none',
            // }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <p style={{ color: '#fff' }}>HI</p>
          </Popover>
        </li>
      </ul>
    </div>
  )
}
