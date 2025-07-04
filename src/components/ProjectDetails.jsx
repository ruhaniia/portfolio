import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projectData";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));
  const [activeImage, setActiveImage] = useState(null);
  const navigate = useNavigate();

  if (!project) return <div className="text-center mt-10">Project not found.</div>;

  return (
    <section className="min-h-screen py-10 px-6 max-w-6xl mx-auto text-black dark:text-white">
      <button
        onClick={() => navigate("/projects")}
        className="flex items-center gap-2 text-orange-500 hover:text-orange-600 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Projects
      </button>
      <section className="px-6 sm:px-12 lg:px-32 py-16 max-w-screen-xl mx-auto text-white">
        <motion.h1
          className="text-4xl font-bold text-orange-500 mb-6 text-center"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {project.title}
        </motion.h1>

        <motion.p
          className="mb-16 text-gray-300 text-lg text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {project.description}
        </motion.p>

        {project.sections.map((section, index) => (
          <motion.div
            key={index}
            className="mb-24 flex flex-col lg:flex-row items-center gap-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {section.image && (
              <motion.img
                src={section.image}
                alt={`Section ${index} illustration`}
                className="rounded-lg w-full lg:w-1/2"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: false, amount: 0.3 }}
              />
            )}

            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h2 className="text-2xl font-semibold mb-3">{section.heading}</h2>
              <p className="text-base text-gray-400 mb-4 leading-relaxed">{section.text}</p>
              {section.points && (
                <ul className="list-disc pl-5 text-sm text-gray-400">
                  {section.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          </motion.div>
        ))}

        <motion.h2
          className="text-3xl font-bold mb-14 mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Visual Walkthrough
        </motion.h2>

        <div className="space-y-24">
          {project.gallery.map((item, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row items-start justify-between md:gap-16 gap-8"
            >
              <motion.img
                src={item.src}
                alt={`Gallery image ${i}`}
                className="w-full md:w-1/2 max-w-2xl rounded-lg shadow-md"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
              />
              <motion.div
                className="w-full md:w-1/2 text-gray-300"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <p className="text-lg leading-relaxed">{item.caption}</p>
              </motion.div>
            </div>
          ))}
        </div>

        <AnimatePresence>
          {activeImage && (
            <motion.div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImage(null)}
            >
              <motion.img
                src={activeImage.src}
                alt="Enlarged view"
                className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </section>
  );
}
