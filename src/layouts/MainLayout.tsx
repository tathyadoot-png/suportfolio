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
    const timer = setTimeout(() => setLoading(false), 3000); // 3 seconds is sweet spot
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

  const textContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.3 }
    }
  };

  const letterAnim: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <>
      <style>{`
        .modern-loader { 
          background: #021411; 
          overflow: hidden; 
        }
        .bg-grid {
          background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.02) 1px, transparent 0);
          background-size: 40px 40px;
        }
        .glow-sphere {
          width: 40vw; height: 40vw;
          background: radial-gradient(circle, rgba(18, 87, 76, 0.3) 0%, transparent 70%);
          filter: blur(60px);
          position: absolute;
          animation: float 8s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(50px, -50px); }
        }
      `}</style>

      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[9999] modern-loader flex flex-col items-center justify-center px-4"
            exit={{ 
              y: "-100%",
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
            }}
          >
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-grid" />
            <div className="glow-sphere top-[-10%] right-[-10%]" />
            <div className="glow-sphere bottom-[-10%] left-[-10%]" />

            {/* BJP Logo Top */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-12"
            >
              <img src={bjp} className="w-12 opacity-40 brightness-0 invert" alt="BJP" />
            </motion.div>

            {/* Text Reveal */}
            <motion.div 
              variants={textContainer}
              initial="hidden"
              animate="visible"
              className="z-10 text-center"
            >
              <div className="overflow-hidden mb-2">
                <h2 className={`flex justify-center text-white text-[12vw] sm:text-[8vw] md:text-[5vw] font-gotu font-black tracking-tight`}>
                  {firstName.map((l, i) => (
                    <motion.span key={i} variants={letterAnim} className="inline-block">
                      {l}
                    </motion.span>
                  ))}
                </h2>
              </div>

              <motion.div 
                initial={{ scaleX: 0 }} 
                animate={{ scaleX: 1 }} 
                transition={{ duration: 1, delay: 0.8 }}
                className="h-[2px] bg-gradient-to-r from-transparent via-[#E46B2E] to-transparent w-full max-w-[300px] mx-auto my-4" 
              />

              <div className="overflow-hidden">
                <h2 className={`flex justify-center text-[#E46B2E] text-[10vw] sm:text-[7vw] md:text-[4.5vw] font-gotu font-light tracking-[0.2em]`}>
                  {lastName.map((l, i) => (
                    <motion.span key={i} variants={letterAnim} className="inline-block">
                      {l}
                    </motion.span>
                  ))}
                </h2>
              </div>
            </motion.div>

            {/* Bottom Progress Indicator */}
            <div className="absolute bottom-16 w-48 h-[2px] bg-white/5 overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-full h-full bg-[#E46B2E]"
              />
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              className="absolute bottom-10 text-white/50 text-[10px] uppercase tracking-[0.5em] font-bold"
            >
              {isHi ? "मध्यप्रदेश शासन" : "GOVT. OF MADHYA PRADESH"}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8 }}
        >
          <Navbar lang={lang} setLang={setLang} />
          <StickySocial /> 
          <ScrollToTop />
          <main className="min-h-screen bg-[#fcfcfc] overflow-x-hidden">
            <Outlet context={{ lang }} />
          </main>
          <Footer lang={lang} />
        </motion.div>
      )}
    </>
  );
};

export default MainLayout;