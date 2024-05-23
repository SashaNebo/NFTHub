import { BrowserRouter } from 'react-router-dom'

import { AppRouter } from './components/AppRouter/AppRouter'
import { SectionsContext, ThemeContext } from './context'
import { useTheme } from './hooks/useTheme'
import { useSections } from './hooks/useSections'

const App = () => {
  const themeState = useTheme()
  const sectionsState = useSections()

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={themeState}>
        <SectionsContext.Provider value={sectionsState}>
          <AppRouter />
        </SectionsContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  )
}

export { App }
