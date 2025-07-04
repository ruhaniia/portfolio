import { useGLTF } from "@react-three/drei";

export default function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={0.5} />;
}