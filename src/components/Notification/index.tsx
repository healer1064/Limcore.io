import React, { forwardRef, useCallback } from 'react'
import styles from './style.module.scss'
import { useSnackbar, SnackbarContent } from 'notistack'
import successIcon from '@icons/successIcon.svg'
import errorIcon from '@icons/errorIcon.svg'

// eslint-disable-next-line react/display-name
export const SlideNotification = forwardRef<HTMLDivElement, { id: string | number; message: string; type: string }>(
  (props, ref) => {
    const { closeSnackbar } = useSnackbar()

    const handleDismiss = useCallback(() => {
      closeSnackbar(props.id)
    }, [props.id, closeSnackbar])

    return (
      <SnackbarContent ref={ref}>
        <div className={styles.slide_notification} onClick={handleDismiss}>
          <div className={styles.slide_notification__content}>
            <img
              className={styles.slide_notification__icon}
              src={props?.type === 'success' ? successIcon : errorIcon}
              alt='icon'
            />
            <span className={styles.slide_notification__text}>{props?.message}</span>
          </div>
        </div>
      </SnackbarContent>
    )
  },
)
