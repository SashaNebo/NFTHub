import cn from './Hero.module.scss'
import avatarImg1 from '../../assets/images/img/members/1.png'
import avatarImg2 from '../../assets/images/img/members/2.png'
import avatarImg3 from '../../assets/images/img/members/3.png'

const HeroCommunity = () => {
  return (
    <div className={cn['community']}>
    <div className={cn["community__avatars"]}>
      <div className={cn["community__avatars-img"]}>
        <img src={avatarImg1} alt="" />
      </div>

      <div className={cn["community__avatars-img"]}>
        <img src={avatarImg2} alt="" />
      </div>

      <div className={cn["community__avatars-img"]}>
        <img src={avatarImg3} alt="" />
      </div>
    </div>

    <div className={cn["community__info"]}>
      <div className={cn["community__info-amount"]}>47k+</div>
      <div className={cn["community__info-text"]}>Community members</div>
    </div>
  </div>
  )
}

export { HeroCommunity }