import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import cn from './MobileMenu.module.scss'
import { SvgIcon } from '../SvgIcon'
import { anNavList, anSocialItem } from './animation'
import { socialItems } from './additional'

const MobileMenuSocial = () => {
  return (
    <motion.ul className={cn['social']} variants={anNavList}>
      {socialItems.map((socialItem) => (
        <motion.li className={cn['social__item']} key={socialItem} variants={anSocialItem}>
          <Link
            className={cn['social__link']}
            to={`https://${socialItem}.com`}
            target='_blank'>
            <SvgIcon icon={socialItem} />
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  )
}

export { MobileMenuSocial }
