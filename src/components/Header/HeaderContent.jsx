import { Link } from 'react-router-dom'

import cn from './Header.module.scss'
import { SvgIcon } from '../SvgIcon'
import { basePath } from '../../routes'
import { HeaderNav } from './HeaderNav'
import { HeaderSocial } from './HeaderSocial'
import { HeaderMobileMenu } from './HeaderMobileMenu'

const HeaderContent = () => {
  return (
    <div className={cn['header__content']}>
      <Link className={cn['header__logo']} to={basePath}>
        <SvgIcon icon='nfthub' />
      </Link>

      <HeaderNav />
      <HeaderSocial />
      <HeaderMobileMenu />
    </div>
  )
}

export { HeaderContent }
