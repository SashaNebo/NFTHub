import { useContext } from "react"

import { ThemeContext } from '../context'

const useThemeValue = () => {
  const { theme } = useContext(ThemeContext)
  return theme
}

export { useThemeValue }
