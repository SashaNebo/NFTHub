import { AnimatePresence, motion } from 'framer-motion'

import cn from './Preloader.module.scss'

const Preloader = ({isLoading}) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className={cn['preloader']}
          initial={{ backgroundColor: 'var(--bg-page)' }}>
          <motion.div
            className={cn['preloader-circle']}
            animate={{
              y: [1000, 0, 0, 0],
              width: [100, 100, 3000, 3000],
              height: [100, 100, 2500, 3000],
              opacity: [1, 1, 1, 0],
            }}
            transition={{
              duration: 3,
              times: [0, 0.3, 0.6, 1],
            }}

          ></motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export { Preloader }
