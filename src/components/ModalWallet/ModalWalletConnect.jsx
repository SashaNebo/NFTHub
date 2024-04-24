import cn from './ModalWallet.module.scss'
import metamask from '../../assets/images/svg/wallets/metamask.svg'
import bitgo from '../../assets/images/svg/wallets/bitgo.svg'
import trust from '../../assets/images/svg/wallets/trust.svg'
import coinbase from '../../assets/images/svg/wallets/coinbase.svg'
import { SvgIcon } from '../SvgIcon'

const ModalWalletConnect = () => {
  const wallets = [
    { img: metamask, text: 'MetaMask' },
    { img: bitgo, text: 'BitGo' },
    { img: trust, text: 'Trust Wallet' },
    { img: coinbase, text: 'Coinbase' },
  ]

  return (
    <div className={cn['connect']}>
      {wallets.map(({ img, text }) => (
        <button className={cn['connect__btn']} key={img}>
          <div className={cn['connect__brand']} key={text}>
            <img src={img} alt='' />
            <span>{text}</span>
          </div>

          <SvgIcon className={cn['icon']} icon='tickRight' />
        </button>
      ))}
    </div>
  )
}

export { ModalWalletConnect }
