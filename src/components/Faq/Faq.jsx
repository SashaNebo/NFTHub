import { useState } from 'react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import cn from './Faq.module.scss'
import { UIGradientTitle } from '../UI/UIGradientTitle'
import { faqItems } from './additional'
import { SvgIcon } from '../SvgIcon'

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className={cn['faq']}>
      <div className={cn['faq__wrapper']}>
        <div className='container'>
          <div className={cn['faq__content']}>
            <UIGradientTitle
              className={cn['faq__title']}
              text='Your questions,'
              gradientText='answered!'
            />

            <div className={cn['accordion']}>
              <div className={cn['accordion__content']}>
                <div className={cn['accordion__list']}>
                  {faqItems.map(({ question, text1, text2 }, i) => (
                    <div
                      className={clsx(
                        cn['accordion__item'],
                        activeIndex === i && cn['active'],
                      )}
                      key={question}>
                      <h1
                        className={cn['accordion__title']}
                        onClick={() =>
                          setActiveIndex((prev) => (prev === i ? null : i))
                        }>
                        {question}
                        <SvgIcon icon='arrowhead' />
                      </h1>

                      <AnimatePresence>
                        {activeIndex === i && (
                          <motion.div
                            className={cn['accordion__collapsible']}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                              height: 'auto',
                              opacity: 1,
                            }}
                            exit={{ height: 0, opacity: 0 }}>
                            <div className={cn['accordion__body']}>
                              <p>{text1}</p>
                              <p>{text2}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Faq }
