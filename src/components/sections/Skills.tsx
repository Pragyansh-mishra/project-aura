import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React", category: "Frontend" },
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "Python", category: "Languages" },
  { name: "C", category: "Languages" },
  { name: "HTML/CSS", category: "Frontend" },
  { name: "MySQL", category: "Database" },
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "DSA", category: "Fundamentals" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 bg-background relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container px-6 max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Tech Stack</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Tools & Technologies
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.05,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.2 } 
              }}
              className="group relative"
            >
              <div className="px-6 py-4 rounded-2xl border-glow backdrop-blur-sm hover:border-primary/50 transition-all duration-300 cursor-default">
                <p className="text-foreground font-medium">{skill.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{skill.category}</p>
              </div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
            </motion.div>
          ))}
        </motion.div>

        {/* Categories breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { category: "Frontend", items: "React, HTML, CSS" },
            { category: "Backend", items: "Node.js, Express" },
            { category: "Languages", items: "JS, Python, C" },
            { category: "Tools", items: "Git, GitHub, SQL" },
          ].map((cat, index) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm"
            >
              <p className="text-primary text-sm font-medium mb-2">{cat.category}</p>
              <p className="text-muted-foreground text-sm">{cat.items}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
