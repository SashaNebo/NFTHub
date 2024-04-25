import cn from './Hero.module.scss'

import star1 from '../../assets/images/svg/shapes/star-1.svg'
import star2 from '../../assets/images/svg/shapes/star-2.svg'
import star3 from '../../assets/images/svg/shapes/star-3.svg'
import circle1 from '../../assets/images/svg/shapes/circle-1.svg'
import circle2 from '../../assets/images/svg/shapes/circle-2.svg'
import squareRound from '../../assets/images/svg/shapes/square-round.svg'

import art1 from '../../assets/images/img/arts/art-1.jpg'
import art3 from '../../assets/images/img/arts/art-3.jpg'

const HeroPictures = () => {
  const shapes = [circle1, star1, star3, circle2, star2, squareRound]
  return (
    <div className={cn['pictures']}>
      <div className={cn['pictures__grid']}>
        <div className={[cn['pictures__grid-item'], cn['grid-1']].join(' ')}>
          <img src={art1} alt='art1' />
        </div>

        <div className={[cn['pictures__grid-item'], cn['grid-2']].join(' ')}>
          
        </div>
        <div className={[cn['pictures__grid-item'], cn['grid-3']].join(' ')}>
          
        </div>

        <div className={[cn['pictures__grid-item'], cn['grid-4']].join(' ')}>
          <img src={art3} alt='art3' />
        </div>
      </div>

      {shapes.map((shape, i) => (
        <img
          className={[cn['shape'], cn[`shape-${i + 1}`]].join(' ')}
          src={shape}
          alt={`shape ${i}`}
          key={shape}
        />
      ))}
    </div>
  )
}

export { HeroPictures }
