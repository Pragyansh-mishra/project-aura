import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 bg-background relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      
      <div className="container px-6 max-w-4xl mx-auto relative z-10 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Contact</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Let's build
            <br />
            <span className="text-gradient-accent">something great.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
            I'm actively seeking internships and opportunities in web development. 
            Have a project in mind? Let's connect.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="mailto:mishrapragyansh22@gmail.com"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="w-5 h-5" />
            <span>mishrapragyansh22@gmail.com</span>
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/pragyansh-mishra-"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-border text-foreground font-medium rounded-full hover:bg-secondary/50 hover:border-primary/50 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Linkedin className="w-5 h-5" />
            <span>Connect on LinkedIn</span>
          </motion.a>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 pt-12 border-t border-border"
        >
          <p className="text-sm text-muted-foreground">
            Designed & Built by{" "}
            <span className="text-foreground">Pragyansh Mishra</span>
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
