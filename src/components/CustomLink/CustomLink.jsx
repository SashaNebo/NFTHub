import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

const CustomLink = ({
  to,
  children,
  className,
  activeClassName,
  ...restProps
}) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? clsx(className, activeClassName) : className
      }
      to={to} end={true}
      aria-label={`navigation link`}
      {...restProps}>
      {children}
    </NavLink>
  )
}

export { CustomLink }
