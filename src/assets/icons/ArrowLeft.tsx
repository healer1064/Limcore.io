import React from 'react'

interface IInfoIconProps {
  className?: string
}

export const ArrowLeft = ({ className }: IInfoIconProps) => {
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
        d='M8.26758 15.0282L1.50701 8.26764L8.26758 1.50708'
        stroke='#4A70F8'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
