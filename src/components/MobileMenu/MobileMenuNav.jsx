import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'

import cn from './MobileMenu.module.scss'
import { baseRoute } from '../../routes'
import { SvgIcon } from '../SvgIcon'
import { anNavList, anNavItem } from './animation'
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
            <CustomLink
              className={cn['nav__link']}
              activeClassName={cn['active']}
              to={`${baseRoute}/${link}`}>
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

                <MobileMenuSubnav isOpen={isOpen} />
              </>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  )
}

const MobileMenuSubnav = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          className={cn['subnav']}
          initial={{ height: 0 }}
          animate={{ height: 'auto'}}
          exit={{ height: 0, opacity: .5 }}
          transition={{
            type: 'tween',
          }}>
          {subnavItems.map(({ link, text }) => (
            <li className={cn['subnav__item']} key={link}>
              <CustomLink
                className={cn['subnav__link']}
                activeClassName={cn['active']}
                to={`${baseRoute}/${link}`}>
                {text}
              </CustomLink>
            </li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  )
}

export { MobileMenuNav }
