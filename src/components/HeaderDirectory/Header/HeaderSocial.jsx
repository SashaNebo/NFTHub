import { useState } from 'react'
import { Link } from 'react-router-dom'

import cn from './Header.module.scss'
import { SvgIcon } from '../../SvgIcon'
import { ModalWallet } from '../../ModalWallet/ModalWallet'

const HeaderSocial = () => {
  const socialItems = ['twitter', 'discord', 'instagram', 'wallet']
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ul className={cn['social']}>
      {socialItems.map((socialItem) => (
        <li className={cn['social__item']} key={socialItem}>
          <>
            {socialItem === 'wallet' ? (
              <button
                className={cn['social__link']}
                onClick={() => setIsOpen(true)}>
                <SvgIcon icon={socialItem} />
              </button>
            ) : (
              <Link
                className={cn['social__link']}
                to={`https://${socialItem}.com`}
                target='_blank'>
                <SvgIcon icon={socialItem} />
              </Link>
            )}
          </>
        </li>
      ))}

      {isOpen && <ModalWallet onClose={() => setIsOpen(false)} />}
    </ul>
  )
}

export { HeaderSocial }
