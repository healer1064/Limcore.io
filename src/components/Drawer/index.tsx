import React from 'react'
import { SwipeableDrawer } from '@material-ui/core'

export const DrawerPanel = ({ width, height = '100%', anchor, open, children, onClose, scrollbar = false }) => {
  return (
    <SwipeableDrawer onOpen={() => {}} anchor={anchor} open={open} onClose={onClose}>
      <div style={{ width, height, overflow: 'auto' }} className={scrollbar ? 'block-scroll' : ''}>
        {children}
      </div>
    </SwipeableDrawer>
  )
}
