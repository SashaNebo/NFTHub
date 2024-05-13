import cn from './Footer.module.scss'
import { FooterBody } from './FooterBody'
import { FooterBottom } from './FooterBottom'
import { useScrollToSection } from '../../hooks/useScrollToSection'

const Footer = () => {
  const scrollToSection = useScrollToSection()

  return (
    <footer className={cn['footer']}>
      <div className='container'>
        <div className='footer__content'>
          <FooterBody scrollToSection={scrollToSection} />
          <FooterBottom scrollToSection={scrollToSection}  />
        </div>
      </div>
    </footer>
  )
}

export { Footer }