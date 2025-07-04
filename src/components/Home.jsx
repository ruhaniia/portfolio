import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AboutPreview from "../components/AboutPreview";
import ProjectsPreview from "../components/ProjectsPreview";

export default function Home() {
  const [setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
      {/* About Preview */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <AboutPreview />
      </section>

      {/* Projects Preview */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <ProjectsPreview />
      </section>

      {/* About CTA */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-orange-500 mb-6"
        >
          About Me
        </motion.h2>
        <p className="text-lg text-gray-800 dark:text-gray-300 mb-6">
          I'm a software developer passionate about blending code, design, and interactivity to build powerful web experiences.
        </p>
        <Link
          to="/about"
          className="inline-block px-5 py-2 text-base font-medium bg-transparent border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-black transition"
        >
          Learn More →
        </Link>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-orange-500 mb-6"
        >
          Let’s Connect
        </motion.h2>
        <p className="text-lg text-gray-800 dark:text-gray-300 mb-6">
          Have a project in mind or want to collaborate? I’m always open to meaningful conversations.
        </p>
        <Link
          to="/contact"
          className="inline-block px-5 py-2 text-base font-medium bg-transparent border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-black transition"
        >
          Get in Touch →
        </Link>
      </section>
    </div>
  );
}
