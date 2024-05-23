import { motion } from "framer-motion"

import cn from "./Roadmap.module.scss"
import { roadmapItems } from "./additional"
import checkImg from "../../assets/images/svg/other/check.svg"
import { UIGradientText } from "../UI/UIGradientText"

// REFACTOR
const anRoadmapList = {
  inView: (i) => ({
    y: 0,

    opacity: 1,
    transition: {
      delay: i * 0.15,
    },
  }),

  hidden: {
    y: 200,
    opacity: 0,
  },
}

const RoadmapPhase = () => {
  return (
    <motion.div
      className={cn["phase"]}
      initial="hidden"
      whileInView="inView"
      viewport={{ once: true, margin: "-300px 0px" }}>
      {roadmapItems.map(({ percent, title, completed }, i) => (
        <motion.div
          className={cn["phase__item"]}
          key={title}
          variants={anRoadmapList}
          custom={i}>
          <div className={cn["phase__item-content"]}>
            <div className={cn["phase__percent"]}>
              <span>{percent}</span> %
            </div>
            <UIGradientText
              className={cn["phase__step"]}
              text={`phase 0${i + 1}`}
            />
            <h3 className={cn["phase__title"]}>{title}</h3>
            <p className={cn["phase__text"]}>
              Quality comes first. we took our time to plan out everything and
              build our production pipeline for a good quality artworks.
            </p>

            <ul className={cn["phase__completed"]}>
              {completed.map((text) => (
                <li className={cn["phase__completed-item"]} key={text}>
                  <img src={checkImg} alt="check img" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export { RoadmapPhase }
