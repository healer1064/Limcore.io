import React from 'react'

interface IHarvesterArrow {
  className?: string
}

const HarvesterArrow = ({ className }: IHarvesterArrow) => {
  return (
    <svg className={className} width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M11.1426 1.14258L5.99972 6.85686L0.856867 1.14258' stroke='#151F20' strokeWidth='1.3' />
    </svg>
  )
}

export default HarvesterArrow