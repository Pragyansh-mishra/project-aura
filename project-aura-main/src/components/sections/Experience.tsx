import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "President",
    organization: "IIC-JKLU (Institute Innovation Council)",
    period: "October 2025 - Present",
    location: "Jaipur, Rajasthan, India",
    description:
      "Leading innovation-related activities and coordinating with students and faculty. Developing communication, coordination, and leadership skills through hands-on experience.",
    type: "Leadership",
  },
];

const education = [
  {
    degree: "Bachelor of Technology - BTech",
    field: "Computer Science (AI)",
    institution: "JK Lakshmipat University, Jaipur",
    period: "July 2024 - September 2028",
    status: "Current",
  },
  {
    degree: "Secondary School (Class X)",
    field: "",
    institution: "St. Mary's Senior Secondary School, Sikar",
    period: "April 2020 - March 2021",
    status: "Completed",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 bg-background relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="container px-6 max-w-4xl mx-auto relative z-10" ref={ref}>
        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-24"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Experience</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12">
            Leadership & Roles
          </h2>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="relative pl-8 border-l-2 border-primary/30"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
              
              <div className="pb-8">
                <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-4">
                  {exp.type}
                </span>
                <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                <p className="text-primary font-medium mb-2">{exp.organization}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  {exp.period} • {exp.location}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Education</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12">
            Academic Journey
          </h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
                    {edu.field && (
                      <p className="text-primary font-medium mb-2">{edu.field}</p>
                    )}
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-2 ${
                      edu.status === "Current" 
                        ? "text-green-400 bg-green-400/10" 
                        : "text-muted-foreground bg-secondary/50"
                    }`}>
                      {edu.status}
                    </span>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
