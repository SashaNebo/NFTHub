import { useEffect, useRef, useState } from "react"

const useHeaderSticky = (headerRef) => {
  const [sticky, setSticky] = useState('')
    const observerRef = useRef()

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setSticky('sticky')
        }

        if (entry.isIntersecting) {
          setSticky('')
        }
      }, { rootMargin: '200px 0px 0px' }
    )

    headerRef.current && observerRef.current.observe(headerRef.current)

    return () => {
      headerRef.current && observerRef?.current?.unobserve(headerRef.current)
    }

  }, [])

  return sticky
}

export { useHeaderSticky }
