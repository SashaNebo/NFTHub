import { Link } from 'react-router-dom'

import cn from './Header.module.scss'
import { socialList } from './additional'
import { SvgIcon } from '../SvgIcon'

const HeaderSocial = () => {
  return (
    <ul className={cn['social']}>
      {socialList.map((social) => (
        <li className={cn['social__item']} key={social}>
          <Link
            to={`https://${social}.com`}
            className={cn['social__link']}
            target='_blank'>
            <SvgIcon className={cn['social__icon']} icon={social} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export { HeaderSocial }
