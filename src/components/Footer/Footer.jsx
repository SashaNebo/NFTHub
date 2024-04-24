import cn from './Footer.module.scss'
import { FooterBody } from './FooterBody'
import { FooterBottom } from './FooterBottom'

const Footer = () => {
  
  return (
    <footer className={cn['footer']}>
      <div className='container'>
        <div className='footer__content'>
          <FooterBody />
          <FooterBottom />
        </div>
      </div>
    </footer>
  )
}

export { Footer }