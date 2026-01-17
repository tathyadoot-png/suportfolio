import { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  Phone,
  ArrowRight,
  ChevronDown,
  Globe,
  ArrowUpRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import hi from "@/locales/hi";
import en from "@/locales/en";
import logo from "@/assets/13.jpeg";

const Navbar = ({ lang, setLang }: { lang: "hi" | "en", setLang: (l: "hi" | "en") => void }) => {
  const t = lang === "hi" ? hi : en;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Isse mobile menu khulne par background scroll lock ho jayega
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navItems = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.journey, href: "#journey" },
    { label: t.nav.governance, href: "#governance" },
    { label: t.nav.jalJeevan, href: "#jalJeevan" },
    { label: t.nav.vichar, href: "#vichar" },
    { label: t.nav.gallery, href: "#gallery" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${scrolled ? "py-3 px-4" : "py-6 px-4"}`}>
      <div className={`max-w-[1920px] mx-auto transition-all duration-700 rounded-[2rem] flex items-center justify-between px-6 lg:px-10 ${scrolled ? "bg-[#12574c]/90 backdrop-blur-2xl shadow-xl border border-white/10 h-16 md:h-20" : "bg-transparent h-20"}`}>
        
        {/* BRAND */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="h-10 w-10 md:h-12 rounded-xl overflow-hidden border-2 border-[#E46B2E]">
            <img src={logo} alt="Logo" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-gotu font-black text-white text-sm md:text-xl leading-none">
              {lang === "hi" ? "संपतिया उइके" : "Sampatiya Uikey"}
            </h1>
            <p className="text-[#E46B2E] text-[8px] md:text-[10px] font-bold uppercase tracking-widest mt-1">
              {lang === "hi" ? "कैबिनेट मंत्री" : "Cabinet Minister"}
            </p>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden xl:flex items-center gap-1 bg-white/5 rounded-full p-1.5 border border-white/5">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="px-5 py-2 text-[11px] font-black uppercase text-white/60 hover:text-white transition-all relative group">
              {item.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#E46B2E] group-hover:w-1/2 transition-all duration-500" />
            </a>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">
          <button onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')} className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-2xl border border-white/10 text-white hover:bg-[#E46B2E]">
            <Globe size={14} />
            <span className="text-[11px] font-black uppercase">{lang}</span>
          </button>
          <a href="#contact" className="hidden md:flex bg-white text-[#12574c] px-6 py-3 rounded-2xl font-black text-[11px] uppercase hover:bg-[#E46B2E] hover:text-white transition-all">
            {t.cta.contact}
          </a>
          <button onClick={() => setIsOpen(true)} className="xl:hidden h-12 w-12 flex items-center justify-center bg-white/10 text-white rounded-2xl border border-white/10">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER FIX */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] lg:hidden">
            <div onClick={() => setIsOpen(false)} className="absolute inset-0 bg-[#021411]/98 backdrop-blur-2xl" />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 150 }}
              className="absolute right-0 top-0 h-full w-full sm:w-[400px] bg-[#12574c] shadow-2xl flex flex-col border-l border-white/10"
            >
              {/* HEADER (Fixed at top) */}
              <div className="p-8 flex justify-between items-center shrink-0 border-b border-white/5">
                <span className="text-white/40 text-[10px] font-black tracking-[0.3em] uppercase">Navigation</span>
                <button onClick={() => setIsOpen(false)} className="h-12 w-12 flex items-center justify-center text-white bg-white/5 rounded-full border border-white/10">
                  <X size={24}/>
                </button>
              </div>
              
              {/* SCROLLABLE LINKS AREA */}
              <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                <nav className="flex flex-col space-y-2">
                  {navItems.map((item, index) => (
                    <motion.a 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      key={item.href} 
                      href={item.href} 
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between py-5 border-b border-white/5"
                    >
                      <span className="text-3xl font-gotu font-black text-white group-hover:text-[#E46B2E] transition-colors uppercase">
                        {item.label}
                      </span>
                      <ArrowUpRight size={24} className="text-white/20 group-hover:text-[#E46B2E]" />
                    </motion.a>
                  ))}
                </nav>

                {/* LANG SWITCHER (Inside Scroll) */}
                <div className="mt-3">
                   <button 
                    onClick={() => {setLang(lang === 'hi' ? 'en' : 'hi'); setIsOpen(false)}} 
                    className="w-full flex flex-col items-start p-2 rounded-[0.3rem] bg-white/5 border border-white/10 text-white"
                  >
                    <span className="text-[10px] text-white/40 font-black uppercase mb-1">Language / भाषा</span>
                    <span className="font-black text-lg">{lang === 'hi' ? 'ENGLISH' : 'हिन्दी'}</span>
                  </button>
                </div>
              </div>
              
              {/* FOOTER (Fixed at bottom) */}
              <div className="p-8 shrink-0 bg-[#12574c] border-t border-white/5">
                <a 
                  href="#contact" 
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-between bg-[#E46B2E] text-white p-6 rounded-[2rem] font-black uppercase text-sm shadow-xl active:scale-95 transition-transform"
                >
                  <span>{t.cta.contact}</span>
                  <Phone size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;