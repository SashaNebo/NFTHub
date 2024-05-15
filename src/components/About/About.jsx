import { useContext, useEffect, useRef } from 'react'

import cn from './About.module.scss'
import { SectionsContext } from '../../context'
import { MGradientTitle } from '../UI/UIGradientTitle/UIGradientTitle'
import { AboutList } from './AboutList'

const About = () => {
  const aboutRef = useRef()
  const { setSections } = useContext(SectionsContext)

  useEffect(() => {
    aboutRef &&
      setSections({ node: aboutRef.current, id: 'about' })
  }, [])

  return (
    <section className={cn['about']} ref={aboutRef}>
      <div className={cn['about__wrapper']}>
        <div className='container'>
          <div className={cn['about__content']}>
            <MGradientTitle
              className={cn['about__title']}
              text='How it'
              gradientText='works!'
            />

            <AboutList />
          </div>
        </div>
      </div>
    </section>
  )
}

export { About }
