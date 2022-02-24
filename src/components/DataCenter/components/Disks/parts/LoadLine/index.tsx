import React, { FC } from 'react'

interface ILoadLine {
  className: string
  classNameBar: string
  width: string
}

export const LoadLine: FC<ILoadLine> = ({ className, width, classNameBar }) => {
  return (
    <div className={className}>
      <div className={classNameBar} style={{ width }} />
    </div>
  )
}
