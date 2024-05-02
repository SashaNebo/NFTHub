import clsx from 'clsx'

import cn from './SvgIcon.module.scss'
import sprite from '../../assets/images/svg/sprite.svg'

const SvgIcon = ({ icon = 'nfthub', className, ...restProps }) => {
  
  return (
    <svg className={clsx(cn['svg'], className)} {...restProps}>
      <use href={`${sprite}#${icon}`}></use>
    </svg>
  )
}

export { SvgIcon }

/* <!-- Sprite icons --> */

/* -----

discord
instagram
twitter
telegram
facebook
youtube
wallet
nfthub
sun
moon
btnOpenMobileMenu
btnCloseMobileMenu
plus
minus
tickRight
arrowhead
arrowUpRight

----- */