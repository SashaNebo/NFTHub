import { useContext } from 'react'
import { SectionsContext } from '../context'

const useScrollToSection = () => {
  const { sections } = useContext(SectionsContext)

  return (link) => {
    sections.forEach(({ node, id }) => {
      if (link.includes(id)) {
        window.scrollTo({ top: node.offsetTop, behavior: 'smooth' })
      }
    })
  }
}

export { useScrollToSection }
