"use client";

import { useEffect, useState } from 'react';

const  ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-4 bg-[#D67229] text-white rounded-full shadow-md hover:bg-[#ae622d] transition-all"
        aria-label="Voltar ao topo"
      >
        ↑
      </button>
    )
  );
}

export default ScrollTop;