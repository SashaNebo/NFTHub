import { ThemeModifier } from '../components/ThemeModifier/ThemeModifier'
import { HeaderMain } from '../components/HeaderDirectory'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'

const MainLayout = () => (
  <>
    <ThemeModifier />

    <HeaderMain />
    <Main />
    <Footer />
  </>
)

export { MainLayout }
