import cn from './Choose.module.scss'
import { UIGradientTitle } from '../../components/UI/UIGradientTitle'
import { ChooseList } from './ChooseList'

const Choose = () => {
  
  return (
    <section className={cn['choose']}>
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