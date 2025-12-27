import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin } from "lucide-react";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-glow" />
      <div className="absolute inset-0 noise-bg" />
      
      {/* Animated orbs */}
      <motion.div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" animate={{
      x: [0, 50, 0],
      y: [0, 30, 0]
    }} transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }} />
      <motion.div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl" animate={{
      x: [0, -50, 0],
      y: [0, -30, 0]
    }} transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut"
    }} />

      <div className="container relative z-10 px-6 text-center">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1]
      }}>
          <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.2,
          duration: 0.6
        }} className="text-muted-foreground text-sm md:text-base tracking-[0.2em] uppercase mb-6">
            Pusuing Computer Science @JK Lakshmipat University
          </motion.p>
        </motion.div>

        <motion.h1 initial={{
        opacity: 0,
        y: 40
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3,
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1]
      }} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="text-foreground">Pragyansh</span>
          <br />
          <span className="text-gradient-accent">Mishra</span>
        </motion.h1>

        <motion.p initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.5,
        duration: 0.8
      }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Building the future through code. Transforming ideas into elegant,
          <span className="text-foreground"> high-performance</span> digital experiences.
        </motion.p>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.7,
        duration: 0.6
      }} className="flex items-center justify-center gap-4">
          <motion.a href="#contact" className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/25" whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }}>
            <span className="relative z-10">Get in Touch</span>
            <Mail className="w-4 h-4 relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
          
          <motion.a href="https://www.linkedin.com/in/pragyansh-mishra-" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-full hover:bg-secondary/50 hover:border-primary/50 transition-all duration-300" whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }}>
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.2,
      duration: 0.6
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>;
};
export default Hero;