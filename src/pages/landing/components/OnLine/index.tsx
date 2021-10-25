import React from 'react'
import Styles from './styles.module.scss'
import camera from '@icons/camera.svg'
import img1 from '@images/test/video1.png'
import img2 from '@images/test/video2.png'
import img3 from '@images/test/video3.png'
import img4 from '@images/test/video4.png'

export const OnLine = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <h2 className={Styles.title}>
          On-line
          <img src={camera} alt='camera' />
        </h2>
        <div className={Styles.video__container}>
          <img src={img1} alt='video' />
          <img src={img2} alt='video' />
          <img src={img3} alt='video' />
          <img src={img4} alt='video' />
          <div className={Styles.icon} />
        </div>
      </div>
    </div>
  )
}
