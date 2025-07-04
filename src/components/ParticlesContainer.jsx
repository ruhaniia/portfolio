import { Particles } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 
import { useCallback } from "react";

export default function ParticlesContainer({ darkMode }) {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
    className="fixed top-0 left-0 w-full h-full z-40 pointer-events-none"
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "" } },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: false },
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          color: { value: darkMode ? "#e68e2e" : "#333233" }, 
          links: {
            color: darkMode ? "#f5d393" : "#d4d4d4",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: { default: "bounce" },
          },
          number: {
            value: 80,
            density: { enable: true, area: 800 },
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      }}
    />
  );
}