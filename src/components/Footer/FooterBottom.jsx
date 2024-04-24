import cn from './Footer.module.scss'
import { SvgIcon } from '../SvgIcon'

const FooterBottom = () => {
  return (
    <div className={cn['footer__bottom']}>
      <p className={cn['copyright']}>
        Copyright © 2023 Nfthub All Rights Reserved.
      </p>
      <div className={cn['precept']}>
        <p className={cn['privacy']}>Privacy policy</p>
        <p className={cn['terms']}>Terms of Use</p>
        <button className={cn['back-top']}>
          <SvgIcon icon='arrowhead' />
        </button>
      </div>
    </div>
  )
}

export { FooterBottom }
