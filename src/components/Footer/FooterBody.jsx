import clsx from 'clsx'

import cn from './Footer.module.scss'
import logoImg from '../../assets/images/svg/gradient-nfthub.svg'
import { SvgIcon } from '../../components/SvgIcon'
import { CustomLink } from '../../components/CustomLink'
import { baseRoute } from '../../routes'

const FooterBody = () => {
  return (
    <div className={cn['footer__body']}>
      <ColOne />
      <ColTwo />
      <ColThree />
    </div>
  )
}

const ColOne = () => {
  const socialItems = ['twitter', 'instagram', 'youtube']

  return (
    <div className={clsx(cn['col'], cn['col-1'])}>
      <CustomLink className={cn['logo']} to={baseRoute}>
        <img src={logoImg} alt='' />
      </CustomLink>

      <p className={cn['text']}>
        Join our Discord channel or follow us on Twitter to keep up to date with
        our latest work and announcements.
      </p>

      <div className={cn['social']}>
        {socialItems.map((item) => (
          <a
            className={cn['social__link']}
            href={`https:${item}.com`}
            target='_blank'
            key={item}>
            <SvgIcon icon={item} />
          </a>
        ))}
      </div>
    </div>
  )
}

const ColTwo = () => {
  const links = [
    { link: 'about', text: 'About' },
    { link: 'collection', text: 'Collection' },
    { link: 'roadmap', text: 'Roadmap' },
    { link: 'faqs', text: 'FAQs' },
  ]

  return (
    <div className={clsx(cn['col'], cn['col-2'])}>
      <h1 className={cn['title']}>Quick Link</h1>
      <ul className={cn['links']}>
        {links.map(({ link, text }) => (
          <CustomLink className={cn['link']} to={link} key={link}>
            {text}
          </CustomLink>
        ))}
      </ul>
    </div>
  )
}

const ColThree = () => {
  const links = [
    { link: 'how-it-works!', text: 'How it works!' },
    { link: 'blockchain', text: 'Blockchain' },
    { link: 'get-in-touch', text: 'Get in touch' },
  ]

  return (
    <div className={clsx(cn['col'], cn['col-3'])}>
      <h1 className={cn['title']}>Community</h1>
      <ul className={cn['links']}>
        {links.map(({ link, text }) => (
          <CustomLink className={cn['link']} to={link} key={link}>
            {text}
          </CustomLink>
        ))}
      </ul>
    </div>
  )
}

export { FooterBody }
