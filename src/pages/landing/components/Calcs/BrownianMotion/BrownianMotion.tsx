import { useAppSelector } from '@app/redux/hooks'
import React, { useState, useEffect, useRef } from 'react'
import styles from './styles.module.scss'

interface IBrownianMotion {
  interval: number
  distance: number
  step: number
  children: React.ReactNode
  name: string
}

export const BrownianMotion = ({ interval, children, distance, step, name }: IBrownianMotion) => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 })
  const [showTooltip, setShowTooltip] = useState(false)

  const forksPrice = useAppSelector((state) => state.wallet.forks)

  const { x, y } = coordinates
  const intervalId = useRef(null)
  const maxRotate = 55
  let deg = +(Math.random() * 360).toFixed()

  const newCoordinates = () => {
    setCoordinates((prevState) => {
      deg += +(Math.random() * maxRotate * 2 - maxRotate).toFixed()
      let shift = getShift(deg, step)

      while (Math.abs(prevState.x + shift.x) >= distance || Math.abs(prevState.y + shift.y) >= distance) {
        deg += +(Math.random() * maxRotate * 2 - maxRotate).toFixed()
        shift = getShift(deg, step)
      }

      return {
        x: prevState.x + shift.x,
        y: prevState.y + shift.y,
      }
    })
  }

  const getShift = (deg, step) => {
    return {
      x: +(Math.cos((deg * Math.PI) / 180) * step).toFixed(),
      y: +(Math.sin((deg * Math.PI) / 180) * step).toFixed(),
    }
  }

  const stop = () => {
    clearInterval(intervalId.current)
  }

  const start = () => {
    intervalId.current = setInterval(newCoordinates, interval * 1000)
  }

  useEffect(() => {
    start()

    return () => {
      clearInterval(intervalId.current)
    }
  }, [])

  return (
    <div
      className={styles.container}
      style={{
        position: 'relative',
        transform: `translate(${x}px,${y}px)`,
        transition: `transform ${interval}s linear`,
        backfaceVisibility: 'hidden',
      }}
      onMouseEnter={() => {
        stop()
        setShowTooltip(true)
      }}
      onMouseLeave={() => {
        start()
        setShowTooltip(false)
      }}
    >
      {showTooltip && (
        <div className={styles.tooltip}>
          {name === 'Chia' && (
            <>
              <span>XCH</span>
              <span>${forksPrice.chia}</span>
            </>
          )}
          {name === 'Flax' && (
            <>
              <span>XFX</span>
              <span>${forksPrice.flax}</span>
            </>
          )}
          {name === 'N-Chain' && (
            <>
              <span>NCH</span>
              <span>${forksPrice.nchain}</span>
            </>
          )}
          {name === 'Socks' && (
            <>
              <span>SOCK</span>
              <span>${forksPrice.socks}</span>
            </>
          )}
          {name === 'Kale' && (
            <>
              <span>XKA</span>
              <span>${forksPrice.kale}</span>
            </>
          )}
          {name === 'Taco' && (
            <>
              <span>XTX</span>
              <span>${forksPrice.taco}</span>
            </>
          )}
          {name === 'Stai' && (
            <>
              <span>STAI</span>
              <span>${forksPrice.stai}</span>
            </>
          )}
          {name === 'Apple' && (
            <>
              <span>APPLE</span>
              <span>${forksPrice.apple}</span>
            </>
          )}
          {name === 'Goji' && (
            <>
              <span>XGJ</span>
              <span>${forksPrice.goji}</span>
            </>
          )}
          {name === 'Silicoin' && (
            <>
              <span>SIT</span>
              <span>${forksPrice.silicoin}</span>
            </>
          )}
          {name === 'Chaingreen' && (
            <>
              <span>CGN</span>
              <span>${forksPrice.chaingreen}</span>
            </>
          )}
          {name === 'Maize' && (
            <>
              <span>XMZ</span>
              <span>${forksPrice.maize}</span>
            </>
          )}
          {name === 'Seno' && (
            <>
              <span>XSE</span>
              <span>${forksPrice.seno}</span>
            </>
          )}
          {name === 'Covid' && (
            <>
              <span>COV</span>
              <span>${forksPrice.covid}</span>
            </>
          )}
          {name === 'Cactus' && (
            <>
              <span>CAC</span>
              <span>${forksPrice.cactus}</span>
            </>
          )}
          {name === 'HDDCoin' && (
            <>
              <span>SIT</span>
              <span>${forksPrice.hddcoin}</span>
            </>
          )}
          {name === 'Flora' && (
            <>
              <span>XFL</span>
              <span>${forksPrice.flora}</span>
            </>
          )}
          {name === 'GreenDoge' && (
            <>
              <span>GDOG</span>
              <span>${forksPrice.greendoge}</span>
            </>
          )}
          {name === 'TAD' && (
            <>
              <span>TAD</span>
              <span>${forksPrice.tad}</span>
            </>
          )}
          {name === 'Avocado' && (
            <>
              <span>AVO</span>
              <span>${forksPrice.avocado}</span>
            </>
          )}
        </div>
      )}
      {children}
    </div>
  )
}
