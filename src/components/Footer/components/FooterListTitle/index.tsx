import React from 'react'

interface IFooterListTitle {
  children?: string
  className: string
}

export const FooterListTitle = ({ children, className }: IFooterListTitle) => {
  return <h3 className={className}>{children}</h3>
}
