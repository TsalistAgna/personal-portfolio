import { useEffect, useRef, useState } from 'react'

/** Reveals an element once when it approaches the viewport. */
export function useReveal() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (!('IntersectionObserver' in window) ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -4% 0px' })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

export default function Reveal({ as: Tag = 'div', className = '', delay = 0, style, children, ...rest }) {
  const { ref, isVisible } = useReveal()
  return <Tag
    ref={ref}
    {...rest}
    className={`motion-reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
    style={{ ...style, '--reveal-delay': `${delay}ms` }}
  >{children}</Tag>
}
