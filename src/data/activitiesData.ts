import img1 from "@/assets/img1.jpeg";
import img2 from "@/assets/img2.jpeg";
import img3 from "@/assets/img3.jpeg";
import img4 from "@/assets/img4.jpeg";
import img5 from "@/assets/img5.jpeg";
import img6 from "@/assets/img6.jpg";
import img7 from "@/assets/img7.jpg";
import img8 from "@/assets/img8.jpg";
import img9 from "@/assets/img9.jpg";
import img10 from "@/assets/img10.jpg";
import img11 from "@/assets/img11.jpg";
import img12 from "@/assets/img12.jpg";
import img13 from "@/assets/img13.jpg";
import img14 from "@/assets/img14.jpg";
import img15 from "@/assets/img15.jpg";
import img16 from "@/assets/img16.jpg";
import img17 from "@/assets/img17.jpg";
import img18 from "@/assets/img18.jpg";
import img19 from "@/assets/img3.jpg";

export interface Activity {
  id: number;
  title: {
    hi: string;
    en: string;
  };
  description: {
    hi: string;
    en: string;
  };
  cover: string;
  images: string[];
  date: string;
  location: string;
}

export const activitiesData: Activity[] = [
  {
    id: 1,
    title: {
      hi: "जनसंपर्क अभियान",
      en: "Public Interaction अभियान",
    },
    description: {
      hi: "जनता के बीच जाकर समस्याओं को सुना और समाधान का आश्वासन दिया गया।",
      en: "Visited public to understand issues and provide solutions.",
    },
    cover: img4,
    images: [img1, img2, img3, img4, img5],
    date: "Jan 2026",
    location: "Mandla",
  },
  {
    id: 2,
    title: {
      hi: "विकास कार्य निरीक्षण",
      en: "Development Work Review",
    },
    description: {
      hi: "चल रहे विकास कार्यों का निरीक्षण कर प्रगति का आकलन किया गया।",
      en: "Reviewed ongoing development projects.",
    },
    cover: img8,
    images: [img8, img9, img10, img11],
    date: "Feb 2026",
    location: "Bhopal",
  },
  {
    id: 3,
    title: {
      hi: "महिला सशक्तिकरण कार्यक्रम",
      en: "Women Empowerment Event",
    },
    description: {
      hi: "महिलाओं को आत्मनिर्भर बनाने हेतु कार्यक्रम आयोजित किया गया।",
      en: "Program focused on empowering women.",
    },
    cover: img7,
    images: [img5, img6, img7],
    date: "Mar 2026",
    location: "Jabalpur",
  },
  {
    id: 4,
    title: {
      hi: "युवा एवं खेल गतिविधि",
      en: "Youth & Sports Event",
    },
    description: {
      hi: "युवाओं को खेलों के प्रति प्रेरित किया गया।",
      en: "Encouraged youth participation in sports.",
    },
    cover: img15,
    images: [img15, img16, img17],
    date: "Apr 2026",
    location: "Indore",
  },
  {
    id: 5,
    title: {
      hi: "सांस्कृतिक कार्यक्रम",
      en: "Cultural Event",
    },
    description: {
      hi: "स्थानीय संस्कृति और परंपराओं को बढ़ावा दिया गया।",
      en: "Promoted local culture and traditions.",
    },
    cover: img14,
    images: [img14, img15, img16],
    date: "May 2026",
    location: "Seoni",
  },
  {
    id: 6,
    title: {
      hi: "जनसभा संबोधन",
      en: "Public Rally Address",
    },
    description: {
      hi: "जनसभा में विकास योजनाओं पर चर्चा की गई।",
      en: "Addressed public regarding development plans.",
    },
    cover: img9,
    images: [img9, img10, img11],
    date: "Jun 2026",
    location: "Chhindwara",
  },
  {
    id: 7,
    title: {
      hi: "स्वास्थ्य शिविर आयोजन",
      en: "Health Camp आयोजन",
    },
    description: {
      hi: "ग्रामीण क्षेत्रों में स्वास्थ्य शिविर का आयोजन किया गया।",
      en: "Organized health camp in rural areas.",
    },
    cover: img6,
    images: [img6, img7, img8],
    date: "Jul 2026",
    location: "Balaghat",
  },
  {
    id: 8,
    title: {
      hi: "शिक्षा जागरूकता अभियान",
      en: "Education Awareness Drive",
    },
    description: {
      hi: "बच्चों को शिक्षा के महत्व के बारे में जागरूक किया गया।",
      en: "Created awareness about importance of education.",
    },
    cover: img11,
    images: [img11, img12, img13],
    date: "Aug 2026",
    location: "Mandla",
  },
  {
    id: 9,
    title: {
      hi: "ग्राम विकास बैठक",
      en: "Village Development Meeting",
    },
    description: {
      hi: "गांव के विकास के लिए बैठक आयोजित की गई।",
      en: "Meeting held for village development planning.",
    },
    cover: img12,
    images: [img12, img13, img14],
    date: "Sep 2026",
    location: "Dindori",
  },
  {
    id: 10,
    title: {
      hi: "ग्राम विकास बैठक",
      en: "Village Development Meeting",
    },
    description: {
      hi: "गांव के विकास के लिए बैठक आयोजित की गई।",
      en: "Meeting held for village development planning.",
    },
    cover: img12,
    images: [img12, img13, img14],
    date: "Sep 2026",
    location: "Dindori",
  },
  {
    id: 11,
    title: {
      hi: "ग्राम विकास बैठक",
      en: "Village Development Meeting",
    },
    description: {
      hi: "गांव के विकास के लिए बैठक आयोजित की गई।",
      en: "Meeting held for village development planning.",
    },
    cover: img12,
    images: [img12, img13, img14],
    date: "Sep 2026",
    location: "Dindori",
  },
  {
    id: 12,
    title: {
      hi: "ग्राम विकास बैठक",
      en: "Village Development Meeting",
    },
    description: {
      hi: "गांव के विकास के लिए बैठक आयोजित की गई।",
      en: "Meeting held for village development planning.",
    },
    cover: img6,
    images: [img12, img13, img14],
    date: "Sep 2026",
    location: "Dindori",
  },
];