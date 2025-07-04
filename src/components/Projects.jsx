import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projectData";

export default function Projects() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const academicProjects = projects.filter((p) => p.type === "academic");
  const freelanceProjects = projects.filter((p) => p.type === "freelance");

  const ProjectCard = ({ project }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onClick={() => navigate(`/projects/${project.id}`)}
      className="group cursor-pointer rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-black shadow-md overflow-hidden"
    >
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={project.sections?.[0]?.image || project.gallery?.[0]?.src || project.image}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <span className="text-black text-3xl">→</span>
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold group-hover:text-orange-500 transition mb-2">
          {project.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          {project.description}
        </p>
      </div>
    </motion.div>
  );

  return (
    <div
      key={location.pathname}
      className="text-black dark:text-white transition-colors duration-500 py-20 px-6 max-w-7xl mx-auto"
    >
      {/* Academic Projects */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-left mb-10 text-orange-500"
      >
        Academic Projects
      </motion.h2>
      {academicProjects.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 mb-12">
          No academic projects found.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {academicProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      {/* Freelance Projects */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-left mt-24 mb-10 text-orange-500"
      >
        Freelance Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {freelanceProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
