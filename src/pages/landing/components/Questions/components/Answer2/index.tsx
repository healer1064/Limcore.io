import React from 'react'
import Styles from './styles.module.scss'

export const Answer2 = () => {
  return (
    <>
      <p className={Styles.text}>Например, услугами Limcore воспользовались два пользователя.</p>
      <p className={Styles.text}>Первый пользователь владеет 1 LIMC, второй 2 LIMC.</p>
      <p className={Styles.text}>ЦОД компании Limcore добыл 1200 Chia coin за 24 часа.</p>
      <p className={Styles.text}>
        Limcore оставляет за собой 15% — 150 Chia coin для эксплуатационных расходов и затрат на электроэнергию.
      </p>
      <p className={Styles.text}>Первый пользователь получит ⅓ от 850 Chia coin — 340 Chia coin.</p>
      <p className={Styles.text}>Второй пользователь получит ⅔ от 850 Chia coin — 680 Chia coin.</p>
    </>
  )
}
