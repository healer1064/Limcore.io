import React from 'react'
import styles from './styles.module.scss'
import { details1, details2, details3 } from '../../images'
import { DetalizationUp } from './components/DetalizationUp/index'
import { DetalizationDownItem } from './components/DetalizationDownItem'
import useWindowSize from '@helpers/useWindowSizeHook'
import thddIcon from '@icons/thdd.png'
import tsilicoinIcon from '@icons/tsilicoin.png'
import tfloraIcon from '@icons/tflora.png'
import tgreendogeIcon from '@icons/tgreendoge.png'
import tstaiIcon from '@icons/tstai.png'
import tappleIcon from '@icons/tapple.png'
import tmaizeIcon from '@icons/tmaize.png'
import tkaleIcon from '@icons/tkale.png'
import tavacadoIcon from '@icons/tavacado.png'
import tsocksIcon from '@icons/tsocks.png'
import ttacoIcon from '@icons/ttaco.png'
import ttadIcon from '@icons/ttad.png'
import cactusIcon from '@icons/cactusIcon.png'
import covidIcon from '@icons/covidIcon.png'
import senoIcon from '@icons/senoIcon.png'
import chaingreenIcon from '@icons/chaingreen.png'
import goji from '@icons/gojiIcon.png'

export const Details = () => {
  const { width } = useWindowSize()
  const desktop = width >= 768

  const forks = [
    { img: details1, title: 'Chia', subtitle: 'XCH', number: 0, money: '$0' },
    { img: details2, title: 'Flax', subtitle: 'XFX', number: 0, money: '$0' },
    { img: details3, title: 'N-Chain', subtitle: 'NCH', number: 0, money: '$0' },
    { img: tsocksIcon, title: 'Socks', subtitle: 'SOCK', number: 0, money: '$0' },
    { img: tkaleIcon, title: 'Kale', subtitle: 'XKA', number: 0, money: '$0' },
    { img: ttacoIcon, title: 'Taco', subtitle: 'XTX', number: 0, money: '$0' },
    { img: tstaiIcon, title: 'staicoin', subtitle: 'STAI', number: 0, money: '$0' },
    { img: tappleIcon, title: 'Apple', subtitle: 'APPLE', number: 0, money: '$0' },
    { img: goji, title: 'Goji', subtitle: 'GOJ', number: 0, money: '$0' },
    { img: tsilicoinIcon, title: 'Silicoin', subtitle: '', number: 0, money: '$0' },
    { img: chaingreenIcon, title: 'chaingreen', subtitle: '', number: 0, money: '$0' },
    { img: tmaizeIcon, title: 'Maize', subtitle: 'XMZ', number: 0, money: '$0' },
    { img: senoIcon, title: 'Seno', subtitle: 'XSE', number: 0, money: '$0' },
    { img: covidIcon, title: 'Covid', subtitle: 'COV', number: 0, money: '$0' },
    { img: cactusIcon, title: 'Cactus', subtitle: 'CAC', number: 0, money: '$0' },
    { img: thddIcon, title: 'HDDcoin', subtitle: 'HDD', number: 0, money: '$0' },
    { img: tfloraIcon, title: 'FLORA', subtitle: 'NCH', number: 0, money: '$0' },
    { img: tgreendogeIcon, title: 'GreenDoge', subtitle: 'GDOG', number: 0, money: '$0' },
    { img: ttadIcon, title: 'TAD', subtitle: 'TAD', number: 0, money: '$0' },
    { img: tavacadoIcon, title: 'Avocado', subtitle: 'AVO', number: 0, money: '$0' },
  ]

  return (
    <div className={styles.details}>
      <header className={styles.details__header}>
        <DetalizationUp summary='$0' xch='$0' forks='$0' />
      </header>
      {!desktop ? (
        <ul className={styles.detailsList}>
          {forks.map((item) => {
            return (
              <DetalizationDownItem
                img={item.img}
                title={item.title}
                subtitle={item.subtitle}
                number={item.number}
                money={item.money}
                key={Math.random()}
              />
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}
