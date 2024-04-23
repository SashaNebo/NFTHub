import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import cn from './MobileMenu.module.scss'
import { baseRoute } from '../../routes'
import { SvgIcon } from '../SvgIcon'
import { variantsBtnClose } from './additional'

const MobileMenuHeader = ({ toggleOpen }) => {
  return (
    <div className={cn['mobile-menu__header']}>
      <Link className={cn['logo']} to={baseRoute}>
        <SvgIcon icon='nfthub' />
      </Link>

      <motion.button
        className={cn['mobile-menu-close']}
        onClick={toggleOpen}
        variants={variantsBtnClose}>
        <SvgIcon icon='btnCloseMobileMenu' />
      </motion.button>
    </div>
  )
}

export { MobileMenuHeader }
