import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import { DvdTelegram } from './DvdTelegram'
import { DvdTwitter } from './DvdTwitter'
import { DvdDiscord } from './DvdDiscord'
import { DvdYoutube } from './DvdYoutube'
import useWindowSize from '../../../../../helpers/useWindowSizeHook'

export const DvdScreen = () => {
  const { width } = useWindowSize()

  const mobileCondition = width <= 768

  const containerRef = useRef(null)

  const [containerWidth, setContainerWidth] = useState<number>(370)

  useEffect(() => {
    setContainerWidth(() => containerRef.current.clientWidth)
    const updateContainerWidth = () => {
      setContainerWidth(() => containerRef.current.clientWidth)
    }
    window.addEventListener('resize', updateContainerWidth)
    return () => window.removeEventListener('resize', updateContainerWidth)
  }, [])

  return (
    <div className={styles.container} id='dvdanim' ref={containerRef}>
      {!mobileCondition && <DvdTelegram width={containerWidth} height={560} />}
      {!mobileCondition && <DvdTwitter width={containerWidth} height={560} />}
      {!mobileCondition && <DvdYoutube width={containerWidth} height={560} />}
      {!mobileCondition && <DvdDiscord width={containerWidth} height={560} />}
    </div>
  )
}

// import React, { useEffect, useRef, useState } from 'react'
// import styles from './styles.module.scss'

// export const DvdScreen = () => {
//   const containerRef = useRef<HTMLUListElement>(null)

// const [topleft, setTopleft] = useState(0)
// const [topRight, setTopRight] = useState(0)

// const [bottomLeft, setBottomLeft] = useState(0)
// const [bottomRight, setBottomRight] = useState(0)

//   const [height, setHeight] = useState(0)
//   const [width, setWidth] = useState(0)

//   useEffect(() => {
//     if (containerRef.current) {
//       setHeight(containerRef.current.clientHeight)
//       setWidth(containerRef.current.clientWidth)
//     }
//   }, [containerRef.current])

//   const moveDVDLogo = () => {
//     setX((prev) => prev + xSpeed)
//     setY((prev) => prev + ySpeed)

//     if (x + widthDVDLogo >= width || x <= 0) {
//       setXSpeed((prev) => -prev)
//     }

//     if (y + heightDVDLogo >= height || y <= 0) {
//       setYSpeed((prev) => -prev)
//     }
//   }

//   return (
//     <ul className={styles.list} ref={containerRef}>
//       <li>
//         <a href='#' className={styles.item} style={{ transform: `translate(${height / 2}px, ${0}px)` }}>
//           Telegram &#129125;
//         </a>
//       </li>
//       <li>
//         <a href='#' className={styles.item}>
//           Instagram &#129125;
//         </a>
//       </li>
//       <li>
//         <a href='#' className={styles.item}>
//           Twitter &#129125;
//         </a>
//       </li>
//       <li>
//         <a href='#' className={styles.item}>
//           Discord &#129125;
//         </a>
//       </li>
//     </ul>
//   )
// }
