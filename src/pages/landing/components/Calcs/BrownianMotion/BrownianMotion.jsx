import React from 'react'

export class BrownianMotion extends React.Component {
  constructor(props) {
    super(props)

    this.maxRotate = 55
    this.deg = +(Math.random() * 360).toFixed()
    this.state = { x: 0, y: 0 }
  }

  componentDidMount() {
    const { interval, distance, step } = this.props
    const { maxRotate, getShift } = this

    setInterval(() => {
      this.setState((prevState) => {
        this.deg += +(Math.random() * maxRotate * 2 - maxRotate).toFixed()
        let shift = getShift(this.deg, step)
        while (Math.abs(prevState.x + shift.x) >= distance || Math.abs(prevState.y + shift.y) >= distance) {
          this.deg += +(Math.random() * maxRotate * 2 - maxRotate).toFixed()
          shift = getShift(this.deg, step)
        }
        return {
          x: prevState.x + shift.x,
          y: prevState.y + shift.y,
        }
      })
    }, interval * 1000)
  }

  componentWillUnmount() {
    clearInterval()
  }

  getShift = (deg, step) => {
    return {
      x: +(Math.cos((deg * Math.PI) / 180) * step).toFixed(),
      y: +(Math.sin((deg * Math.PI) / 180) * step).toFixed(),
    }
  }

  render() {
    const { interval, children } = this.props
    const { x, y } = this.state

    return (
      <div
        style={{
          transform: `translate(${x}px,${y}px)`,
          transition: `transform ${interval}s linear`,
          backfaceVisibility: 'hidden',
        }}
      >
        {children}
      </div>
    )
  }
}
