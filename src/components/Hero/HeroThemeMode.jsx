import { useEffect, useState } from 'react'

import cn from './Hero.module.scss'
import sun from '../../assets/images/icons/sun.svg'

const HeroThemeMode = () => {
  const [theme, setTheme] = useState('dark')
  
  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))

  return (
    <div className={cn['mode']} onClick={toggleTheme}>
      <img src={sun} alt="sun" />
    </div>
  )
}

export { HeroThemeMode }
