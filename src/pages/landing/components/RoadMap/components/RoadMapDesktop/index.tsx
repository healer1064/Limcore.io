import React, { useRef, useState } from 'react'
import Styles from './styles.module.scss'
import { RoadMapItemDesktop } from '../../partsDesktop'
import { ArrowLeft } from '@icons/ArrowLeft'
import { ArrowRight } from '@icons/ArrowRight'

export const RoadMapDesktop = ({ roadMapArray }) => {
  const roadmapRef = useRef<HTMLDivElement>(null)
  const [isArrowHidden, setIsArrowHidden] = useState(true)
  const scrollLeft = () => {
    roadmapRef.current.scrollLeft += 300
    if (roadmapRef.current.scrollLeft !== 0) {
      setIsArrowHidden(false)
    }
  }
  const scrollRight = () => {
    roadmapRef.current.scrollLeft -= 300
    if (roadmapRef.current.scrollLeft === 0) {
      setIsArrowHidden(true)
    }
  }

  return (
    <div className={Styles.container}>
      <span className={Styles.blueLine} />
      <button className={`${Styles.scrollButton} ${Styles.scrollButtonLeft}`} type='button' onClick={scrollLeft}>
        <ArrowRight className={Styles.scrollIcon} />
      </button>
      <button
        className={`${Styles.scrollButton} ${Styles.scrollButtonRight} ${isArrowHidden && Styles.arrowHidden}`}
        type='button'
        onClick={scrollRight}
      >
        <ArrowLeft className={Styles.scrollIcon} />
      </button>
      <div className={Styles.roadMap} ref={roadmapRef}>
        {roadMapArray.map((item, index) => {
          const position = index % 2 === 0 ? 'top' : 'down'

          return (
            <RoadMapItemDesktop
              key={item.id}
              title={item.title}
              date={item.deadline}
              status={item.status}
              vertikal={item.vertikal}
              position={position}
              titleType={item.titleType}
            />
          )
        })}
      </div>
    </div>
  )
}
