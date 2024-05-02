import clsx from 'clsx'

import cn from './UIGradientTitle.module.scss'

const UIGradientTitle = ({ className, text, gradientText }) => {

  return (
    <h1 className={clsx(cn['title'], className)}>
      {text + ' '}
      <span className={cn['title__gradient']}>{gradientText}</span>
    </h1>
  )
}

export { UIGradientTitle }