import cn from './Hero.module.scss'
import walletImg1 from '../../assets/images/img/wallets/metamask.svg'
import walletImg2 from '../../assets/images/img/wallets/wallet-2.svg'
import walletImg3 from '../../assets/images/img/wallets/wallet-3.svg'
import walletImg4 from '../../assets/images/img/wallets/wallet-4.svg'
import walletImg5 from '../../assets/images/img/wallets/wallet-5.svg'

const HeroWallets = () => {
  const walletItems = [
    walletImg1,
    walletImg2,
    walletImg3,
    walletImg4,
    walletImg5,
  ]

  return (
    <div className={cn['wallets']}>
      {walletItems.map((wallet) => (
        <div className={cn['wallets__item']} key={wallet}>
          <img src={wallet} alt='wallet' />
        </div>
      ))}
    </div>
  )
}

export { HeroWallets }