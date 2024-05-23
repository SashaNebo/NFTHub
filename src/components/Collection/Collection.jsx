import { useContext, useEffect, useRef } from 'react'

import cn from './Collection.module.scss'
import { CollectionSwiper } from './CollectionSwiper'
import { SectionsContext } from '../../context'
import { MGradientTitle } from '../UI/UIGradientTitle/UIGradientTitle'

const Collection = () => {
  const collectionRef = useRef()
  const { setSections } = useContext(SectionsContext)

  useEffect(() => {
    collectionRef &&
      setSections({ node: collectionRef.current, id: 'collection' })
  }, [])

  return (
    <section className={cn['collection']} ref={collectionRef}>
      <div className={cn['collection__wrapper']}>
        <div className='container'>
          <div className={cn['collection__content']}>
            <MGradientTitle
              className={cn['collection__title']}
              text="Nerko's"
              gradientText='collection'
            />

            <CollectionSwiper />
          </div>
        </div>
      </div>
    </section>
  )
}

export { Collection }
