import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Link } from "react-router-dom";
import { projects } from "../data/projectData";

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={0.5} />;
}

export default function ProjectList() {
  return (
    <section className="min-h-screen bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/"
          className="text-sm mb-4 inline-block text-orange-400 hover:underline"
        >
          ← Back
        </Link>

        <h1 className="text-4xl font-bold text-center mb-8">Project List</h1>

        <h2 className="text-xl font-semibold mb-6">Freelancing Projects</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-full h-52 bg-black">
                <Canvas camera={{ position: [0, 0, 5] }}>
                  <ambientLight />
                  <OrbitControls enableZoom={false} />
                  <Model url={project.modelPath} />
                </Canvas>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-center text-black dark:text-white">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}