import clsx from 'clsx'

import cn from './SvgIcon.module.scss'
import sprite from '../../assets/images/svg/sprite.svg'

const SvgIcon = ({ icon = 'NFTHub', className, ...restProps }) => {
  
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
wallet
tickDown
tickUp
tickSlider
nfthub
arrowDiagonal
sun
moon

----- */
