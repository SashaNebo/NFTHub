import cn from './Hero.module.scss'
import cubesImg from '../../assets/images/img/cubes.png'
import { baseUrl } from '../../routes'
import { SvgIcon } from '../SvgIcon'
import { UIButtonLink } from '../UI/UIButtonLink'
import { HeroCommunity } from './HeroCommunity'

const HeroContent = () => {
  return (
    <div className={cn['hero__content']}>
      <div className={cn['hero__left']}>
        <h1 className={cn['hero__title']}>High Quality NFT Collection</h1>
        <p className={cn['hero__text']}>
          A 890 piece custom Nerko's collection is joining the NFT space on
          Opensea.
        </p>

        <UIButtonLink to={baseUrl}>
          View in OPENSEA
          <SvgIcon icon='arrowDiagonal' />
        </UIButtonLink>

        <HeroCommunity />
      </div>

      <div className={cn['hero__right']}>
        <img src={cubesImg} alt='cubes' />
      </div>
    </div>
  )
}

export { HeroContent }
