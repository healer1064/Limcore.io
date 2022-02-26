import React from 'react'

interface ICloseIconYellow {
  onClick?: () => void
  className?: string
}

export const CloseIconYellow = ({ onClick, className }: ICloseIconYellow) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      className={className}
      onClick={onClick}
    >
      <path
        d='M0.792893 17.7932L0.0857865 18.5003L1.5 19.9145L2.20711 19.2074L0.792893 17.7932ZM19.2069 2.20764L19.914 1.50053L18.4998 0.0863158L17.7927 0.793423L19.2069 2.20764ZM2.20711 0.792893L1.5 0.0857865L0.0857871 1.5L0.792894 2.20711L2.20711 0.792893ZM17.7926 19.2069L18.4998 19.914L19.914 18.4998L19.2069 17.7926L17.7926 19.2069ZM2.20711 19.2074L19.2069 2.20764L17.7927 0.793423L0.792893 17.7932L2.20711 19.2074ZM0.792894 2.20711L17.7926 19.2069L19.2069 17.7926L2.20711 0.792893L0.792894 2.20711Z'
        fill='#FCFF00'
      />
    </svg>
  )
}
