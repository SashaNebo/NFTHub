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

export const pageOnePath = `${basePath}/pages/page-one`
export const pageTwoPath = `${basePath}/pages/page-two`
export const pageThreePath = `${basePath}/pages/page-three`
export const pageFourPath = `${basePath}/pages/page-four`

export const subnavLinks = [
  { link: pageOnePath, text: 'page one' },
  { link: pageTwoPath, text: 'page two' },
  { link: pageThreePath, text: 'page three' },
  { link: pageFourPath, text: 'page four' },
]
