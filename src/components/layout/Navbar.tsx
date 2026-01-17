import { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  Phone,
  LayoutGrid,
  ArrowRight,
  ChevronDown
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

  const navItems = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.journey, href: "#journey" },
    { label: t.nav.governance, href: "#governance" },
    { label: t.nav.gallery, href: "#gallery" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
        ? "bg-[#12574c]/95 backdrop-blur-xl py-3 shadow-2xl border-b border-white/10" 
        : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* LEFT: BRAND IDENTITY */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-5 group cursor-pointer"
        >
          <div className="relative">
            <div className="h-12 w-12 lg:h-14 lg:w-14 rounded-2xl rotate-3 group-hover:rotate-0 overflow-hidden border-2 border-[#E46B2E] transition-all duration-500 ease-out">
              <img src={logo} alt="Sampatiya Uikey" className="h-full w-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500" />
            </div>
            <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-[#E46B2E] rounded-lg border-2 border-[#12574c] flex items-center justify-center">
               <div className="h-2 w-2 bg-white rounded-full animate-pulse" />
            </div>
          </div>
          
          <div className="flex flex-col">
            <h1 className="font-gotu font-black text-white text-lg lg:text-2xl leading-none tracking-tight">
              {lang === "hi" ? "संपतिया उइके" : "Sampatiya Uikey"}
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="h-[1px] w-4 bg-[#E46B2E]"></span>
              <p className="text-[#E46B2E] text-[10px] font-bold uppercase tracking-[0.3em]">
                {lang === "hi" ? "कैबिनेट मंत्री" : "Cabinet Minister"}
              </p>
            </div>
          </div>
        </motion.div>

        {/* CENTER: NAVIGATION LINKS */}
        <div className="hidden xl:flex items-center bg-white/5 rounded-full px-2 py-1 border border-white/10 backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-6 py-2.5 text-[12px] font-bold uppercase text-white/70 hover:text-white transition-all relative group"
            >
              <span className="relative z-10">{item.label}</span>
              <motion.span 
                className="absolute inset-0 bg-[#E46B2E] rounded-full opacity-0 group-hover:opacity-100 -z-0 transition-all duration-300 scale-50 group-hover:scale-100"
              />
            </a>
          ))}
        </div>

        {/* RIGHT: ACTIONS */}
        <div className="flex items-center gap-4">
          {/* Lang Switcher - Minimalist */}
          <button
            onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-all group"
          >
            <span className="text-[11px] font-black tracking-widest">{lang.toUpperCase()}</span>
            <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
          </button>

          {/* Contact CTA */}
          <a 
            href="#contact" 
            className="hidden md:flex items-center gap-3 bg-white text-[#12574c] px-7 py-3 rounded-xl font-black text-[11px] uppercase transition-all hover:bg-[#E46B2E] hover:text-white active:scale-95 shadow-xl shadow-black/20"
          >
            {t.cta.contact} <ArrowRight size={16} />
          </a>

          {/* Mobile Toggle Button */}
          <button 
            onClick={() => setIsOpen(true)} 
            className="xl:hidden h-12 w-12 flex items-center justify-center bg-white/10 text-white rounded-xl hover:bg-[#E46B2E] transition-colors"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#021411]/98 backdrop-blur-2xl z-[150]"
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full sm:w-[400px] bg-[#12574c] z-[200] p-10 flex flex-col border-l border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
              <div className="flex justify-between items-center mb-16">
                <span className="text-white/30 text-[10px] font-bold tracking-[0.5em] uppercase">Navigation</span>
                <button onClick={() => setIsOpen(false)} className="h-12 w-12 flex items-center justify-center text-white bg-white/5 rounded-full hover:rotate-90 transition-transform duration-300">
                  <X size={28}/>
                </button>
              </div>
              
              <nav className="flex flex-col gap-6">
                {navItems.map((item, index) => (
                  <motion.a 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={item.href} 
                    href={item.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-gotu font-black text-white hover:text-[#E46B2E] transition-colors"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
              
              <div className="mt-auto space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <button onClick={() => {setLang(lang === 'hi' ? 'en' : 'hi'); setIsOpen(false)}} className="flex flex-col items-start p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white">
                    <span className="text-[10px] text-white/50 uppercase mb-1">Language</span>
                    <span className="font-bold text-sm">{lang === 'hi' ? 'English' : 'हिंदी'}</span>
                  </button>
                  <div className="flex flex-col items-start p-4 rounded-2xl bg-white/5 border border-white/10 text-white">
                    <span className="text-[10px] text-white/50 uppercase mb-1">Region</span>
                    <span className="font-bold text-sm">MP, India</span>
                  </div>
                </div>
                
                <a href="#contact" className="w-full flex items-center justify-between bg-[#E46B2E] text-white p-6 rounded-2xl font-black uppercase text-sm group">
                  {t.cta.contact}
                  <Phone size={20} className="group-hover:shake" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;