
import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

export default function AnimatedCounter({ from = 0, to, duration = 2000, className = "" }) {
  const [count, setCount] = useState(from)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!isInView) return

    let startTime
    let animationFrame

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime

      if (progress < duration) {
        const nextCount = Math.floor(from + (to - from) * (progress / duration))
        setCount(nextCount)
        animationFrame = requestAnimationFrame(updateCount)
      } else {
        setCount(to)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)

    return () => cancelAnimationFrame(animationFrame)
  }, [from, to, duration, isInView])

  return (
    <span ref={ref} className={className}>
      {count}
    </span>
  )
}
