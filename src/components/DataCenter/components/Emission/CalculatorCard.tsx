import React from 'react'

export interface IEmission {
  desktop: boolean
}

export const Emission: React.FC<IEmission> = ({ desktop }) => {
  return (
    <>
      {desktop ? (
        <>
          <div>DESKTOP_EMISSION_TABLE/CHART</div>
          <div>DESKTOP_WALLET_TABLE</div>
        </>
      ) : (
        <>
          <div>MOBILE_EMISSION_TABLE/CHART</div>
          <div>MOBILE_WALLET_TABLE</div>
        </>
      )}
    </>
  )
}
