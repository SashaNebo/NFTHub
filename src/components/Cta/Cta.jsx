import cn from './Cta.module.scss'
import { UIButtonLink } from '../../components/UI/UIButtonLink'
import { pageOnePath } from '../../routes'
import { decorations } from './additional'
import { MGradientTitle } from '../UI/UIGradientTitle/UIGradientTitle'

const Cta = () => {
  return (
    <section className={cn['cta']}>
      <div className={cn['cta__bg']}></div>
      <div className={cn['cta__wrapper']}>
        <div className='container'>
          <div className={cn['cta__content']}>
            <div className={cn['cta__info']}>
              <MGradientTitle
                className={cn['cta__title']}
                text="Let's start"
                gradientText='minting'
              />

              <p className={cn['cta__text']}>
                Invest and manage all your NFTs at one place.
              </p>

              <UIButtonLink
                className={cn['cta__btn']}
                to={pageOnePath}
                text='Get started'
                icon='arrowUpRight'
              />

              {decorations.map((d, i) => (
                <img
                  className={[cn['decoration'], cn[`decoration-${i + 1}`]].join(
                    ' ',
                  )}
                  src={d}
                  alt='decor img'
                  key={d}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Cta }
