import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { PiFlowerLotusThin } from "react-icons/pi";
import { MoveUpRight, Zap, Sparkles } from "lucide-react";
import hi from "@/locales/hi";
import en from "@/locales/en";

// Images
import slid1 from "@/assets/slid1.jpeg";
import slid2 from "@/assets/slid2.jpeg";
import slid3 from "@/assets/slid3.jpeg";

const HeroSection = ({ lang = "hi" }: { lang?: "hi" | "en" }) => {
  const isHi = lang === "hi";
  const images = [slid1, slid2, slid3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="relative min-h-screen w-full bg-green flex flex-col lg:flex-row overflow-hidden">
      
    

      {/* 1. LEFT SIDE: CONTENT AREA (60% Width) */}
      <div className="relative w-full lg:w-[55%] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 z-20">
        
        {/* Minimalist Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-[1px] w-8 bg-primary/40" />
          <span className="text-primary text-[10px] font-bold uppercase  py-6">
            {isHi ? "कैबिनेट मंत्री" : "Cabinet Minister"}
          </span>
        </motion.div>

        {/* Name Section with Better Kerning */}
        <div className="relative">
          <motion.h1 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="font-gotu text-[14vw] lg:text-[9rem] font-black text-white leading-[1] tracking-tighter"
          >
            {isHi ? "संपतिया" : "SAMPATIYA"}
          </motion.h1>
          <motion.h1 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-gotu text-[14vw] lg:text-[9rem] font-black text-primary italic leading-[1] tracking-tighter mt-1"
          >
            {isHi ? "उइके" : "UIKEY"}
          </motion.h1>
          
          {/* Subtle Back Text */}
          <span className="absolute -top-16 -left-8 text-[18rem] font-black text-white/[0.02] pointer-events-none select-none hidden lg:block">
            MP
          </span>
        </div>

        {/* Clean Sub-content Block */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 max-w-lg"
        >
          <div className="pl-6 border-l border-primary/30 space-y-4">
            <p className="text-white/90 text-xl lg:text-2xl font-medium font-gotu">
              {isHi ? "लोक स्वास्थ्य यांत्रिकी मंत्री" : "Minister of Public Health Engineering"}
            </p>
            <p className="text-white/50 text-base lg:text-lg leading-relaxed font-martel">
              {isHi 
                ? "स्वच्छ जल और सशक्त समाज के निर्माण हेतु समर्पित नेतृत्व।" 
                : "Dedicated leadership for clean water and an empowered society."}
            </p>
          </div>

          {/* Action Button - High End Look */}
          <div className="flex items-center gap-8 mt-12">
            <button className="group relative flex items-center justify-center h-20 w-20 rounded-full border border-white/10 hover:border-primary/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <MoveUpRight size={28} className="relative z-10 text-white group-hover:scale-110 transition-transform" />
            </button>
            <div className="flex flex-col">
              <span className="text-white font-black text-xs uppercase tracking-widest">{isHi ? "संपर्क सूत्र" : "Get In Touch"}</span>
              <span className="text-white/30 text-[9px] uppercase tracking-tighter mt-1">{isHi ? "मध्यप्रदेश शासन" : "Govt. of MP"}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 2. RIGHT SIDE: THE VISUAL (45% Width) */}
      <div className="relative w-full lg:w-[45%] h-[60vh] lg:h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img 
              src={images[currentIndex]} 
              className="w-full h-full object-cover object-top brightness-[0.7] " 
              alt="Sampatiya Uikey"
            />
            {/* Smooth Blending Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#021411] via-transparent to-transparent lg:bg-gradient-to-l lg:from-[#021411] lg:via-transparent" />
            <div className="absolute inset-0 bg-[#021411]/20 mix-blend-multiply" />
          </motion.div>
        </AnimatePresence>

        {/* Experience Label - Clean & Vertical */}
        <div className="absolute bottom-12 right-8 flex items-center gap-8 rotate-[-90deg] origin-right translate-x-4">
           <div className="h-[1px] w-16 bg-white/20" />
           <p className="flex items-center gap-4">
             <span className="text-white/40 text-[9px] font-bold uppercase tracking-[0.6em]">Service</span>
             <span className="text-primary font-gotu text-5xl font-black italic">20+</span>
             <Zap className="text-primary -rotate-90" size={20} fill="currentColor" />
           </p>
        </div>
      </div>

      {/* Subtle Floating Lotus */}
     
    </section>
  );
};

export default HeroSection;