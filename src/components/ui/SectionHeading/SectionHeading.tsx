import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
}

const SectionHeading = ({ title }: SectionHeadingProps) => {
  const words = title.split(" ");

  return (
    <div className="relative w-full flex flex-col items-center justify-center py-2 px-4 overflow-hidden">
      
      {/* 1. ANIMATED TOP LINE & TAGLINE */}
      <div className="flex flex-col items-center mb-1">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 30 }}
          viewport={{ once: true }}
          className="h-[1.5px] bg-primary mb-2"
        />
        <motion.span 
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-[8px] font-black uppercase text-green"
        >
          Leadership 2026
        </motion.span>
      </div>

      {/* 2. MAIN HEADING - REVEAL & SHIMMER ANIMATION */}
      <div className="relative z-10">
        <h2 className="font-gotu text-4xl md:text-5xl lg:text-6xl font-[1000] text-center leading-[1.1] uppercase flex flex-wrap justify-center gap-x-3">
          {words.map((word, idx) => (
            <div key={idx} className="relative overflow-hidden px-1 pb-3 pt-4">
              <motion.span 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: idx * 0.1, 
                  duration: 0.8, 
                  ease: [0.33, 1, 0.68, 1] 
                }}
                className={`relative inline-block ${idx % 2 === 0 ? "text-primary" : "text-green"}`}
              >
                {word}
                
                {/* INNOCATIVE LIGHT BEAM (Shimmer) */}
                <motion.span
                  animate={{ 
                    left: ["-100%", "200%"],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    repeatDelay: 1.5
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-20 pointer-events-none"
                />
              </motion.span>
            </div>
          ))}
        </h2>
      </div>

      {/* 3. INNOVATIVE ORBITING DOT UNDERLINE */}
      <div className="mt-3 relative flex items-center justify-center w-32 h-2">
        {/* Background Base Line */}
        <div className="absolute h-[1px] w-full bg-primary/10 rounded-full" />
        
        {/* Moving Active Line */}
        <motion.div 
          animate={{ 
            width: ["0%", "100%", "0%"],
            left: ["0%", "0%", "100%"] 
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute h-[1.5px] bg-green shadow-[0_0_8px_#2563eb]"
        />

        {/* Small Orbiting Dot */}
        <motion.div 
          animate={{ 
            x: [-60, 60, -60],
            scale: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute h-1 w-1 rounded-full bg-primary shadow-[0_0_10px_#E46B2E]"
        />
      </div>

      {/* BACKGROUND MASK - Minimal and subtle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <motion.div 
          animate={{ opacity: [0.01, 0.03, 0.01] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="text-[10vw] font-black text-white uppercase select-none blur-sm"
        >
          {title}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionHeading;