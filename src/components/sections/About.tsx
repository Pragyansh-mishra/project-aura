import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-background relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      
      <div className="container px-6 max-w-4xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">About</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-foreground">
            Driven by curiosity.
            <br />
            <span className="text-muted-foreground">Built through practice.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          className="space-y-6 text-lg text-muted-foreground leading-relaxed"
        >
          <p>
            I'm a B.Tech Computer Science (AI) student at{" "}
            <span className="text-foreground">JK Lakshmipat University</span>, 
            learning by building real projects and exploring how ideas turn into 
            working systems. I believe the best way to understand technology is to create with it.
          </p>
          
          <p>
            Beyond code, I serve as the{" "}
            <span className="text-foreground">President of the Institute Innovation Council (IIC)</span>, 
            where I work closely with students and faculty to coordinate innovation-related 
            activities. This role has sharpened my communication, coordination, and leadership skills.
          </p>
          
          <p>
            I'm actively seeking opportunities in frontend development, full-stack development, 
            or software-related roles where I can grow through real-world exposure and 
            contribute meaningfully.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border"
        >
          {[
            { value: "2+", label: "Projects Built" },
            { value: "5+", label: "Technologies" },
            { value: "IIC", label: "President" },
            { value: "2028", label: "Graduating" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
