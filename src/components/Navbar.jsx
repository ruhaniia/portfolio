import { useState } from "react";
import { Moon, Sun, Menu, X, ChevronsUp } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    if (typeof setDarkMode === "function") {
      setDarkMode(!darkMode);
    }
  };

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-black text-black dark:text-white border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-500">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 py-2 flex justify-between items-center">
        
<div className="flex items-center gap-2 md:gap-3">
  {/* Chevron Icon */}
  <ChevronsUp className="w-6 h-6 text-gray-800 dark:text-white opacity-90" />

  {/* Blinking Green Dot */}
  <div className="relative flex items-center justify-center">
    <div className="absolute h-5 w-5 rounded-full bg-green-400 opacity-70 animate-ping" />
    <div className="relative h-3.5 w-3.5 rounded-full bg-green-500" />
  </div>

  {/* Label */}
  <span className="text-base md:text-lg font-medium text-gray-900 dark:text-white tracking-tight">
    Open to work
  </span>
</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-10 text-lg font-semibold">
            {links.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `relative transition px-1 pb-1 ${
                      isActive
                        ? "text-orange-500 border-b-2 border-orange-500"
                        : "hover:text-orange-400"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </motion.div>
            ))}
          </nav>

          {/* Dark/Light Toggle */}
          <motion.button
            onClick={toggleTheme}
            initial={false}
            animate={{ backgroundColor: darkMode ? "#1a1a1a" : "#f4f4f5" }}
            className="relative w-12 h-6 rounded-full flex items-center px-1 border border-gray-400 dark:border-gray-600"
          >
            <motion.div
              className="absolute left-0.5 top-0.5 w-5 h-5 rounded-full flex items-center justify-center"
              layout
              transition={{ type: "spring", stiffness: 700, damping: 30 }}
              style={{
                x: darkMode ? 24 : 0,
                backgroundColor: darkMode ? "#facc15" : "#0f172a",
              }}
            >
              {darkMode ? (
                <Sun className="w-3 h-3 text-black" />
              ) : (
                <Moon className="w-3 h-3 text-white" />
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center gap-4">
          <motion.button
            onClick={toggleTheme}
            initial={false}
            animate={{ backgroundColor: darkMode ? "#1a1a1a" : "#f4f4f5" }}
            className="relative w-12 h-6 rounded-full flex items-center px-1 border border-gray-400 dark:border-gray-600"
          >
            <motion.div
              className="absolute left-0.5 top-0.5 w-5 h-5 rounded-full flex items-center justify-center"
              layout
              transition={{ type: "spring", stiffness: 700, damping: 30 }}
              style={{
                x: darkMode ? 24 : 0,
                backgroundColor: darkMode ? "#facc15" : "#0f172a",
              }}
            >
              {darkMode ? (
                <Sun className="w-3 h-3 text-black" />
              ) : (
                <Moon className="w-3 h-3 text-white" />
              )}
            </motion.div>
          </motion.button>

          <button
            className="text-black dark:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700 px-6 pt-2 pb-4 space-y-2"
          >
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-lg font-semibold py-2 border-b border-gray-200 dark:border-gray-700 transition ${
                    isActive ? "text-orange-500" : "hover:text-orange-400"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
