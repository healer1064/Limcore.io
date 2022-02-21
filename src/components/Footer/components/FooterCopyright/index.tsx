import React from 'react'

interface IFooterCopyright {
  className: string
}

export const FooterCopyright = ({ className }: IFooterCopyright) => {
  return (
    <p className={className}>
      &copy;
      {` ${new Date().getFullYear()} LimCore`}
    </p>
  )
}
