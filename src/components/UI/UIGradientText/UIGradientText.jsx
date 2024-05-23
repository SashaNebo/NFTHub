import cn from './UIGradientText.module.scss'
import clsx from 'clsx'

const UIGradientText = ({text, className}) => {
  
  return (
    <span className={clsx(cn['gradient-text'], className)}>
      {text}
    </span>
  )
}

export { UIGradientText }