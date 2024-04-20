  // const [sticky, setSticky] = useState('')
  // const observerRef = useRef()

  // useEffect(() => {
  //   if (observerRef.current) observerRef.current.disconect()

  //   observerRef.current = new IntersectionObserver(
  //     ([entry], observer) => {
  //       if (!entry.isIntersecting) {
  //        setSticky(cn['sticky'])
  //       }
        
  //       if (entry.isIntersecting) {
  //         setSticky('')
  //       }
  //     }, {
  //       rootMargin: '200px'
  //     }
  //   )

  //   stickyRef.current && observerRef.current.observe(stickyRef.current)
// }, [])