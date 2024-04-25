import { Outlet } from 'react-router-dom'

import cn from './Main.module.scss'
import { GradientPosition } from '../GradientPosition'

const Main = () => {
  return (
    <main className={cn['main']}>
      <GradientPosition />

      <div className='content'>
        <Outlet />
      </div>
    </main>
  )
}

export { Main }