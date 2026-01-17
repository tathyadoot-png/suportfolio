import { motion } from "framer-motion";
import { User, GraduationCap, Award, MapPin, Calendar, Heart } from "lucide-react";
import aboutImg from "@/assets/img2.jpeg";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

const AboutSection = ({ lang }: { lang: "hi" | "en" }) => {
  const isHi = lang === "hi";

  const personalDetails = [
    {
      icon: <User className="text-[#E46B2E]" size={20} />,
      label: isHi ? "नाम" : "Name",
      value: isHi ? "श्रीमती संपतिया उइके" : "Smt. Sampatiya Uikey",
    },
    {
      icon: <Award className="text-[#E46B2E]" size={20} />,
      label: isHi ? "पद" : "Position",
      value: isHi ? "लोक स्वास्थ्य यांत्रिकी मंत्री, मध्यप्रदेश शासन" : "Minister of Public Health Engineering, Govt. of MP",
    },
    {
      icon: <Calendar className="text-[#E46B2E]" size={20} />,
      label: isHi ? "जन्म तिथि" : "Date of Birth",
      value: isHi ? "04 सितम्बर 1967" : "04 September 1967",
    },
    {
      icon: <MapPin className="text-[#E46B2E]" size={20} />,
      label: isHi ? "जन्म स्थान" : "Place of Birth",
      value: isHi ? "ग्राम सुर्खी, जिला मण्डला (म.प्र.)" : "Village Surkhi, Dist. Mandla (M.P.)",
    },
  ];

  return (
    <div className="w-full bg-[#ffffff]"> {/* Main wrapper with no top padding */}
      <SectionHeading
        title={isHi ? "विशेष उपलब्धियाँ" : "Landmark Achievements"}
      />
      
      {/* Removed lg:py-32 and used minimal py-4 */}
      <section id="about" className="relative py-4 lg:py-10 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-green blur-[120px]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          
          {/* UPPER SECTION: INTRODUCTION - Reduced mb-24 to mb-12 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <img 
                  src={aboutImg} 
                  alt="Smt. Sampatiya Uikey" 
                  className="w-full object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary rounded-3xl -z-0" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="space-y-2">
                <h2 className="text-green font-bold uppercase tracking-[0.3em] text-sm">
                  {isHi ? "परिचय" : "About the Leader"}
                </h2>
                <h3 className="text-green text-4xl lg:text-5xl font-gotu font-black leading-tight">
                  {isHi ? "जनसेवा, संगठन और संकल्प की सशक्त प्रतीक" : "A Symbol of Public Service, Organization, and Resolve"}
                </h3>
              </div>

              <div className="space-y-4 text-green text-lg leading-relaxed font-light">
                <p>
                  {isHi 
                    ? "श्रीमती संपतिया उइके जी मध्यप्रदेश की ऐसी जननेत्री हैं, जिनका संपूर्ण सार्वजनिक जीवन सेवा, समर्पण और संघर्ष का जीवंत उदाहरण है। जमीनी स्तर से लेकर राज्य मंत्रिमंडल तक का उनका सफर न केवल प्रेरणादायी है, बल्कि लोकतांत्रिक मूल्यों में अटूट विश्वास का प्रतीक भी है।"
                    : "Smt. Sampatiya Uikey is a prominent leader of Madhya Pradesh, whose entire public life is a living example of service, dedication, and struggle. Her journey from the grassroots level to the State Cabinet is not only inspiring but also a symbol of unwavering faith in democratic values."}
                </p>
                <p>
                  {isHi
                    ? "जनजातीय समाज, महिलाओं, ग्रामीण विकास और जनस्वास्थ्य के क्षेत्र में उनका योगदान उन्हें प्रदेश की प्रभावशाली और विश्वसनीय नेतृत्वकर्ता के रूप में स्थापित करता है।"
                    : "Her contribution in the fields of tribal society, women empowerment, rural development, and public health establishes her as an influential and credible leader of the state."}
                </p>
              </div>
            </motion.div>
          </div>

          {/* LOWER SECTION: DETAILS GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-green/5 backdrop-blur-md border border-green/10 p-8 lg:p-12 rounded-[40px] space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <Heart className="text-primary" size={24} />
                </div>
                <h4 className="text-2xl font-gotu font-black text-primary">
                  {isHi ? "व्यक्तिगत परिचय" : "Personal Introduction"}
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {personalDetails.map((detail, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2">
                      {detail.icon}
                      <span className="text-primary text-xs uppercase font-bold tracking-widest">{detail.label}</span>
                    </div>
                    <p className="text-green font-medium text-lg pl-7">{detail.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-green p-8 lg:p-12 rounded-[40px] space-y-8 relative overflow-hidden"
            >
              <div className="relative z-10 flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <h4 className="text-2xl font-gotu font-black text-white">
                  {isHi ? "शिक्षा एवं बौद्धिक आधार" : "Education & Intellectual Base"}
                </h4>
              </div>

              <div className="relative z-10 space-y-4">
                <div className="bg-white/10 p-6 rounded-2xl border border-white/5">
                  <p className="text-white text-xl font-bold italic">
                    {isHi ? "एम.ए. – हिन्दी (स्नातक एवं स्नातकोत्तर)" : "M.A. – Hindi (Graduate & Post Graduate)"}
                  </p>
                </div>
                <p className="text-white/80 leading-relaxed text-lg italic font-light">
                  {isHi
                    ? "श्रीमती उइके जी की शैक्षणिक यात्रा ने उन्हें विचारशीलता, संवेदनशीलता और प्रभावी संवाद क्षमता प्रदान की, जो उनके सार्वजनिक जीवन और नीति-निर्माण में स्पष्ट रूप से दृष्टिगोचर होती है।"
                    : "Her educational journey provided her with thoughtfulness, sensitivity, and effective communication skills, which are clearly visible in her public life and policy-making."}
                </p>
              </div>
              <GraduationCap className="absolute -bottom-10 -right-10 text-white opacity-5 h-64 w-64" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;