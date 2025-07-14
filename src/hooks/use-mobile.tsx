import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

// Custom hook for scroll position and direction detection
export function useScrollPosition() {
  const [scrollY, setScrollY] = React.useState(0)
  const [scrollDirection, setScrollDirection] = React.useState<'up' | 'down' | null>(null)
  const [isAtTop, setIsAtTop] = React.useState(true)
  const [isPastHero, setIsPastHero] = React.useState(false)
  const lastScrollY = React.useRef(0)

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Update scroll position
      setScrollY(currentScrollY)

      // Determine if at top
      setIsAtTop(currentScrollY < 10)

      // Determine if past hero section (hero is h-screen, so roughly window height)
      const heroHeight = window.innerHeight
      setIsPastHero(currentScrollY > heroHeight * 0.8) // 80% of hero section

      // Determine scroll direction
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down')
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection('up')
      }

      lastScrollY.current = currentScrollY
    }

    // Add scroll event listener with throttling for better performance
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })

    // Set initial values
    handleScroll()

    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, [])

  return { scrollY, scrollDirection, isAtTop, isPastHero }
}

// Custom hook for intersection observer to detect when element is in view
export function useIntersectionObserver(
  elementRef: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = React.useState(false)
  const [intersectionRatio, setIntersectionRatio] = React.useState(0)

  React.useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
        setIntersectionRatio(entry.intersectionRatio)
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: '0px',
        ...options,
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [elementRef, options])

  return { isIntersecting, intersectionRatio }
}
