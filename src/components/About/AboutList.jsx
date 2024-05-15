import { motion } from 'framer-motion'

import cn from './About.module.scss'
import { aboutItems } from './additional'
import { CustomLink } from '../../components/CustomLink'
import { UIGradientText } from '../UI/UIGradientText'
import { SvgIcon } from '../../components/SvgIcon'

// REFACTOR
const anAboutList = {
  inView: (i) => ({
    x: 0,

    opacity: 1,
    transition: {
      delay: i * 0.15,
    },
  }),
}

const AboutList = () => {
  return (
    <div className={cn['about__list']}>
      {aboutItems.map(({ img, title, text1, text2 }, i) => (
        <motion.div
          className={cn['about__item']}
          key={img}
          whileInView='inView'
          viewport={{ once: true, margin: '-400px 0px' }}
        >

          <motion.div className={cn['about__item-img']}
            initial={{opacity: 0, x: i % 2 === 0 ? -100 : 100}}
            variants={anAboutList}
            custom={1}
          >
            <img src={img} alt='about img' />
          </motion.div>

          <motion.div className={cn['about__item-info']}
            initial={{opacity: 0, x: i % 2 === 0 ? 100 : -100}}
            variants={anAboutList}
            custom={1.5}
          >
            <UIGradientText className={cn['num']} text={`0${i + 1}.`} />
            <h2 className={cn['title']}>{title}</h2>
            <p className={cn['text']}>{text1}</p>
            <p className={cn['text']}>{text2}</p>
            <CustomLink className={cn['btn-link']} to='blog'>
              <span>Learn more</span>
              <SvgIcon icon='arrowUpRight' />
            </CustomLink>
          </motion.div>

        </motion.div>
      ))}
  </div>
  )
}

export { AboutList }
