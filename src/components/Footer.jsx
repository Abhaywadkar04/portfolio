import { motion } from "framer-motion"
import { Linkedin, Github, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer({ darkMode }) {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/abhay-wadkar-078b25283/", icon: <Linkedin className="w-4 h-4" /> },
    { name: "GitHub", url: " https://github.com/Abhaywadkar04", icon: <Github className="w-4 h-4" /> },
    { name: "Twitter", url: "#", icon: <Twitter className="w-4 h-4" /> },
    { name: "Instagram", url: "https://www.instagram.com/abhhay____/", icon: <Instagram className="w-4 h-4" /> },
  ]

  const quickLinks = [
    { name: "About", url: "#about" },
    { name: "Skills", url: "#skills" },
    { name: "Projects", url: "#projects" },
    { name: "Contact", url: "#contact" },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
            <motion.div
              className="flex items-center text-3xl calligraphy-text gradient-text mr-2 cursor-pointer"
              whileHover={{ scale: 1.1, rotate: 2 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              onClick={() => window.location.href = "#"}
            >
              <span className="mr-2">A</span>
              <span className="mr-2">w</span>
            </motion.div>
            </div>
            <p className="text-foreground/70 mb-4">
              Junior web developer passionate about creating responsive and user-friendly web experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  <span className="sr-only">{link.name}</span>
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.url} className="text-foreground/70 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Interests</h3>
            <ul className="space-y-2">
              {["Front-end Development", "UI/UX Design", "Web Accessibility", "Open Source"].map((interest) => (
                <li key={interest} className="text-foreground/70">
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">&copy; {currentYear} Abhay Wadkar. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

