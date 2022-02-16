import React, { useEffect, useState } from 'react'
import { useDvdScreenSaver, DvdScreensaver } from 'react-dvd-screensaver'
import styles from '../styles.module.scss'

interface DVDLogoState {
  x: number
  y: number
  xSpeed: number
  ySpeed: number
}

interface DVDLogoProps {
  width: number
  height: number
}

const MS_PER_FRAME = 5
const widthDVDLogo = 195
const heightDVDLogo = 91
const width = 900
const height = 500
// export class DvdScreen extends Component<DVDLogoProps, DVDLogoState> {
//   constructor(props: DVDLogoProps) {
//     super(props)
//
//     this.state = {
//       x: DvdScreen.getRandomNumber(0, this.props.width - widthDVDLogo),
//       y: DvdScreen.getRandomNumber(0, this.props.height - heightDVDLogo),
//       xSpeed: 1,
//       ySpeed: 1,
//     }
//   }
//
//   static getRandomNumber(min: number, max: number): number {
//     return Math.random() * (max - min) + min
//   }
//
//   componentDidMount() {
//     setInterval(() => this.moveDVDLogo(), MS_PER_FRAME)
//   }
//
//   moveDVDLogo() {
//     this.setState({
//       x: this.state.x + this.state.xSpeed,
//       y: this.state.y + this.state.ySpeed,
//     })
//
//     if (this.state.x + widthDVDLogo >= this.props.width || this.state.x <= 0) {
//       this.setState({ xSpeed: -this.state.xSpeed })
//     }
//
//     if (this.state.y + heightDVDLogo >= this.props.height || this.state.y <= 0) {
//       this.setState({ ySpeed: -this.state.ySpeed })
//     }
//   }
//
//   render() {
//     const { x, y } = this.state
//     return (
//       <div
//         style={{
//           width: 196,
//           height: 91,
//           position: 'absolute',
//           transition: `transform(${x}, ${y})`,
//         }}
//       >
//         <a href='#' className={styles.news__div_links}>
//           Telegram &#129125;
//         </a>
//       </div>
//     )
//   }
// }
//
export const DvdScreen = () => {
  const [x, setX] = useState(Math.random() * (0 - width - widthDVDLogo) + width - widthDVDLogo)
  const [y, setY] = useState(Math.random() * (0 - height - heightDVDLogo) + height - heightDVDLogo)

  const [xSpeed, setXSpeed] = useState(1)
  const [ySpeed, setYSpeed] = useState(1)

  const moveLinks = () => {
    setX(x + xSpeed)
    setY(y + ySpeed)
    if (x + widthDVDLogo >= width || x <= 0) {
      setXSpeed(-xSpeed)
    }

    if (y + heightDVDLogo >= height || y <= 0) {
      setYSpeed(-ySpeed)
    }
  }

  const changeCor = (x, y) => {
    // console.log(`{ transform: translate(${x}, ${y}) }`)
    return { transform: `translate(${x}px, ${y}px)` }
  }

  useEffect(() => {
    setInterval(() => {
      moveLinks()
    }, MS_PER_FRAME)
  })

  useEffect(() => {
    changeCor(x, y)
  }, [x, y])

  return (
    <div className={styles.news__animation_links}>
      <div className={styles.news__position__absolute}>
        <a href='#' className={styles.news__div_links} style={changeCor(x, y)}>
          Telegram &#129125;
        </a>
      </div>
    </div>
  )
}
