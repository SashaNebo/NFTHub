import { Link } from 'react-router-dom'

import cn from './Header.module.scss'
import { navList } from './additional'

const HeaderNav = () => {
  return (
    <nav className={cn['nav']}>
      <ul className={cn['nav__list']}>
        {navList.map((navItem) => (
          <li className={cn['nav__item']} key={navItem}>
            <Link to={`/${navItem}`} className={cn['nav__link']}>
              {navItem}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export { HeaderNav }
