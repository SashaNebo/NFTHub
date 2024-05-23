import cn from './Header.module.scss'
import { CustomLink } from '../CustomLink'
import { useScrollToSection } from '../../hooks/useScrollToSection'
import { navLinks, subnavLinks } from '../../routes'

const HeaderNav = () => {
  const scrollToSection = useScrollToSection()

  return (
    <nav className={cn['nav']}>
      <ul className={cn['nav__list']}>
        {navLinks.map(({ link, text }) => (
          <li
            className={cn['nav__item']}
            key={link}
            onClick={() => scrollToSection(link)}>
            <CustomLink
              className={cn['nav__link']}
              activeClassName={cn['active']}
              to={link}>
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
  return (
    <ul className={cn['subnav']}>
      {subnavLinks.map(({ link, text }) => (
        <li className={cn['subnav__item']} key={link}>
          <CustomLink
            className={cn['subnav__link']}
            activeClassName={cn['active']}
            to={link}>
            {text}
          </CustomLink>
        </li>
      ))}
    </ul>
  )
}

export { HeaderNav }
