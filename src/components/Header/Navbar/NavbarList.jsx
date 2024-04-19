import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import cn from './Navbar.module.scss'
import { navList } from '../additional'

const NavbarList = () => {
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  }

  const variants2 = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  return (
    <motion.ul className={cn['navbar__list']} variants={variants}>
      {navList.map((navItem) => (
        <motion.li
          className={cn['navbar__list-item']}
          key={navItem}
          variants={variants2}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}>
          
          <motion.div whileHover={{translateX: 30}} className={cn['navbar__list-supitem']}>
            <Link to={`/${navItem}`} className={cn['navbar__list-link']}>
              {navItem}
            </Link>
          </motion.div>
        </motion.li>
      ))}
    </motion.ul>
  )
}

export { NavbarList }
