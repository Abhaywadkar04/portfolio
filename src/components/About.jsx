import { motion } from "framer-motion"
import { GraduationCap, Award, BookOpen, Code, PenTool } from "lucide-react"
import img from "../assets/abhay.jpeg"

export default function About() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  }

  const twelfth = {
    qualification: "Higher Secondary Certificate (HSC)",
    college: "Viva College of Arts, Science and Commerce",
    board: "Maharashtra State Board",
    year: "2021 - 2022",
    percentage: "71%", // Replace with your actual percentage
  }
  
  const graduation = {
    degree: "Bachelor of Engineering in Computer Science",
    college: "Thakur College of Engineering and Technology",
    university: "University of Mumbai",
    year: "2022 - 2026",
    cgpa: "current CGPA: 8.74", // Replace with your actual CGPA
  }
  

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/50 dark:bg-card/20">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">About Me</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div variants={itemVariants} className="lg:w-2/5 relative">
              <div className="animated-border p-2 rounded-2xl">
                <img
                  src={`${img}?height=600&width=600`}
                  alt="Your Name"
                  className="rounded-xl w-full max-w-md mx-auto object-cover"
                />
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="lg:w-3/5">
  <h3 className="text-2xl font-bold mb-4">Aspiring Full-Stack Web Developer</h3>
  <p className="text-foreground/80 mb-6 text-lg">
    I'm pursuing my B.E. in Computer Science Engineering from TCET, Mumbai. I have hands-on experience with the MERN stack and a solid understanding of Data Structures and Algorithms (DSA). I've built projects like a Chat Application using the MERN stack and a Blog Application using Appwrite and React.
  </p>
  <p className="text-foreground/80 mb-8 text-lg">
    I'm skilled in Java, HTML, CSS, JavaScript, and React, and have worked with MySQL and MongoDB. I enjoy solving real-world problems through code and continuously upskilling via platforms like LeetCode, Udemy, and Coursera.
  </p>








              {/* Education Section */}
              <div className="mb-8 bg-card border border-border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h4 className="font-bold text-lg">Higher Secondary Education</h4>
                </div>
                <p className="font-medium">{twelfth.qualification}</p>
                <p className="text-foreground/80">{twelfth.college}</p>
                <p className="text-foreground/70">{twelfth.university}</p>
                <div className="flex justify-between mt-2 text-sm text-foreground/60">
                  <span>{twelfth.year}</span>
                  <span>{twelfth.percentage}</span>
                </div>
              </div>
              <div className="mb-8 bg-card border border-border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h4 className="font-bold text-lg">Graduation</h4>
                </div>
                <p className="font-medium">{graduation.degree}</p>
                <p className="text-foreground/80">{graduation.college}</p>
                <p className="text-foreground/70">{graduation.university}</p>
                <div className="flex justify-between mt-2 text-sm text-foreground/60">
                  <span>{graduation.year}</span>
                  <span>CGPA: {graduation.cgpa}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { title: "Curious Learner", icon: <BookOpen className="w-4 h-4 text-primary mb-1" /> },
                  { title: "Team Player", icon: <Award className="w-4 h-4 text-primary mb-1" /> },
                  { title: "Problem Solver", icon: <Code className="w-4 h-4 text-primary mb-1" /> },
                  { title: "Creative Thinker", icon:  <PenTool className="w-4 h-4 text-primary mb-1" /> },
                ].map((trait, index) => (
                  <motion.div
                    key={trait.title}
                    className="bg-card p-3 rounded-lg text-center border border-border flex flex-col items-center"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {trait.icon}
                    <p className="font-medium">{trait.title}</p>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block gradient-bg text-white px-6 py-3 rounded-full font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow"
              >
                Let's Connect
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

