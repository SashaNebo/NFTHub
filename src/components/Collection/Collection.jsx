import cn from './Collection.module.scss'
import { UIGradientTitle } from '../../components/UI/UIGradientTitle'
import { CollectionSwiper } from './CollectionSwiper'

const Collection = () => {
  return (
    <div className={cn['collection']}>
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
  )
}

export { Collection }
