import React from 'react'
import Styles from './styles.module.scss'
import { Modal } from '@components/Purse/PurseMobile/components/Modal'
import AuthComponent from '../../../auth/components/Auth/Auth'

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
      crossFlag
    >
      <div className={Styles.modalAuthInner}>
        <AuthComponent />
      </div>
    </Modal>
  )
}

export default ModalAuth
