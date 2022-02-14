import React from 'react'
import { StyledCell } from '../StyledCell/index'

export const AddressCell = ({ className, open, address }) => {
  function adressFormatter(address: string) {
    if (address.length > 26) {
      return address.substr(0, 16) + '...' + address.substr(address.length - 10, address.length)
    }
    return address
  }

  return (
    <StyledCell open={open} className={className}>
      {adressFormatter(address)}
    </StyledCell>
  )
}
