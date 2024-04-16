import cn from './Hero.module.scss'
import sun from '../../assets/images/icons/sun.svg'

const HeroThemeMode = () => {

  return (
    <div className={cn['mode']}>
      <img src={sun} alt="sun" />
    </div>
  )
}

export { HeroThemeMode }
