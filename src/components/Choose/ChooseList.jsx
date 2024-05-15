import { motion } from 'framer-motion'

import cn from './Choose.module.scss'
import { chooseItems, decorations } from './additional'

// REFACTOR
const anChooseList = {
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

const ChooseList = () => {
  return (
    <div className={cn['choose-list-relative']}>
      <motion.div
        className={cn['choose__list']}
        initial='hidden'
        whileInView='inView'
        viewport={{ once: true, margin: '-300px 0px' }}>
        {chooseItems.map(({ img, title, text }, i) => (
          <motion.div
            className={cn['choose__item']}
            key={img}
            variants={anChooseList}
            custom={i}>
            <div className={cn['choose__item-content']}>
              <div className={cn['choose__item-img']}>
                <img src={img} alt={title} />
              </div>

              <h3 className={cn['choose__item-title']}>{title}</h3>
              <p className={cn['choose__item-text']}>{text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <Decorations />
    </div>
  )
}

const Decorations = () => (
  <div>
    {decorations.map((item, i) => (
      <img
        className={[cn['decoration'], cn[`decoration-${i + 1}`]].join(' ')}
        src={item}
        alt='img'
        key={item}
      />
    ))}
  </div>
)

export { ChooseList }
