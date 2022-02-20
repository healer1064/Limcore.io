import React, { useEffect, useState, Component } from 'react'
import styles from '../styles.module.scss'

const widthDVDLogo = 195
const heightDVDLogo = 91

// import * as React from "react";

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

export class DvdScreen extends Component<DVDLogoProps, DVDLogoState> {
  constructor(props: DVDLogoProps) {
    super(props)

    this.state = {
      x: DvdScreen.getRandomNumber(0, this.props.width - widthDVDLogo),
      y: DvdScreen.getRandomNumber(0, this.props.height - heightDVDLogo),
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
      <>
        {/* <div className={styles.news__animation_links}> */}
        {/* <a */}
        {/*  href='#' */}
        {/*  className={styles.news__div_links} */}
        {/*  style={{ */}
        {/*    transform: `translate(${Math.random() * x}px, ${Math.random() * y}px)`, */}
        {/*  }} */}
        {/* > */}
        {/*  Telegram &#129125; */}
        {/* </a> */}
        {/* </div> */}
        {/* <div className={styles.news__animation_links}> */}
        <a
          href='#'
          className={styles.news__div_links}
          style={{
            transform: `translate(${this.random(1, 0.9) * x}px, ${this.random(1, 0.9) * y}px)`,
          }}
        >
          YouTube &#129125;
        </a>
        {/* </div> */}
        {/* <div className={styles.news__animation_links}> */}
        <a
          href='#'
          className={styles.news__div_links}
          style={{
            transform: `translate(${x}px, ${y}px)`,
          }}
        >
          Twitter &#129125;
        </a>
        {/* </div> */}
        {/* <div className={styles.news__animation_links}> */}
        {/* <a */}
        {/*  href='#' */}
        {/*  className={styles.news__div_links} */}
        {/*  style={{ */}
        {/*    transform: `translate(${Math.random() * x}px, ${Math.random() * y}px)`, */}
        {/*  }} */}
        {/* > */}
        {/*  Discord &#129125; */}
        {/* </a> */}
        {/* </div> */}
      </>
    )
  }
}
