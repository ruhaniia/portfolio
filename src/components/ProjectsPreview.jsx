import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projectData";
import GlbPreview from "./GlbModel";
import { useState } from "react";

export default function ProjectsPreview() {
  const academicProjects = projects.filter((p) => p.type === "academic");
  const freelanceProjects = projects.filter((p) => p.type === "freelance");
  const [hoveredId, setHoveredId] = useState(null);

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  const ProjectCard = ({ project, i }) => (
    <motion.div
      className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition bg-white dark:bg-zinc-900"
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={i}
    >
      <Link to={`/projects/${project.id}`}>
        {/* Media Display */}
        <div
          className="w-full h-56 relative overflow-hidden bg-zinc-100 dark:bg-zinc-800"
          onMouseEnter={() => setHoveredId(project.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          {project.useGlb && project.modelPath ? (
            <GlbPreview
              path={
                hoveredId === project.id && project.hoverModelPath
                  ? project.hoverModelPath
                  : project.modelPath
              }
            />
          ) : (
            <img
              src={
                project.sections?.[0]?.image ||
                project.gallery?.[0]?.src ||
                project.image
              }
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          )}
        </div>

        {/* Hover Arrow Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <span className="text-black text-3xl">→</span>
          </div>
        </div>

        {/* Text Content */}
        <div className="p-4">
          <h4 className="text-xl font-bold mb-2 text-black dark:text-white">
            {project.title}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {project.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-orange-500 mb-12 text-center">
        Featured Projects
      </h2>

      <h3 className="text-2xl font-semibold text-orange-400 mb-6">
        Freelance Projects
      </h3>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {freelanceProjects.map((project, i) => (
          <ProjectCard key={project.id} project={project} i={i} />
        ))}
      </div>

      <h3 className="text-2xl font-semibold text-orange-400 mt-24 mb-6">
        Academic Projects
      </h3>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {academicProjects.map((project, i) => (
          <ProjectCard key={project.id} project={project} i={i} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/projects"
          className="inline-block px-5 py-2 text-base font-medium border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-black transition"
        >
          View All Projects →
        </Link>
      </div>
    </section>
  );
}
