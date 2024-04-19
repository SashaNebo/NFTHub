import clsx from 'clsx'

import cn from './SvgIcon.module.scss'
import sprite from '../../assets/images/icons/sprite.svg'

/* <!-- Sprite icons --> */

// discord
// instagram
// twitter
// wallet
// tickDown
// tickUp
// tickSlider
// NFTHub
// arrowDiagonal

const SvgIcon = ({ icon = 'NFTHub', className, ...restProps }) => {
  
  return (
    <svg className={clsx(cn['svg'], className)} {...restProps}>
      <use href={`${sprite}#${icon}`}></use>
    </svg>
  )
}

export { SvgIcon }