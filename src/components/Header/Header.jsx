import cn from './Header.module.scss'
import { Container } from '../Container'
import { HeaderContent } from './HeaderContent'

const Header = () => {
  return (
    <header className={cn['header']}>
      <Container className={cn['header__container']}>
        <HeaderContent />
      </Container>
    </header>
  )
}

export { Header }
