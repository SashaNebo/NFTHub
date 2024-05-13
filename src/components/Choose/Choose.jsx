import { useContext, useEffect, useRef } from 'react'

import cn from './Choose.module.scss'
import { UIGradientTitle } from '../../components/UI/UIGradientTitle'
import { ChooseList } from './ChooseList'
import { SectionsContext } from '../../context'

const Choose = () => {
  const chooseRef = useRef()
  const { setSections } = useContext(SectionsContext)

  useEffect(() => {
    chooseRef &&
      setSections({ node: chooseRef.current, id: 'choose' })
  }, [])

  return (
    <section className={cn['choose']} ref={chooseRef}>
      <div className={cn['choose__wrapper']}>
        <div className='container'>
          <UIGradientTitle
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