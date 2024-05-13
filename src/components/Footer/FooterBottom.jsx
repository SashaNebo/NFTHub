import cn from './Footer.module.scss'
import { SvgIcon } from '../SvgIcon'
import { CustomLink } from '../CustomLink'

const FooterBottom = ({ scrollToSection }) => {
  
  return (
    <div className={cn['footer__bottom']}>
      <p className={cn['copyright']}>
        Copyright © 2023 Nfthub All Rights Reserved.
      </p>
      <div className={cn['precept']}>
        <p className={cn['privacy']}>Privacy policy</p>
        <p className={cn['terms']}>Terms of Use</p>
        <CustomLink
          className={cn['back-top']}
          aria-label='button back top'
          to={'/nfthub/'}
          onClick={() => scrollToSection('nfthub')}>
          <SvgIcon icon='arrowhead' />
        </CustomLink>
      </div>
    </div>
  )
}

export { FooterBottom }
