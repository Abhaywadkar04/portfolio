"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import TypewriterEffect from "../Animation/TypewriterEffect"
import ParallaxSection from "../Animation/ParallaxSection"
import TextReveal from "../Animation/TextReveal"

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, -200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.9])

  return (
    <ParallaxSection className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-0">
      <motion.div
        style={{ y, opacity, scale }}
        className="text-center z-10 px-6 md:px-4 max-w-3xl mx-auto my-16 md:my-0"
      >
        <motion.div
          className="mb-6 inline-block shine"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="animated-border p-1 inline-block">
            <div className="bg-background dark:bg-card px-6 py-2 rounded-md">
              <span className="text-primary font-medium">Junior Developer</span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 text-glow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <TextReveal className="gradient-text">Hi, I'm Abhay Wadkar</TextReveal>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <TypewriterEffect
text="A passionate Computer Science Engineering student currently pursuing a B.E. degree with a strong foundation in web development."
speed={30}
            delay={1000}
            className="text-lg md:text-xl mb-10 text-foreground/80 max-w-2xl mx-auto"
          />
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="gradient-bg text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow shine"
          >
            View My Projects
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-muted text-foreground px-8 py-3 rounded-full font-medium hover:bg-muted/80 transition-colors"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow hidden md:block"
        >
          <a href="#about" aria-label="Scroll down">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-foreground/60"
            >
              <path
                d="M12 5V19M12 19L19 12M12 19L5 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </ParallaxSection>
  )
}
