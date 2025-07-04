import { motion } from "framer-motion";
import { personalInfo } from "../data/staticContent";

export default function AboutPreview() {
  return (
    <div className="flex flex-col lg:flex-row-reverse items-center lg:items-center gap-16">
      {/* Circular & Bigger Profile Image */}
      <motion.img
        src={personalInfo.avatar}
        alt="Profile"
        className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-orange-500 shadow-xl"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      />

      {/* Text Content Centered Vertically Beside Image */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-left max-w-2xl text-lg leading-relaxed text-gray-800 dark:text-gray-300"
      >
        <p className="mb-4">
          Hi, I'm <span className="font-semibold text-orange-500">{personalInfo.name}</span>, a{" "}
          <span className="text-orange-400">{personalInfo.role}</span>.
        </p>
        <p>
          {personalInfo.intro}{" "}
          <span className="text-orange-400 font-semibold">{personalInfo.highlighted}</span>
        </p>
      </motion.div>
    </div>
  );
}