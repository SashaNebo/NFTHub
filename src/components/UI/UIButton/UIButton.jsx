import clsx from 'clsx'
import cn from './UIButton.module.scss'

const UIButton = ({ children, className, ...restProps }) => {
  
  return (
    <button className={clsx(cn['btn'], className)} {...restProps}>
      {children}
    </button>
  )
}

export { UIButton }