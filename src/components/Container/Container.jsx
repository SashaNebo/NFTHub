import clsx from 'clsx'

import cn from './Container.module.scss'

const Container = ({ children, className }) => {
  
  return (
    <div className={clsx(cn.container, className)}>
      {children}
    </div>
  )
}

export { Container }