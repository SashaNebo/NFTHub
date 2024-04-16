import { Link } from 'react-router-dom'

import cn from './Header.module.scss'
import { SvgIcon } from '../SvgIcon'
import { HeaderNav } from './HeaderNav'
import { HeaderSocial } from './HeaderSocial'

const HeaderContent = () => {
  return (
    <div className={cn['header__content']}>
      <Link className={cn['header__logo']}>
        <SvgIcon icon='NFTHub' />
      </Link>

      <HeaderNav />
      <HeaderSocial />
    </div>
  )
}

export { HeaderContent }
