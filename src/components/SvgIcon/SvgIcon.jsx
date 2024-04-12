import clsx from 'clsx'

import cn from './SvgIcon.module.scss'
import sprite from '../../assets/images/icons/sprite.svg'

const SvgIcon = ({ icon = 'NFTHub', className }) => {
  
  return (
    <svg className={clsx(cn['svg'], className)}>
      <use href={`${sprite}#${icon}`}></use>
    </svg>
  )
}

export { SvgIcon }