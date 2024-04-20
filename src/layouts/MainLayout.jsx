import { ThemeModifier } from '../components/ThemeModifier/ThemeModifier'
import { Header } from '../components/Header/HeaderMain'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'

const MainLayout = () => (
  <>
    <ThemeModifier />

    <Header />
    <Main />
    <Footer />
  </>
)

export { MainLayout }
