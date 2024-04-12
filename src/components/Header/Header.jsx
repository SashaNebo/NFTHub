import cn from './Header.module.scss'
import { SvgIcon } from '../SvgIcon/SvgIcon'
import { UIButton } from '../UI/UIButton'
import {Container } from '../Container'

const Header = () => {
  
  return (
    <div className={cn['header']}>
      <Container>
        <h1>Header</h1>
        <SvgIcon className={cn['icon']} icon='discord' />
        <SvgIcon className={cn['header__icon']} icon='twitter' />
        <SvgIcon className={cn['header__icon']} icon='instagram' />
        <UIButton className={cn['header__btn']}>Click</UIButton>
      </Container>
    </div>
  )
}

export { Header }