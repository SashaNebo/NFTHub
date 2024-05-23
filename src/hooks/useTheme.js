import { useEffect, useState } from 'react'

const useTheme = () => {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const prevTheme = localStorage.getItem('data-theme')
    if (prevTheme) setTheme(() => prevTheme)
  }, [])

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return { theme, setTheme: toggleTheme }
}

export { useTheme }
