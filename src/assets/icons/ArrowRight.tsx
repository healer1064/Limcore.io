import React from 'react'

interface IInfoIconProps {
  className?: string
}

export const ArrowRight = ({ className }: IInfoIconProps) => {
  return (
    <svg
      width='10'
      height='17'
      viewBox='0 0 10 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M1.73242 15.0282L8.49299 8.26764L1.73242 1.50708'
        stroke='#4A70F8'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
