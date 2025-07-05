import { FaFigma, FaApple } from "react-icons/fa";
import { SiFramer, SiAdobe } from "react-icons/si";
import { RiBubbleChartFill } from "react-icons/ri";
import { PiAppWindowDuotone } from "react-icons/pi";
export const personalInfo = {
  name: "Ruhanii Avula",
  role: "CFD Appllication Engineer",
  intro: "I love using computational fluid dynamics to solve engineering problems. I focus on making systems run more efficiently. I enjoy teaming up with others to create practical solutions.",
  highlighted: "Innovate, Analyze, Build",
  avatar: "/images/Hani.jpeg"
};

export const aboutSections = [
  {
    title: "About Me",
    content: `I am a computational fluid dynamics specialist who excels at enhancing system performance and efficiency through rigorous analysis. I have a proven track record of delivering high-impact results by tackling complex engineering challenges. By combining analytical rigor with collaborative teamwork, I drive innovative, practical solutions that advance engineering goals.`
  },
  {
    title: "My Journey",
    content: `Starting as a curious coder in school, I’ve evolved into a full-stack engineer passionate about crafting clean, user-focused applications.\n\nFrom building hobby tools to scalable systems — it's been a rewarding ride.`
  },
  {
    title: "My Experience",
    // 
    entries: [
    {
      title: "Image Processing and Machine Learning Training",
      subtitle: "Pantech ProEd Pvt Ltd, Internship",
      duration: "Jan 2020 – Jun 2021"
    },
    {
      title: "Vehicle Safety Simulation",
      subtitle: "Mayinkrish Ventures Pvt Ltd, Internship",
      duration: "Jan 2020 – Dec 2020"
    },
    {
      title: "Image Processing and Machine Learning Training",
      subtitle: "Pantech ProEd Pvt Ltd, Internship",
      duration: "Jan 2021 – Jun 2021"
    },
    {
      title: "Vehicle Safety Simulation",
      subtitle: "Mayinkrish Ventures Pvt Ltd, Internship",
      duration: "Jan 2020 – Dec 2020"
    }
  ]
  },
  {
    title: "My Stack",
    skills: [
      { name: "Figma", category: "Design", icon: FaFigma },
      { name: "Framer", category: "Prototyping", icon: SiFramer },
      { name: "Apple", category: "Ecosystem", icon: FaApple },
      { name: "Freeform", category: "Sketching", icon: PiAppWindowDuotone },
      { name: "Lightroom", category: "Editing", icon: SiAdobe },
      { name: "Jitter", category: "Motion Design", icon: RiBubbleChartFill },
    // Add more as needed
  ]
},
  {
    title: "Get in Touch",
    content: `Have a project in mind or just want to connect?\n\nReach out to me via email or connect on LinkedIn — let’s collaborate!`
  }
];
export const aboutPreview = {
  name: "Hani",
  title: "About Me",
  image: "/images/Hani.jpeg",
  description: [
  "I'm a Software Engineer and passionate problem solver.",
  "I build scalable, immersive web experiences — blending performance, design, and 3D interactivity."
],
};
