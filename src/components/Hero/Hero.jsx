import cn from './Hero.module.scss'
import { HeroInformation } from './HeroInformation'
import { HeroPictures } from './HeroPictures'

const Hero = () => {
  return (
    <section className={cn['hero']}>
      <div className={cn['hero__bg']}></div>
      <div className={cn['hero__inner']}>
        <div className='container'>

          <div className={cn['hero__content']}>
            <HeroInformation />
            <HeroPictures/>
          </div>

        </div>
      </div>
    </section>
  )
}

export { Hero }
