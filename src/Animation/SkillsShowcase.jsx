"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import SkillProgress from "./SkillProgress"

export default function SkillsShowcase({ skills }) {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", ...new Set(skills.map((skill) => skill.level))]

  const filteredSkills = activeCategory === "All" ? skills : skills.filter((skill) => skill.level === activeCategory)

  return (
    <div className="mt-8">
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category ? "bg-primary text-white" : "bg-card hover:bg-primary/20"
            }`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        key={activeCategory} // Force re-render on category change
      >
        {filteredSkills.map((skill) => (
          <SkillProgress
            key={skill.name}
            name={skill.name}
            level={skill.level}
            percentage={
              skill.level === "Advanced" ? 90 : skill.level === "Intermediate" ? 70 : skill.level === "Basic" ? 40 : 60
            }
          />
        ))}
      </motion.div>
    </div>
  )
}
