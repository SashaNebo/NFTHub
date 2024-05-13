import cn from './DemoPage.module.scss'
import { UIGradientTitle } from '../../components/UI/UIGradientTitle'
import { basePath } from '../../routes'
import { UIButtonLink } from '../../components/UI/UIButtonLink'

const DemoPage = () => {
  const socialItems = [
    { socialName: 'Telegram', socialMe: '@IlyaPribytkov' },
    { socialName: 'GitHub', socialMe: 'github.com/SashaNebo' },
  ]

  return (
    <main className={cn['demo-page']}>
      <div className={cn['demo-page__wrapper']}>
        <div className='container'>
          <div className={cn['demo-page__content']}>
            <div className={cn['demo-page__header']}>
              <UIGradientTitle
                className={cn['demo-page__title']}
                text='Your page could be here'
              />
              <UIGradientTitle
                className={cn['demo-page__title']}
                text="Let's start"
                gradientText='working together!'
              />
            </div>

            <div className={cn['demo-page__body']}>
              <ul className={cn['my-social']}>
                {socialItems.map(({ socialName, socialMe }) => (
                  <li className={cn['my-social__item']} key={socialName}>
                    <span className={cn['name']}>{socialName}:</span>
                    <span className={cn['me']}>{socialMe}</span>
                  </li>
                ))}
              </ul>

              <UIButtonLink
                className={cn['cta__btn']}
                to={basePath}
                text='Go Home'
                icon='arrowUpRight'
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export { DemoPage }
