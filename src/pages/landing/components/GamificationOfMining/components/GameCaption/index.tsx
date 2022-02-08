import React from 'react'
import style from './styles.module.scss'

interface GameCaptionProps {
  text: string
}

export const GameCaption: React.FC<GameCaptionProps> = ({ text }) => {
  return <h2 className={style.gameCaption}>{text}</h2>
}
