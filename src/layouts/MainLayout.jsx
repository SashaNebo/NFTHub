import { Outlet } from 'react-router-dom'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { ThemeModifier } from '../components/ThemeModifier/ThemeModifier'

const MainLayout = () => (
  <>
    <ThemeModifier />
    <Header />
    <main className='main'>
      <Outlet />
    </main>
    <Footer />
  </>
)

export { MainLayout }
