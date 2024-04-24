import cn from './ModalWallet.module.scss'
import { SvgIcon } from '../SvgIcon'

const ModalWalletTop = ({ onClose }) => {
  return (
    <>
      <button className={cn['btn-close']} onClick={onClose}>
        <SvgIcon icon='btnCloseMobileMenu' />
      </button>

      <h1 className={cn['modal__title']}>Connect Wallet</h1>
      <p className={cn['modal__text']}>
        Please select a wallet to connect for start Minting your NFTs
      </p>
    </>
  )
}

export { ModalWalletTop }
