import clsx from 'clsx'
import { motion } from 'framer-motion'

import cn from './UIGradientTitle.module.scss'
import { UIGradientText } from '../UIGradientText'

const UIGradientTitle = ({ className, text, gradientText }) => {
  return (
    <h1 className={clsx(cn['title'], className)}>
      {text + ' '}

      <UIGradientText text={gradientText} />
    </h1>
  )
}

const MGradientTitle = ({ className, text, gradientText, ...restProps }) => {
  return (
    <motion.h1
      className={clsx(cn['title'], className)}
      initial={{
        opacity: 0,
        y: 50,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      viewport={{
        once: true,
        margin: '-100px 0px',
      }}
    
      {...restProps}>
      {text + ' '}

      <UIGradientText text={gradientText} />
    </motion.h1>
  )
}

export { UIGradientTitle, MGradientTitle }
