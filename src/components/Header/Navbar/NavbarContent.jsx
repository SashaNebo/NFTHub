import cn from './Navbar.module.scss'
import mobileLogo from '../../../assets/images/icons/logo-mobile.svg'

import { NavbarSocial } from './NavbarSocial'
import { NavbarList } from './NavbarList'

const NavbarContent = () => {
  return (
    <div className={cn['navbar__content']}>
      <div className={cn['navbar__logo']}>
        <img src={mobileLogo} alt='' />
      </div>

      <NavbarList />

      {/* <ul className={cn['navbar__list']}>
        {navList.map((navItem) => (
          <li className={cn['navbar__list-item']} key={navItem}>
            <Link to={`/${navItem}`} className={cn['navbar__list-link']}>
              {navItem}
            </Link>

            <div className={cn['navbar__list-hover']}>
              <SvgIcon icon='plus'/>
            </div>
          </li>
        ))}
      </ul> */}

      <NavbarSocial />
    </div>
  )
}

export { NavbarContent }
