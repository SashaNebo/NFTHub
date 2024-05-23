import { motion } from "framer-motion"

import cn from "./About.module.scss"
import { aboutItems } from "./additional"
import { CustomLink } from "../../components/CustomLink"
import { UIGradientText } from "../UI/UIGradientText"
import { SvgIcon } from "../../components/SvgIcon"

// REFACTOR

const variants = {
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i % 2 === 0 ? 0.2 : 0.3,
    },
  }),

  hidden: (i) => ({
    x: i % 2 === 0 ? -100 : 100,
    opacity: 0,
  }),
}

const AboutList = () => {
  return (
    <div className={cn["about__list"]}>
      {aboutItems.map(({ img, title, text1, text2 }, i) => (
        <motion.div className={cn["about__item"]} key={img}>
          <motion.div
            className={cn["about__item-img"]}
            initial="hidden"
            whileInView="visible"
            variants={variants}
            custom={i}
            viewport={{
              once: true,
            }}>
            <img src={img} alt="about img" />
          </motion.div>

          <motion.div
            className={cn["about__item-info"]}
            initial="hidden"
            whileInView="visible"
            variants={variants}
            custom={i + 1}
            viewport={{
              once: true,
            }}>
            <UIGradientText className={cn["num"]} text={`0${i + 1}.`} />
            <h2 className={cn["title"]}>{title}</h2>
            <p className={cn["text"]}>{text1}</p>
            <p className={cn["text"]}>{text2}</p>
            <CustomLink className={cn["btn-link"]} to="blog">
              <span>Learn more</span>
              <SvgIcon icon="arrowUpRight" />
            </CustomLink>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

export { AboutList }
