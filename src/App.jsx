import { BrowserRouter } from 'react-router-dom'

import { AppRouter } from './components/AppRouter/AppRouter'
import { ThemeContext } from './context'
import { useTheme } from './hooks/useTheme'

const App = () => {
  const themeState = useTheme()

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={themeState}>
        <AppRouter />
      </ThemeContext.Provider>
    </BrowserRouter>
  )
}

export { App }
