import React from 'react'

interface TwtIconProp {
  isSync: boolean
}

export const TwtIcon = ({ isSync }: TwtIconProp) => {
  return isSync ? (
    <svg width='64' height='64' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M37 69C54.6731 69 69 54.6731 69 37C69 19.3269 54.6731 5 37 5C19.3269 5 5 19.3269 5 37C5 54.6731 19.3269 69 37 69Z'
        fill='#3375BB'
      />
      <path
        d='M37.2268 19C43.5509 24.2816 50.803 23.9559 52.8751 23.9559C52.4218 53.9937 48.9684 48.0373 37.2268 56.46C25.4852 48.0373 22.0534 53.9937 21.6001 23.9559C23.6506 23.9559 30.9027 24.2816 37.2268 19Z'
        stroke='white'
        strokeWidth='4'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle cx='37' cy='37' r='36' stroke='#4DBE28' strokeWidth='2' />
    </svg>
  ) : (
    <svg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64Z'
        fill='#3375BB'
      />
      <path
        d='M32.2268 14C38.5509 19.2816 45.803 18.9559 47.8751 18.9559C47.4218 48.9937 43.9684 43.0373 32.2268 51.46C20.4852 43.0373 17.0534 48.9937 16.6001 18.9559C18.6506 18.9559 25.9027 19.2816 32.2268 14Z'
        stroke='white'
        strokeWidth='4'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
