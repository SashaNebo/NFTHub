import { Link } from 'react-router-dom'

import cn from './Header.module.scss'
import { SvgIcon } from '../../SvgIcon'
import { baseRoute } from '../../../routes'
import { HeaderNav } from './HeaderNav'
import { HeaderSocial } from './HeaderSocial'

const HeaderContent = () => {
  return (
    <div className={cn['header__content']}>
      <Link className={cn['header__logo']} to={baseRoute}>
        <SvgIcon icon='nfthub' />
      </Link>

      <HeaderNav />
      <HeaderSocial />
      <button className={cn['mobile-menu-btn']}>
        <SvgIcon icon='openMobileMenu' />
      </button>
    </div>
  )
}

export { HeaderContent }
