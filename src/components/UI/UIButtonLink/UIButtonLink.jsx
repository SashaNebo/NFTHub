import clsx from 'clsx'

import cn from './UIButtonLink.module.scss'
import { CustomLink } from '../../CustomLink'
import { SvgIcon } from '../../SvgIcon'

const UIButtonLink = ({ to = '', text, icon, className, ...restProps }) => {
  return (
    <CustomLink
      className={clsx(cn['btn-link'], className)}
      to={to}
      {...restProps}>
      <span className={cn['btn-link__text']}>{text}</span>
      <SvgIcon className={cn['btn-link__icon']} icon={icon} />
    </CustomLink>
  )
}

export { UIButtonLink }
