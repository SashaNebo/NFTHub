import { useEffect, useRef, useState } from 'react'

import { ThemeModifier } from '../components/ThemeModifier/ThemeModifier'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { Preloader } from '../components/Preloader/Preloader'

const MainLayout = () => {
  const [isLoading, setIsLoading] = useState(true)
  const timeoutRef = useRef()

  window.onload = () => {
    timeoutRef.current = setTimeout(() => {
      setIsLoading(() => false)
    }, 2500)
  }

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIsLoading(() => false)
    }, 2500)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <>
      <Preloader isLoading={isLoading} />

      {!isLoading && (
        <>
          <ThemeModifier />
          <Header />
          <Main />
          <Footer />
        </>
      )}
    </>
  )
}

export { MainLayout }
