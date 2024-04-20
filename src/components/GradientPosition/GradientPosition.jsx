import cn from './GradientPosition.module.scss'
import gradientCircleImg from '../../assets/images/svg/gradient-circle.svg'

const GradientPosition = () => {
  return (
    <div className={cn['gradient-position']}>
      <img
        className={[cn['gradient-img'], cn['top']].join(' ')}
        src={gradientCircleImg}
        alt='gradient circle img'
      />
      <img
        className={[cn['gradient-img'], cn['bottom']].join(' ')}
        src={gradientCircleImg}
        alt='gradient circle img'
      />
    </div>
  )
}

export { GradientPosition }
