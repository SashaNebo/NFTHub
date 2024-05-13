export const baseRoute = '/nfthub'

// ---

export const basePath = '/nfthub'
export const collectionPath = `${basePath}/collection`
export const choosePath = `${basePath}/choose`
export const aboutPath = `${basePath}/about`
export const roadmapPath = `${basePath}/roadmap`
export const faqPath = `${basePath}/faq`
export const pagesPath = `${basePath}/pages/:page`

export const navLinks = [
  { link: basePath, text: 'home' },
  { link: collectionPath, text: 'collection' },
  { link: choosePath, text: 'choose' },
  { link: aboutPath, text: 'about' },
  { link: roadmapPath, text: 'roadmap' },
  { link: faqPath, text: 'faq' },
]

export const subnavLinks = [
  { link: `${basePath}/pages/page-one`, text: 'page one' },
  { link: `${basePath}/pages/page-two`, text: 'page two' },
  { link: `${basePath}/pages/page-three`, text: 'page three' },
  { link: `${basePath}/pages/page-four`, text: 'page four' },
]
