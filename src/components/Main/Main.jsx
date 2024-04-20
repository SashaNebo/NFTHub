import { Outlet } from 'react-router-dom'

import cn from './Main.module.scss'
import { GradientPosition } from '../GradientPosition'

const Main = () => {
  return (
    <main className='main'>
      <GradientPosition />

      <div className='main__content'>
        <Outlet />
      </div>
    </main>
  )
}

export { Main }