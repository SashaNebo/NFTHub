import { useContext, useEffect, useRef } from 'react'

import cn from './Hero.module.scss'
import { HeroInformation } from './HeroInformation'
import { HeroPictures } from './HeroPictures'
import { SectionsContext } from '../../context'

const Hero = () => {
  const heroRef = useRef()
  const { setSections, clearSections } = useContext(SectionsContext)

  useEffect(() => {
    heroRef && setSections({ node: heroRef.current, id: 'nfthub' })

    return () => clearSections()
  }, [])

  return (
    <section className={cn['hero']} ref={heroRef}>
      <div className={cn['hero__bg']}></div>
      <div className={cn['hero__inner']}>
        <div className='container'>
          <div className={cn['hero__content']}>
            <HeroInformation />
            <HeroPictures />
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero }
