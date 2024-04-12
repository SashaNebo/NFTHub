import clsx from 'clsx'
import cn from './UIButton.module.scss'

const UIButton = ({ children, className }) => {
  
  return (
    <button className={clsx(cn['btn'], className)}>
      {children}
    </button>
  )
}

export { UIButton }