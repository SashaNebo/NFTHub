import { useContext, useEffect, useRef } from 'react'

import cn from './Roadmap.module.scss'
import { UIGradientTitle } from '../UI/UIGradientTitle'
import { roadmapItems } from './additional'
import checkImg from '../../assets/images/svg/other/check.svg'
import { UIGradientText } from '../UI/UIGradientText'
import { SectionsContext } from '../../context'

const Roadmap = () => {
  const roadmapRef = useRef()
  const { setSections } = useContext(SectionsContext)

  useEffect(() => {
    roadmapRef &&
      setSections({ node: roadmapRef.current, id: 'roadmap' })
  }, [])

  return (
    <section className={cn['roadmap']} ref={roadmapRef}>
      <div className={cn['roadmap__wrapper']}>
        <div className='container'>
          <div className={cn['roadmap__content']}>
            <UIGradientTitle
              className={cn['roadmap__title']}
              text="Nerko's "
              gradientText='Roadmap'
            />

            <div className={cn['phase']}>
              {roadmapItems.map(({ percent, title, completed }, i) => (
                <div className={cn['phase__item']} key={title}>
                  <div className={cn['phase__item-content']}>
                    <div className={cn['phase__percent']}>
                      <span>{percent}</span> %
                    </div>
                    <UIGradientText
                      className={cn['phase__step']}
                      text={`phase 0${i + 1}`}
                    />
                    <h3 className={cn['phase__title']}>{title}</h3>
                    <p className={cn['phase__text']}>
                      Quality comes first. we took our time to plan out
                      everything and build our production pipeline for a good
                      quality artworks.
                    </p>

                    <ul className={cn['phase__completed']}>
                      {completed.map((text) => (
                        <li className={cn['phase__completed-item']} key={text}>
                          <img src={checkImg} alt='check img' />
                          {text}
                        </li>
                      ))}
                    </ul>
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

export { Roadmap }
