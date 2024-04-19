import { motion } from "framer-motion";
import clsx from 'clsx'

import cn from './Navbar.module.scss'
import { SvgIcon } from '../../SvgIcon'


const MenuToggle = ({ toggle, isOpen }) => {

  return (
    <motion.button
      variants={{
        closed: { rotate: 0 },
        open: { rotate: -180 },
      }}
      transition={{ duration: 0.5 }}
      className={clsx(cn['navbar__btn'], isOpen && cn['open'])}
      onClick={toggle}>
      <SvgIcon icon='navbar' />
    </motion.button>
  )
}

export { MenuToggle }
