import { useContext } from 'react'

import cn from './ThemeModifier.module.scss'
import { SvgIcon } from '../SvgIcon/SvgIcon'
import { ThemeContext } from '../../context'

const ThemeModifier = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div className={cn['theme-modifier']}>
      <button
        className={[cn['theme-modifier__btn'], cn[theme]].join(' ')}
        onClick={setTheme} aria-label='button toggle theme'>
        <SvgIcon
          className={[cn['icon'], cn[theme]].join(' ')}
          icon={theme === 'light' ? 'sun' : 'moon'}
        />
      </button>
    </div>
  )
}

export { ThemeModifier }
