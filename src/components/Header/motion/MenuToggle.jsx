import { motion } from 'framer-motion'
import {UIButton} from '../../UI/UIButton'

const MenuToggle = ({ toggle }) => {
  const Path = (props) => (
    <motion.path
      fill='transparent'
      strokeWidth='3'
      stroke='hsl(0, 0%, 18%)'
      strokeLinecap='round'
      {...props}
    />
  )

  return <UIButton onClick={toggle}>Open navbar</UIButton>
}

export { MenuToggle }
