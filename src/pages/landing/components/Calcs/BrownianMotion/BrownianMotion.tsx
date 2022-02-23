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
              <span>01 XCH</span>
              <span>$0.001</span>
            </>
          )}
          <span>01 XCH</span>
          <span>$0.001</span>
        </div>
      )}
      {children}
    </div>
  )
}
