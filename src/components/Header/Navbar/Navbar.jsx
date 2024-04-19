import { useRef } from 'react'
import { motion, useCycle } from 'framer-motion'

import cn from './Navbar.module.scss'
import { MenuToggle } from './MenuToggle'
import { useDimensions } from '../../../hooks/useDimensions'
import { sidebar } from './additional'
import { NavbarContent } from './NavbarContent'

const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <motion.div
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
      className={cn['navbar']}>
      <motion.div variants={sidebar} className={cn['navbar__bg']}>
        <NavbarContent />
      </motion.div>

      <MenuToggle toggle={toggleOpen} isOpen={isOpen} />
    </motion.div>
  )
}

export { Navbar }
