import { motion } from 'framer-motion'

import cn from './Divider.module.scss'
import dividerImg from '../../assets/images/svg/other/divider.svg'

const Divider = () => {
  return (
    <motion.section className={cn['divider']}
    
      initial={{
        scale: 0,
        y: -50
      }}

      whileInView={
        { scale: 1, y: 0 }
     }
      
      transition={{
        delay: .3,
        ease: 'circOut'
      }}
    
    >
      <img src={dividerImg} alt='divider' />
    </motion.section>
  )
}

export { Divider }
