import { Link } from 'react-router-dom'

import cn from './Header.module.scss'
import { baseRoute } from '../../../routes'

const HeaderNav = () => {
  const navItems = [
    { link: '', text: 'home' },
    { link: 'collection', text: 'collection' },
    { link: 'choose', text: 'choose' },
    { link: 'about', text: 'about' },
    { link: 'roadmap', text: 'roadmap' },
    { link: 'blog', text: 'blog' },
  ]

  return (
    <nav className={cn['nav']}>
      <ul className={cn['nav__list']}>
        {navItems.map(({ link, text }) => (
          <li className={cn['nav__item']} key={link}>
            <Link
              className={cn['nav__link']}
              to={`${baseRoute}/${link}`}>
              {text}
            </Link>

            {text === 'home' && <Subnav />}
          </li>
        ))}
      </ul>
    </nav>
  )
}

const Subnav = () => {
  const subnavItems = [
    { link: 'home-one', text: 'home one' },
    { link: 'home-two', text: 'home two' },
    { link: 'home-three', text: 'home three' },
    { link: 'home-four', text: 'home four' },
  ]

  return (
    <ul className={cn['subnav']}>
      {subnavItems.map(({ link, text }) => (
        <li className={cn['subnav__item']} key={link}>
          <Link
            className={cn['subnav__link']}
            to={`${baseRoute}/${link}`}>
            {text}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export { HeaderNav }
