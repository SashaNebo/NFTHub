import { motion } from 'framer-motion'

import cn from './Brand.module.scss'
import { CustomLink } from '../../components/CustomLink'
import { basePath } from '../../routes'

import { wallets, walletsLight } from './additional'
import { anBrandList } from "../../helpers/animation"

const Brand = () => {

  return (
    <section className={cn['brand']}>
      <div className='container'>
        <div className={cn['brand__content']}>
          <motion.ul
            className={cn['brand__list']}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-100px 0px' }}
          >
            {wallets.map((wallet, i) => (
              <motion.li
                className={cn['brand__item']}
                key={wallet}
                variants={anBrandList}
                custom={i}>
                <CustomLink className={cn['brand__link']} to={basePath}>
                  <img src={wallet} alt='wallet' decoding='async' />
                </CustomLink>

                <CustomLink
                  className={[cn['brand__link'], cn['dark']].join(' ')}
                  to={basePath}>
                  <img src={walletsLight[i]} alt='wallet' decoding='async' />
                </CustomLink>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}

export { Brand }
