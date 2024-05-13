import { useContext, useEffect, useRef } from 'react'

import cn from './Collection.module.scss'
import { UIGradientTitle } from '../../components/UI/UIGradientTitle'
import { CollectionSwiper } from './CollectionSwiper'
import { SectionsContext } from '../../context'

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
            <UIGradientTitle
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
