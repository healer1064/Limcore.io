import React, { Component } from 'react'
import styles from './styles.module.scss'

const widthDVDLogo = 195
const heightDVDLogo = 91

interface DVDLogoState {
  x: number
  y: number
  xSpeed: number
  ySpeed: number
}

interface DVDLogoProps {
  width: any
  height: any
}

export class DvdTwitter extends Component<DVDLogoProps, DVDLogoState> {
  constructor(props: DVDLogoProps) {
    super(props)

    this.state = {
      x: DvdTwitter.getRandomNumber(0, this.props.width - widthDVDLogo),
      y: DvdTwitter.getRandomNumber(0, this.props.height - heightDVDLogo) / 2,
      xSpeed: 1,
      ySpeed: 1,
    }
  }

  static getRandomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min
  }

  componentDidMount() {
    setInterval(() => this.moveDVDLogo(), 0)
  }

  componentWillUnmount(): void {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = () => {}
  }

  moveDVDLogo() {
    this.setState({
      x: this.state.x + this.state.xSpeed,
      y: this.state.y + this.state.ySpeed,
    })

    if (this.state.x + widthDVDLogo >= this.props.width || this.state.x <= 0) {
      this.setState({ xSpeed: -this.state.xSpeed })
    }

    if (this.state.y + heightDVDLogo >= this.props.height || this.state.y <= 0) {
      this.setState({ ySpeed: -this.state.ySpeed })
    }
  }

  random(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  render() {
    const { x, y } = this.state
    return (
      <a
        href='#'
        className={styles.news__div_links}
        style={{
          transform: `translate(${x}px, ${y}px)`,
        }}
      >
        Twitter &#129125;
      </a>
    )
  }
}