import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import cn from './MobileMenu.module.scss'
import { baseRoute } from '../../routes'
import { SvgIcon } from '../SvgIcon'
import {
  variantsNavList,
  variantsNavItem,
  variantsSubnavList,
  variantsSubnavItem,
} from './additional'

const MobileMenuNav = ({ isOpenMobileMenu }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => setIsOpen((prevIsOpen) => !prevIsOpen)

  const navItems = [
    { link: '', text: 'home' },
    { link: 'collection', text: 'collection' },
    { link: 'choose', text: 'choose' },
    { link: 'about', text: 'about' },
    { link: 'roadmap', text: 'roadmap' },
    { link: 'blog', text: 'blog' },
  ]

  useEffect(() => {
    if (isOpen && !isOpenMobileMenu) setIsOpen(() => false)
  }, [isOpenMobileMenu])

  return (
    <nav className={cn['nav']}>
      <motion.ul className={cn['nav__list']} variants={variantsNavList}>
        {navItems.map(({ link, text }) => (
          <motion.li
            className={cn['nav__item']}
            key={link}
            variants={variantsNavItem}>
            <Link className={cn['nav__link']} to={`${baseRoute}/${link}`}>
              {text}
            </Link>

            {text === 'home' && (
              <>
                <button
                  className={clsx(cn['dropdown-btn'], isOpen && cn['open'])}
                  onClick={toggleIsOpen}>
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
  const subnavItems = [
    { link: 'home-one', text: 'home one' },
    { link: 'home-two', text: 'home two' },
    { link: 'home-three', text: 'home three' },
    { link: 'home-four', text: 'home four' },
  ]

  return (
    <motion.ul
      className={cn['subnav']}
      variants={variantsSubnavList}
      initial='hidden'
      animate='visible'>
      {subnavItems.map(({ link, text }) => (
        <motion.li
          className={cn['subnav__item']}
          key={link}
          variants={variantsSubnavItem}>
          <Link className={cn['subnav__link']} to={`${baseRoute}/${link}`}>
            {text}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  )
}

export { MobileMenuNav }
