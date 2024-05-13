import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

import cn from './MobileMenu.module.scss'
import { portal } from '../../helpers'
import { createMyPortal } from '../../utils'
import { MobileMenuHeader } from './MobileMenuHeader'
import { MobileMenuNav } from './MobileMenuNav'
import { MobileMenuSocial } from './MobileMenuSocial'
import { useDimensions } from '../../hooks/useDimensions'
import { anMobileMenu } from './animation'

const MobileMenu = ({ isOpen, toggleOpen }) => {
  const timerRef = useRef(null)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  useEffect(() => {
    if (isOpen) document.body.classList.add('scroll-none')

    if (!isOpen) {
      timerRef.current && clearTimeout(timerRef.current)

      timerRef.current = setTimeout(() => {
        document.body.classList.remove('scroll-none')
      }, 650)
    }
  }, [isOpen])

  const mobileMenu = (
    <>
      <motion.div
        className={cn['mobile-menu']}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
        variants={anMobileMenu}>
        <div className={cn['mobile-menu__content']}>
          <MobileMenuHeader toggleOpen={toggleOpen} />
          <MobileMenuNav isOpenMobileMenu={isOpen} toggleOpenMobileMenu={toggleOpen} />
          <MobileMenuSocial />
        </div>
      </motion.div>

      {isOpen && <div className={cn['overlay']} onClick={toggleOpen} />}
    </>
  )

  return createMyPortal(mobileMenu, portal)
}

export { MobileMenu }
