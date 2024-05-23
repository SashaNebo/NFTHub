import { useContext, useEffect, useRef } from 'react'

import cn from './Choose.module.scss'
import { ChooseList } from './ChooseList'
import { SectionsContext } from '../../context'
import { MGradientTitle } from '../UI/UIGradientTitle/UIGradientTitle'

const Choose = () => {
  const chooseRef = useRef()
  const { setSections } = useContext(SectionsContext)

  useEffect(() => {
    chooseRef && setSections({ node: chooseRef.current, id: 'choose' })
  }, [])

  return (
    <section className={cn['choose']} ref={chooseRef}>
      <div className={cn['choose__wrapper']}>
        <div className='container'>
          <MGradientTitle
            className={cn['choose__title']}
            text='Why'
            gradientText='choose us?'
          />


          <ChooseList />
        </div>
      </div>
    </section>
  )
}

export { Choose }
