import { motion } from "framer-motion";
import { personalInfo, aboutSections } from "../data/staticContent";
import { FaFigma, FaApple, FaJava, FaPython } from "react-icons/fa";
import { SiFramer, SiAdobe, SiSpringboot } from "react-icons/si";
import { PiAppWindowDuotone } from "react-icons/pi";
import { RiBubbleChartFill } from "react-icons/ri";

const iconVariants = (delay) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: delay,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8 },
  }),
};

export default function About() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
      <section className="w-full py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl font-bold mb-20 text-left text-orange-500 leading-tight"
          >
            About Me
          </motion.h1>

          {/* Profile + Intro */}
          <div className="flex flex-col lg:flex-row items-start gap-12 mb-24">
            <motion.img
              src={personalInfo.avatar}
              alt="Profile"
              className="w-full max-w-xs aspect-[3/4] object-cover rounded-2xl shadow-lg border-4 border-orange-500"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            />
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="text-xl sm:text-lg leading-loose text-gray-800 dark:text-gray-300 max-w-3xl"
            >
              <p className="mb-6 flex items-center gap-2">
                Hi, I'm <span className="font-semibold text-orange-500">{personalInfo.name}</span>, a
                <span className="text-orange-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-400 inline-block" /> {personalInfo.role}
                </span>
              </p>
              <p>
                {personalInfo.intro} <span className="text-orange-400 font-semibold">{personalInfo.highlighted}</span>
              </p>
            </motion.div>
          </div>

          {/* Sections */}
          {aboutSections.map((section, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={sectionVariants}
              className="mb-20 w-full max-w-6xl text-left"
            >
              <h2 className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-8">
                {section.title}
              </h2>

              {section.entries && section.entries.length > 0 && (
                <div className="space-y-8">
                  {section.entries.map((entry, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.4 }}
                      transition={{ delay: i * 0.05, duration: 0.6 }}
                      className="flex justify-between items-start border-b border-gray-300 dark:border-gray-700 pb-6"
                    >
                      <div>
                        <p className="text-white font-semibold text-base mb-1">{entry.title}</p>
                        <p className="text-gray-400 text-sm">{entry.subtitle}</p>
                      </div>
                      <p className="text-gray-400 text-sm whitespace-nowrap">{entry.duration}</p>
                    </motion.div>
                  ))}
                </div>
              )}

              {section.content && (
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 0.8 }}
                  className="text-gray-400 leading-relaxed whitespace-pre-line"
                >
                  {section.content}
                </motion.p>
              )}

              {section.title === "My Stack" && (
                <motion.div className="flex flex-wrap items-center justify-start gap-6 mt-10">
                  <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate">
                    <FaFigma className="text-6xl text-pink-500" />
                  </motion.div>
                  <motion.div variants={iconVariants(1)} initial="initial" animate="animate">
                    <SiFramer className="text-6xl text-purple-500" />
                  </motion.div>
                  <motion.div variants={iconVariants(2)} initial="initial" animate="animate">
                    <FaApple className="text-6xl text-gray-700 dark:text-gray-300" />
                  </motion.div>
                  <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate">
                    <PiAppWindowDuotone className="text-6xl text-blue-400" />
                  </motion.div>
                  <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate">
                    <SiAdobe className="text-6xl text-pink-400" />
                  </motion.div>
                  <motion.div variants={iconVariants(1)} initial="initial" animate="animate">
                    <RiBubbleChartFill className="text-6xl text-violet-400" />
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
