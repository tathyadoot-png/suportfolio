import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import type { Lang } from "@/layouts/MainLayout";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

// Images
import img12 from "@/assets/12.jpg";
import img13 from "@/assets/13.jpeg";
import img14 from "@/assets/14.jpg";
import img15 from "@/assets/15.jpg";

gsap.registerPlugin(ScrollTrigger);

interface JourneySectionProps {
  lang: Lang;
}

const JourneySection = ({ lang }: JourneySectionProps) => {
  const isHi = lang === "hi";
  const containerRef = useRef<HTMLDivElement>(null);

  const journeyData = [
    {
      period: "ABVP",
      title: isHi ? "छात्र जीवन से जनसेवा तक" : "From Student Life to Public Service",
      desc: isHi 
        ? "उनका सार्वजनिक जीवन छात्र अवस्था से ही प्रारंभ हो गया था। अखिल भारतीय विद्यार्थी परिषद से जुड़कर उन्होंने अनुशासन, राष्ट्रवादी विचारधारा और संगठनात्मक कार्यशैली को आत्मसात किया। यही अनुभव आगे चलकर उनके राजनीतिक और सामाजिक नेतृत्व की मजबूत नींव बना।" 
        : "Her public life embarked during her student years. By joining ABVP, she internalized discipline, nationalist ideology, and organizational proficiency. This experience later became the strong foundation of her political and social leadership.",
      img: img12,
      accent: "#E46B2E", 
    },
    {
      period: "RSS",
      title: isHi ? "राष्ट्रीय स्वयंसेवक संघ से वैचारिक संस्कार" : "Ideological Values from RSS",
      desc: isHi 
        ? "लगभग 12 वर्षों तक राष्ट्रीय स्वयंसेवक संघ से सक्रिय जुड़ाव ने उनके व्यक्तित्व को सेवा, समरसता और राष्ट्रनिर्माण के मूल्यों से सुदृढ़ किया। संघ की वैचारिक प्रेरणा उनके प्रत्येक निर्णय और जनकल्याणकारी प्रयासों में स्पष्ट रूप से परिलक्षित होती है।" 
        : "Active association with the RSS for nearly 12 years strengthened her personality with values of service, harmony, and nation-building. This ideological inspiration is clearly reflected in her every decision.",
      img: img13,
      accent: "#196458", 
    },
    {
      period: "Education",
      title: isHi ? "शिक्षा के क्षेत्र में योगदान" : "Contribution to Education",
      desc: isHi 
        ? "राजनीति के साथ-साथ उन्होंने आचार्य सरस्वती शिशु मंदिर में लगभग 5 वर्षों तक आचार्य के रूप में सेवा दी। इस भूमिका में उन्होंने विद्यार्थियों के नैतिक, शैक्षणिक एवं सांस्कृतिक विकास में महत्वपूर्ण योगदान दिया।" 
        : "Alongside politics, she served as an 'Acharya' at Saraswati Shishu Mandir for about 5 years. In this role, she made significant contributions to the moral, academic, and cultural development of students.",
      img: img14,
      accent: "#E46B2E",
    },
    {
      period: "1999–2004",
      title: isHi ? "ग्राम पंचायत टिकरवारा की सरपंच" : "Sarpanch, Gram Panchayat Tikarwara",
      desc: isHi 
        ? "ग्राम विकास, स्वच्छता, शिक्षा और बुनियादी सुविधाओं में उल्लेखनीय कार्य। पंचायत को श्रेष्ठ पंचायत का सम्मान।" 
        : "Remarkable work in rural development, sanitation, education, and basic amenities. The Panchayat was honored with the 'Best Panchayat' award during her tenure.",
      img: img15,
      accent: "#196458",
    },
    {
      period: "2004–2017",
      title: isHi ? "जिला पंचायत मण्डला की अध्यक्ष" : "Chairperson, Zila Panchayat Mandla",
      desc: isHi 
        ? "तीन लगातार कार्यकाल। 2015 में निर्विरोध निर्वाचन – जनविश्वास का सशक्त प्रमाण। ग्रामीण विकास, महिला सशक्तिकरण, health, शिक्षा और आजीविका पर विशेष फोकस।" 
        : "Three consecutive terms. Her unopposed election in 2015 is a powerful testament to public trust. A special focus remained on rural development, women empowerment, health, and education.",
      img: img15,
      accent: "#E46B2E",
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Modern Scroll reveal for ALL screens (sm + lg)
      gsap.utils.toArray(".journey-row").forEach((row: any) => {
        const img = row.querySelector(".journey-img-container");
        const content = row.querySelector(".journey-content");

        // High-tech image reveal
        gsap.from(img, {
          scale: 0.8,
          opacity: 0,
          duration: 1.4,
          ease: "expo.out",
          scrollTrigger: { trigger: img, start: "top 85%" }
        });

        // Smooth text reveal
        gsap.from(content, {
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: content, start: "top 90%" }
        });
      });

      // Special line animation for large screens
      gsap.from(".timeline-path", {
        strokeDashoffset: 1000,
        scrollTrigger: {
          trigger: ".journey-container",
          start: "top 20%",
          end: "bottom center",
          scrub: 2
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      {/* Desktop Curved Path - Restored & Animated */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20 hidden lg:block">
        <svg width="100%" height="100%" viewBox="0 0 1000 2000" fill="none" preserveAspectRatio="none">
          <path 
            className="timeline-path"
            d="M500,0 C800,400 200,800 500,1200 C800,1600 200,2000 500,2400" 
            stroke="#E46B2E" 
            strokeWidth="2" 
            strokeDasharray="15 15" 
          />
        </svg>
      </div>

      <div className="container relative z-10 px-4 max-w-[1400px] mx-auto">
        <SectionHeading title={isHi ? "विकास यात्रा" : "The Journey of Progress"} />

        <div className="journey-container mt-32 relative space-y-32 md:space-y-48">
          {journeyData.map((item, index) => (
            <div 
              key={index} 
              className={`journey-row flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Block */}
              <div className="journey-img-container w-full lg:w-1/2 relative">
                <div className="relative z-10 rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-[16/11]">
                  <img 
                    src={item.img} 
                    className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700" 
                    alt={item.title} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                </div>
                {/* Period Badge */}
                <div 
                  className={`absolute -bottom-6 ${index % 2 !== 0 ? 'lg:-left-10' : 'lg:-right-10'} left-1/2 -translate-x-1/2 lg:translate-x-0 z-20 px-8 py-4 lg:px-10 lg:py-5 rounded-2xl shadow-xl text-white font-black text-lg lg:text-xl tracking-widest`}
                  style={{ backgroundColor: item.accent }}
                >
                  {item.period}
                </div>
              </div>

              {/* Content Block - 100% Original Content */}
              <div className={`journey-content w-full lg:w-1/2 ${index % 2 !== 0 ? 'lg:text-right' : 'text-left'}`}>
                <div className={`flex items-center gap-4 mb-6 ${index % 2 !== 0 ? 'lg:justify-end' : 'justify-start'}`}>
                  <div className="w-16 h-1 rounded-full" style={{ backgroundColor: item.accent }} />
                  <span className="text-xs font-black uppercase tracking-[0.4em] text-gray-400">Section 0{index + 1}</span>
                </div>

                <h3 className="text-3xl md:text-5xl font-gotu font-bold text-gray-900 mb-8 leading-tight">
                  {item.title}
                </h3>

                <div 
                  className={`relative p-8 md:p-10 rounded-[2rem] lg:rounded-[2.5rem] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-l-8 lg:border-r-8 border-transparent transition-all duration-500 hover:shadow-2xl`}
                  style={{ 
                    borderLeftColor: (index % 2 === 0 || window.innerWidth < 1024) ? item.accent : 'transparent', 
                    borderRightColor: (index % 2 !== 0 && window.innerWidth >= 1024) ? item.accent : 'transparent' 
                  }}
                >
                  <p className="font-martel text-base md:text-xl text-gray-600 leading-relaxed italic">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;