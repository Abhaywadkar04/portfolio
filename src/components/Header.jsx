import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun, Menu, X, Linkedin, Github, Twitter, Instagram,Terminal,ClipboardList} from "lucide-react"

export default function Header({ darkMode, setDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef(null)

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]



 
  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/abhay-wadkar-078b25283/", icon: <Linkedin className="w-4 h-4" /> },
    { name: "GitHub", url: " https://github.com/Abhaywadkar04", icon: <Github className="w-4 h-4" /> },
    { name: "Twitter", url: "#", icon: <Twitter className="w-4 h-4" /> },
    { name: "Instagram", url: "https://www.instagram.com/abhhay____/", icon: <Instagram className="w-4 h-4" /> },
    { name: "LeetCode", url: "https://leetcode.com/u/abhaywadkar2004/", icon: <ClipboardList className="w-4 h-4" /> },
  ]

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md shadow-md" : "bg-background/70 backdrop-blur-sm"}`}
      style={{ height: "72px", width: "100%" }}
    >
      <div className="container mx-auto px-6 py-5 md:py-4">
        <div className="flex justify-between items-center">
          <motion.div
            className="flex items-center text-3xl calligraphy-text gradient-text mr-2"
            whileHover={{ scale: 1.1, rotate: 2 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            onClick={() => window.location.href = "#"}
          >
            <span className="mr-2">A</span>
            <span className="mr-2">w</span>
          </motion.div>

          <nav className="hidden md:block">
            <ul className="flex space-x-7">
              {navItems.map((item) => (
                <motion.li key={item.name} whileHover={{ y: -2 }}>
                  <a href={item.href} className="relative font-medium hover:text-primary transition-colors duration-300 group">
                    {item.name}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-3 mr-2">
              {socialLinks.map((link) => (
                <motion.a key={link.name} href={link.url} whileHover={{ y: -2, color: "hsl(var(--primary))" }} className="text-foreground/70 transition-colors" aria-label={link.name} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                </motion.a>
              ))}
            </div>

            <motion.button whileTap={{ scale: 0.9 }} onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors" aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={darkMode ? "dark" : "light"} initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} transition={{ duration: 0.2 }}>
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            <motion.button whileTap={{ scale: 0.9 }} onClick={toggleMenu} className="p-2 md:hidden rounded-full bg-muted hover:bg-muted/80 transition-colors" aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </div>
      <AnimatePresence initial>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
            onClick={toggleMenu}
          >
            <nav className="container mx-auto px-6 py-5">
              <ul className="flex flex-col space-y-5">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      className="block py-2 text-lg font-medium hover:text-primary transition-colors"
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex space-x-5 mt-6 pt-6 border-t border-border"
              >
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    whileHover={{ y: -2 }}
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:text-primary transition-colors"
                    aria-label={link.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={toggleMenu}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

