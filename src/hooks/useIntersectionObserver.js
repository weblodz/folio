import { useEffect, useState } from 'react'

export const useIntersectionObserver = (options, callback) => {
  const [target, setTarget] = useState(null)

  useEffect(() => {
    if (!target) return

    const observer = new IntersectionObserver(callback, options)

    observer.observe(target)

    return () => {
      observer.disconnect()
    }
  }, [target, options, callback])

  return { setTarget }
}
