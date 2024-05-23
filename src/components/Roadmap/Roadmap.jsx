import { useContext, useEffect, useRef } from 'react'

import cn from './Roadmap.module.scss'
import { SectionsContext } from '../../context'
import { MGradientTitle } from '../UI/UIGradientTitle/UIGradientTitle'
import { RoadmapPhase } from './RoadmapPhase'

const Roadmap = () => {
  const roadmapRef = useRef()
  const { setSections } = useContext(SectionsContext)

  useEffect(() => {
    roadmapRef && setSections({ node: roadmapRef.current, id: 'roadmap' })
  }, [])

  return (
    <section className={cn['roadmap']} ref={roadmapRef}>
      <div className={cn['roadmap__wrapper']}>
        <div className='container'>
          <div className={cn['roadmap__content']}>
            <MGradientTitle
              className={cn['roadmap__title']}
              text="Nerko's "
              gradientText='Roadmap'
            />

            <RoadmapPhase />
          </div>
        </div>
      </div>
    </section>
  )
}

export { Roadmap }
