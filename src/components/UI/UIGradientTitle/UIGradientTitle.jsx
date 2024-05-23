import clsx from "clsx"
import { motion } from "framer-motion"

import cn from "./UIGradientTitle.module.scss"
import { UIGradientText } from "../UIGradientText"
import { anGradientTitle } from "../../../helpers/animation"

const UIGradientTitle = ({ className, text, gradientText }) => {
  return (
    <h1 className={clsx(cn["title"], className)}>
      {text + " "}

      <UIGradientText text={gradientText} />
    </h1>
  )
}

const MGradientTitle = ({ className, text, gradientText, ...restProps }) => {
  return (
    <motion.h1
      className={clsx(cn["title"], className)}
      variants={anGradientTitle}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "-100px 0px",
      }}
      {...restProps}>
      {text + " "}

      <UIGradientText text={gradientText} />
    </motion.h1>
  )
}

export { UIGradientTitle, MGradientTitle }
