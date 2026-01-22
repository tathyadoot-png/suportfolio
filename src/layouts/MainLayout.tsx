import { useEffect, useState, useMemo } from "react";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import bjp from "@/assets/bjp.png";
import StickySocial from "@/components/layout/StickySocial";
import ScrollToTop from "@/components/layout/ScrollToTop";

export type Lang = "hi" | "en";

const MainLayout = () => {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "hi";
    return localStorage.getItem("lang") === "en" ? "en" : "hi";
  });

  const [loading, setLoading] = useState(true);
  const isHi = lang === "hi";

  useEffect(() => {
    localStorage.setItem("lang", lang);
    const timer = setTimeout(() => setLoading(false), 3200);
    return () => clearTimeout(timer);
  }, [lang]);

  const splitText = (text: string) => {
    if (!text) return [];
    try {
      const segmenter = new (Intl as any).Segmenter(isHi ? "hi" : "en", { granularity: "grapheme" });
      return Array.from(segmenter.segment(text)).map((s: any) => s.segment);
    } catch (e) {
      return text.split("");
    }
  };

  const firstName = useMemo(() => splitText(isHi ? "संपतिया" : "SAMPATIYA"), [isHi]);
  const lastName = useMemo(() => splitText(isHi ? "उइके" : "UIKEY"), [isHi]);

  // Modern Animation Variants
  const containerVars: Variants = {
    exit: {
      transition: { staggerChildren: 0.1 }
    }
  };

  const panelVars: Variants = {
    initial: { scaleY: 1 },
    exit: { 
      scaleY: 0,
      transition: { duration: 1, ease: [0.85, 0, 0.15, 1] } 
    }
  };

  const textRevealVars: Variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            variants={containerVars}
            initial="initial"
            exit="exit"
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-transparent"
          >
            {/* Split Panels - Modern Way to Reveal */}
            <motion.div 
              variants={panelVars}
              className="absolute inset-0 bg-[#0A1A17] origin-top z-0" 
            />
            
            {/* Content Wrapper */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Subtle Symbol */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.2, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="mb-8"
              >
                <img src={bjp} className="w-16 grayscale brightness-200" alt="" />
              </motion.div>


       {/* Main Name Reveal */}
<div className="overflow-hidden py-2 px-4 w-full flex justify-center">
  <motion.h2 
    variants={textRevealVars}
    initial="hidden"
    animate="visible"
    className="text-white text-[10vw] sm:text-[8vw] md:text-[6vw] font-gotu md:py-6 font-black flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-center leading-none"
  >
    <span>{firstName.join("")}</span>
    <span className="text-[#E46B2E] font-light">{lastName.join("")}</span>
  </motion.h2>
</div>

              {/* Minimal Animated Divider */}
              <div className="relative w-full max-w-[400px] h-[1px] mt-4 overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
                />
              </div>

              {/* Designation Reveal */}
              <div className="overflow-hidden mt-4">
                <motion.p
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="text-white/40 text-[10px] md:text-[12px] font-black  uppercase"
                >
                  {isHi ? "कैबिनेट मंत्री • मध्यप्रदेश शासन" : "Cabinet Minister • Govt. of MP"}
                </motion.p>
              </div>
            </div>

            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Navbar lang={lang} setLang={setLang} />
          <StickySocial /> 
          <ScrollToTop />
          <main className="min-h-screen bg-white">
            <Outlet context={{ lang }} />
          </main>
          <Footer lang={lang} />
        </motion.div>
      )}
    </>
  );
};

export default MainLayout;