import clsx from 'clsx'

import cn from './Footer.module.scss'
import logoImg from '../../assets/images/svg/other/gradient-nfthub.svg'
import { SvgIcon } from '../../components/SvgIcon'
import { CustomLink } from '../../components/CustomLink'
import { baseRoute } from '../../routes'

const FooterBody = ({ scrollToSection }) => {
  return (
    <div className={cn['footer__body']}>
      <ColOne />
      <ColTwo scrollToSection={scrollToSection} />
      <ColThree scrollToSection={scrollToSection} />
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
            aria-label='social link'
            key={item}>
            <SvgIcon icon={item} />
          </a>
        ))}
      </div>
    </div>
  )
}

const ColTwo = ({ scrollToSection }) => {
  const links = [
    { link: 'about', text: 'About' },
    { link: 'collection', text: 'Collection' },
    { link: 'roadmap', text: 'Roadmap' },
    { link: 'faq', text: 'FAQs' },
  ]

  return (
    <div className={clsx(cn['col'], cn['col-2'])}>
      <h1 className={cn['title']}>Quick Link</h1>
      <ul className={cn['links']}>
        {links.map(({ link, text }) => (
          <li key={link}>
            <CustomLink
              className={cn['link']}
              to={link}
              onClick={() => scrollToSection(link)}>
              {text}
            </CustomLink>
          </li>
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
          <li key={link}>
            <CustomLink className={cn['link']} to={link}>
              {text}
            </CustomLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { FooterBody }
