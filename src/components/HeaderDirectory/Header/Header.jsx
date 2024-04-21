import { useRef } from 'react'
import clsx from 'clsx'

import cn from './Header.module.scss'
import { HeaderContent } from './HeaderContent'
import { useHeaderSticky } from '../../../hooks/useHeaderSticky'

const Header = () => {
  const headerRef = useRef()
  const sticky = useHeaderSticky(headerRef)

  return (
    <>
      <div className={clsx(cn['header'], cn[sticky])}>
        <div className='container'>
          <HeaderContent />
        </div>
      </div>

      <div ref={headerRef} />
    </>
  )
}

export { Header }
