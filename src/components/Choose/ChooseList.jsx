import cn from './Choose.module.scss'
import { chooseItems, decorations } from './additional'

const ChooseList = () => {
  return (
    <div className={cn['choose-list-relative']}>
      <div className={cn['choose__list']}>
        {chooseItems.map(({ img, title, text }) => (
          <div className={cn['choose__item']} key={img}>
            <div className={cn['choose__item-content']}>
              <div className={cn['choose__item-img']}>
                <img src={img} alt={title} />
              </div>

              <h3 className={cn['choose__item-title']}>{title}</h3>
              <p className={cn['choose__item-text']}>{text}</p>
            </div>
          </div>
        ))}
      </div>

      <Decorations />
    </div>
  )
}

const Decorations = () => (
  <div>
    {decorations.map((item, i) => (
      <img
        className={[cn['decoration'], cn[`decoration-${i + 1}`]].join(' ')}
        src={item}
        alt='img'
        key={item}
      />
    ))}
  </div>
)

export { ChooseList }
