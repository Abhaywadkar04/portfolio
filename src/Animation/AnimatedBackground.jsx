"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function AnimatedBackground() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const x = clientX / window.innerWidth - 0.5
      const y = clientY / window.innerHeight - 0.5

      // Apply parallax effect to all shapes
      const shapes = container.querySelectorAll(".animated-shape")
      shapes.forEach((shape, index) => {
        const depth = (index + 1) * 0.5
        const moveX = x * 20 * depth
        const moveY = y * 20 * depth
        shape.style.transform = `translate(${moveX}px, ${moveY}px)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated shapes */}
      <div className="animated-shape absolute top-[10%] left-[10%] w-64 h-64 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>
      <div className="animated-shape absolute top-[40%] right-[15%] w-80 h-80 rounded-full bg-secondary/5 dark:bg-secondary/10 blur-3xl"></div>
      <div className="animated-shape absolute bottom-[20%] left-[20%] w-72 h-72 rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl"></div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-[15%] right-[25%] w-16 h-16 rounded-md bg-primary/10 dark:bg-primary/20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-[30%] right-[10%] w-12 h-12 rounded-full bg-secondary/10 dark:bg-secondary/20"
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute top-[60%] left-[5%] w-20 h-20 rounded-lg rotate-45 bg-accent/10 dark:bg-accent/20"
        animate={{
          y: [0, 40, 0],
          rotate: [45, 90, 45],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
    </div>
  )
}
