"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import BackgroundAnimation from "./Animation/BackgroundAnimation"
import PageLoader from "./Animation/PageLoader"
import ScrollToTop from "./Animation/ScrollToTop"
import ScrollIndicator from "./Animation/ScrollIndicator"
import CursorEffect from "./Animation/CursorEffect"
import AnimatedBackground from "./Animation/AnimatedBackground"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0)
  const [loading, setLoading] = useState(true)

  // Handle system preference for dark mode
  useEffect(() => {
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
    setDarkMode(isDarkMode)
    setMounted(true)

    // Get header height for proper content padding
    const header = document.querySelector("header")
    if (header) {
      setHeaderHeight(header.offsetHeight)

      // Update header height on resize
      const handleResize = () => {
        setHeaderHeight(header.offsetHeight)
      }

      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1800)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <AnimatePresence mode="wait">{loading && <PageLoader key="loader" />}</AnimatePresence>
      <ScrollIndicator />
      <CursorEffect />

      <div className="bg-background text-foreground transition-colors duration-300 overflow-hidden">
        <BackgroundAnimation />
        <AnimatedBackground />
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main style={{ paddingTop: `${headerHeight}px` }}>
          <AnimatePresence mode="wait">
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer darkMode={darkMode} />
        <ScrollToTop />
      </div>
    </div>
  )
}

export default App
