import { Link } from 'react-router-dom'

import cn from './Header.module.scss'
import { SvgIcon } from '../../SvgIcon'

const HeaderSocial = () => {
  const socialItems = ['twitter', 'discord', 'instagram', 'wallet']

  return (
    <ul className={cn['social']}>
      {socialItems.map((socialItem) => (
        <li className={cn['social__item']} key={socialItem}>
          <Link
            className={cn['social__link']}
            to={`https://${socialItem}.com`}
            target='_blank'>
            <SvgIcon icon={socialItem} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export { HeaderSocial }
