import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import cn from './MobileMenu.module.scss'
import { baseRoute } from '../../routes'
import { SvgIcon } from '../SvgIcon'
import { anNavList, anNavItem, anSubnavList, anSubnavItem } from './animation'
import { navItems, subnavItems } from './additional'
import { CustomLink } from '../../components/CustomLink'

const MobileMenuNav = ({ isOpenMobileMenu }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => setIsOpen((prevIsOpen) => !prevIsOpen)

  useEffect(() => {
    if (isOpen && !isOpenMobileMenu) setIsOpen(() => false)
  }, [isOpenMobileMenu])

  return (
    <nav className={cn['nav']}>
      <motion.ul className={cn['nav__list']} variants={anNavList}>
        {navItems.map(({ link, text }) => (
          <motion.li
            className={cn['nav__item']}
            key={link}
            variants={anNavItem}>
            <CustomLink className={cn['nav__link']} to={`${baseRoute}/${link}`}>
              {text}
            </CustomLink>

            {text === 'home' && (
              <>
                <button
                  className={clsx(cn['dropdown-btn'], isOpen && cn['open'])}
                  onClick={toggleIsOpen}
                  aria-label='button open subnav'>
                  <SvgIcon icon={isOpen ? 'minus' : 'plus'} />
                </button>

                {isOpen && <MobileMenuSubnav />}
              </>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  )
}

const MobileMenuSubnav = () => {
  return (
    <motion.ul
      className={cn['subnav']}
      variants={anSubnavList}
      initial='hidden'
      animate='visible'>
      {subnavItems.map(({ link, text }) => (
        <motion.li
          className={cn['subnav__item']}
          key={link}
          variants={anSubnavItem}>
          <CustomLink
            className={cn['subnav__link']}
            to={`${baseRoute}/${link}`}>
            {text}
          </CustomLink>
        </motion.li>
      ))}
    </motion.ul>
  )
}

export { MobileMenuNav }
