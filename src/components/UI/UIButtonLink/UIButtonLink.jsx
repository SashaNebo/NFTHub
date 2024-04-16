import clsx from 'clsx'
import { Link } from 'react-router-dom'

import cn from './UIButtonLink.module.scss'
import { baseUrl } from '../../../routes'

const UIButtonLink = ({ to = baseUrl, children, className, ...restProps }) => {
  
  return (
    <Link to={to} className={clsx(cn['btn-link'], className)} {...restProps}>
      {children}
    </Link>
  )
}

export { UIButtonLink }