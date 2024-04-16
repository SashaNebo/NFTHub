import cn from './Footer.module.scss'
import footerBgImg from '../../assets/images/img/footer-bg.png'

const Footer = () => {
  
  return (
    <footer className={cn['footer']}>
      <h1>Footer</h1>
      <img src={footerBgImg} alt="" />
    </footer>
  )
}

export { Footer }