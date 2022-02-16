import React from 'react'

interface ITelegram {
  className?: string
  width?: number
  height?: number
}

export const Telegram = ({ className, width, height }: ITelegram) => {
  return (
    <a href='https://t.me/limc_russ' target='_blank' rel='noopener noreferrer'>
      <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 36 30' className={className}>
        <path d='M14.2302 19.6196L13.6532 27.7341C14.4786 27.7341 14.8361 27.3796 15.2648 26.9538L19.1346 23.2555L27.1532 29.1277C28.6238 29.9473 29.6599 29.5157 30.0566 27.7748L35.32 3.11165L35.3214 3.1102C35.7879 0.936259 34.5353 0.086156 33.1024 0.619469L2.1645 12.4642C0.0530446 13.2838 0.0850143 14.4609 1.80557 14.9942L9.71516 17.4544L28.0876 5.95841C28.9522 5.38586 29.7384 5.70265 29.0917 6.2752L14.2302 19.6196Z' />
      </svg>
    </a>
  )
}
