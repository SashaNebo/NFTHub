import { Link } from 'react-router-dom'

import { SvgIcon } from '../../SvgIcon'
import cn from './Navbar.module.scss'

const NavbarSocial = () => {
  const socialItems = [
    'facebook',
    'twitter',
    'instagram',
    'discord',
    'telegram',
  ]

  return (
    <ul className={cn['navbar__social']}>
      {socialItems.map((soc) => (
        <Link
          to={`https://${soc}.com`}
          className={cn['navbar__social-item']}
          key={soc}
          target='_blank'>
          <SvgIcon icon={soc} />
        </Link>
      ))}
    </ul>
  )
}

export { NavbarSocial }
