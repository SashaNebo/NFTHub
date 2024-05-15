import { motion } from 'framer-motion'

import cn from './Fact.module.scss'
import { factItems } from './additional'
import { decorations } from './additional'

// REFACTOR
const anFactList = {
  inView: (i) => ({
    scale: 1,
    transition: {
      delay: i * 0.1,
    },
  }),

  hidden: {
    scale: 0,
  },
}

const Fact = () => {
  return (
    <section className={cn['fact']}>
      <div className={cn['fact__wrapper']}>
        <div className='container'>
          <div className={cn['fact__content']}>
            <motion.div
              className={cn['fact__list']}
              initial='hidden'
              whileInView='inView'
              viewport={{ once: true, margin: '-100px 0px' }}
            >
              {factItems.map(({ title, text }, i) => (
                <motion.div
                  className={cn['fact__item']}
                  key={title}
                  variants={anFactList}
                  custom={i}>
                  <h2 className={cn['fact__item-value']}>{title}</h2>
                  <p className={cn['fact__item-desc']}>{text}</p>
                </motion.div>
              ))}
            </motion.div>

            <Decorations />
          </div>
        </div>
      </div>
    </section>
  )
}

const Decorations = () => (
  <div>
    {decorations.map((img, i) => (
      <img
        className={[
          cn['fact__decoration'],
          cn[`fact__decoration-${i + 1}`],
        ].join(' ')}
        src={img}
        alt='img'
        key={img}
      />
    ))}
  </div>
)

export { Fact }
