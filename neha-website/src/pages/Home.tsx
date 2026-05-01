import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="content-container py-20">
      <div className="min-h-[60vh] flex flex-col justify-center text-center">
        <AnimatedSection>
          <motion.h1 
            className="gradient-text text-5xl md:text-7xl font-bold mb-8 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            hi, i'm neha :)
          </motion.h1>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            neha test quantum engineering + entrepreneurship @ uchicago. i explore physics, ai, nanotech, 
            and the poetry of the cosmos
          </p>
        </AnimatedSection>
        
        {/* Subtle background gradient */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] opacity-10 blur-3xl rounded-full" />
        </div>
      </div>
    </div>
  );
}
