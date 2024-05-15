import { useEffect, useState, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

import cn from './Collection.module.scss'
import { SvgIcon } from '../SvgIcon'
import { CustomLink } from '../CustomLink'
import { getTranslateX, slides } from './additional'
import { UIButtonLink } from '../../components/UI/UIButtonLink'
import { basePath } from '../../routes'

const CollectionSwiper = () => {
  const controls = useAnimation()

  const listRef = useRef()
  const itemRef = useRef()
  const [[listWidth, itemWidth], setWidth] = useState([0, 0])

  useEffect(() => {
    setWidth(() => [
      listRef.current.scrollWidth - listRef.current.offsetWidth,
      itemRef.current.scrollWidth,
    ])
  }, [])

  const scrollToSlide = (nextStep) => {
    const needScroll = -nextStep * itemWidth
    controls.start({ x: needScroll })
  }

  const handleClickPrev = () => {
    const translateX = getTranslateX(listRef.current)
    if (translateX >= 0) return

    const isLimit = translateX + itemWidth > 0
    const remainder = (translateX % itemWidth) + itemWidth

    const currentStep = Math.floor(Math.abs(translateX) / itemWidth)
    const nextStep =
      remainder > itemWidth / 2 && !isLimit ? currentStep - 1 : currentStep

    scrollToSlide(nextStep)
  }

  const handleClickNext = () => {
    const translateX = getTranslateX(listRef.current)
    if (translateX <= -listWidth) return

    const isLimit = translateX - itemWidth <= -listWidth
    const remainder = (translateX % itemWidth) + itemWidth

    const currentStep = Math.floor(Math.abs(translateX) / itemWidth)
    const nextStep =
      remainder > itemWidth / 2 || isLimit ? currentStep + 1 : currentStep + 2

    scrollToSlide(nextStep)
  }

  return (
    <div className={cn['swiper']}>
      <div className={cn['carousel']}>
        <div className={cn['carousel__wrapper']}>
          <motion.div
            className={cn['carousel__list']}
            ref={listRef}
            drag='x'
            dragConstraints={{ right: 0, left: -listWidth }}
            whileTap={{ cursor: 'grabbing' }}
            whileHover={{ cursor: 'grab' }}
            animate={controls}>
            <Slides itemRef={itemRef} />
          </motion.div>
        </div>

        <Navigation prev={handleClickPrev} next={handleClickNext} />
      </div>

      <div className={cn['swiper__bottom']}>
        <UIButtonLink
          text='View collection'
          icon='arrowUpRight'
          to={basePath}
        />
      </div>
    </div>
  )
}

const Slides = ({ itemRef }) => {
  return slides.map(({ img, name, author }, i) => (
    <div className={cn['carousel__item']} key={img} ref={itemRef}>
      <img src={img} alt={`slide ${i + 1}`} decoding='async' />

      <div className={cn['carousel__item-info']}>
        <h3 className={cn['carousel__item-title']}>
          <CustomLink to=''>{name}</CustomLink>
        </h3>
        <p className={cn['carousel__item-author']}>{author}</p>
      </div>
    </div>
  ))
}

const Navigation = ({ next, prev }) => {
  return (
    <>
      <button
        className={[cn['carousel__btn'], cn['carousel__btn-prev']].join(' ')}
        onClick={prev}>
        <SvgIcon icon='arrowhead' />
      </button>

      <button
        className={[cn['carousel__btn'], cn['carousel__btn-next']].join(' ')}
        onClick={next}>
        <SvgIcon icon='arrowhead' />
      </button>
    </>
  )
}

export { CollectionSwiper }
