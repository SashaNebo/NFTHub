import { UIGradientTitle } from '../UI/UIGradientTitle/UIGradientTitle'
import cn from './News.module.scss'
import { decorations } from './additional'

const News = () => {
  return (
    <section className={cn['news']}>
      <div className={cn['news__wrapper']}>
        <div className='container'>
          <div className={cn['news__content']}>
            <UIGradientTitle
              className={cn['news__title']}
              text='Never'
              gradientText='miss a drop!'
            />
            <p className={cn['news__desc']}>
              Subscribe to our super-rare and exclusive drops & collectibles.{' '}
            </p>
            <form className={cn['news__form']}>
              <input
                className={cn['news__form-input']}
                type='text'
                placeholder='Enter your email'
              />

              <button className={cn['news__form-btn']} type='submit'>
                Subscribe
              </button>
            </form>

            {decorations.map((img, i) => (
              <img
                className={[
                  cn['news__decoration'],
                  cn[`news__decoration-${i + 1}`],
                ].join(' ')}
                src={img}
                alt='decoration img'
                key={img}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { News }
