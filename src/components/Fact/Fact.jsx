import cn from './Fact.module.scss'
import { factItems } from './additional'
import { decorations } from './additional'

const Fact = () => {
  
  return (
    <section className={cn['fact']}>
      <div className={cn['fact__wrapper']}>
        <div className='container'>
          <div className={cn['fact__content']}>
            <div className={cn['fact__list']}>
              {factItems.map(({ title, text }) => (
                <div className={cn['fact__item']} key={title}>
                  <h2 className={cn['fact__item-value']}>{title}</h2>
                  <p className={cn['fact__item-desc']}>{text}</p>
                </div>
              ))}
            </div>

            <Decorations />
          </div>
        </div>
      </div>
    </section>
  )
}

const Decorations = () => (
  <div>
    {decorations.map((img, i) => (
      <img
        className={[
          cn['fact__decoration'],
          cn[`fact__decoration-${i + 1}`],
        ].join(' ')}
        src={img}
        alt='img'
        key={img}
      />
    ))}
  </div>
)

export { Fact }