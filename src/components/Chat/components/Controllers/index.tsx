import React from 'react'
import styles from './styles.module.scss'
import { useAppSelector } from '@app/redux/hooks'
import { useChat } from '@components/Chat/utils/useChat'
import { MenuItem, Menu, styled } from '@material-ui/core'
import deleteIcon from '@icons/trash.svg'
import blockIcon from '@icons/block.svg'

interface IControllers {
  anchorEl: any
  open: boolean
  onClose: any
}

const StyledMenu = styled((props) => <Menu className={styles.list} elevation={0} {...props} />)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 14,
    marginTop: theme.spacing(1),
    minWidth: 180,
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '0',
    },
    '& .MuiList-padding': {
      padding: '0',
    },
  },
}))

export const Controllers = ({ anchorEl, open, onClose }: IControllers) => {
  const { deleteMessage, blockUser } = useChat()
  const slug = useAppSelector((state) => state.chat.currentSlug)
  const userId = useAppSelector((state) => state.user.userData.id)
  const currentMessageUserId = useAppSelector((state) => state.chat.currentClickedUser)
  const currentMessageId = useAppSelector((state) => state.chat.currentClickedMessage)

  const onMessageDelete = () => {
    console.log(`Delete message #${currentMessageId}`)
    deleteMessage(currentMessageId)
    onClose()
  }

  const onUserBlock = () => {
    console.log(`Block user #${currentMessageUserId}`)
    blockUser(currentMessageUserId, slug)
    onClose()
  }

  return (
    <StyledMenu id='basic-menu' anchorEl={anchorEl} open={open} onClose={() => onClose(null)}>
      <MenuItem onClick={onMessageDelete}>
        <img src={deleteIcon} alt='Del' className={styles.icon} />
        Delete message
      </MenuItem>
      {userId !== currentMessageUserId && (
        <MenuItem onClick={onUserBlock}>
          <img src={blockIcon} alt='Del' className={styles.icon} />
          Block user
        </MenuItem>
      )}
    </StyledMenu>
  )
}
