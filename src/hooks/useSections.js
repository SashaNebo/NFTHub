import { useState } from 'react'

const useSections = () => {
  const [sections, setSections] = useState([])

  const addSection = (sectionData) => {
    const haveSection = sections.some(s => sectionData.id === s.id)
    
    if (!haveSection) {
      setSections((prevSections) => [...prevSections, sectionData])
    }
  }

  const clearSections = () => setSections(() => [])

  return { sections, setSections: addSection, clearSections }
}

export { useSections }
