import { motion } from "framer-motion"

const skills = [
  { name: "C++", icon: "👨‍💻", level: "Advanced" },

  { name: "HTML", icon: "🌐", level: "Advanced" },
  { name: "CSS", icon: "🎨", level: "Advanced" },
  { name: "JavaScript", icon: "💻", level: "Intermediate" },
  { name: "React", icon: "⚛️", level: "Intermediate" },
  { name: "Bootstrap", icon: "🅱️", level: "Advanced" },
  { name: "Tailwind CSS", icon: "🌊", level: "Intermediate" },
  { name: "Node.js", icon: "🟢", level: "Basic" },
  { name: "Express.js", icon: "⚡", level: "Basic" },
  { name: "MySQL", icon: "🗄️", level: "Intermediate" },
  { name: "MongoDB", icon: "🍃", level: "Basic" },
  { name: "Git", icon: "🔧", level: "Intermediate" },
  { name: "REST APIs", icon: "🔌", level: "Intermediate" },
  { name: "VS Code", icon: "🧑‍💻", level: "Intermediate" },
]

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  }

  const skillsByLevel = {
    Advanced: skills.filter((skill) => skill.level === "Advanced"),
    Intermediate: skills.filter((skill) => skill.level === "Intermediate"),
    Basic: skills.filter((skill) => skill.level === "Basic"),
  }

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">Skills & Technologies</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="text-foreground/80 mt-6 max-w-2xl mx-auto text-lg">
            These are the tools and technologies I’ve worked with throughout my academic journey and personal projects.
          </p>
        </motion.div>

        {/* Skills grouped by level */}
        {Object.entries(skillsByLevel).map(([level, levelSkills]) => (
          <div key={level} className="mb-12 last:mb-0">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xl font-bold mb-6 text-center md:text-left"
            >
              {level} Proficiency
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
            >
              {levelSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  className="bg-card border border-border rounded-xl p-4 md:p-6 flex flex-col items-center justify-center transition-all duration-300 hover:border-primary/50"
                >
                  <span className="text-3xl mb-3">{skill.icon}</span>
                  <h3 className="font-medium text-center text-sm md:text-base">{skill.name}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-card border border-border rounded-xl p-6 md:p-8"
        >
          <h3 className="text-xl font-bold mb-4 text-center">Currently Exploring</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Spring Boot", "Angular", "MongoDB"].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
