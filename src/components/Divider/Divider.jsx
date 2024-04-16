import clsx from 'clsx'

import cn from './Divider.module.scss'
import divider from '../../assets/images/icons/divider.svg'

const Divider = ({ className }) => {
  return (
    <div className={cn['divider']}>
      <div className={clsx(cn['divider__wrapper'], className)}>
        <img src={divider} alt='divider' />
      </div>
    </div>
  )
}

export { Divider }