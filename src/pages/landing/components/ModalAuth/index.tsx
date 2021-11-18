import React from 'react'
import Styles from './styles.module.scss'
import { Modal } from '@components/Purse/PurseMobile/components/Modal'
import { BlackCross } from '@icons/BlackCross'
import { AuthMobile } from '../../../../pages/auth/AuthMobile'

interface IModalAuthProps {
  isVisible: boolean
  setModalClose: () => void
}

const ModalAuth = ({ isVisible, setModalClose }: IModalAuthProps) => {
  return (
    <Modal
      active={isVisible}
      setActive={setModalClose}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
      classname={Styles.modalAuth}
    >
      <div className={Styles.modalAuthInner}>
        <button type='button' className={Styles.close} onClick={setModalClose}>
          <BlackCross />
        </button>
        <AuthMobile />
      </div>
    </Modal>
  )
}

export default ModalAuth
