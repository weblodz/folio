import { useEffect } from 'react'

function useVisibilityObserver(selector, className) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className)
          } else if (entry.boundingClientRect.top > 0) {
            entry.target.classList.remove(className)
          }
        })
      },
      { threshold: 0.4 },
    )

    const elements = document.querySelectorAll(selector)

    elements.forEach((el) => observer.observe(el))
  }, [selector, className])
}

export default useVisibilityObserver
