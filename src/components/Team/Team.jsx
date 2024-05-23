import cn from './Team.module.scss'
import { teamItems } from './additional'
import { CustomLink } from '../../components/CustomLink'
import { SvgIcon } from '../../components/SvgIcon'
import { MGradientTitle } from '../UI/UIGradientTitle/UIGradientTitle'

const Team = () => {
  return (
    <section className={cn['team']}>
      <div className={cn['team__wrapper']}>
        <div className='container'>
          <div className={cn['team__content']}>
            <MGradientTitle
              className={cn['team__title']}
              text='Meet'
              gradientText='the artists'
            />

            <div className={cn['team__list']}>
              {teamItems.map(({ photo, name, job, socialList }) => (
                <div className={cn['team__item']} key={photo}>
                  <div className={cn['team__item-photo']}>
                    <img src={photo} alt='photo img' />
                  </div>

                  <h4 className={cn['team__item-name']}>{name}</h4>
                  <span className={cn['team__item-job']}>{job}</span>
                  
                  <ul className={cn['team__item-social']}>
                    {socialList.map((soc) => (
                      <li key={soc}>
                        <CustomLink to={`https://${soc}.com`} target='_blank'>
                          <SvgIcon icon={soc} />
                        </CustomLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Team }
