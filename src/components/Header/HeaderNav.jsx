import cn from './Header.module.scss'
import { baseRoute } from '../../routes'
import { CustomLink } from '../CustomLink'

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
            <CustomLink
              className={cn['nav__link']}
              activeClassName={cn['active']}
              to={`${baseRoute}/${link}`} end={true}>
              {text}
            </CustomLink>
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
          <CustomLink
            className={cn['subnav__link']}
            activeClassName={cn['active']}
            to={`${baseRoute}/${link}`}>
            {text}
          </CustomLink>
        </li>
      ))}
    </ul>
  )
}

export { HeaderNav }
