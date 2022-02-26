/* eslint-disable no-unused-expressions */
import React from 'react'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import { CloseIconYellow } from '@icons/CloseIconYellow'
import { CloseIcon } from '@icons/CloseIcon'
import useWindowSize from '@helpers/useWindowSizeHook'
import { styled } from '@mui/material/styles'

export interface DialogTitleProps {
  id: string
  children?: React.ReactNode
  onClose: () => void
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose } = props

  const { width } = useWindowSize()
  const desktop = width >= 769

  let styles = null

  desktop
    ? (styles = {
        position: 'absolute',
        top: 8,
        right: 8,
        color: (theme) => theme.palette.grey[500],
      })
    : (styles = {
        position: 'absolute',
        top: 20,
        right: 20,
        color: (theme) => theme.palette.grey[500],
      })

  const BootstrapDialogTitle = styled(DialogTitle)({
    '&.MuiDialogTitle-root': {
      '@media (max-width:768px)': {
        padding: '26px 0',
        maxHeight: '73px',
        height: '100%',
        borderBottom: '2px solid #112022',
      },
    },
  })

  return (
    <BootstrapDialogTitle>
      {children}
      {onClose ? (
        <IconButton onClick={onClose} sx={styles}>
          {desktop ? <CloseIcon /> : <CloseIconYellow />}
        </IconButton>
      ) : null}
    </BootstrapDialogTitle>
  )
}

export default BootstrapDialogTitle
