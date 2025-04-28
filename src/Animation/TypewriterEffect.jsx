"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function TypewriterEffect({ text, speed = 50, delay = 0, className = "" }) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!isInView) return

    let timeout

    // Initial delay
    timeout = setTimeout(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1
          setDisplayText(text.substring(0, nextIndex))

          if (nextIndex >= text.length) {
            clearInterval(intervalId)
          }

          return nextIndex
        })
      }, speed)

      return () => clearInterval(intervalId)
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, speed, delay, isInView])

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
        className="inline-block ml-1 w-[2px] h-[1em] bg-current align-middle"
      />
    </motion.span>
  )
}
