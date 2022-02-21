import React from 'react'
import logoIcon from '../../../../assets/images/FooterLogo.svg'

interface IFooterLogo {
  className?: string
}

export const FooterLogo = ({ className }: IFooterLogo) => {
  return (
    <a href='/' className={className} target='blank' rel='noopener noreferrer'>
      <img src={logoIcon} alt='Лого' />
    </a>
  )
}
