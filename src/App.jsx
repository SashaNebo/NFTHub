import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './components/AppRouter/AppRouter'

const App = () => {

  return (
    <div className='app'>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  )
}

export { App }
