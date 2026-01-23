import { useState } from "react";
import { useOutletContext } from "react-router-dom"; 
import { motion } from "framer-motion";
import type { Lang } from "@/layouts/MainLayout";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { Send, Mail, Facebook, Twitter, Instagram, CheckCircle2 } from "lucide-react";

const ContactSection = () => {
  const { lang } = useOutletContext<{ lang: Lang }>(); 
  const isHi = lang === "hi";

  const [form, setForm] = useState({
    name: "", phone: "", email: "", city: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = isHi ? "जनसंपर्क वेबसाइट से नया संदेश" : "New Message";
    const body = `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nCity: ${form.city}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:contact@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const labels = {
    title: isHi ? "अपनी बात हम तक पहुँचाएँ" : "Share Your Message With Us",
    subtitle: isHi ? "संपर्क करें" : "Contact Us",
    desc: isHi ? "विन्ध्य के विकास और आपकी समस्याओं के समाधान के लिए हम सदैव तत्पर हैं।" : "We are always ready for the development of Vindhya and to solve your problems.",
    name: isHi ? "पूरा नाम" : "Full Name",
    phone: isHi ? "मोबाइल नंबर" : "Mobile Number",
    email: isHi ? "ईमेल पता" : "Email Address",
    city: isHi ? "शहर / जिला" : "City / District",
    msg: isHi ? "अपना संदेश लिखें...(वैकल्पिक)" : "Write your message...(optional)",
    btn: isHi ? "संदेश भेजें" : "Send Message"
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-12 md:py-24">
      {/* Background Blurs - Size responsive */}
      <div className="absolute top-0 right-0 w-48 h-48 md:w-72 md:h-72 bg-primary/5 rounded-full blur-[80px] md:blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-40 h-40 md:w-64 md:h-64 bg-green/10 rounded-full blur-[80px] md:blur-[100px] -z-10" />

      {/* Padding aligned with JalJeevanSection */}
      <div className="mx-auto px-4 lg:px-28 relative z-10">
        
        {/* Heading Section */}
        <div className="mb-10 md:mb-16">
          <SectionHeading  title={labels.title} />
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-5/12 space-y-6 md:space-y-10">
            <div className="space-y-4">
              {/* Fluid Text size */}
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-secondary leading-tight">
                {isHi ? "आपकी आवाज़, हमारी प्राथमिकता" : "Your Voice, Our Priority"}
              </h3>
              <p className="text-secondary/60 text-sm md:text-base lg:text-lg leading-relaxed">
                {labels.desc}
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 md:gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 group transition-all">
                <div className="h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-white text-green shadow-sm">
                  <Mail size={20} />
                </div>
                <span className="font-bold text-xs md:text-sm text-secondary break-all">
                sampatiyauikey@gmail.com
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 py-2 px-4 bg-green/5 border border-green/10 rounded-full w-fit">
              <CheckCircle2 size={14} className="text-green" />
              <span className="text-[12px] md:text-[14px] font-bold text-green uppercase">
                {isHi ? "हमसे जुड़ें" : "Connect With Us"}
              </span>
            </div>

            <div className="flex gap-4">
              {[
                { Icon: Facebook, link: "https://www.facebook.com/OfficeOfRShukla" },
                { Icon: Twitter, link: "https://x.com/OfficeOfS_Uikey" },
                { Icon: Instagram, link: "https://www.instagram.com/officeofrshukla/" },
              ].map(({ Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full bg-secondary text-white hover:bg-primary transition-all shadow-md active:scale-90"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT FORM CARD */}
          <div className="w-full lg:w-7/12 relative">
            {/* Glow effect responsive blur */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-green/10 rounded-[1.5rem] md:rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative bg-white border border-gray-100 p-5 md:p-8 lg:p-10 rounded-[1.5rem] md:rounded-[2rem] shadow-xl shadow-secondary/5">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                
                {/* Inputs with responsive padding */}
                {[
                  { id: 'name', label: labels.name, type: 'text', name: 'name' },
                  { id: 'phone', label: labels.phone, type: 'tel', name: 'phone' },
                  { id: 'email', label: labels.email, type: 'email', name: 'email' },
                  { id: 'city', label: labels.city, type: 'text', name: 'city' },
                ].map((input) => (
                  <div key={input.id} className="space-y-1.5">
                    <label className="text-[12px] md:text-[14px] font-bold text-secondary/40 uppercase ml-1 ">
                      {input.label}
                    </label>
                    <input 
                      type={input.type} 
                      name={input.name} 
                      required 
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 focus:ring-2 focus:ring-green/10 focus:border-green transition-all outline-none text-xs md:text-sm" 
                      onChange={handleChange} 
                    />
                  </div>
                ))}

                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-[12px] md:text-[14px] font-bold text-secondary/40 uppercase ml-1 ">
                    {labels.msg}
                  </label>
                  <textarea 
                    name="message" 
                    rows={4} 
                    className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all outline-none resize-none text-xs md:text-sm" 
                    onChange={handleChange} 
                  />
                </div>

                <button 
                  type="submit" 
                  className="md:col-span-2 bg-secondary py-3.5 md:py-4 rounded-xl text-white font-black text-xs md:text-sm uppercase  flex items-center justify-center gap-3 hover:bg-primary transition-all shadow-lg active:scale-[0.98]"
                >
                  {labels.btn} <Send size={16} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;