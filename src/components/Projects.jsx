"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, BookOpen } from "lucide-react"
import img from "../assets/myblog.png"
import img2 from "../assets/pokemon.png"
import img3 from "../assets/chatapp.png"
import img4 from "../assets/sharing.png"
import img5 from "../assets/textsheild.png"

const projects = [
  {
    title: "Chat Application",
    description:
      "A full-featured chat application built with the MERN stack, featuring JWT token authentication, file sharing, image sharing, and download functionalities.",
    image: img3,
    tags: ["MERN", "JWT", "File Sharing", "React"],
    liveLink: "https://cool-torte-b32d03.netlify.app/",
    githubLink: "https://github.com/Abhaywadkar04/whatsapp",
    type: "Academic Project",
  },
  {
    title: "Sharing App",
    description:
      "A file-sharing app built with the MERN stack, where users can upload files and generate download links to share and download files from any computer.",
    image: img4,
    tags: ["MERN", "File Sharing", "React", "Node.js"],
    liveLink: "https://dropsnap-share.netlify.app",
    githubLink: "https://github.com/Abhaywadkar04/sharing-App",
    type: "Personal Project",
  },
  {
    title: "Blog Application",
    description:
      "A blog platform built with Appwrite and React, allowing users to create, read, delete, and like blogs. Includes user authentication and a dynamic interface.",
    image: img,
    tags: ["Appwrite", "React", "Blogging", "CRUD"],
    liveLink: "https://blog-app-murex-delta.vercel.app",
    githubLink: "#",
    type: "Personal Project",
  },
  {
    title: "Pokedex",
    description:
      "A web application built with HTML, CSS, and JavaScript that fetches data from the PokéAPI to display detailed Pokémon information with a beautiful user interface.",
    image: img2,
    tags: ["JavaScript", "HTML", "CSS", "PokéAPI"],
    liveLink: "https://pokiii.netlify.app/",
    githubLink: "#",
    type: "Personal Project",
  },
  
  {
    title: "Text-Shield",
    description:
      "A text encryption and decryption tool built with Python and Streamlit. It supports both Caesar and Vigenère ciphers for secure communication.",
    image: img5,
    tags: ["Python", "Streamlit", "Encryption", "Security"],
    liveLink: "https://securefloow.streamlit.app",
    githubLink: "#",
    type: "Personal Project",
  },
]

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  }

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/50 dark:bg-card/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="text-foreground/80 mt-6 max-w-2xl mx-auto text-lg">
            These are real-world applications I built during my academic and personal learning journey.
          </p>
        </motion.div>

        {/* Horizontal Scrollable Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex overflow-x-auto space-x-6 pb-4 no-scrollbar snap-x snap-mandatory"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="min-w-[320px] md:min-w-[400px] bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group snap-start"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <div className="flex gap-3">
                    {project.githubLink && project.githubLink !== "#" && (
                      <motion.a
                        href={project.githubLink}
                        whileHover={{ y: -3 }}
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/40 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.liveLink && project.liveLink !== "#" && (
                      <motion.a
                        href={project.liveLink}
                        whileHover={{ y: -3 }}
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/40 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Project"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full flex items-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    {project.type}
                  </span>
                </div>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Upcoming Projects */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-card border border-border rounded-xl p-6 md:p-8"
        >
          <h3 className="text-xl font-bold mb-4 text-center">Upcoming Projects</h3>
          <p className="text-center text-foreground/80 mb-6">
            I'm currently working on these exciting new projects to expand my skills:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "AI Resume Builder",
                description: "An AI-powered resume builder that generates personalized resumes based on user input.",
                tech: ["React", "Spring Boot", "MongoDB"],
              },
            ].map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -5 }}
                className="bg-background p-4 rounded-lg border border-border"
              >
                <h4 className="font-bold mb-2">{project.title}</h4>
                <p className="text-sm text-foreground/70 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs bg-primary/5 text-primary/80 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* GitHub Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Abhaywadkar04"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-card border border-border hover:border-primary text-foreground px-6 py-3 rounded-full font-medium transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
