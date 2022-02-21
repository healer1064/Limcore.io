import React from 'react'

interface CheckMarkWhiteProps {
  className: any
  checked: boolean
}

export const CheckMarkWhite: React.FC<CheckMarkWhiteProps> = ({ className, checked }) => {
  return (
    <svg
      width='19'
      height='16'
      viewBox='0 0 19 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        style={{ transition: 'all 0.5s ease' }}
        d='M1 8.94444L5.76 14L18 1'
        stroke={checked ? '#192a2c' : '#e1e1d8'}
        strokeWidth='2'
      />
    </svg>
  )
}
