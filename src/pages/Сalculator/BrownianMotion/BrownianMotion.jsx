import React from 'react'

export const data = [
  {
    color: 'white',
    diameter: 20,
    position: {
      left: 50,
      top: 50,
    },
    interval: 1,
    distance: 100,
    step: 40,
  },
  {
    color: 'white',
    diameter: 20,
    position: {
      left: 500,
      top: 250,
    },
    interval: 1,
    distance: 100,
    step: 40,
  },
  {
    color: 'white',
    diameter: 20,
    position: {
      left: 500,
      top: 100,
    },
    interval: 1,
    distance: 100,
    step: 40,
  },
  {
    color: 'white',
    diameter: 20,
    position: {
      left: 300,
      top: 200,
    },
    interval: 1,
    distance: 100,
    step: 40,
  },
  {
    color: 'white',
    diameter: 20,
    position: {
      left: 200,
      top: 300,
    },
    interval: 1,
    distance: 100,
    step: 40,
  },
  {
    color: 'white',
    diameter: 20,
    position: {
      left: 500,
      top: 300,
    },
    interval: 1,
    distance: 100,
    step: 40,
  },
  {
    color: 'blue',
    diameter: 20,
    position: {
      left: 50,
      top: 300,
    },
    interval: 1,
    distance: 100,
    step: 40,
  },
  {
    color: 'white',
    diameter: 20,
    position: {
      left: 600,
      top: 200,
    },
    interval: 1,
    distance: 100,
    step: 40,
  },
  {
    color: 'white',
    diameter: 40,
    position: {
      left: 450,
      top: 0,
    },
    interval: 1,
    distance: 300,
    step: 40,
  },
  {
    color: 'white',
    diameter: 40,
    position: {
      left: 500,
      top: 100,
    },
    interval: 1,
    distance: 100,
    step: 40,
  },
  {
    color: 'white',
    diameter: 40,
    position: {
      left: 150,
      top: 30,
    },
    interval: 1,
    distance: 100,
    step: 40,
  },
]
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
          // 'backface-visibility': 'hidden',
        }}
      >
        {children}
      </div>
    )
  }
}
// export const BrownianMotion = (props) => {
//   const maxRotate = 55
//   const deg = +(Math.random() * 360).toFixed()
//   const [corX, setCorX] = useState(0)
//   const [corY, setCorY] = useState(0)
//   const componentDidMount =()
//   return <div className={styles.calc__click_zona} />
// }
// <div className={styles.calc__click_image_prem} />
// <div className={styles.calc__click_image} />
// <div className={styles.calc__click_image} />
// <div className={styles.calc__click_image} />
// <div className={styles.calc__click_image} />
// <div className={styles.calc__click_image} />
// <div className={styles.calc__click_image} />
// <div className={styles.calc__click_image} />
// <div className={styles.calc__click_image} />
// <div className={styles.calc__click_image_two} />
// <div className={styles.calc__click_image_three} />
