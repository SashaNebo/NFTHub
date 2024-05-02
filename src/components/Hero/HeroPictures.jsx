import clsx from 'clsx'

import cn from './Hero.module.scss'

import art1 from '../../assets/images/img/arts/art-1.jpg'
import art3 from '../../assets/images/img/arts/art-3.jpg'

import star1 from '../../assets/images/svg/shapes/star-1.svg'
import star2 from '../../assets/images/svg/shapes/star-2.svg'
import star3 from '../../assets/images/svg/shapes/star-3.svg'
import circle1 from '../../assets/images/svg/shapes/circle-1.svg'
import circle2 from '../../assets/images/svg/shapes/circle-2.svg'
import squareRound from '../../assets/images/svg/shapes/square-round.svg'

const HeroPictures = () => {
  return (
    <div className={cn['pictures']}>
      <PicturesGrid />
      <Shapes />
    </div>
  )
}

const PicturesGrid = () => {
  const arts = [art1, null, null, art3]

  return (
    <div className={cn['pictures__grid']}>
      {arts.map((art, i) => (
        <div
          className={clsx(cn['pictures__grid-item'], cn[`grid-${i + 1}`])}
          key={i}>
          {art && <img src={art} alt={`art-${i + 1}`} />}
        </div>
      ))}
    </div>
  )
}

const Shapes = () => {
  const shapes = [circle1, star1, star3, circle2, star2, squareRound]

  return (
    <>
      {shapes.map((shape, i) => (
        <img
          className={[cn['shape'], cn[`shape-${i + 1}`]].join(' ')}
          src={shape}
          alt={`shape ${i}`}
          key={shape}
        />
      ))}
    </>
  )
}

export { HeroPictures }
