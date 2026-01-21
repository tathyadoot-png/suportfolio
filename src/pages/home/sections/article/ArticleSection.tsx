import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Feather, PenTool, Award, Heart } from 'lucide-react';

const ArticleSection = () => {
  return (
    <section className="relative py-12 md:py-20 bg-[#f8fafc] overflow-hidden" id="article">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute -top-12 md:-top-24 -right-12 md:-right-24 w-64 h-64 md:w-96 md:h-96 bg-[#E46B2E]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />

      <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
        
        {/* Editorial Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 md:py-2 rounded-full bg-[#12574c]/5 border border-[#12574c]/10 mb-4 md:mb-6">
            <PenTool size={12} className="text-[#E46B2E] md:w-3.5 md:h-3.5" />
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#12574c]">E-Paper / Editorial</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#12574c] leading-tight md:leading-[1.1] mb-4 md:mb-6 px-2">
            विकास की मुख्यधारा में <br className="hidden sm:block" />
            <span className="text-[#E46B2E]">जनजातीय महिलाएँ</span>
          </h2>
          <div className="h-1 md:h-1.5 w-16 md:w-24 bg-[#E46B2E] mx-auto rounded-full" />
        </motion.div>

        {/* Main Content Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] md:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden relative"
        >
          {/* Subtle Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

          <div className="p-6 md:p-12 lg:p-20 relative">
            
            {/* Quote Icon - Scaled for mobile */}
            <div className="absolute top-6 right-6 md:top-10 md:right-10 text-[#12574c]/5 pointer-events-none">
              <Quote className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32" />
            </div>

            {/* Content Body */}
            <div className="prose prose-sm md:prose-lg max-w-none text-gray-700 leading-relaxed font-light space-y-6 md:space-y-8">
              
              <p className="text-lg md:text-xl lg:text-2xl font-medium text-[#12574c] italic border-l-4 border-[#E46B2E] pl-4 md:pl-6 py-2 bg-gradient-to-r from-[#E46B2E]/5 to-transparent rounded-r-xl leading-snug">
                भारत में महिला सशक्तिकरण की चर्चा तब तक पूर्ण नहीं मानी जा सकती, जब तक जनजातीय महिलाओं की भूमिका और उनके योगदान को केंद्र में न रखा जाए।
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-8 md:mt-12">
                <div className="space-y-4 md:space-y-6">
                  <h4 className="text-lg md:text-xl font-bold text-[#12574c] flex items-center gap-3">
                    <Award className="text-[#E46B2E] shrink-0" size={18} />
                    <span>राष्ट्र निर्माण की आधारशिला</span>
                  </h4>
                  <p className="text-sm md:text-base">प्रधानमंत्री नरेंद्र मोदी के दूरदर्शी नेतृत्व में महिला सशक्तिकरण को केवल एक सामाजिक मुद्दा नहीं, बल्कि राष्ट्र निर्माण की आधारशिला माना गया है। शिक्षा, स्वास्थ्य, पोषण और स्वरोजगार जैसे क्षेत्रों में सरकार की योजनाएँ जनजातीय महिलाओं को आत्मनिर्भर बना रही हैं।</p>
                </div>
                
                <div className="space-y-4 md:space-y-6">
                  <h4 className="text-lg md:text-xl font-bold text-[#12574c] flex items-center gap-3">
                    <Heart className="text-[#E46B2E] shrink-0" size={18} />
                    <span>मध्य प्रदेश की प्रतिबद्धता</span>
                  </h4>
                  <p className="text-sm md:text-base">मुख्यमंत्री डॉ. मोहन यादव के नेतृत्व में राज्य सरकार ने जनजातीय एवं अनुसूचित जाति वर्ग की महिलाओं के उत्थान को प्राथमिकता बनाया है। आदिवासी महिलाएँ आज सामाजिक-आर्थिक बदलाव की सशक्त वाहक बन रही हैं।</p>
                </div>
              </div>

              <div className="bg-[#12574c]/5 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-[#12574c]/10 my-8 md:my-10">
                <h4 className="text-[#12574c] font-black uppercase tracking-widest text-[10px] md:text-xs mb-3 md:mb-4">योजनाओं का प्रभाव</h4>
                <p className="text-gray-600 text-sm md:text-base">प्रधानमंत्री वन धन योजना, स्टैंड-अप इंडिया और मुख्यमंत्री लाड़ली बहना योजना ने महिलाओं के आत्मसम्मान को सुदृढ़ किया है। पेसा अधिनियम ने ग्राम सभाओं में उनकी निर्णय-निर्माण की शक्ति को और भी सशक्त बनाया है।</p>
              </div>

              {/* Personal Section */}
              <div className="relative py-6 md:py-10 border-y border-gray-100">
                <h4 className="text-xl md:text-2xl font-black text-[#12574c] mb-4 md:mb-6 flex items-center gap-3">
                  <Feather className="text-[#E46B2E] shrink-0" size={20} />
                  <span>संघर्ष से नेतृत्व तक</span>
                </h4>
                <p className="text-base md:text-lg leading-relaxed">
                  मैं स्वयं एक जनजातीय महिला हूँ और मेरा जीवन संघर्षों से भरा रहा है। ईंट-भट्टों में मजदूरी से लेकर सरपंच, जिला पंचायत अध्यक्ष, राज्यसभा सदस्य और आज कैबिनेट मंत्री बनने तक का सफर आसान नहीं था। यह सब भारतीय जनता पार्टी के संगठनात्मक विश्वास के कारण संभव हो पाया।
                </p>
              </div>

              <p className="text-base md:text-lg font-bold text-[#12574c] text-center pt-6 md:pt-8 leading-snug">
                "जब महिलाएँ सशक्त होंगी, तभी समाज और देश प्रगति की नई ऊँचाइयों को छुएगा।"
              </p>
            </div>

            {/* Signature Section */}
            <div className="mt-12 md:mt-16 flex flex-col items-center sm:items-end">
              <div className="text-center sm:text-right w-full sm:w-auto">
                <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: "100%" }}
                   className="h-px bg-gray-200 mb-4 mx-auto sm:ml-auto sm:mr-0"
                />
                <p className="text-[#12574c] font-black text-lg md:text-xl">श्रीमती संपतिया उइके</p>
                <p className="text-[#E46B2E] font-bold text-[10px] md:text-xs uppercase tracking-widest mt-1">
                  लोक स्वास्थ्य यांत्रिकी मंत्री
                </p>
                <p className="text-gray-400 text-[9px] md:text-[10px] uppercase mt-1">मध्यप्रदेश शासन</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-8 md:mt-12 text-center"
        >
          <p className="text-gray-400 text-[10px] md:text-xs italic tracking-wide">
            लेख साभार: अंतरराष्ट्रीय महिला दिवस विशेष संदेश
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticleSection;