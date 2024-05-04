import cn from './Brand.module.scss'
import { CustomLink } from '../../components/CustomLink'
import { baseRoute } from '../../routes'

import metamask from '../../assets/images/svg/wallets-brands/metamask.svg'
import metamaskLight from '../../assets/images/svg/wallets-brands/metamask-light.svg'

import bitgo from '../../assets/images/svg/wallets-brands/bitgo.svg'
import bitgoLight from '../../assets/images/svg/wallets-brands/bitgo-light.svg'

import coinbase from '../../assets/images/svg/wallets-brands/coinbase.svg'
import coinbaseLight from '../../assets/images/svg/wallets-brands/coinbase-light.svg'

import trust from '../../assets/images/svg/wallets-brands/trust.svg'
import trustLight from '../../assets/images/svg/wallets-brands/trust-light.svg'

import exodus from '../../assets/images/svg/wallets-brands/exodus.svg'
import exodusLight from '../../assets/images/svg/wallets-brands/exodus-light.svg'

const Brand = () => {
  const wallets = [metamask, bitgo, coinbase, trust, exodus]
  const walletsLight = [
    metamaskLight,
    bitgoLight,
    coinbaseLight,
    trustLight,
    exodusLight,
  ]

  return (
    <section className={cn['brand']}>
      <div className='container'>
        <div className={cn['brand__content']}>
          <ul className={cn['brand__list']}>
            {wallets.map((wallet, i) => (
              <li className={cn['brand__item']} key={wallet}>
                <CustomLink className={cn['brand__link']} to={baseRoute}>
                  <img src={wallet} alt='wallet' decoding="async" />
                </CustomLink>

                <CustomLink className={[cn['brand__link'], cn['dark']].join(' ')} to={baseRoute}>
                  <img src={walletsLight[i]} alt='wallet' decoding="async" />
                </CustomLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export { Brand }
