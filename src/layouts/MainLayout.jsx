import { Outlet } from 'react-router-dom'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

const MainLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
)

export { MainLayout }
