import cn from './ModalWallet.module.scss'
import { portal } from '../../helpers'
import { createMyPortal } from '../../utils'

const ModalWallet = ({ onClose }) => {
  const modalWallet = (
    <div className={cn['wrapper']}>
      <div className={cn['modal-wallet']} onClick={(e) => e.stopPropagation()}>
        Modal
        <button className={cn['btn-close']} onClick={onClose}>
          close
        </button>
      </div>
    </div>
  )

  return createMyPortal(modalWallet, portal)
}

export { ModalWallet }
