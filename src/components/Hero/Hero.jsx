import cn from './Hero.module.scss'
import { Divider } from '../Divider'
import { Container } from '../Container'
import { HeroContent } from './HeroContent'
import { HeroWallets } from './HeroWallets'
import { HeroThemeMode } from './HeroThemeMode'

const Hero = () => {
  return (
    <>
      <main className={cn['hero']}>
        <Container>
          <HeroContent />
        </Container>

        <HeroWallets />
        <HeroThemeMode />
      </main>

      <Divider />
    </>
  )
}

export { Hero }
