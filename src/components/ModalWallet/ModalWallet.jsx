import { useEffect } from 'react'
import clsx from 'clsx'

import cn from './ModalWallet.module.scss'
import { portal } from '../../helpers'
import { createMyPortal } from '../../utils'
import { ModalWalletConnect } from './ModalWalletConnect'
import { ModalWalletTop } from './ModalWalletTop'

const ModalWallet = ({ isOpen, onClose }) => {
  useEffect(() => {
    isOpen && document.body.classList.add('scroll-none')
    !isOpen && document.body.classList.remove('scroll-none')
  }, [isOpen])

  const modalWallet = (
    <div className={clsx(cn['overlay'], isOpen && cn['open'])} onClick={onClose}>
      <div className={clsx(cn['modal'], isOpen && cn['open'])} onClick={(e) => e.stopPropagation()}>
        <div className={cn['modal__wrapper']}>
          <div className={cn['modal__content']}>
            
            <ModalWalletTop onClose={onClose} />
            <ModalWalletConnect />

            <p className={cn['modal__privacy']}>
              By connecting your wallet, you agree to our Terms of Service and
              our Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  return createMyPortal(modalWallet, portal)
}

export { ModalWallet }
