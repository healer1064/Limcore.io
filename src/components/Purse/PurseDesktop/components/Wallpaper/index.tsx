import React from 'react'
import styles from './styles.module.scss'

export const Wallpaper: React.FC = () => {
  return (
    <svg
      className={styles.wallpaper}
      width='2100'
      height='369'
      viewBox='0 0 2100 369'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='2100' height='369' fill='url(#paint0_radial_2192:22594)' />
      <defs>
        <radialGradient
          id='paint0_radial_2192:22594'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(0.000100437 369) rotate(-43.463) scale(514.62 608.08)'
        >
          <stop stopColor='white' />
          <stop offset='1' stopColor='#EDF1FF' />
        </radialGradient>
      </defs>
    </svg>
  )
}
