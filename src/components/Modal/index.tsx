import React from 'react'
// eslint-disable-next-line import/named
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Styles from './style.module.scss'
import { CloseIcon } from './closeIcon'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
)

export const TransitionsModal = (props) => {
  const classes = useStyles()

  const handleClose = () => {
    props.setModalOpened(false)
  }

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={props.isOpenModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.isOpenModal}>
          <div className={Styles.modal_container}>
            <div className={Styles.content}>{props.children}</div>
            <div
              role='presentation'
              onClick={() => {
                props.setModalOpened(false)
              }}
              className={Styles.close_container}
            >
              <CloseIcon />
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
