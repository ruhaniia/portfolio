import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <motion.button
      className="fixed top-6 right-6 p-2 rounded-full bg-white dark:bg-black border shadow z-50"
      onClick={() => setIsDark(!isDark)}
      whileTap={{ scale: 0.9 }}
    >
      {isDark ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-black" />}
    </motion.button>
  );
}
