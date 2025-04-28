"use client"

import { motion } from "framer-motion"
import AnimatedCounter from "./AnimatedCounter"

export default function Stats() {
  const stats = [
    { label: "Projects Completed", value: 10 },
    { label: "Certifications", value: 5 },
    { label: "Years Experience", value: 2 },
    { label: "Happy Clients", value: 8 },
  ]

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="text-center p-4 bg-card rounded-lg border border-border"
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
            <AnimatedCounter from={0} to={stat.value} />
            {stat.label === "Years Experience" ? "+" : ""}
          </div>
          <p className="text-foreground/70">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}
