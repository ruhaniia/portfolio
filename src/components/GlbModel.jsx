import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function Model({ path }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} dispose={null} />;
}

export default function GlbPreview({ path }) {
  return (
    <div className="w-full h-56"> {/* Matches card height */}
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={0.7} />
        <Suspense fallback={null}>
          <Model path={path} />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Suspense>
      </Canvas>
    </div>
  );
}
