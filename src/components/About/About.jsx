import { useContext, useEffect, useRef } from 'react'

import cn from './About.module.scss'
import { aboutItems } from './additional'
import { UIGradientTitle } from '../UI/UIGradientTitle'
import { CustomLink } from '../../components/CustomLink'
import { UIGradientText } from '../UI/UIGradientText'
import { SvgIcon } from '../../components/SvgIcon'
import { SectionsContext } from '../../context'

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
            <UIGradientTitle
              className={cn['about__title']}
              text='How it'
              gradientText='works!'
            />

            <div className={cn['about__list']}>
              {aboutItems.map(({ img, title, text1, text2 }, i) => (
                <div className={cn['about__item']} key={img}>
                  <div className={cn['about__item-img']}>
                    <img src={img} alt='about img' />
                  </div>

                  <div className={cn['about__item-info']}>
                    <UIGradientText className={cn['num']} text={`0${i + 1}.`} />
                    <h2 className={cn['title']}>{title}</h2>
                    <p className={cn['text']}>{text1}</p>
                    <p className={cn['text']}>{text2}</p>
                    <CustomLink className={cn['btn-link']} to='blog'>
                      <span>Learn more</span>
                      <SvgIcon icon='arrowUpRight'/>
                    </CustomLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { About }
