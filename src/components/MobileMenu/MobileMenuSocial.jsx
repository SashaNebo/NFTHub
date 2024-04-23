import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import cn from './MobileMenu.module.scss'
import { SvgIcon } from '../SvgIcon'
import { variantsNavList, variantsSocialItem } from './additional'

const MobileMenuSocial = () => {
  const socialItems = [
    'facebook',
    'twitter',
    'instagram',
    'discord',
    'telegram',
  ]

  return (
    <motion.ul className={cn['social']} variants={variantsNavList}>
      {socialItems.map((socialItem) => (
        <motion.li className={cn['social__item']} key={socialItem} variants={variantsSocialItem}>
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
