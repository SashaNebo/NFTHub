import cn from './Header.module.scss'
import { SvgIcon } from '../../SvgIcon'
import { MobileMenu } from '../../MobileMenu/MobileMenu'

import { useCycle } from 'framer-motion'

const HeaderMobileMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <>
      <button className={cn['mobile-menu-btn']} onClick={toggleOpen} aria-label='button open mobile menu'>
        <SvgIcon icon='btnOpenMobileMenu' />
      </button>

      <MobileMenu isOpen={isOpen} toggleOpen={toggleOpen} />
    </>
  )
}

export { HeaderMobileMenu }
