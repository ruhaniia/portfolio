import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-md animate-bounce transition-opacity duration-500"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
}
