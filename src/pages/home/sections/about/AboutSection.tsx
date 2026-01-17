import { motion, Variants } from "framer-motion";
import { User, GraduationCap, Award, MapPin, Calendar, Heart } from "lucide-react";
import aboutImg from "@/assets/img2.jpeg";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

const AboutSection = ({ lang }: { lang: "hi" | "en" }) => {
  const isHi = lang === "hi";

  const personalDetails = [
    {
      icon: <User className="text-[#E46B2E]" size={18} />,
      label: isHi ? "नाम" : "Name",
      value: isHi ? "श्रीमती संपतिया उइके" : "Smt. Sampatiya Uikey",
    },
    {
      icon: <Award className="text-[#E46B2E]" size={18} />,
      label: isHi ? "पद" : "Position",
      value: isHi ? "मंत्री, मध्यप्रदेश शासन" : "Minister, Govt. of MP",
    },
    {
      icon: <Calendar className="text-[#E46B2E]" size={18} />,
      label: isHi ? "जन्म तिथि" : "Date of Birth",
      value: isHi ? "04 सितम्बर 1967" : "04 September 1967",
    },
    {
      icon: <MapPin className="text-[#E46B2E]" size={18} />,
      label: isHi ? "जन्म स्थान" : "Place of Birth",
      value: isHi ? "मण्डला (म.प्र.)" : "Mandla (M.P.)",
    },
  ];

  // FIXED: Explicitly typing as Variants to remove TS errors
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 40, 
      filter: "blur(8px)" 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { 
        duration: 1, 
        ease: [0.22, 1, 0.36, 1] 
      }
    },
  };

  return (
    <div className="w-full bg-[#ffffff] overflow-hidden">
      <SectionHeading title={isHi ? "विशेष उपलब्धियाँ" : "Landmark Achievements"} />
      
      <section id="about" className="relative py-10 lg:py-24">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-[-5%] w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 left-[-5%] w-72 h-72 bg-green/5 rounded-full blur-[100px]" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-[1400px] mx-auto px-5 lg:px-12 relative z-10"
        >
          {/* UPPER SECTION: INTRODUCTION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-16 lg:mb-28">
            <motion.div variants={itemVariants} className="lg:col-span-5 relative group">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20">
                <img 
                  src={aboutImg} 
                  alt="Smt. Sampatiya Uikey" 
                  className="w-full h-auto object-cover transition-all duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12574c]/40 to-transparent" />
              </div>
              {/* High-Tech Frame */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-primary rounded-br-[3rem] -z-0 opacity-50" />
              <div className="absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-[#12574c]/30 rounded-tl-[3rem] -z-0 opacity-50" />
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-3 bg-[#12574c]/5 px-5 py-2 rounded-full border border-[#12574c]/10">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(228,107,46,0.8)]" />
                <h2 className="text-[#12574c] font-black uppercase tracking-[0.25em] text-[10px] sm:text-xs">
                  {isHi ? "परिचय" : "About the Leader"}
                </h2>
              </div>
              
              <h3 className="text-[#12574c] text-4xl lg:text-7xl font-gotu font-black leading-[1.1] tracking-tight">
                {isHi ? "जनसेवा और संकल्प की सशक्त प्रतीक" : "A Symbol of Service and Resolve"}
              </h3>

              <div className="space-y-6 text-[#12574c]/80 text-lg lg:text-xl leading-relaxed font-light">
                <p className="border-l-4 border-primary/30 pl-8 italic bg-gradient-to-r from-primary/5 to-transparent py-4 rounded-r-2xl">
                  {isHi 
                    ? "श्रीमती संपतिया उइके जी मध्यप्रदेश की ऐसी जननेत्री हैं, जिनका संपूर्ण सार्वजनिक जीवन सेवा और संघर्ष का जीवंत उदाहरण है।"
                    : "Smt. Sampatiya Uikey is a prominent leader whose public life is a living testament to service and struggle."}
                </p>
                <p className="pl-9">
                  {isHi
                    ? "जमीनी स्तर से लेकर मंत्रिमंडल तक का उनका सफर लोकतांत्रिक मूल्यों में अटूट विश्वास का प्रतीक है।"
                    : "Her journey from grassroots to the Cabinet reflects unwavering faith in democratic values."}
                </p>
              </div>
            </motion.div>
          </div>

          {/* LOWER SECTION: DETAILS GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Personal Details Card */}
            <motion.div 
              variants={itemVariants}
              className="group bg-white p-8 sm:p-12 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] border border-[#12574c]/5 relative overflow-hidden hover:border-primary/20 transition-colors duration-500"
            >
              <div className="flex items-center gap-5 mb-10">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Heart className="text-primary" size={26} />
                </div>
                <h4 className="text-2xl sm:text-3xl font-gotu font-black text-[#12574c]">
                  {isHi ? "व्यक्तिगत परिचय" : "Personal Bio"}
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                {personalDetails.map((detail, idx) => (
                  <div key={idx} className="relative pl-6 border-l border-primary/20 hover:border-primary transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      {detail.icon}
                      <span className="text-primary/60 text-[10px] uppercase font-black tracking-widest">{detail.label}</span>
                    </div>
                    <p className="text-[#12574c] font-bold text-lg leading-tight">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education Card */}
            <motion.div 
              variants={itemVariants}
              className="bg-[#12574c] p-8 sm:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group"
            >
              <div className="relative z-10 flex items-center gap-5 mb-10">
                <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/10">
                  <GraduationCap className="text-primary" size={26} />
                </div>
                <h4 className="text-2xl sm:text-3xl font-gotu font-black text-white">
                  {isHi ? "शिक्षा एवं आधार" : "Education"}
                </h4>
              </div>

              <div className="relative z-10 space-y-8">
                <div className="bg-white/5 p-7 rounded-[2rem] border border-white/10 backdrop-blur-sm group-hover:bg-white/10 transition-colors duration-500">
                  <p className="text-white text-2xl font-bold">
                    {isHi ? "एम.ए. – हिन्दी" : "M.A. – Hindi"}
                  </p>
                  <p className="text-primary text-[10px] uppercase font-black tracking-[0.3em] mt-2">Post Graduate</p>
                </div>
                <p className="text-white/70 leading-relaxed text-lg font-light italic pl-2 border-l-2 border-primary/40">
                  {isHi
                    ? "श्रीमती उइके जी की शैक्षणिक यात्रा ने उन्हें विचारशीलता और प्रभावी संवाद क्षमता प्रदान की है।"
                    : "Her academic journey has equipped her with profound thoughtfulness and effective communication skills."}
                </p>
              </div>
              {/* Massive background icon for high-tech look */}
              <GraduationCap className="absolute -bottom-16 -right-16 text-white opacity-[0.03] h-72 w-72 transition-transform duration-1000 group-hover:scale-125 group-hover:rotate-12" />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutSection;