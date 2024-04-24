import { useState } from 'react'

import cn from './Header.module.scss'
import { SvgIcon } from '../../SvgIcon'
import { ModalWallet } from '../../ModalWallet/ModalWallet'

const HeaderSocial = () => {
  const socialItems = ['twitter', 'discord', 'instagram', 'wallet']
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <ul className={cn['social']}>
      {socialItems.map((socialItem) => (
        <li className={cn['social__item']} key={socialItem}>
          <>
            {socialItem === 'wallet' ? (
              <button
                className={cn['social__link']}
                onClick={() => setIsOpenModal(true)}>
                <SvgIcon icon={socialItem} />
              </button>
            ) : (
              <a
                className={cn['social__link']}
                href={`https://${socialItem}.com`}
                target='_blank'>
                <SvgIcon icon={socialItem} />
              </a>
            )}
          </>
        </li>
      ))}

      <ModalWallet isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
    </ul>
  )
}

export { HeaderSocial }
