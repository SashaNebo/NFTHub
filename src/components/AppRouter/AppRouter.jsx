import { Route, Routes } from 'react-router-dom'

import { MainLayout } from '../../layouts/MainLayout'
import { Home } from '../../pages/Home/Home'
import { basePath, pagesPath } from '../../routes'
import { DemoPage } from '../../pages/demoPage/DemoPage'

const AppRouter = () => {
  return (
    <Routes>
      <Route path={basePath} element={<MainLayout />}>
        <Route path={basePath} element={<Home />} index />
        <Route path={pagesPath} element={<DemoPage/>} />
        <Route path='*' element={<Home />} />
      </Route>
    </Routes>
  )
}

export { AppRouter }
