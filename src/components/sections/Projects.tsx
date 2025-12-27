import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "UniShare Hub",
    description:
      "A college resource-sharing platform where students can upload, search, and rate academic materials, with a contributor leaderboard to encourage participation.",
    tech: ["React", "Node.js", "MySQL", "Express"],
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Habit Tracker",
    description:
      "A JavaScript-based web app focused on tracking daily habits with a clean and user-friendly interface for building better routines.",
    tech: ["JavaScript", "HTML", "CSS"],
    gradient: "from-green-500/20 to-cyan-500/20",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 bg-background relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      
      <div className="container px-6 max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Work</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.15,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-3xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary/30">
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ scale: 1.1 }}
                      className="p-2 rounded-full border border-border group-hover:border-primary/50 transition-colors duration-300"
                    >
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </motion.div>
                  </div>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-muted-foreground bg-secondary/50 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground">
            More projects coming soon. Building in public.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
