import React from 'react'

interface Imodal {
  modal: boolean
  styles: any
}

const blockStyles = {
  backgroundColor: 'rgba(0, 0, 0, 0.25)',
  borderTopLeftRadius: '26px',
}

export const Modal = ({ modal, styles }: Imodal) => {
  return (
    <div className={modal ? styles.calc__warn : styles.calc__warn_active} style={blockStyles}>
      <p className={styles.calc__warn_text}> без учета перспектив роста стоимости активов</p>
    </div>
  )
}
