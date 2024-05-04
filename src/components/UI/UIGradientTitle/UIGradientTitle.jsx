import clsx from 'clsx'

import cn from './UIGradientTitle.module.scss'
import {UIGradientText} from '../UIGradientText'

const UIGradientTitle = ({ className, text, gradientText }) => {

  return (
    <h1 className={clsx(cn['title'], className)}>
      {text + ' '}
      
      <UIGradientText text={gradientText} />
    </h1>
  )
}

export { UIGradientTitle }