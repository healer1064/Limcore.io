import React, { Component } from 'react'
import { useDvdScreenSaver, DvdScreensaver } from 'react-dvd-screensaver'
import styles from '../styles.module.scss'

// // import * as React from 'react'
//
// interface DVDLogoState {
//   x: number
//   y: number
//   xSpeed: number
//   ySpeed: number
// }
//
// interface DVDLogoProps {
//   width: number
//   height: number
// }
//
// const MS_PER_FRAME = 5
// const widthDVDLogo = 195
// const heightDVDLogo = 91
//
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
//       <>
//         <a href='#' className={styles.news__div_links} style={{ top: 0, left: 0, transform: `translate(${x}, ${y})` }}>
//           Telegram &#129125;
//         </a>
//       </>
//     )
//   }
// }

export const DvdScreen = () => {
  const dvdScreenSaver = useDvdScreenSaver({ speed: 0.1 })
  return (
    <div className={styles.news__animation_links}>
      <div className={styles.news__position__absolute}>
        <DvdScreensaver className={styles.dvd__screen}>
          <a href='#' className={styles.news__div_links} style={{ top: 0, left: 0 }}>
            Telegram &#129125;
          </a>
        </DvdScreensaver>
      </div>
      <div className={styles.news__position__absolute}>
        <DvdScreensaver className={styles.dvd__screen}>
          <a href='#' className={styles.news__div_links} style={{ top: 0, right: 0 }}>
            Twitter &#129125;
          </a>
        </DvdScreensaver>
      </div>
      <div className={styles.news__position__absolute}>
        <DvdScreensaver className={styles.dvd__screen}>
          <a href='#' className={styles.news__div_links} style={{ bottom: 0, left: 0 }}>
            YouTube &#129125;
          </a>
        </DvdScreensaver>
      </div>
      <div className={styles.news__position__absolute}>
        <DvdScreensaver className={styles.dvd__screen}>
          <a href='#' className={styles.news__div_links} style={{ bottom: 0, right: 0 }}>
            Discord &#129125;
          </a>
        </DvdScreensaver>
      </div>
    </div>
  )
}
