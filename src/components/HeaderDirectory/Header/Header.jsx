import { useRef } from 'react'

import cn from './Header.module.scss'
import { HeaderContent } from './HeaderContent'

const Header = () => {
  const headerRef = useRef()

  return (
    <>
      <div className={cn['header']}>
        <div className='container'>
          <HeaderContent />
        </div>
      </div>

      <div ref={headerRef} />
    </>
  )
}

export { Header }
