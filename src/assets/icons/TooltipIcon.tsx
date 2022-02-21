import React from 'react'

interface ITooltipIconProps {
  className?: string
}

export const TooltipIcon = ({ className }: ITooltipIconProps) => {
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M8.99935 0.666672C4.40685 0.666672 0.666016 4.4075 0.666016 9.00001C0.666016 13.5925 4.40685 17.3333 8.99935 17.3333C13.5919 17.3333 17.3327 13.5925 17.3327 9.00001C17.3327 4.4075 13.5919 0.666672 8.99935 0.666672ZM8.99935 2.33334C12.6911 2.33334 15.666 5.30824 15.666 9.00001C15.666 12.6918 12.6911 15.6667 8.99935 15.6667C5.30758 15.6667 2.33268 12.6918 2.33268 9.00001C2.33268 5.30824 5.30758 2.33334 8.99935 2.33334ZM8.16602 4.83334V6.50001H9.83268V4.83334H8.16602ZM8.16602 8.16667V13.1667H9.83268V8.16667H8.16602Z'
        fill='#A5AAA4'
      />
    </svg>
  )
}
