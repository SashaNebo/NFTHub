import { useContext, useEffect, useRef } from 'react'

import cn from './Faq.module.scss'
import { UIGradientTitle } from '../UI/UIGradientTitle'
import { FaqAccordion } from './FaqAccordion'
import { SectionsContext } from '../../context'

const Faq = () => {
  const faqRef = useRef()
  const { setSections } = useContext(SectionsContext)

  useEffect(() => {
    faqRef && setSections({ node: faqRef.current, id: 'faq' })
  }, [])

  return (
    <section className={cn['faq']} ref={faqRef}>
      <div className={cn['faq__wrapper']}>
        <div className='container'>
          <div className={cn['faq__content']}>
            <UIGradientTitle
              className={cn['faq__title']}
              text='Your questions,'
              gradientText='answered!'
            />

            <FaqAccordion />
          </div>
        </div>
      </div>
    </section>
  )
}

export { Faq }
